import React from "react";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import Card from "../components/Card/Card.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";
import CustomInput from "../components/CustomInput/CustomInput.jsx";

import loginPageStyle from "../assets/jss/homepage/components/loginPageStyle";

import image from "../assets/img/bkgrd.jpg";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      email: "",
      password: "",
      errors: {}
    }
  }
  componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push("/admin/dashboard"); // push user to dashboard when they login
		}
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
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
	};
	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/admin/dashboard");
		}
	}
  render() {
    const { classes, ...rest } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="AFFLUENT"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form
                    noValidate className={classes.form}
                    onSubmit={this.onSubmit}>

                    <CardHeader
                      className={classes.cardHeader}>

                      <h1>SIGN IN</h1>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
               
                      <CustomInput
                        labelText="Email..."
                          formControlProps={{
                          fullWidth: true
                        }}
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        placeholder="Email"
                        required fullWidth
                        className={classnames("", {
                          invalid: errors.email || errors.emailnotfound
                        })}
                      />
                      <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                      </span>
                    
                     
                      <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        type="password"
                        placeholder="Password"
                        required fullWidth
                        className={"text " + classnames("", {
                          invalid: errors.password
                        })}
                      />
                   </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg"
                      input type="submit" value="SIGN IN">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}
SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


  export default withRouter(
    connect(
      mapStateToProps,
      { loginUser }
    )(withStyles(loginPageStyle)(SignIn))
  );
