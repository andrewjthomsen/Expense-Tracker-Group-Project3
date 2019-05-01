import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../../assets/additionalcss/css/signup.css"
import "../../assets/additionalcss/css/mbr-additional.css"

import NavBar from "../NavBar";


const ExpenseForm = () => {

  return (
    <form>
        <h4>Cost</h4>
        <input></input>
        <h4>Expense Type</h4>
        <input></input>
        <h4>Description</h4>
        <input></input>
    </form>
  )
}
export default ExpenseForm;
