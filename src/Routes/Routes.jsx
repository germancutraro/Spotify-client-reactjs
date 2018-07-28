import React from "react";
// Router
import { Route, Switch } from "react-router-dom";
// Views Component
import Home from "../components/Layout/Home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
