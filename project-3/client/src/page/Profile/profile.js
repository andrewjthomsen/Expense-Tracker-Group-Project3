import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../../assets/additionalcss/css/signup.css"
import "../../assets/additionalcss/css/mbr-additional.css"
// TODOS:
// 1. Display username for logged in user at welcome
// 2. Display available balance
// - Write out function to deduct expenses from balance.
// 3. Display latest 5 transactions
//- Display latest at top 
// Add functionality to be able to add a bank. Possibly create a page where a user can
// enter in their bank information


function Profile() {
  return (
    // <!-- main -->
    <div className="container">
    <h1>Welcome {/*username goes here*/}!
    {/*Display date and time of login here*/}</h1> 
    <h4>Available Balance:
    {/*Display available balance here*/}
    </h4>
    <h4>Latest Transactions
        {/*Display added expenses here*/}
        {/*Display last 5 added expenses only*/}
    </h4>
    <h4>Add Your Bank(s)
        {/*Display banks added here*/}
    </h4>
    </div> 
  
  );
}
   
export default Profile;
