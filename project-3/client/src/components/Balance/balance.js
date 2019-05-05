// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"

// stateless functional component that returns html (jsx)
const Balance = (props) => {
    return (
        <h1>Availabe Balance: { props.value }</h1>
    );
}

export default Balance;