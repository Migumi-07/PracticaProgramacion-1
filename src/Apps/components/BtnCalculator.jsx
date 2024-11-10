import "../../css/Apps/BtnCalculator.css";
function BtnCalculator(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };
  return (
    <>
      <div
        className={`btnContainer ${
          isOperator(props.children) ? "operator" : null
        }`}
      >
        {props.children}
      </div>
    </>
  );
}

export default BtnCalculator;
