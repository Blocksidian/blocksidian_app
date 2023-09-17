import { useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/GlobalComponents/GlobalComponents";
import { GlobalContext } from "../../context/GlobalContext";

function ProtectedRoute(props) {
  const auth = getAuth();
  const navigate = useNavigate();
  const { checkedLogin, setCheckedLogin } = useContext(GlobalContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCheckedLogin(true);
      } else {
        setCheckedLogin(false);
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  if (!checkedLogin) {
    return <Loading />;
  }

  return <>{props.children}</>;
}

export default ProtectedRoute;
