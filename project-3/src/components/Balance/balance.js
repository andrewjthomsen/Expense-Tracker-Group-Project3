// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "./node_modules/react"
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
const Balance = (props) => {
    return (
        
        <div className="balance">
            <h1>Availabe Balance</h1>
           {/* This will be where the balance will be rendered from dummy 
            data in mongo db based on user that's logged in */}
        </div>
    );
}

export default Balance;