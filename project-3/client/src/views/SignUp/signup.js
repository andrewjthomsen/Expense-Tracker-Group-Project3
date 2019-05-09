import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../../assets/css/signup.css";


class SignUp extends React.Component {
  render() {
    return (
      <div className="main-w3layouts wrapper">
		<h1>Creative SignUp Form</h1>
		<div className="main-agileinfo">
			<div className="agileits-top">
				<form action="#" method="post">
          <input className="text" 
          type="text" 
          name="Username" 
          placeholder="Username"
          required="" 
          />
          <input 
          className="text email" 
          type="email" name="email" 
          placeholder="Email"
          required="" 
          />
          <input 
          className="text" 
          type="password" 
          name="password" 
          placeholder="Password"
          required="" />
          <input 
          className="text w3lpass" 
          type="password" 
          name="password" 
          placeholder="Confirm Password"
          required="" />
          <div 
          className="wthree-text">
            <label 
            className="anim">
              <input 
              type="checkbox" 
              className="checkbox" 
              required="" />
							<span>I Agree To The Terms and Conditions</span>
						</label>
						<div className="clear"> </div>
					</div>
					<input type="submit" value="SIGN UP" />
				</form>
				<p>Have an Account? <a href="/admin/signin"> SIGN IN NOW!</a></p>
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
    );
  }
}


export default SignUp;
