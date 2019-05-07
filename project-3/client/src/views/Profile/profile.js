import * as React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";
// TODOS:
// 1. Display username for logged in user at welcome
// 2. Display available balance
// - Write out function to deduct expenses from balance.
// 3. Display latest 5 transactions
//- Display latest at top
// Add functionality to be able to add a bank. Possibly create a page where a user can
// enter in their bank information
function Profile({ ...props }) {
  const { classes, tableHead, tableData, tableHeaderColor } = props;
  return (
    // <!-- main -->
    <div>
      <Table>
        <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
          <TableRow>
            <TableCell colSpan="3">
              <h1>
                Welcome {/*username goes here*/}!
                {/*Display date and time of login here*/}
              </h1>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <TableRow><TableCell></TableCell></TableRow> */}
          <TableRow>
            <TableCell>
              <h4>
                Available Balance:
                {/*Display available balance here*/}
              </h4>
            </TableCell>
            <TableCell>
              <h4>
                Latest Transactions
                {/*Display added expenses here*/}
                {/*Display last 5 added expenses only*/}
              </h4>
            </TableCell>
            <TableCell>
              <h4>
                Add Your Bank(s)
                {/*Display banks added here*/}
              </h4>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
Profile.defaultProps = {
  tableHeaderColor: "gray"
};
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
export default withStyles(tableStyle)(Profile);
