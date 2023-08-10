import { LogInContextProvider } from "../../../context/Unlogged/LogInContext";
import AnimatedTransition from "../../AnimatedTransition";
import LogIn from "../../../components/Unlogged/Auth/LogIn";
import AlreadyLoggedIn from "../AlreadyLoggedIn";
import { Helmet } from "react-helmet";

function LogInView() {
  return (
    <AnimatedTransition>
      <AlreadyLoggedIn />
      <LogInContextProvider>
        <Helmet>
          <title>Blocksidian | Log In</title>
        </Helmet>
        <LogIn />
      </LogInContextProvider>
    </AnimatedTransition>
  );
}

export default LogInView;
