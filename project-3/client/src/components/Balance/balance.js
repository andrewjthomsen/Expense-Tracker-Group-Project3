// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react";
import Axios from "axios";

// stateless functional component that returns html (jsx)
class Balance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ""
    },
    componentDidMount() {
        Axios.get('http://localhost:3000/admin/user')
        .then(response => {
            this.setState({ amount: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }

    render () {
        return (
    <h1>Your balance is: {this.props.amount}</h1>
        )
    }
        
        
  }


export default Balance;
