// stateless
//define function that returns jsx and returns parameters (props)
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

// core components
import axios from "axios";
import TableData from "./tableData";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class Balance extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { expense: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/business")
      .then(response => {
        this.setState({ expense: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  tableRow() {
    return this.state.expense.map(function(object, i) {
      return <TableData obj={object} key={i} />;
    });
  }
 
  render(){
    const { classes } = this.props;
    return (

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <Card>
        <CardHeader color="primary">
        <h3 className={classes.cardTitleWhite}>Current Expenses</h3>
        <p className={classes.cardCategoryWhite}>
              Your Current Expenses Breakdown
            </p>
        </CardHeader>    
        <CardBody>
          <Table 
          tableHeaderColor="primary"
          tableHead={["Create At", "Payee", "Amount", "Categories","Comment"]}
          tableData={this.tableRow()}
        />
      </CardBody>
      </Card>
      </GridItem>
      </GridContainer>
    );
    }
}
export default withStyles(styles)(Balance);