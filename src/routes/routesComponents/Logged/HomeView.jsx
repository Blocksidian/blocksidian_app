import { HomeContextProvider } from "../../../context/Logged/HomeContext";
import AnimatedTransition from "../../AnimatedTransition";
import Home from "../../../components/Logged/Home/Home";
import ProtectedRoute from "../ProtectedRoute";
import { Helmet } from "react-helmet";

function HomeView() {
  return (
    <AnimatedTransition>
      <ProtectedRoute />
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
