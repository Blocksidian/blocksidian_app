import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import RoutesProject from "./routes/RoutesProject";
import Navbar from "./components/Navigation/Nav/Navbar";
import Footer from "./components/Navigation/Footer/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <main
        id="main"
        className="bg-white flex flex-col justify-between min-h-screen dark:bg-DarkMode transition"
      >
        <Router>
          <ScrollToTop />
          <Navbar />
          <RoutesProject />
          <Footer />
        </Router>
      </main>
    </GlobalContextProvider>
  </React.StrictMode>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
