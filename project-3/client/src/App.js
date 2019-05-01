import React, { Component } from 'react';
import Signup from './components/SignUp/signup';
import NavBar from "./components/NavBar/index"; 




class App extends Component {
  render () {
    return (
      <div>
        < NavBar />
        <div>
          <Signup />
        </div>
      </div>
    )
  }
}
export default App;
// TODOS:
// 1. authentication passport--know who current user is on backend through storing obj id
// 2. redo app.js so you can have passport
// 3. pass pieces of state into children
// 4. 
// 5. 
