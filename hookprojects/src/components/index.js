import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./home";
import FormData from "./foms/form";

// navbar
import Main from "./fetchApi/Api";
import ShowHide from "./showORHide/showorhide";
import Navbar from "./navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Showorhide">
          <ShowHide />
        </Route>
        <Route exact path="/Apifetch">
          <Main />
        </Route>
        <Route>
          <FormData />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
