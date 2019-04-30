import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../../assets/additionalcss/css/signup.css"
import "../../assets/additionalcss/css/mbr-additional.css"
import "../../assets/theme/css/style.css"
import "../../assets/web/assets/icons/icons.css"
import "../../assets/tether/tether.min.css"
import "../../assets/bootstrap/css/bootstrap.min.css"
import "../../assets/bootstrap/css/bootstrap-grid.min.css"
import "../../assets/dropdown/css/style.css"
import "../../assets/animatecss/animate.min.css"
import "../../assets/socicon/css/styles.css"
import NavBar from "../NavBar";


const Login = () => {

  return (

    // <!-- main -->
    <div>
<NavBar />
  
 
    <div className="main-w3layouts wrapper">
      <h1>SignUp Form</h1>
      <div className="main-agileinfo">
        <div className="agileits-top">
          <form action="/submit" method="post">
            <input className="text" type="text" name="Username" placeholder={'UserName'} required="true" />
            <input className="text email" type="email" name="email" placeholder={"Email"} required="true" />
            <input className="text" type="password" name="password" placeholder={"Password"} required="true" />
            <input className="text w3lpass" type="password" name="password" placeholder={"Confirm Password"} required="true" />
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
    
  </div>
  );
};


export default Login;
