import { CreateEventsContextProvider } from "../../../context/Logged/CreateEventsContext";
import AnimatedTransition from "../../AnimatedTransition";
import CreateEvents from "../../../components/Logged/Events/CreateEvents";
import ProtectedRoute from "../ProtectedRoute";
import { Helmet } from "react-helmet";

function CreateEventsView() {
  return (
    <AnimatedTransition>
      <ProtectedRoute />
      <CreateEventsContextProvider>
        <Helmet>
          <title>Blocksidian | Create Events</title>
        </Helmet>
        <CreateEvents />
      </CreateEventsContextProvider>
    </AnimatedTransition>
  );
}

export default CreateEventsView;
