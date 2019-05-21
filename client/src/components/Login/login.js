import React, { Component } from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "./test/test.css";

class Login extends Component {
  state = {
    email: "",
    Passsword: ""
  };
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      // <!-- main -->
      <div className="main-w3layouts wrapper" id="Login">
        <h1>SignUp Form</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form onSubmit={this.handleSubmit}>
              <input
                className="text"
                type="text"
                name="Username"
                placeholder="Username"
                required
              />

              <input
                className="text email"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />

              <input
                className="text"
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              <input
                className="text w3lpass"
                type="password"
                name="password"
                placeholder="Confirm Password"
                value={this.state.password}
              />
              <div className="wthree-text">
                <label className="anim">
                  <input type="checkbox" className="checkbox" required="" />
                  <span>I Agree To The Terms Conditions</span>
                </label>
                <div className="clear"> </div>
              </div>
              <input type="submit" value="SIGNUP" />
            </form>
            <p>
              Have an Account? <a href="/login"> Login Now!</a>
            </p>
          </div>
        </div>

        <ul className="colorlib-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
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
  }
}

export default Login;
