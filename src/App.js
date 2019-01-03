import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NumbersSelector from "./NumbersSelector";
import { Addition, Multiplication, CountNumbers } from "./Operations";

class App extends Component {
  state = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    selectedNumbersIndexes: [],
    numberOfNumbers: 5
  };

  handleSelectColor = (selectedNumberIndex, number) => {
    const selectedNumbersIndexes = [...this.state.selectedNumbersIndexes];
    selectedNumbersIndexes[selectedNumberIndex] = number;
    this.setState({ selectedNumbersIndexes });
  };
  render() {
    const {
      state: { numbers, selectedNumbersIndexes, numberOfNumbers },
      handleSelectColor
    } = this;
    return (
      <>
        <NumbersSelector
          numberOfNumbers={numberOfNumbers}
          numbers={numbers}
          selectedNumbersIndexes={selectedNumbersIndexes}
          handleSelectColor={handleSelectColor}
        />
        <p>
          Addition:{" "}
          <Addition
            numbers={numbers}
            selectedNumbersIndexes={selectedNumbersIndexes}
          />
        </p>
        <p>
          Multiplication:{" "}
          <Multiplication
            numbers={numbers}
            selectedNumbersIndexes={selectedNumbersIndexes}
          />
        </p>
        <p>
          Numbers:{" "}
          <CountNumbers selectedNumbersIndexes={selectedNumbersIndexes} />
        </p>
      </>
    );
  }
}

export default App;
