import "../css/Apps/Calculator.css";
import BtnCalculator from "./components/BtnCalculator";
import Header from "../components/Header";
import CalculatorScreen from "./components/CalculatorScreen";

function Calculator() {
  return (
    <>
      <Header />

      <div className="calculatorMainContainer">
        <div className="calculatorContainer">
          <CalculatorScreen />
          <div className="row">
            <BtnCalculator>7</BtnCalculator>
            <BtnCalculator>8</BtnCalculator>
            <BtnCalculator>9</BtnCalculator>
            <BtnCalculator>/</BtnCalculator>
          </div>
          <div className="row">
            <BtnCalculator>4</BtnCalculator>
            <BtnCalculator>5</BtnCalculator>
            <BtnCalculator>6</BtnCalculator>
            <BtnCalculator>*</BtnCalculator>
          </div>
          <div className="row">
            <BtnCalculator>1</BtnCalculator>
            <BtnCalculator>2</BtnCalculator>
            <BtnCalculator>3</BtnCalculator>
            <BtnCalculator>-</BtnCalculator>
          </div>
          <div className="row">
            <BtnCalculator>.</BtnCalculator>
            <BtnCalculator>0</BtnCalculator>
            <BtnCalculator>=</BtnCalculator>
            <BtnCalculator>+</BtnCalculator>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
