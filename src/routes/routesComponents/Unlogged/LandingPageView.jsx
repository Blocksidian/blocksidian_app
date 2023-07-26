import { LandingPageContextProvider } from "../../../context/Unlogged/LandingPageContext";
import AnimatedTransition from "../../AnimatedTransition";
import LandingPage from "../../../components/Unlogged/LandingPage/LandingPage";
import { Helmet } from "react-helmet";

function LandingPageView() {
  return (
    <AnimatedTransition>
      <LandingPageContextProvider>
        <Helmet>
          <title>Blocksidian | LandingPage</title>
        </Helmet>
        <LandingPage />
      </LandingPageContextProvider>
    </AnimatedTransition>
  );
}

export default LandingPageView;
