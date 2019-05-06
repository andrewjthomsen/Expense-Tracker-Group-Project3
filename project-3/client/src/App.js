import React, { Component } from "react";
// import Signup from "./components/SignUp/signup";
import NavBar from "./components/NavBar/index";
import Home from "./components/Home/index";
import SignUp from "./components/SignUp/signup"
import SignIn from "./components/SignIn/signin"
// import CurrentExpenses from "./components/currentExpenses";
import ExpenseForm from "./components/Expense-Form/expenseForm";
import Profile from "./components/Profile/profile";
import "./style/App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import API from "./utils/api";

class App extends Component {
  // Left off here. =====> THIS IS RESPONSIBLE FOR GETTING ADDED EXPENSES TO SHOW ON FORM PAGE
  // TODO: Need to finish this to continue trying to get new expense to appear at bottom of expense form page.
  // TODO: NEXT-> Get all added expenses to show on bottom of expense form page.
  // TODO: Next-> Get most recent added expense to appear first, then show last five expenses
  //==================> NEW TODO: CREATE A DB FOR USERS AND BE ABLE TO RECOGNIZE WHICH USER IS 
  // LOGGED IN CURRENTLY AND SHOW THEIR UNIQUELY ADDED EXPENSES
  //TODO 1. CREATE USER DB in MONGO
  // -- NEED TO BE ABLE TO ACCESS THIS INFO AND SHOW IT ON USER PAGE AFTER USER IS LOGGED IN
  // --- WILL SHOW: greeting for current user, current balance, time of log in, last 5-10 added expenses, ASK GROUP FOR WHAT ELSE TO ADD
  // TODO 2. FIGURE OUT HOW TO RECOGNIZE WHICH USER IS LOGGED IN AND WHAT THEIR ADDED EXPENSES ARE
  // TODO 3. BUILD PROFILE PAGE AND FIGURE OUT WHERE TO SHOW USER'S EXPENSES AND CURRENT BALANCE
  // TODO 4. BUILD OUT DUMMY STARTING BALANCE AND GET IT TO SHOW ON USER PROFILE
  // -- CREATE 3 USERS AND HAVE INFO FOR EACH
  // -- MAP OUT LAYOUT FOR USER PROFILE
  // TODO 5. BUILD OUT FUNCTION TO DEDUCT EXPENSES FROM CURRENT BALANCE AND UPDATE CURRENT BALANCE'
  // TODO 6. STYLE PAGES

  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    }

    this.newExpenseHandler = this.newExpenseHandler.bind(this);
  }

  newExpenseHandler(expense) {
    //API.addExpense(expense);
    var newExpenses = this.state.expenses;
    newExpenses.push(expense);
    this.setState({ expenses: newExpenses });
    console.log("Make an API request, blah blah blah...");
  }

  render() {
    return ( 
      <div>
          <Router>  
            <NavBar /> 
            <div style={{paddingTop: "150px"}}>
              <Switch>
                < Route exact path ="/" component={Home} />
                < Route exact path ="/about" component={Home} />
                < Route exact path ="/signin"component={SignIn} />
                < Route exact path ="/signup" component={SignUp} />
                < Route exact path ="/ExpenseForm" render={ (props) => <ExpenseForm onNewExpense={this.newExpenseHandler} {...props} /> } />
                < Route exact path ="/profile" render={ (props) => <Profile {...props} expenses={ this.state.expenses } /> } />
              </Switch>
            </div>
          </Router>
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
