import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./layouts/signup";
import SignIn from "./layouts/signin";
import expenseForm from "../src/components/Expense-Form/expenseForm";
import HomePage from "layouts/HomePage.jsx"
import store from "./store";
import Admin from "layouts/Admin.jsx";
import { Provider } from "react-redux";
import "assets/scss/material-kit-react.scss?v=1.4.0";
import "assets/css/material-dashboard-react.css?v=1.6.0";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import logOut from "./components/logOut/logOut";
//import AboutUs from "./views/AboutUs/AboutUs";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/aboutus" component={AboutUs} /> */}
        <Route exact path="/admin/expenseForm" component={expenseForm} />
        <PrivateRoute exact path="/logout" component={logOut} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
