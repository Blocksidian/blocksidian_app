import { EventsContextProvider } from "../../../context/Logged/EventsContext";
import AnimatedTransition from "../../AnimatedTransition";
import Events from "../../../components/Logged/Events/Events";
import ProtectedRoute from "../ProtectedRoute";
import { Helmet } from "react-helmet";

function EventsView() {
  return (
    <AnimatedTransition>
      <ProtectedRoute />
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
