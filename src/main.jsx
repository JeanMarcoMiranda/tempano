import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesComponent } from "./Routes";
import { UserAuthContextProvider } from "./store/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <UserAuthContextProvider>
      <RoutesComponent />
    </UserAuthContextProvider>
  </Router>
);
