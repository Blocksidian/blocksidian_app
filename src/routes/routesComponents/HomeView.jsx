import { HomeContextProvider } from "../../context/HomeContext";
import AnimatedTransition from "../AnimatedTransition";
import Home from '../../components/Home/Home'

function HomeView() {
  return (
    <AnimatedTransition>
      <HomeContextProvider>
        <Home/>
      </HomeContextProvider>
    </AnimatedTransition>
  );
}

export default HomeView;
