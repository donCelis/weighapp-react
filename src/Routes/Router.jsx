import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import { Home, Login, Dashboard, Reports, Error404 } from "../pages";

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
