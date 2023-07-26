import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import ErrorView from "./routesComponents/ErrorView";

// Vistas Globales
import LandingPageView from "./routesComponents/LandingPageView";
import ContactView from "./routesComponents/ContactView";
import LogInView from "./routesComponents/LogInView";
import SignUpView from "./routesComponents/SignUpView";

// Vistas Ingresado
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

      {/* Vistas Globales */}
      <Route path="/" element={<LandingPageView />} />
      <Route path="/contact" element={<ContactView />} />
      <Route path="/signup" element={<SignUpView />} />
      <Route path="/login" element={<LogInView />} />

      {/* Vistas Ingresado */}
      <Route path="/home" element={<HomeView />} />
      <Route path="/events" element={<EventsView />} />
    </Routes>
  );
}

export default RoutesProject;
