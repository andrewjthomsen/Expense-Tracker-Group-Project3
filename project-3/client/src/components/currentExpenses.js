// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
const currentExpense = (props) => {
    return (
        
        <div className="currentExpense">
            <h1>Current Expenses</h1>
           {/* This will be where the current expenses or upcoming expenses will be rendered from dummy 
            data in mongo db based on user that's logged in */}
        </div>
    );
}

export default currentExpense;