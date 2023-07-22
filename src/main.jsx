import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import RoutesProject from "./routes/RoutesProject";
import Navbar from "./components/Nav/Navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="">
      <Router>
        <Navbar />
        <RoutesProject />
      </Router>
    </main>
  </React.StrictMode>
);
