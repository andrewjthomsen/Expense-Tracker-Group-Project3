import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../../assets/additionalcss/css/signup.css"
import "../../assets/additionalcss/css/mbr-additional.css"
import "../../assets/theme/css/style.css"
const Login = props => {

  return (

    // <!-- main -->
    <div className="main-w3layouts wrapper">
      <h1>Sign In Form</h1>
      <div className="main-agileinfo">
        <div className="agileits-top">

          <form action="/submit" method="post">
          
            <input className="text" type="text" name="Username" placeholder={'UserName'} required="true" />

            <input className="text" type="password" name="password" placeholder={"Password"} required="true" />
            
            <div className="wthree-text">
              <label className="anim">
                <input type="checkbox" className="checkbox" required="" />
                <span>I Agree To The Terms Conditions</span>
              </label>
              <div className="clear"> </div>
            </div>
            <input type="submit" value="SIGNIN" />
          </form>
          <p>Don't Have An Account? <a href="/login"> Sign Up Now!</a></p>
        </div>
      </div>
    
      <ul className="colorlib-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    // <!-- //main -->
  
    // <div className="userData">
    //   <h1>User Login</h1>
    //   <form>
    //     <input placeholder="Enter username">
    //     </input>
    //     <input type="password"
    //       placeholder="Enter password">
    //     </input>
    //   </form>
    //   <button id="submitBtn" type="submit">
    //     Submit
    //   </button>
    // </div>
    // </div>
  );
};

export default Login;
