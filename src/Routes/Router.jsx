import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Home from "../Pages/home";
import Login from "../Pages/login";
import Machine from "../Pages/machine";
import Error404 from "../Pages/404";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/machine" component={Machine} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
