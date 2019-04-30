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
