import { PageTwoContextProvider } from "../../context/PageTwoContext";
import AnimatedTransition from "../AnimatedTransition";
import { Helmet } from "react-helmet";

function PageTwoView() {
  return (
    <AnimatedTransition>
      <PageTwoContextProvider>
        <Helmet>
          <title>Blocksidian | Events</title>
        </Helmet>
        <h1 className="dark:text-white">Pantalla de eventos</h1>
      </PageTwoContextProvider>
    </AnimatedTransition>
  );
}

export default PageTwoView;
