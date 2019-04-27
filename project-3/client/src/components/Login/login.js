import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "./test/test.css";

const Login = props => {

  return (

    // <!-- main -->
    <div className="main-w3layouts wrapper">
      <h1>SignUp Form</h1>
      <div className="main-agileinfo">
        <div className="agileits-top">
          <form action="/submit" method="post">
            <input className="text" type="text" name="Username" placeholder="Username" required="" />
            <input className="text email" type="email" name="email" placeholder="Email" required="" />
            <input className="text" type="password" name="password" placeholder="Password" required="" />
            <input className="text w3lpass" type="password" name="password" placeholder="Confirm Password" required="" />
            <div className="wthree-text">
              <label className="anim">
                <input type="checkbox" className="checkbox" required="" />
                <span>I Agree To The Terms Conditions</span>
              </label>
              <div className="clear"> </div>
            </div>
            <input type="submit" value="SIGNUP" />
          </form>
          <p>Have an Account? <a href="/login"> Login Now!</a></p>
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
