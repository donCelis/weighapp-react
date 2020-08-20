import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../Pages/home"
import Error from "../Pages/404"

const Router = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route
          exact={true}
          path="/"
          component={Home}
        />
        <Route
          component={Error}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;