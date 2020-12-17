import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./";
import FluidContainer from "./Paginas/Fluid";
import FluidContainer from "./Paginas/Home";
import FlexContainer from "./Paginas/Flex";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/flexbox" component={FlexContainer} />
      <Route path="/bootstrap-fluid" component={FluidContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
