import { HomeContextProvider } from "../../context/HomeContext";
import AnimatedTransition from "../AnimatedTransition";
import Home from "../../components/Home/Home";
import { Helmet } from "react-helmet";

function HomeView() {
  return (
    <AnimatedTransition>
      <HomeContextProvider>
        <Helmet>
          <title>Blocksidian | Dashboard</title>
        </Helmet>
        <Home />
      </HomeContextProvider>
    </AnimatedTransition>
  );
}

export default HomeView;
