import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "hamburgers/dist/hamburgers.min.css";
import "./styles/App.scss";

import './firebase'

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
