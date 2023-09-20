import AnimatedTransition from "../../AnimatedTransition";
import LogIn from "../../../components/Unlogged/Auth/LogIn";
import AlreadyLoggedIn from "../AlreadyLoggedIn";
import { Helmet } from "react-helmet";

function LogInView() {
  return (
    <AnimatedTransition>
      <AlreadyLoggedIn>
        <Helmet>
          <title>Blocksidian | Log In</title>
        </Helmet>
        <LogIn />
      </AlreadyLoggedIn>
    </AnimatedTransition>
  );
}

export default LogInView;
