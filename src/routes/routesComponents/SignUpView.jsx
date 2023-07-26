import { SignUpContextProvider } from "../../context/SignUpContext";
import AnimatedTransition from "../AnimatedTransition";
import SignUp from "../../components/Auth/SignUp";
import { Helmet } from "react-helmet";

function SignUpView() {
  return (
    <AnimatedTransition>
      <SignUpContextProvider>
        <Helmet>
          <title>Blocksidian | Sign Up</title>
        </Helmet>
        <SignUp />
      </SignUpContextProvider>
    </AnimatedTransition>
  );
}

export default SignUpView;
