import { EventsContextProvider } from "../../../context/Logged/EventsContext";
import AnimatedTransition from "../../AnimatedTransition";
import Events from "../../../components/Logged/Events/Events";
import { Helmet } from "react-helmet";

function EventsView() {
  return (
    <AnimatedTransition>
      <EventsContextProvider>
        <Helmet>
          <title>Blocksidian | Events</title>
        </Helmet>
        <Events />
      </EventsContextProvider>
    </AnimatedTransition>
  );
}

export default EventsView;
