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
  constructor(props) {
    super(props);
    this.state = {
      payee: "",
      user: "",
      amount: "",
      category: "",
      comment: ""
    };
  }
  handlePayee(e) {
    this.setState({
      payee: e.target.value
    });
  }
  handleAmount(e) {
    this.setState({
      amount: e.target.value
    });
  }
  handleCategory(e) {
    this.setState({
      category: e.target.value
    });
  }
  handleComment(e) {
    this.setState({
      comment: e.target.value
    });
  }
  addExpense(e) {
    e.preventDefault();
    const payee = this.state.payee;
    const amount = this.state.amount;
    const category = this.state.category;
    const comment = this.state.comment;
    const expense = { payee, amount, category, comment };
    // Reset form fields
    this.setState({
      category: "",
      payee: "",
      amount: "",
      comment: ""
    });
    this.props.onNewExpense(expense);
    //this.props.router.push('/');
    //this.props.history.push("/");
  }
  render(props) {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={Style.cardTitle}>Add an Expense</h4>
                <p className={Style.cardCategoryWhite}>
                  Use this section to insert a new Expense
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Payee"
                      id="payee"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Amount"
                      id="amount"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Select />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Country"
                      id="country"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Postal Code"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>
                      About me
                    </InputLabel>
                    <CustomInput
                      labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                      id="about-me"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
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
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
//   <div className="form-container" style={{textAlign: "center"}}>
//   <h1 className="expense-h1">Add an Expense</h1>
//     <div className="form-container">
//       <form className="expenseform" onSubmit={this.addExpense.bind(this)}>
//         <p>
//         <input className="textform" type="text" placeholder="Payee" value={this.state.payee} onChange={this.handlePayee.bind(this)} required/>
//         <br />
//         </p>
//         <p>
//         <input className="textform" type="number" placeholder="Amount" value={this.state.amount} onChange={this.handleAmount.bind(this)} required/>
//         <br />
//         </p>
//         <select className="textform" value={this.state.category} onChange={this.handleCategory.bind(this)}>
//           <option value="books">Books</option>
//           <option value="clothes">Clothes</option>
//           <option value="electricity">Electricity</option>
//           <option value="food">Food</option>
//           <option value="fruits">Fruits</option>
//           <option value="grocery">Grocery</option>
//           <option value="internet">Internet</option>
//           <option value="Phone">Phone</option>
//           <option value="traveling">Traveling</option>
//           <option value="uncategorized">Uncategorized</option>
//           <option value="vegetables">Vegetables</option>
//         </select>
//         <br />
//         <textarea className="textform" style={{height: "64px", width: "600px"}} value={this.state.comment} onChange={this.handleComment.bind(this)} placeholder="Comment"/>
//         <br />
//         <button type="submit">SUBMIT</button>
//       </form>
//     </div>
//   </div>
// )
//   }
// }
export default withStyles(styles)(AddExpense);

