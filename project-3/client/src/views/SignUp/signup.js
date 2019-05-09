import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../../assets/css/signup.css";
import TextField from '@material-ui/core/TextField';

class SignUp extends React.Component {
  render() {
    return (
      <div className="main-w3layouts wrapper">
		<h1>SignUp Form</h1>
		<div className="main-agileinfo">
			<div className="agileits-top">
				<form action="#" method="post">
          <TextField className="text" 
          type="text" 
          name="Username" 
          placeholder="Username"
          required="" 
          fullWidth
          />
          <TextField 
          className="text email" 
          type="email" name="email" 
          placeholder="Email"
          required="" 
          fullWidth
          />
          <TextField 
          className="text" 
          type="password" 
          name="password" 
          placeholder="Password"
          required="" 
          fullWidth
         /> 
         <TextField 
          className="text w3lpass" 
          type="password" 
          name="password" 
          placeholder="Confirm Password"
          required="" 
          fullWidth
          />
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
					<input type="submit" value="SIGNUP" />
				</form>
				<p>Don't have an Account? <a href="#"> Login Now!</a></p>
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
