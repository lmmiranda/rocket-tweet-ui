import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Timeline from "./pages/Timeline";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/timeline" component={Timeline} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
