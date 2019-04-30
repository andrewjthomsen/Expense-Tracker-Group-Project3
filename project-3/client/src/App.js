import React from 'react';
import "./assets/additionalcss/css/signup.css"
import "./assets/additionalcss/css/mbr-additional.css"
import Signup from './components/SignUp/signup';
import AboutUs from './pages/aboutUsPage';
import Expenses from './pages/expensePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
  
    <div className="wrapper">
      { <div className="login">
    <Signup />
      </div> }
      <Router>
        <div className="wrapper">
          <div className="navBar">
          </div>

          <Switch>
            <Route exact path="/" component={Expenses} />
            <Route exact path="/search" component={AboutUs} />
            {/* <Route exact path="/saved" component={LoginPage} /> */}
          </Switch>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
