import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState({ expenses: [] });
  console.log("expenses are:", data.expenses);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/expenses");

      setData(result.data);
      console.log(result);
    };
    fetchData();
    // const tableInfo = data.expenses;
    // console.log("tableInfo is:", tableInfo);
  }, []);

  // item => (key = item.objectID

  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
      <div>
        <Table
          tableHeaderColor="warning"
          tableHead={["payee", "amount", "category", "comment"]}
          // tableData={this.state}
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

// USE TO WRITE COMPONENT
// function App() {
//   const [data, setData] = useState({ hits: [] });

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         'http://hn.algolia.com/api/v1/search?query=redux',
//       );

//       setData(result.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <ul>
//       {data.hits.map(item => (
//         <li key={item.objectID}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }
