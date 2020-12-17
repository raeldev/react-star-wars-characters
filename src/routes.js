import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Paginas/Home";
import FluidContainer from "./components/Paginas/Fluid";
import FlexContainer from "./components/Paginas/Flex";

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
