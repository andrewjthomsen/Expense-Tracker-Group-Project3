import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Check from "@material-ui/icons/Check";
import Spa from "@material-ui/icons/Spa";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import ExpenseCard from "components/ExpensesCard/ExpenseCard.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import ExpenseCardHeader from "components/ExpensesCard/ExpenseCardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
// import ExpenseCardIcon from "components/ExpenseCard/ExpenseCardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ExpenseCardBody from "components/ExpensesCard/ExpenseCardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import DonutChart from "components/BarChart/PieChart.js";
import BarChart from "components/BarChart/BarChart.js";
import { groceries, server } from "variables/general.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer style={{overflowY: "scroll!important"}}>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>playlist_add</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Total Expenses</p>

                {/* Calculate the Total Expenses */}
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="/admin/balance" onClick={e => e.preventDefault()}>
                    Check Your Current Expenses
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>attach_money</Icon>
                </CardIcon>

                <p className={classes.cardCategory}>Current Balance</p>

                {/* Calculate current balance and append it down here !  */}

                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>

                <p className={classes.cardCategory}>Credit Score</p>

                {/* Ask Alex how to get Credit Score info????  */}

                <h3 className={classes.cardTitle}>750</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="rose">
                <DonutChart />
                <BarChart />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Most Spent Categories</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 10%
                  </span>{" "}
                  increase in this month Expense.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Grocery List",
                  tabIcon: Check,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={groceries}
                    />
                  )
                },

                {
                  tabName: "Todo",
                  tabIcon: Spa,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <ExpenseCard>
              <ExpenseCardHeader color="primary">
                {/* Append Current Expenses */}

                <h4 className={classes.cardTitleWhite}>
                  <b>Expenses</b>
                </h4>
                <p className={classes.cardCategoryWhite}>
                  Your Current Entries
                </p>
              </ExpenseCardHeader>
              <ExpenseCardBody />
            </ExpenseCard>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
