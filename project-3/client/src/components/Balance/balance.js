// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";
import axios from "axios";
import TableData from "./tableData";
class Balance extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expense: [] };
  }
  componentDidMount() {
    axios
    // TODO: CREATE API ROUTE TO BALANCE
    // Responsible for bringing back a balance from the db
    // NEED TO HARD CODE A BALANCE FOR THE ADDED EXPENSES TO BE SUBTRACTED FROM
    // NEED JAVASCRIPT TO SUBTRACT EXPENSES FROM CREATED BALANCE
      .get("http://localhost:5000/api/expenses")
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
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <span>Created At:</span>
            </TableCell>
            <TableCell>
              <span>Payee:</span>
            </TableCell>
            <TableCell>
              <span>Amount:</span>
            </TableCell>
            <TableCell>
              <span>Category:</span>
            </TableCell>
            <TableCell>
              <span>Comment:</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{this.tableRow()}</TableBody>
      </Table>
    );
  }
}
export default Balance;