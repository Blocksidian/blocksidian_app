import { PageTwoContextProvider } from "../../context/PageTwoContext";
import AnimatedTransition from "../AnimatedTransition";

function PageTwoView() {
  return (
    <AnimatedTransition>
      <PageTwoContextProvider>
        <h1 className="dark:text-white">Pantalla 2</h1>
      </PageTwoContextProvider>
    </AnimatedTransition>
  );
}

export default PageTwoView;
