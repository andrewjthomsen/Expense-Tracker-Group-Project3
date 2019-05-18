import React, { useState, useEffect } from "react";
import Table from "components/Table/Table.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes, { array } from "prop-types";
import Balance from "../Balance/balance";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import cardBodyStyle from "assets/jss/material-dashboard-react/components/cardBodyStyle.jsx";
// BRING IN AXIOS
import axios from "axios";
import "./style/expenseCardStyle.css";
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
  // console.log("expenses are:", data.expenses);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/expenses");

      setData(result.data);
      // console.log(result);
      // console.log(result.data);
      // console.log(result.data[0]);
      const arrayData = Object.keys(result.data).map(function(key) {
        return [Object(key), result.data[key]];
      });
      // console.log returns array data function
      // console.log("arrayData:", arrayData[0][5].payee);
      // console.log("arrayData:", arrayData[1][1].amount);
      console.log("arrayData:", arrayData[0][1].category);
      // console.log("arrayData:", arrayData[1][1].comment);
      // NEED TO WRITE FORLOOP TO LOOP THROUGH FIRST FIVE MOST RECENT EXPENSES ADDED
      // NEED ANOTHER LOOP THAT PUSHES RESULTS INTO AN ARRAY
      // WILL HAVE AN ARRAY OF 5 ARRAYS
      // WHAT TABLE DATA WILL BE EQUAL TO

      // var getSet = ""; // Get Skills from the Array
      // var getSetIcon = data.sets[value].set[0]; // Get Skills Icon
      // var getSetTitle = data.sets[value].set[1]; // Get Equip's Title

      // for(var val = 2; val <= data.sets[value].set.length - 1; val++) {
      //     getSet += data.sets[value].set[val]; // Get Skills info
      // }
      // for (var j = 1; j <= arrayData.length; j++) {
      //   console.log(
      //     arrayData[i][j].payee + " " + arrayData[i + 1][j + 1].amount
      //   );
      // }
    };
    fetchData();
    // const tableInfo = data.expenses;
    // console.log("tableInfo is:", tableInfo);
  }, []);

  // item => (key = item.objectID

  // recentExpenses = () => {
  //   const result = axios("http://localhost:5000/api/expenses");

  //   setData(result.data);
  //   // console.log(result);
  //   // console.log(result.data);
  //   // console.log(result.data[0]);
  //   const arrayData = Object.keys(result.data).map(function(key) {
  //     return [Object(key), result.data[key]];
  //   });

  //   let table = [];
  //   let children = [];

  //   for (var i = 0; i <= arrayData.length - 1; i++) {
  //  {children.push(<td>{arrayData[i][1].payee}</td>);
  //     table.push(<tr>{children}</tr>);
  //   }
  // };
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
      <div>
        {/* <Balance className="balanceStyle"/> */}
        {/* <Table
          tableHeaderColor="warning"
          tableHead={["ID", "Name", "Salary", "Country"]}
          tableData={[
            ["1", "Dakota Rice", "$36,738", "Niger"],
            ["2", "Minerva Hooper", "$23,789", "Curaçao"],
            ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
            ["4", "Philip Chaney", "$38,735", "Korea, South"]
          ]}
        /> */}
        {/* <Table
          tableHeaderColor="warning"
          tableHead={["payee", "amount", "category", "comment"]}
          // tableData={this.state}
        /> */}
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

// TODO:
// result from api call is array of objects
// tabledata component only takes arrays of strings
// Need to parse data in array of strings
// NEED TO GET DATA IN CONSOLE TO LOOK LIKE EXAMPLE BELOW
// EXAMPLE COMES FROM DASHBOARD.JSX EXPENSES CARD AT BOTTOM OF CODE PAGE
