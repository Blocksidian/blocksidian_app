import { useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/GlobalComponents/GlobalComponents";
import { GlobalContext } from "../../context/GlobalContext";

function AlreadyLoggedIn(props) {
  const auth = getAuth();
  const navigate = useNavigate();
  const { checkedLogin, setCheckedLogin } = useContext(GlobalContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCheckedLogin(true);
        navigate("/home");
      } else {
        setCheckedLogin(false);
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  if (checkedLogin) {
    return <Loading />;
  }

  return <>{props.children}</>;
}

export default AlreadyLoggedIn;
