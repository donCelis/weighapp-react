import React from "react";
import ReactDOM from "react-dom";
import Router from "./Routes/Router";

import "hamburgers/dist/hamburgers.min.css";
import "./styles/App.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
