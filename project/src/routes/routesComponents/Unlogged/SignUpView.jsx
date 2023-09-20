import AnimatedTransition from "../../AnimatedTransition";
import SignUp from "../../../components/Unlogged/Auth/SignUp";
import AlreadyLoggedIn from "../AlreadyLoggedIn";
import { Helmet } from "react-helmet";

function SignUpView() {
  return (
    <AnimatedTransition>
      <AlreadyLoggedIn>
        <Helmet>
          <title>Blocksidian | Sign Up</title>
        </Helmet>
        <SignUp />
      </AlreadyLoggedIn>
    </AnimatedTransition>
  );
}

export default SignUpView;
