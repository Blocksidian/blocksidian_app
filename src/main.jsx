import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import React from "react";
import ReactDOM from "react-dom/client";
import RoutesProject from "./routes/RoutesProject";
import Navbar from "./components/Nav/Navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <main className="bg-white dark:bg-DarkMode h-screen transition">
        <Router>
          <Navbar />
          <RoutesProject />
        </Router>
      </main>
    </GlobalContextProvider>
  </React.StrictMode>
);
