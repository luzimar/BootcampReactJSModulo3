import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/main";
import Teste from "../pages/teste";
import NotFound from "../pages/notfound";
import Footer from "../components/Footer";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/teste" component={Teste} />
        <Route exact path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
