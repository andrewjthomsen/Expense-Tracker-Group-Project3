/*eslint-disable*/
import React, { Component } from "react";
import classnames from "classnames";
import Calc from "../Calc/calc";
import "./CalcIcon.css";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleFixedClick();
  }
  render() {
    return (
      <div
        className={classnames("fixed-plugin", {
          "rtl-fixed-plugin": this.props.rtlActive
        })}
      >
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <div onClick={this.handleClick}>
            <i className="calc-icon fas fa-calculator fa-2x" />
          </div>
          <ul className="dropdown-menu">
            <Calc />
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
