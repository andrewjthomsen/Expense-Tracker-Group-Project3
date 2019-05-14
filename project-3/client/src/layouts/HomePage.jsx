import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
//import { Link } from "react-router-dom";
//core components
import Header from "../components/Header/Header.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Parallax from "../components/Parallax/Parallax.jsx"
//sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
//import logo from "assets/img/reactlogo.png";
import componentsStyle from "../assets/jss/homepage/components/components";

class HomePage extends React.Component {
    render(){
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                brand="Home"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height:400,
                    color:"yellow"
                
                }}
                {...rest}
              
             />

            <Parallax image={require("../assets/img/bkgrd.jpg")}>
            <div className={classes.container}>
            <GridContainer>
                <GridItem>
                    <div className={classes.bran}>
                    <h1 className={classes.title}>AFFLUENT</h1>
                    <h3 className={classes.subtitle}>Be wise with your money</h3>
                    </div>
                    </GridItem>
            </GridContainer>
            </div>
            </Parallax>
        
        
        
        
        </div>
        );
    }
}

export default withStyles(componentsStyle)(HomePage);