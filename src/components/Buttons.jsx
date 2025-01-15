/* eslint-disable react/prop-types */
import "./Button.css";
import { useState } from "react";

export default function Button(props) {
  const {
    details,
    display,
    setDisplay,
    memory,
    setMemory,
    prevDisplay,
    setPrevDisplay,
  } = props;

  const [isEqual, setIsEqual] = useState(false);
  const operatorsCheck = /[+\u00d7\u00f7-]/;
  const decimalCheck = /[.]/;

  const handleButtonClick = (event) => {
    const targetType = event.target.dataset.type;
    const targetValue = event.target.dataset.value;
    const targetText = event.target.dataset.text;

    console.log("Clicked button type:", targetType);
    console.log("Clicked button value:", targetValue);
    console.log("Clicked button text:", targetText);

    // controls the memory buttons
    if (targetType === "memory") {
      memoryConditions(targetValue);
    }

    // controls the equals button
    if (targetValue === "Equal") {
      if (isEqual) {
        setDisplay("0");
        setPrevDisplay("0");
        setIsEqual(false);
      } else {
        equals(targetValue);
      }
    }

    // controls the plusminus button
    if (targetValue === "+/-") {
      console.log("plusminus");
      let displayNum;
      let displayString;
      if (operatorsCheck.test.display) {
        displayString = display.slice(0, -1);
        console.log(displayString);
        displayNum = Number(displayString);
      } else {
        displayNum = Number(display);
      }

      if (displayNum > 0) {
        console.log(display);
        setDisplay("-" + display);
        console.log(display);
      } else if (displayNum < 0) {
        displayString = display.slice(1);
        setDisplay(displayString);
      }
    }

    if (decimalCheck.test(targetText) && !decimalCheck.test(display)) {
      setDisplay(display + targetText);
    }

    // const -/+ controls the minus button
    if (display[0] === "-") {
      console.log("minus");
      const newDisplay = display.slice(1);
      if (
        operatorsCheck.test(targetText) &&
        !operatorsCheck.test(newDisplay) &&
        !operatorsCheck.test(prevDisplay.at(-1)) &&
        targetText !== "+/-" &&
        targetText !== "M-" &&
        targetText !== "M+"
      ) {
        console.log(targetText);
        const combine = display.concat(" ").concat(targetText);
        setPrevDisplay("");
        setPrevDisplay(combine);
        setDisplay("");
      }
    }

    // controls the operates in operatorsCheck regex:
    if (
      operatorsCheck.test(targetText) &&
      !operatorsCheck.test(display) &&
      !operatorsCheck.test(prevDisplay.at(-1)) &&
      targetText !== "+/-" &&
      targetText !== "M-" &&
      targetText !== "M+"
    ) {
      console.log(targetText);
      const combine = display.concat(" ").concat(targetText);
      setPrevDisplay("");
      setPrevDisplay(combine);
      setDisplay("");
    }

    // if the button type is "clear", call the clear function
    if (targetType === "clear") {
      clear(targetValue);
    }

    // if the button type is "number", call the number function
    if (targetType === "number") {
      if (display.length === 1 && display === "0") {
        setDisplay(" ");
        setDisplay(targetValue);
      } else if (isEqual) {
        setDisplay(" ");
        setPrevDisplay("0");
        setIsEqual(false);
        setDisplay(targetValue);
      } else {
        setDisplay(display + targetValue);
      }
    }

    // controls the square root button
    if (targetValue === "Square Root") {
      if (display.length === 1 && display === "0") {
        setDisplay(" ");
        setDisplay(targetText);
      }
    }

    // controls the percent button
    if (targetValue === "Percent") {
      let newDisplay;
      let displayNum;
      if (display[0] === "-") {
        newDisplay = display.slice(1);
        displayNum = Number(newDisplay);
        displayNum = displayNum / 100;
        newDisplay = displayNum.toString();
        setDisplay("-" + newDisplay);
      } else {
        displayNum = Number(display);
        displayNum = displayNum / 100;
        newDisplay = displayNum.toString();
        setDisplay(newDisplay);
      }
    }
  }; // end of handleButtonClick

  // For All Clear and Clear buttons
  function clear(value) {
    if (value === "All Clear") {
      setDisplay("0");
      setPrevDisplay("0");
      setMemory(0);
    } else if (value === "Clear" && display !== "0") {
      setDisplay(display.slice(0, -1));
    }
  }

  function memoryConditions(typeValue) {
    if (typeValue === "Memory Save") {
      setMemory(Number(display));
    } else if (typeValue === "Memory Recall") {
      setDisplay(memory);
    } else if (typeValue === "Memory Clear") {
      setMemory(0);
    } else if (typeValue === "Memory Addition") {
      setMemory(memory + Number(display));
    } else if (typeValue === "Memory Subtract") {
      setMemory(memory - Number(display));
    }
  }

  function equals() {
    let displayNum;
    let prevDisplayNum;
    let sum;
    if (display[0] === "\u221a") {
      displayNum = Number(display.slice(1));
      console.log(displayNum);
      sum = Math.sqrt(displayNum);
    } else if (prevDisplay.at(-1) === "+") {
      prevDisplayNum = Number(prevDisplay.slice(0, -1));
      displayNum = Number(display);
      sum = prevDisplayNum + displayNum;
    } else if (prevDisplay.at(-1) === "-") {
      prevDisplayNum = Number(prevDisplay.slice(0, -1));
      displayNum = Number(display);
      sum = prevDisplayNum - displayNum;
    } else if (prevDisplay.at(-1) === "\u00d7") {
      // Multiply
      prevDisplayNum = Number(prevDisplay.slice(0, -1));
      displayNum = Number(display);
      sum = prevDisplayNum * displayNum;
    } else if (prevDisplay.at(-1) === "\u00f7") {
      // Divide
      prevDisplayNum = Number(prevDisplay.slice(0, -1));
      displayNum = Number(display);
      if (displayNum === 0) {
        sum = "Error Can't divide by Zero";
      } else {
        sum = prevDisplayNum / displayNum;
      }
    }
    const newPrevDisplay = prevDisplay + " " + display;
    setPrevDisplay(newPrevDisplay);
    setDisplay(sum);
    setIsEqual(true);
  }

  const allButtons = details.map((detail) => (
    <button

      onClick={handleButtonClick}
      type={detail.type}
      value={detail.value}
      data-type={detail.type}
      data-value={detail.value}
      data-text={detail.text}
      key={detail.id}
    >
      {detail.text}
    </button>
  ));

  return <>{allButtons}</>;
}
