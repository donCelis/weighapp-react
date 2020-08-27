import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Home from "../Pages/home";
import Login from "../Pages/login";
import Dashboard from "../Pages/dashboard";
import Reports from "../Pages/reports";
import Error404 from "../Pages/404";

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
