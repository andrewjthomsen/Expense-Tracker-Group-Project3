import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./views/SignUp/signup";
import SignIn from "./views/SignIn/SignIn";


import store from "./store";
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";
import { Provider } from "react-redux";

import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store ={store}>
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
 
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
