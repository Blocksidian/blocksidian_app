import { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const auth = getAuth();
  const firestore = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (!userDocSnap.exists()) {
          navigate("/");
        }
      }
    };
    fetchUserData();
  }, [auth, firestore]);
  return <></>;
}

export default ProtectedRoute;
