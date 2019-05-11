import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../../assets/css/signup.css";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom"
import { registerUser } from "../../actions/authActions"


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
      <form noValidate onSubmit={this.onSubmit}>
       <div className="input-field col s12">
        <input
         onChange={this.onChange}
         value={this.state.name}
         error={errors.name}
         id="name"
         type="text"
         className={classnames("", {
          invalid: errors.name
         })}
        />
        <label htmlFor="name">Name</label>
        <span className="red-text">{errors.name}</span>
       </div>
       <div className="input-field col s12">
        <input
         onChange={this.onChange}
         value={this.state.email}
         error={errors.email}
         id="email"
         type="email"
         className={classnames("", {
          invalid: errors.email
         })}
        />
        <label htmlFor="email">Email</label>
        <span className="red-text">{errors.email}</span>
       </div>
       <div className="input-field col s12">
        <input
         onChange={this.onChange}
         value={this.state.password}
         error={errors.password}
         id="password"
         type="password"
         className={classnames("", {
          invalid: errors.password
         })}
        />
        <label htmlFor="password">Password</label>
       </div>
       <div className="input-field col s12">
        <input
         onChange={this.onChange}
         value={this.state.password2}
         error={errors.password2}
         id="password2"
         type="password"
         className={classnames("", {
          invalid: errors.password2
         })}
        />
        <label htmlFor="password2">Confirm Password</label>
        <span className="red-text">{errors.password2}</span>
       </div>
       <div className="col s12" style={{ paddingLeft: "11.250px" }}>
        <button
         style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem"
         }}
         type="submit"
         className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
         Sign up
                </button>
       </div>
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