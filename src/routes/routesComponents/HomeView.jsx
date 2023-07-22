import { HomeContextProvider } from "../../context/HomeContext";
import AnimatedTransition from "../AnimatedTransition";

function HomeView() {
  return (
    <AnimatedTransition>
      <HomeContextProvider>
        <h1>Pantalla 1</h1>
      </HomeContextProvider>
    </AnimatedTransition>
  );
}

export default HomeView;
