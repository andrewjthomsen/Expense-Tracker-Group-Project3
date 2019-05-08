import React from "react";
import "./buttons.css";
import PropTypes from "prop-types";

export function CalcButton(props) {
  const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export function ClearButton(props) {
  return (
    <div className="clear-btn" onClick={props.handleClear}>
      {props.children}
    </div>
  );
}

export function BackButton(props) {
  return (
    <div
      className="button-wrapper"
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

CalcButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.node.isRequired
};

ClearButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClear: PropTypes.node.isRequired
};

BackButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.node.isRequired
};
