import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Home from "../pages/home";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Reports from "../pages/reports";
import Error404 from "../pages/404";

const Router = () => {
  return (
    <BrowserRouter basename="weighapp-react">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/reports" component={Reports} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
