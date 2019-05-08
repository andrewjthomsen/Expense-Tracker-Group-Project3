import React from "react";
import "./style.css";
import Input from "./Input/input";
import { CalcButton, ClearButton, BackButton } from "./Buttons/buttons";
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

  handleBack = () => {
    if (this.state.input !== "") {
      const deletedNumber = this.state.input.slice(
        0,
        this.state.input.length - 1
      );
      this.setState({ input: deletedNumber });
    }
  };

  render(props) {
    return (
      <div className="calc-wrapper">
        <Input input={this.state.input} />
        <div className="calc-row">
          <div className="calc-col-2">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
          <div className="calc-col-1">
            <BackButton handleClick={() => this.handleBack()}>&#60;</BackButton>
          </div>
          <div className="calc-col-1">
            <CalcButton handleClick={this.addToInput}>/</CalcButton>
          </div>
        </div>
        <div className="calc-row">
          <CalcButton handleClick={this.addToInput}>7</CalcButton>
          <CalcButton handleClick={this.addToInput}>8</CalcButton>
          <CalcButton handleClick={this.addToInput}>9</CalcButton>
          <CalcButton handleClick={this.addToInput}>*</CalcButton>
        </div>
        <div className="calc-row">
          <CalcButton handleClick={this.addToInput}>4</CalcButton>
          <CalcButton handleClick={this.addToInput}>5</CalcButton>
          <CalcButton handleClick={this.addToInput}>6</CalcButton>
          <CalcButton handleClick={this.addToInput}>-</CalcButton>
        </div>
        <div className="calc-row">
          <CalcButton handleClick={this.addToInput}>1</CalcButton>
          <CalcButton handleClick={this.addToInput}>2</CalcButton>
          <CalcButton handleClick={this.addToInput}>3</CalcButton>
          <CalcButton handleClick={this.addToInput}>+</CalcButton>
        </div>
        <div className="calc-row">
          <div className="calc-col-1">
            <CalcButton handleClick={this.addToInput}>.</CalcButton>
          </div>
          <div className="calc-col-1">
            <CalcButton handleClick={this.addToInput}>0</CalcButton>
          </div>
          <div className="calc-col-2">
            <CalcButton handleClick={() => this.handleEqual()}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
