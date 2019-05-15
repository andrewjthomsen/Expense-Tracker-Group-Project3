import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./views/SignUp/signup";
import SignIn from "./views/SignIn/SignIn";
import expenseForm from "../src/components/Expense-Form/expenseForm";
import HomePage from "layouts/HomePage.jsx"
import store from "./store";
import Admin from "layouts/Admin.jsx";
import { Provider } from "react-redux";
import "assets/scss/material-kit-react.scss?v=1.4.0";
import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/admin/expenseForm" component={expenseForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
