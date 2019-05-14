/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// @material-ui/icons
import { Apps, AccountCircle } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/homepage/components/headerLinksStyle";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Manage Account"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/signin" className={classes.dropdownLink}>
              Sign In
            </Link>,
            <a
              href="/signup"
              target="_blank"
              className={classes.dropdownLink}
            >
              Sign Up
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/aboutus"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <AccountCircle className={classes.icons} /> About Us
        </Button>
      </ListItem>
      
     
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
