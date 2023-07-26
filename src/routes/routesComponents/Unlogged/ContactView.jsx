import { ContactContextProvider } from "../../../context/Unlogged/ContactContext";
import AnimatedTransition from "../../AnimatedTransition";
import Contact from "../../../components/Unlogged/Contact/Contact";
import { Helmet } from "react-helmet";

function ContactView() {
  return (
    <AnimatedTransition>
      <ContactContextProvider>
        <Helmet>
          <title>Blocksidian | Contact</title>
        </Helmet>
        <Contact />
      </ContactContextProvider>
    </AnimatedTransition>
  );
}

export default ContactView;
