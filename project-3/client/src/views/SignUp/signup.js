import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../../assets/css/signup.css";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom"
import { registerUser } from "../../actions/authActions"
import { TextField } from "@material-ui/core";


class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2

    };
    console.log(newUser)
    this.props.registerUser(newUser, this.props.history);
  };


  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("../../components/logOut");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="main-w3layouts wrapper">
        <h1>SignUp Form</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form
              action="#" method="post"
              noValidate
              onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <TextField
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className="text"
                  placeholder="Username"
                  required  fullWidth
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <TextField
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className="text"
                  placeholder="Email"
                  required fullWidth
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <span className="red-text">{errors.email}</span>
              </div>
             
                <TextField
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className="text"
                  placeholder="Password"
                  required fullWidth
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
           
              
                <TextField
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className="text"
                  placeholder="Confirm Password"
                  required fullWidth
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
               
                <span className="red-text">{errors.password2}</span>
            
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <div className="wthree-text">
                  <div className="clear"> </div>
                </div>
                <input type="submit" value="SIGN IN" />
              </div>
            </form>
            <p>Have an Account? <a href="#"> Login Now!</a></p>
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

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));