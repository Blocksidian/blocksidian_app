import React, { useEffect, useState } from "react";
import { Fade } from "@successtar/react-reveal";
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

export const TextForm = ({
  name = "name",
  title = "title",
  type = "text",
  minLength = "0",
  state,
  setState,
}) => {
  return (
    <>
      <div className="mb-4">
        <input
          placeholder={name}
          type={type}
          id={title}
          value={state}
          onChange={(e) => setState(e.target.value)}
          minLength={minLength}
          className="px-4 py-4 w-full rounded-md sm:text-sm border-2 dark:border-gray-800 bg-SoftWhite dark:bg-gray-900 dark:text-white"
          required
        />
      </div>
    </>
  );
};

export const ButtonForm = ({ name = "" }) => {
  return (
    <button
      type="submit"
      className="w-full py-3 px-4 rounded-lg text-white text-lg tracking-wider font-bold bg-SoftViolet hover:bg-DarkViolet dark:bg-DarkViolet  dark:hover:bg-SoftViolet"
    >
      {name}
    </button>
  );
};

export const Popover = ({
  open = false,
  setOpen,
  text = "Contenido del popover",
  error = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsOpen(true);
      const timeoutId = setTimeout(() => {
        setIsOpen(false);
        setOpen(true);
      }, 2000);
      return () => clearTimeout(timeoutId);
    } else {
      setIsOpen(false);
    }
  }, [open]);

  return (
    <>
      {isOpen && (
        <div
          className={`${
            open ? "opacity-0" : "opacity-100"
          } duration-500 transition-all`}
        >
          <Fade bottom duration={500}>
            {error ? (
              <div
                className={
                  "unselectable select-none fixed z-50 bottom-10 right-10 left-10 text-SoftWhite text-center rounded-md py-2 px-3 shadow-lg bg-red-400  xs:right-10 xs:left-auto sm:right-10 dark:bg-red-900 dark:text-white transition duration-500"
                }
              >
                {text}
              </div>
            ) : (
              <div
                className={
                  "unselectable select-none fixed z-50 bottom-10 right-10 left-10 text-SoftWhite text-center rounded-md py-2 px-3 shadow-lg bg-green-600  xs:right-10 xs:left-auto sm:right-10 dark:bg-green-900 dark:text-white transition duration-500"
                }
              >
                {text}
              </div>
            )}
          </Fade>
        </div>
      )}
    </>
  );
};

export default LogIn;
