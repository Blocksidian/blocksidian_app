import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import React from "react";
import ReactDOM from "react-dom/client";
import RoutesProject from "./routes/RoutesProject";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <main className="bg-white flex flex-col min-h-screen dark:bg-DarkMode transition">
        <Router>
          <Navbar />
          <div className="flex-1">
            <RoutesProject />
          </div>
          <Footer />
        </Router>
      </main>
    </GlobalContextProvider>
  </React.StrictMode>
);
