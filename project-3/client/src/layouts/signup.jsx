import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { registerUser } from "../actions/authActions"
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

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
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
      this.props.history.push("../../admin/dashboard");
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
                  <form action="#" method="post"
                    noValidate
                    className={classes.form}
                    onSubmit={this.onSubmit}>
                    <CardHeader className={classes.cardHeader}>
                      <h1>SIGN UP</h1>
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
                        labelText="Name..."
                      
                        formControlProps={{
                          fullWidth: true
                        }}
                       
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id="name"
                        type="text"
                      
                        placeholder="Username"
                        required fullWidth
                        className={"text " + classnames("", {
                          invalid: errors.name 
                        })}
                      />
                      <span className="red-text">{errors.name}
                      </span>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                     
                        type="email"
                       
                        placeholder="Email"
                        required fullWidth
                        className={"text " + classnames("", {
                          invalid: errors.email
                        })}
                      />
                      <span className="red-text">{errors.email}
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

                      <CustomInput
                        labelText="Confirm Password"
                       
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
                        value={this.state.password2}
                        error={errors.password2}
                        id="password2"
                        type="password"
                       
                        placeholder="Confirm Password"
                        required fullWidth
                        className={classnames("", {
                          invalid: errors.password2
                        })}
                      />
                      <span className="red-text">{errors.password2}</span>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg"
                      type="submit" value="SIGN IN">
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
SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
// export default withRouter(
//   connect(
//     mapStateToProps,
//     { registerUser }
//   )(withStyles(loginPageStyle)(SignUp))
// );

let styledComponent = withStyles(loginPageStyle)(SignUp);
let connectedComponent = connect(mapStateToProps,{ registerUser })(styledComponent);
let routedComponent = withRouter(connectedComponent);
export default routedComponent
