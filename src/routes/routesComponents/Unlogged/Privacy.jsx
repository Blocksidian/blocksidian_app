import AnimatedTransition from "../../AnimatedTransition";
import Privacy from "../../../components/Unlogged/Legal/Privacy";
import { Helmet } from "react-helmet";

function PrivacyView() {
  return (
    <AnimatedTransition>
      <Helmet>
        <title>Blocksidian | Privacy</title>
      </Helmet>
      <Privacy />
    </AnimatedTransition>
  );
}

export default PrivacyView;
