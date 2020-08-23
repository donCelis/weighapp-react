import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Home from "../Pages/home";
import Login from "../Pages/login";
import Error404 from "../Pages/404";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/login" component={Login} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
