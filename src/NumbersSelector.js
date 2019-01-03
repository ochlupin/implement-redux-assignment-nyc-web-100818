import React from "react";

const NumbersList = ({
  numbers,
  numbersListIndex,
  selectedNumbersIndexes,
  handleSelectColor
}) => {
  const selectedNumber = selectedNumbersIndexes[numbersListIndex];
  return numbers.map(n => {
    const clickHandlerProp = {
      onClick: () => handleSelectColor(numbersListIndex, n)
    };
    return selectedNumber === n ? (
      <span key={n} {...clickHandlerProp}>
        <span style={{ color: "red" }}>{n}</span>{" "}
      </span>
    ) : (
      <span key={n} {...clickHandlerProp}>
        {n}{" "}
      </span>
    );
  });
};

const NumbersSelector = ({
  numbers,
  selectedNumbersIndexes,
  handleSelectColor,
  numberOfNumbers
}) => {
  const ns = Array.apply(null, { length: numberOfNumbers });
  return (
    <>
      {ns.map((e, i) => (
        <p>
          <NumbersList
            numbersListIndex={i}
            numbers={numbers}
            selectedNumbersIndexes={selectedNumbersIndexes}
            handleSelectColor={handleSelectColor}
          />
        </p>
      ))}
    </>
  );
};

export default NumbersSelector;
