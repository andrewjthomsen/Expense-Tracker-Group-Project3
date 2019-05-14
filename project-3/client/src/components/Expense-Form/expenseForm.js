import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
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
// import Input from "@material-ui/core/Input";
// import Expense from "../../../../models/expense";
// AXIOS
import axios from "axios";
import API from "../../routes/api/api";

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
    this.handlePayee = this.handlePayee.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      payee: "",
      amount: "",
      category: "",
      comment: ""
    };
  }

  handlePayee = e => {
    e.preventDefault();
    this.setState({
      payee: e.target.value
    });
  };
  handleAmount = e => {
    e.preventDefault();
    this.setState({
      amount: e.target.value
    });
  };
  handleCategory = e => {
    e.preventDefault();
    this.setState({
      category: e.target.value
    });
  };
  handleComment = e => {
    e.preventDefault();
    this.setState({
      comment: e.target.value
    });
  };

  // Refresh state
  addExpense = e => {
    e.preventDefault();
    // API CALL TO EXPENSE INFO TO DATABASE
    API.addExpense();
    // RE-RENDER EXPENSE FORM
  };
  onSubmit(e) {
    e.preventDefault();
    const expenseData = {
      payee: this.state.payee,
      amount: this.state.amount,
      category: this.state.category,
      comment: this.state.comment
    };
    console.log(expenseData);
    axios
      .post("http://localhost:5000/admin/expenseForm", expenseData)
      .then(res => console.log(res.data));
    this.setState({
      payee: "",
      amount: "",
      category: "",
      comment: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
                    <div>
                      <input
                        labelText="Payee"
                        id="payee"
                        inputProps={{
                          value: this.state.payee,
                          onChange: this.handlePayee
                        }}
                        required
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <div>
                      <input
                        labelText="Amount"
                        id="amount"
                        inputProps={{
                          value: this.state.amount,
                          onChange: this.handleAmount
                        }}
                        required
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <InputLabel htmlFor="age-helper">Category</InputLabel>
                    <Select
                      inputProps={{
                        value: this.state.category,
                        onChange: this.handleCategory
                      }}
                    >
                      <MenuItem value={"books"}>Books</MenuItem>
                      <MenuItem value={"clothes"}>Clothes</MenuItem>
                      <MenuItem value={"electricity"}>Electricity</MenuItem>
                      <MenuItem value={"food"}>Food</MenuItem>
                      <MenuItem value={"fruit"}>Fruit</MenuItem>
                      <MenuItem value={"grocery"}>Grocery</MenuItem>
                      <MenuItem value={"internet"}>Internet</MenuItem>
                      <MenuItem value={"phone"}>Phone</MenuItem>
                      <MenuItem value={"traveling"}>Traveling</MenuItem>
                      <MenuItem value={"uncategorized"}>Uncategorized</MenuItem>
                      <MenuItem value={"vegetables"}>Vegetables</MenuItem>
                    </Select>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <input
                      labelText="comment"
                      id="comment"
                      inputProps={{
                        value: this.state.comment,
                        onChange: this.handleComment,
                        multiline: true,
                        rows: 5
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button type="submit" color="primary">
                  Submit
                </Button>
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
            </Card>
          </GridItem>
        </GridContainer>
      </form>
    );
  }
}

export default withStyles(styles)(AddExpense);
// create.component.js

// import React, { Component } from 'react';
// import axios from 'axios';

// export default class Create extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangePersonName = this.onChangePersonName.bind(this);
//     this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
//     this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       person_name: '',
//       business_name: '',
//       business_gst_number:''
//     }
//   }
//   onChangePersonName(e) {
//     this.setState({
//       person_name: e.target.value
//     });
//   }
//   onChangeBusinessName(e) {
//     this.setState({
//       business_name: e.target.value
//     })  
//   }
//   onChangeGstNumber(e) {
//     this.setState({
//       business_gst_number: e.target.value
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     const obj = {
//       person_name: this.state.person_name,
//       business_name: this.state.business_name,
//       business_gst_number: this.state.business_gst_number
//     };
//     axios.post('http://localhost:4000/business/add', obj)
//         .then(res => console.log(res.data));
    
//     this.setState({
//       person_name: '',
//       business_name: '',
//       business_gst_number: ''
//     })
//   }
 
//   render() {
//     return (
//         <div style={{ marginTop: 10 }}>
//             <h3>Add New Business</h3>
//             <form onSubmit={this.onSubmit}>
//                 <div className="form-group">
//                     <label>Person Name:  </label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       value={this.state.person_name}
//                       onChange={this.onChangePersonName}
//                       />
//                 </div>
//                 <div className="form-group">
//                     <label>Business Name: </label>
//                     <input type="text" 
//                       className="form-control"
//                       value={this.state.business_name}
//                       onChange={this.onChangeBusinessName}
//                       />
//                 </div>
//                 <div className="form-group">
//                     <label>GST Number: </label>
//                     <input type="text" 
//                       className="form-control"
//                       value={this.state.business_gst_number}
//                       onChange={this.onChangeGstNumber}
//                       />
//                 </div>
//                 <div className="form-group">
//                     <input type="submit" value="Register Business" className="btn btn-primary"/>
//                 </div>
//             </form>
//         </div>
//     )
//   }
// }