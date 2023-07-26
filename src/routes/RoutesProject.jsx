import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import ErrorView from "./routesComponents/ErrorView";
import LandingPageView from "./routesComponents/LandingPageView";
import ContactView from "./routesComponents/ContactView";

// Logged
import HomeView from "./routesComponents/HomeView";
import EventsView from "./routesComponents/EventsView";

function RoutesProject() {
  // Detecta el cambio de pantalla y hacer transicion
  const location = useLocation();
  return (
    // Indicamos con el key pathname es el url en la linea de Routes
    <Routes location={location} key={location.pathname}>
        {/* Vista de Error */}
        <Route path="*" element={<ErrorView />} />
        {/* Todas las Vistas */}
        <Route path="/" element={<LandingPageView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/events" element={<EventsView />} />
      </Routes>
  );
}

export default RoutesProject;
