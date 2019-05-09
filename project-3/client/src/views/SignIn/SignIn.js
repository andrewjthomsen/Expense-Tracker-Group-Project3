import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../../assets/css/signup.css";
import TextField from '@material-ui/core/TextField';

class SignUp extends React.Component {
  render() {
    return (
      <div className="main-w3layouts wrapper">
		<h1>Creative SignUp Form</h1>
		<div className="main-agileinfo">
			<div className="agileits-top">
				<form action="#" method="post">
          <TextField  className="text" 
          type="text" 
          name="Username" 
          placeholder="Username"
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
				 <div 
          className="wthree-text">
            
						<div className="clear"> </div>
					</div>
					<input type="submit" value="SIGN IN" />
				</form>
				<p>Don't have an Account? <a href="/admin/signup"> Register!</a></p>
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
