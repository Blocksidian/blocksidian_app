import AnimatedTransition from "../../AnimatedTransition";
import LandingPage from "../../../components/Unlogged/LandingPage/LandingPage";
import { Helmet } from "react-helmet";

function LandingPageView() {
  return (
    <AnimatedTransition>
      <Helmet>
        <title>Blocksidian | LandingPage</title>
      </Helmet>
      <LandingPage />
    </AnimatedTransition>
  );
}

export default LandingPageView;
