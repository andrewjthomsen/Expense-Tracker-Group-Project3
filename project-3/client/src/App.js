import React, { Component } from "react";
// import Signup from "./components/SignUp/signup";
import NavBar from "./components/NavBar";
import Balance from "./components/balance";
// import CurrentExpenses from "./components/currentExpenses";
import ExpenseForm from "./components/expenseForm";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  newExpenseHandler() {
    console.log("Make an API request, blah blah blah...");
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Router>
            <Switch>
              < Route exact path ="/"component={Balance} />
              < Route exact path ="/ExpenseForm" component ={ExpenseForm} onNewExpense={this.newExpenseHandler} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
// TODOS:
// 1. authentication passport--know who current user is on backend through storing obj id
// 2. redo app.js so you can have passport
// 3. pass pieces of state into children
// 4.
// 5.
