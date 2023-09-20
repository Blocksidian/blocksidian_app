import React, { useState } from "react";
import {
  Popover,
  TextForm,
  ButtonForm,
} from "../../GlobalComponents/GlobalComponents";
import { NavLink } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LogIn() {
  return (
    <>
      <article className="container my-auto px-2 xs:px-4 sm:px-6">
        <LoginForm />
      </article>
    </>
  );
}

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openPopover, setOpenPopover] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      // Configurar la persistencia de la sesión por un día
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful");
      setError(false);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      setMessage("Login failed: " + error.code);
      setError(true);
    }
    setOpenPopover(false);
  };

  return (
    <div className="px-4 py-8 max-w-screen-xs mx-auto items-center justify-center w-full">
      <h1 className="text-center text-3xl font-bold mb-6 dark:text-white">
        Log in to{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
          Blocksidian
        </span>
      </h1>
      <form onSubmit={handleLogin}>
        <TextForm
          name="Email"
          title="email"
          type="email"
          state={email}
          setState={setEmail}
        />
        <TextForm
          name="Password"
          title="name"
          type="password"
          minLength="6"
          state={password}
          setState={setPassword}
        />
        <ButtonForm name="Log In" />
      </form>
      <div className="flex justify-center mt-5 text-lg">
        <h2 className="me-3 dark:text-white">No account?</h2>
        <NavLink
          to={"/signup"}
          className="text-SoftViolet font-medium hover:text-DarkViolet"
        >
          Create one
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

export default LogIn;
