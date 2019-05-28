// TODO WORK ON GETTING IMAGE ON LEFT CORNER OF NAVBAR AND IT SHOULD TAKE US TO HOME WHEN CLICKED
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// stateless functional component that returns html (jsx)
const Logo = (props) => {
    return (<img src={props.image.url} height="100px" width="100px" onClick={props.onClick}></img>)

}

export default Logo;