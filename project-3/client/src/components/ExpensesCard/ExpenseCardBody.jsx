import React, { useState } from "react";
import Table from "components/Table/Table.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardBodyStyle from "assets/jss/material-dashboard-react/components/cardBodyStyle.jsx";
// BRING IN AXIOS
import axios from "axios";

function CardBody({ ...props }) {
  const { classes, className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  });
  // SETTING STATE ON CARDBODY
  const expenses = useState([]);
  console.log("expenses are:", expenses);
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
      <div>
        <Table
          tableHeaderColor="warning"
          tableHead={["ID", "Name", "Salary", "Country"]}
          tableData={[
            ["1", "Dakota Rice", "$36,738", "Niger"],
            ["2", "Minerva Hooper", "$23,789", "Curaçao"],
            ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
            ["4", "Philip Chaney", "$38,735", "Korea, South"]
          ]}
        />
      </div>
    </div>
  );
}

CardBody.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool
};
// componentDidMount() {
//   axios
//     .get("http://localhost:5000/expenses")
//     .then(response => {
//       this.setState({ expenses: response.data });
//       console.log(response.data)
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// }
export default withStyles(cardBodyStyle)(CardBody);
