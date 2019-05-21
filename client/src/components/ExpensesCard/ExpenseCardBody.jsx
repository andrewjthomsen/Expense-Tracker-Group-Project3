import React from "react";
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
import "./style/expenseCardStyle.css";
class CardBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  async componentDidMount() {
    const result = await axios("http://localhost:5000/api/expenses");

    let data = result.data;
    console.log(data);
    data.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    console.log(data);

    this.setState({ data: data });
    // const arrayData = Object.keys(result.data).map(function(key) {
    //   return [Object(key), result.data[key]];
    // });
    // console.log returns array data function
    // console.log("arrayData:", arrayData[0][1].payee);
    // console.log("arrayData:", arrayData[1][1].amount);
    // console.log("arrayData:", arrayData[0][1].category);
    // console.log("arrayData:", arrayData[1][1].comment);
    // NEED TO WRITE FORLOOP TO LOOP THROUGH FIRST FIVE MOST RECENT EXPENSES ADDED
    // NEED ANOTHER LOOP THAT PUSHES RESULTS INTO AN ARRAY
    // WILL HAVE AN ARRAY OF 5 ARRAYS
    // WHAT TABLE DATA WILL BE EQUAL TO
  }

  render() {
    const {
      classes,
      className,
      children,
      plain,
      profile,
      ...rest
    } = this.props;
    const cardBodyClasses = classNames({
      [classes.cardBody]: true,
      [classes.cardBodyPlain]: plain,
      [classes.cardBodyProfile]: profile,
      [className]: className !== undefined
    });
    let tableData = [];
    for (var i = 0; i < this.state.data.length && i < 5; ++i) {
      let expense = this.state.data[i];
      let row = [
        expense.payee,
        expense.amount,
        expense.category,
        expense.comment
      ];
      tableData.push(row);
    }
    return (
      <div className={cardBodyClasses} {...rest}>
        {children}
        <div>
          {/* <Balance className="balanceStyle"/> */}
          <Table
            tableHeaderColor="warning"
            tableHead={["Payee", "Amount", "Category", "Comment"]}
            tableData={tableData}
          />
        </div>
      </div>
    );
  }
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
