// import React, { useState } from "react";
// // BRING IN AXIOS
// import axios from "axios";
// export default class ExpenseLogic extends React.component {
//   constructor(props) {
//     super(props);
//     useState(this.state) = {
//       expense: []
//     };
//   }
//   recentExpenses = () => {
//     const result = axios("http://localhost:5000/api/expenses");
//     const [data, setData] = useState({ expenses: [] });

//     setData(result.data);
//     // console.log(result);
//     // console.log(result.data);
//     // console.log(result.data[0]);
//     const arrayData = Object.keys(result.data).map(function(key) {
//       return [Object(key), result.data[key]];
//     });

//     let table = [];
//     let children = [];

//     for (var i = 0; i <= arrayData.length - 1; i++) {
//       children.push(<td>{arrayData[i][1].payee}</td>);
//       table.push(<tr>{children}</tr>);
//     }
//   };
// }
