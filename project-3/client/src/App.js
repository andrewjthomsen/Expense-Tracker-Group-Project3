import React from 'react';
import "./assets/additionalcss/css/signup.css"
import "./assets/additionalcss/css/mbr-additional.css"
import Signup from './components/SignUp/signup';

function App() {
  return (
  
    <div className="wrapper">
      { <div className="login">
    <Signup />
      </div> }
    </div>
  );
}

export default App;
