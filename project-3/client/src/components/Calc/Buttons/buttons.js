import React from "react";
import "./buttons.css";

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
