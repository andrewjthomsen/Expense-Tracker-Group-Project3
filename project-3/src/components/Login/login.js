import * as React from "./node_modules/react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
const Login = props => {
  return (
  
    <div className="userData">
      <h1>User Login</h1>
      <form>
        <input>
          <placeholder>Enter username</placeholder>
        </input>
        <input type="password">
          <placeholder>Enter password</placeholder>
        </input>
      </form>
      <button id="submitBtn" type="submit">
        Submit
      </button>
    </div>
  );
};

export default Login;
