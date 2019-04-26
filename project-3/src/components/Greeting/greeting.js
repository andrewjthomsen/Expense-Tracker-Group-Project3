// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
const Greeting = (props) => {
    return (
        
        <div className="balance">
            <h1>Welcome User</h1>
           {/* This will be where the username will be rendered from dummy 
            data in mongo db based on user that's logged in */}
        </div>
    );
}

export default Greeting;