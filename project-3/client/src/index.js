import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
// import SignUp from "./components/SignUp/signup";
// import SignIn from "./components/";
import AddExpense from "./components/Expense-Form/expenseForm";
// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      {/* <Route exact path="/signin" component={SignIn} /> */}
      {/* <Route exact path="/signup" component={SignUp} /> */}
      <Route exact path="/ExpenseForm" render={props => <AddExpense />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
