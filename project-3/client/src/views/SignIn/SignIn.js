import * as React from "react";
// @material-ui/core
//import withStyles from "@material-ui/core/styles/withStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Style from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
      
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  handlePassword(e) {
    this.setState({
      amount: e.target.value
    });
  }
  
  render(props){
    return (
<div>
<GridContainer>
  <GridItem xs={12} sm={12} md={8}>
    <Card>
      <CardHeader color="primary">
        <h1 className={Style.cardTitle}>SIGNIN</h1>
      </CardHeader>

      <CardBody>
        <GridContainer>
        <GridItem xs={12} sm={12} md={5}>
        <CustomInput
       id="username"
            label="UserName"
            type="text"
            name="username"
            autoComplete="username"
            margin="normal"
            variant="outlined"
      formControlProps={{
        fullWidth: true
      }}

      />
      </GridItem>

      <GridItem xs={12} sm={12} md={5}>
      <CustomInput
      id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
      formControlProps={{
        fullWidth: true
      }}

      />
      </GridItem>
      </GridContainer>
    </CardBody>
    <CardFooter>
                <Button type="submit" color="primary">
                  Submit
                </Button>
        </CardFooter>
    </Card>
    </GridItem>
    </GridContainer>
     
    </div>
      );
      }
      }

   

export default withStyles(styles)(Signin);
