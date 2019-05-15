import React, { Component } from "react";
import Table from "@material-ui/core/Table";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";
export default class TableData extends Component {
  render() {
    return (
      <TableRow>
        <TableCell>
          <h1>{this.props.obj.createdAt}</h1>
        </TableCell>
        <TableCell>
          <h1>{this.props.obj.payee}</h1>
        </TableCell>
        <TableCell>
          <h1>{this.props.obj.amount}</h1>
        </TableCell>
        <TableCell>
          <h1>{this.props.obj.category}</h1>
        </TableCell>
        <TableCell>
          <h1>{this.props.obj.comment}</h1>
        </TableCell>
        {/* <TableCell colSpan="1">
      <button className="btn btn-primary">Edit</button>
     </TableCell>
     <TableCell colSpan="1">
      <button className="btn btn-danger">Delete</button>
     </TableCell> */}
      </TableRow>
    );
  }
}
