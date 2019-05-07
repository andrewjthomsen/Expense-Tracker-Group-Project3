import React from "react";
import "./style.css";
import Input from "./Buttons/input";
import { CalcButton, ClearButton } from "./Buttons/buttons";
import * as math from "mathjs";

class Calc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  render(props) {
    return (
      <div className="calc-wrapper">
        <Input input={this.state.input} />
        <div className="row">
          <CalcButton handleClick={this.addToInput}>7</CalcButton>
          <CalcButton handleClick={this.addToInput}>8</CalcButton>
          <CalcButton handleClick={this.addToInput}>9</CalcButton>
          <CalcButton handleClick={this.addToInput}>/</CalcButton>
        </div>
        <div className="row">
          <CalcButton handleClick={this.addToInput}>4</CalcButton>
          <CalcButton handleClick={this.addToInput}>5</CalcButton>
          <CalcButton handleClick={this.addToInput}>6</CalcButton>
          <CalcButton handleClick={this.addToInput}>*</CalcButton>
        </div>
        <div className="row">
          <CalcButton handleClick={this.addToInput}>1</CalcButton>
          <CalcButton handleClick={this.addToInput}>2</CalcButton>
          <CalcButton handleClick={this.addToInput}>3</CalcButton>
          <CalcButton handleClick={this.addToInput}>+</CalcButton>
        </div>
        <div className="row">
          <CalcButton handleClick={this.addToInput}>.</CalcButton>
          <CalcButton handleClick={this.addToInput}>0</CalcButton>
          <CalcButton handleClick={() => this.handleEqual()}>=</CalcButton>
          <CalcButton handleClick={this.addToInput}>-</CalcButton>
        </div>
        <div className="row">
          <ClearButton handleClear={() => this.setState({ input: "" })}>
            Clear
          </ClearButton>
        </div>
      </div>
    );
  }
}

export default Calc;
