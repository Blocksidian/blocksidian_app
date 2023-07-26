import { LogInContextProvider } from "../../../context/Unlogged/LogInContext";
import AnimatedTransition from "../../AnimatedTransition";
import LogIn from "../../../components/Unlogged/Auth/LogIn";
import { Helmet } from "react-helmet";

function LogInView() {
  return (
    <AnimatedTransition>
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
