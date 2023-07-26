import { ContactContextProvider } from "../../context/ContactContext";
import AnimatedTransition from "../AnimatedTransition";
import Contact from "../../components/Contact/Contact";
import { Helmet } from "react-helmet";

function Events() {
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

export default Events;
