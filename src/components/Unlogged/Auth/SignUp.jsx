import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { TextForm, ButtonForm, Popover } from "./LogIn";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { GlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <article className="container my-auto px-2 xs:px-4 sm:px-6">
        <SignUpForm />
      </article>
    </>
  );
};

const SignUpForm = () => {
  const navigate = useNavigate();

  const { db } = useContext(GlobalContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Vpassword, setVPassword] = useState("");

  const [openPopover, setOpenPopover] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const firestore = db;

    if (password.length < 6) {
      setMessage("The password must be 6");
      setError(true);
    } else if (password === Vpassword) {
      setUsername("");
      setEmail("");
      setPassword("");
      setVPassword("");
      const auth = getAuth();
      try {
        // Crea el usuario en Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // Agrega información adicional a Firestore
        const userDocRef = doc(firestore, "users", userCredential.user.uid);
        await setDoc(userDocRef, {
          id: userCredential.user.uid,
          username,
          // Otros campos que quieras agregar
        });
        setMessage("Successful registration");
        setError(false);
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } catch (error) {
        setMessage("Registration failed: " + error.code);
        setError(true);
      }
    } else {
      setMessage("Passwords do not match");
      setError(true);
    }
    setOpenPopover(false);
  };
  return (
    <div className="px-4 py-8 max-w-screen-xs mx-auto items-center justify-center w-full">
      <h1 className="text-center text-3xl font-bold mb-6 dark:text-white">
        Sign up for{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
          Blocksidian
        </span>
      </h1>
      <form onSubmit={handleSignUp}>
        <TextForm
          name="Username"
          title="username"
          state={username}
          setState={setUsername}
        />
        <TextForm
          name="Email"
          title="email"
          type="email"
          state={email}
          setState={setEmail}
        />
        <TextForm
          name="Password"
          title="password"
          type="password"
          minLength="6"
          state={password}
          setState={setPassword}
        />
        <TextForm
          name="Validate Password"
          title="validatepassword"
          type="password"
          minLength="6"
          state={Vpassword}
          setState={setVPassword}
        />

        <ButtonForm name="Create account" />
      </form>
      <div className="mt-5 text-sm">
        <h2 className="me-3 text-center dark:text-white">
          By clicking "Create account", you agree to the{" "}
          <NavLink
            to={"/privacy"}
            className="text-SoftViolet font-medium hover:text-DarkViolet"
          >
            Privacy Policy.
          </NavLink>
          .
        </h2>
      </div>
      <div className="flex justify-center mt-5 text-lg">
        <h2 className="me-3 dark:text-white">Already have an account?</h2>
        <NavLink
          to={"/login"}
          className="text-SoftViolet font-medium hover:text-DarkViolet"
        >
          Log in
        </NavLink>
      </div>
      <Popover
        open={openPopover}
        setOpen={setOpenPopover}
        text={message}
        error={error}
      />
    </div>
  );
};

export default SignUp;
