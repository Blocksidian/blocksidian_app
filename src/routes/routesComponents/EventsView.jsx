import { EventsContextProvider } from "../../context/EventsContext";
import AnimatedTransition from "../AnimatedTransition";
import { Helmet } from "react-helmet";

function EventsView() {
  return (
    <AnimatedTransition>
      <EventsContextProvider>
        <Helmet>
          <title>Blocksidian | Events</title>
        </Helmet>
        <h1 className="dark:text-white">Pantalla de eventos</h1>
      </EventsContextProvider>
    </AnimatedTransition>
  );
}

export default EventsView;
