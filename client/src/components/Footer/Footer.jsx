import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={classes.block}>
                Home
              </a>
            </ListItem>
          
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={classes.block}>
               About Us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/signin" className={classes.block}>
                Sign In 
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a href="/admin/dashboard" className={classes.a}> 
              AFFLUENT
            </a>
            Be Wise With Your Money
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
