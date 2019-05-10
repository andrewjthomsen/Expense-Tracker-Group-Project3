import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Style from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import avatar from "assets/img/faces/marc.jpg";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Expense from "../../../../models/expense";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
class AddExpense extends React.Component {
  state = {
    expense: [{
      payee: "",
      user: "",
      amount: "",
      category: "",
      comment: ""
    }]
  };
}
handleExpense(e) {
  e.preventDefault();
  this.setState({
    expense: [{
      payee: e.target.value,
      amount: e.target.value,
      category: e.target.value,
      comment: e.target.value
    }],
  });
}

// handleUser(e) {
//   this.setState({
//     user: e.target.value
//   });
// }

addExpense(e) {
  e.preventDefault();

  const payee = this.state.payee;
  const amount = this.state.amount;
  // const user = this.state.user;
  const category = this.state.category;
  const comment = this.state.comment;
  const expense = {
    payee,
    amount,
    category,
    comment
  };

  // Reset form fields
  this.setState({
    category: "",
    payee: "",
    // user: "",
    amount: "",
    comment: ""
  });
  //API.addExpense(this.state).then(() => {
  //this.props.onExpensesUpdated();
  //});
  //this.props.router.push('/');
  //this.props.history.push("/");
}
render(props) {
  return ( <
    div >
    <
    GridContainer >
    <
    GridItem xs = {
      12
    }
    sm = {
      12
    }
    md = {
      8
    } >
    <
    Card >
    <
    CardHeader color = "primary" >
    <
    h4 className = {
      Style.cardTitle
    } > Add an Expense < /h4> <
    p className = {
      Style.cardCategoryWhite
    } >
    Use this section to insert a new Expense <
    /p> <
    /CardHeader> <
    CardBody >
    <
    GridContainer >
    <
    GridItem xs = {
      12
    }
    sm = {
      12
    }
    md = {
      5
    } >
    <
    CustomInput labelText = "Payee"
    id = "payee"
    inputProps = {
      {
        value: this.state.payee,
        onChange: this.handlePayee.bind(this)
      }
    }
    required formControlProps = {
      {
        fullWidth: true
      }
    }
    /> <
    /GridItem> {
      /* <GridItem xs={12} sm={12} md={5}>
                          <CustomInput
                            labelText="User"
                            id="user"
                            value={this.state.user}
                            onChange={this.handleUser.bind(this)}
                            required
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem> */
    } <
    GridItem xs = {
      12
    }
    sm = {
      12
    }
    md = {
      5
    } >
    <
    CustomInput labelText = "Amount"
    id = "amount"
    inputProps = {
      {
        value: this.state.amount,
        onChange: this.handleAmount.bind(this)
      }
    }
    required formControlProps = {
      {
        fullWidth: true
      }
    }
    /> <
    /GridItem> <
    /GridContainer> <
    GridContainer >
    <
    GridItem xs = {
      12
    }
    sm = {
      12
    }
    md = {
      6
    } >
    <
    InputLabel htmlFor = "age-helper" > Category < /InputLabel> <
    Select inputProps = {
      {
        value: this.state.category,
        onChange: this.handleCategory.bind(this)
      }
    }
    input = {
      < Input name = "age"
      id = "age-helper" / >
    } >
    <
    MenuItem value = "" >
    <
    em > None < /em> <
    /MenuItem> <
    MenuItem value = {
      "books"
    } > Books < /MenuItem> <
    MenuItem value = {
      "clothes"
    } > Clothes < /MenuItem> <
    MenuItem value = {
      "electricity"
    } > Electricity < /MenuItem> <
    MenuItem value = {
      "food"
    } > Food < /MenuItem> <
    MenuItem value = {
      "fruit"
    } > Fruit < /MenuItem> <
    MenuItem value = {
      "grocery"
    } > Grocery < /MenuItem> <
    MenuItem value = {
      "internet"
    } > Internet < /MenuItem> <
    MenuItem value = {
      "phone"
    } > Phone < /MenuItem> <
    MenuItem value = {
      "traveling"
    } > Traveling < /MenuItem> <
    MenuItem value = {
      "uncategorized"
    } > Uncategorized < /MenuItem> <
    MenuItem value = {
      "vegetables"
    } > Vegetables < /MenuItem> <
    /Select> <
    /GridItem> <
    /GridContainer> <
    GridContainer >
    <
    GridItem xs = {
      12
    }
    sm = {
      12
    }
    md = {
      12
    } >
    <
    CustomInput labelText = "comment"
    id = "comment"
    inputProps = {
      {
        value: this.state.comment,
        onChange: this.handleComment.bind(this),
        multiline: true,
        rows: 5
      }
    }
    formControlProps = {
      {
        fullWidth: true
      }
    }
    /> <
    /GridItem> <
    /GridContainer> <
    /CardBody> <
    CardFooter >
    <
    Button type = "submit"
    onClick = {
      this.addExpense
    }
    color = "primary" >
    Submit <
    /Button> <
    /CardFooter> <
    /Card> <
    /GridItem> <
    GridItem xs = {
      12
    }
    sm = {
      12
    }
    md = {
      4
    } >
    <
    Card profile >
    <
    CardAvatar profile >
    <
    a href = "#pablo"
    onClick = {
      e => e.preventDefault()
    } >
    <
    img src = {
      avatar
    }
    alt = "..." / >
    <
    /a> <
    /CardAvatar> {
      /* <CardBody profile>
                      <h6 className={Style.cardCategory}>CEO / CO-FOUNDER</h6>
                      <h4 className={Style.cardTitle}>Alec Thompson</h4>
                      <p className={Style.description}>
                        Don't be scared of the truth because we need to restart the
                        human foundation in truth And I love you like Kanye loves
                        Kanye I love Rick Owens’ bed design but the back is...
                      </p>
                      <Button color="primary" round>
                        Follow
                      </Button>
                    </CardBody> */
    } <
    /Card> <
    /GridItem> <
    /GridContainer> <
    /div>
  );
}
}
export default withStyles(styles)(AddExpense);