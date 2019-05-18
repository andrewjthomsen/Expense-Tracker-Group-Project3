import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

import PieChart from "@material-ui/icons/PieChart";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import InfoArea from "../../components/InfoArea/InfoArea.jsx";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import productStyle from "assets/jss/homepage/components/productStyle.jsx";
import Done from "@material-ui/icons/Done";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
class AboutusSection extends React.Component {
 

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Effortlessly stay on top of bills</h2>
            <h5 className={classes.description} style={{ color: '#e0e0e0' }}>
            At last, your bills and money are together in one place 
            and easier than ever to track. Just add your bills to see how helpful we can be.
            <List>
                  <ListItem>
                  <ListItemIcon style={{ color: '#e0e0e0' }}><Done /></ListItemIcon>
                  <ListItemText>
                  <Typography  style={{ color: '#e0e0e0' }} component="h6" varient="body2" align="left" margin-bottom="10px">
                               <b>See bills and money in one place.</b>   
                  </Typography>
                  </ListItemText> 
                  </ListItem>
        
                  <ListItem>
                  <ListItemIcon style={{ color: '#e0e0e0' }}><Done /></ListItemIcon>
                  <ListItemText>
                  <Typography  style={{ color: '#e0e0e0' }} component="h6" varient="body2" align='left' margin-bottom="10px">
                                 <b>Get alerts about upcoming bills. </b>  
                  </Typography>
                  </ListItemText> 
                  </ListItem>

                  <ListItem>
                  <ListItemIcon style={{ color: '#e0e0e0' }}><Done /></ListItemIcon>
                  <ListItemText>
                  <Typography  style={{ color: '#e0e0e0' }} component="h6" varient="body2" align='left' margin-bottom="10px">
                                <b>Say goodbye to late fees. </b>   
                  </Typography>
                  </ListItemText> 
                  </ListItem>
                  
              </List>                
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Simple Money Tracker"
                description="It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift."
                icon={AccountBalanceWallet}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Painless Budgeting"
                description="Set budgets that are easy to stick to, based on your own spending habits. You’re one step closer to that stuff you want to buy."
                icon={PlaylistAdd}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="The Whole Picture In One Place"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={PieChart}
                iconColor="rose"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(AboutusSection);
