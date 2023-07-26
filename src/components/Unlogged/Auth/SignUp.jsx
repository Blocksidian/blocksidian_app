import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TextForm, ButtonForm, Popover } from "./LogIn";

const SignUp = () => {
  return (
    <>
      <article className="container mx-auto px-2 xs:px-4 sm:px-6">
        <SignUpForm />
      </article>
    </>
  );
};

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Vpassword, setVPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === Vpassword) {
      setPasswordsMatch(true);
      setMessage("Correct");
      setUsername("");
      setEmail("");
      setPassword("");
      setVPassword("");
    } else {
      setMessage("Passwords do not match");
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="px-4 py-8 max-w-screen-xs mx-auto items-center justify-center w-full">
      <h1 className="text-center text-3xl font-bold mb-6 dark:text-white">
        Sign up for{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
          Blocksidian
        </span>
      </h1>
      <form onSubmit={handleSubmit}>
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
          state={password}
          setState={setPassword}
        />
        <TextForm
          name="Validate Password"
          title="validatepassword"
          type="password"
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
        open={passwordsMatch}
        setOpen={setPasswordsMatch}
        text={message}
      />
    </div>
  );
};

export default SignUp;
