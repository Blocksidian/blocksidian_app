import AnimatedTransition from "../../AnimatedTransition";
import Contact from "../../../components/Unlogged/Contact/Contact";
import { Helmet } from "react-helmet";

function ContactView() {
  return (
    <AnimatedTransition>
      <Helmet>
        <title>Blocksidian | Contact</title>
      </Helmet>
      <Contact />
    </AnimatedTransition>
  );
}

export default ContactView;
