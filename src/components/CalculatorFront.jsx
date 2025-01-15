import { calculatorButtonsId } from "../assets/calculator-bonus-03-button-data";
import { useState } from "react";
import Button from "./Buttons";

export default function CalculatorFront() {
  const [display, setDisplay] = useState("0");
  const [prevDisplay, setPrevDisplay] = useState("0");
  const [memory, setMemory] = useState(0);
  const calculatorButtonsDetails = calculatorButtonsId;
  console.log(calculatorButtonsDetails.length);

  return (
    <>
      <div className="flex justify-between">
        <p className="p-2 pl-2 text-m"> Memory: {memory}</p>
        <p className="p-2 pr-2 text-m">{prevDisplay}</p>
      </div>
      <h2 className="p-4 mb-4 text-lg font-bold text-right border-4 border-solid rounded-lg m gray-400 w-92">
        {display}
      </h2>
      <div className="grid grid-cols-6 grid-rows-5 gap-4">
        <Button
          memory={memory}
          setMemory={setMemory}
          prevDisplay={prevDisplay}
          setPrevDisplay={setPrevDisplay}
          display={display}
          setDisplay={setDisplay}
          details={calculatorButtonsDetails}
        />
      </div>
    </>
  );
}
