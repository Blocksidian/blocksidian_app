import AnimatedTransition from "../../AnimatedTransition";
import Terms from "../../../components/Unlogged/Legal/Terms";
import { Helmet } from "react-helmet";

function TermsView() {
  return (
    <AnimatedTransition>
      <Helmet>
        <title>Blocksidian | Terms</title>
      </Helmet>
      <Terms />
    </AnimatedTransition>
  );
}

export default TermsView;
