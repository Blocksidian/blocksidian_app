import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import ErrorView from "./routesComponents/ErrorView";
import HomeView from "./routesComponents/HomeView";
import PageTwoView from "./routesComponents/PageTwoView";
// Ver rutas que pueden tener animaciones
import { AnimatePresence } from "framer-motion";

function RoutesProject() {
  // Detecta el cambio de pantalla y hacer transicion
  const location = useLocation();
  return (
    // Indicamos con el key pathname es el url en la linea de Routes
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* Vista de Error */}
        <Route path="*" element={<ErrorView />} />
        {/* Todas las Vistas */}
        <Route path="/" element={<HomeView />} />
        <Route path="/page2" element={<PageTwoView />} />
      </Routes>
    </AnimatePresence>
  );
}

export default RoutesProject;
