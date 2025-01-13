import { calculatorButtons } from "../assets/calculator-bonus-03-button-data";
import { useState } from "react";
import Button from "./Button";

export default function CalculatorFront() {
  const [display, setDisplay] = useState(0);
  const calculatorButtonsDetails = calculatorButtons;
  console.log(calculatorButtonsDetails.length);

  return (
    <div>
      <h2>{display}</h2>
      <div>
        <Button value={display} details={calculatorButtonsDetails[0]} />
        <Button details={calculatorButtonsDetails[1]} />
      </div>
      <div>
        <Button details={calculatorButtonsDetails[2]} />
        <Button details={calculatorButtonsDetails[3]} />
        <Button details={calculatorButtonsDetails[4]} />
        <Button details={calculatorButtonsDetails[5]} />
        <Button details={calculatorButtonsDetails[6]} />
      </div>
      <div>
        <Button details={calculatorButtonsDetails[7]} />
        <Button details={calculatorButtonsDetails[8]} />
        <Button details={calculatorButtonsDetails[9]} />
        <Button details={calculatorButtonsDetails[10]} />
        <Button details={calculatorButtonsDetails[11]} />
        <Button details={calculatorButtonsDetails[12]} />
        <Button details={calculatorButtonsDetails[13]} />
        <Button details={calculatorButtonsDetails[14]} />
        <Button details={calculatorButtonsDetails[15]} />
        <Button details={calculatorButtonsDetails[16]} />
        <Button details={calculatorButtonsDetails[17]} />
      </div>
      <div>
        <Button details={calculatorButtonsDetails[18]} />
        <Button details={calculatorButtonsDetails[19]} />
        <Button details={calculatorButtonsDetails[20]} />
        <Button details={calculatorButtonsDetails[21]} />
        <Button details={calculatorButtonsDetails[22]} />
        <Button details={calculatorButtonsDetails[23]} />
        <Button details={calculatorButtonsDetails[24]} />
      </div>
      <Button details={calculatorButtonsDetails[25]} />
    </div>
  );
}
