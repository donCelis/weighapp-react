import React from "react";
import ReactDOM from "react-dom";
import Router from "./Routes/Router";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "hamburgers/dist/hamburgers.min.css";
import "./styles/App.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
