import React from "react";

const getSelectedNumbers = (numbers, numbersIndexes) => {
  return numbersIndexes.map(i => numbers[i]);
};

export const Addition = ({ numbers, selectedNumbersIndexes }) => {
  return getSelectedNumbers(numbers, selectedNumbersIndexes).reduce(
    (acc, v) => acc + v,
    0
  );
};

export const Multiplication = ({ numbers, selectedNumbersIndexes }) => {
  return selectedNumbersIndexes.length > 0
    ? getSelectedNumbers(numbers, selectedNumbersIndexes).reduce(
        (acc, v) => acc * v
      )
    : getSelectedNumbers(numbers, selectedNumbersIndexes).reduce(
        (acc, v) => acc * v,
        0
      );
};

export const CountNumbers = ({ selectedNumbersIndexes }) => {
  return selectedNumbersIndexes.length;
};
