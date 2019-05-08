import React from "react";
import "./input.css";
import PropTypes from "prop-types";

const CalcInput = props => {
  return <div className="input">{props.input}</div>;
};

export default CalcInput;

CalcInput.propTypes = {
  input: PropTypes.node.isRequired
};
