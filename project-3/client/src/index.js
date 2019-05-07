import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "../src/layouts/Admin";
import Home from "./views/Home/Home"
import SignIn from "./views/SignIn/SignIn"
import SignUp from "./views/SignUp/SignUp"
import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Redirect from="/" to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
