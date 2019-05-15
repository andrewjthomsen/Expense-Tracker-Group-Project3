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
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <h1>Created At:</h1>
            </TableCell>
            <TableCell>
              <h1>Payee:</h1>
            </TableCell>
            <TableCell>
              <h1>Amount:</h1>
            </TableCell>
            <TableCell>
              <h1>Category:</h1>
            </TableCell>
            <TableCell>
              <h1>Comment:</h1>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{this.tableRow()}</TableBody>
      </Table>
    );
  }
}
export default Balance;