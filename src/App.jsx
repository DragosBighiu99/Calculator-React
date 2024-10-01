import "./App.css";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [value, setValue] = useState("");

  const increaseNumber = () => {
    setCurrentNumber(currentNumber + 1);
  };

  const decreaseNumber = () => {
    setCurrentNumber(currentNumber - 1);
  };

  const multiplicationNumber = () => {
    setCurrentNumber(currentNumber * 2);
  };

  const divisionNumber = () => {
    setCurrentNumber(currentNumber / 2);
  };

  const resetNumber = () => {
    setCurrentNumber(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newNumber = parseInt(formData.get("new-number"));

    setCurrentNumber(newNumber);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (newValue !== "" && (newValue < -100 || newValue > 100)) {
      alert("Number should be between -100 and 100");
    }
  };

  return (
    // JSX
    <div>
      {/* event handler */}{" "}
      {/* sau putem si >= 10 ca butonul sa fie disabled nu numai cand e egal cu 10 dar si cand e mai mare*/}
      <button
        className="action-button"
        onClick={increaseNumber}
        disabled={currentNumber === 10 ? true : false}
      >
        {" "}
        Increase{" "}
      </button>
      <button
        onClick={decreaseNumber}
        disabled={currentNumber < 0 ? true : false}
      >
        {" "}
        Decrease{" "}
      </button>
      <button onClick={multiplicationNumber}> Multiplication </button>
      <button onClick={divisionNumber}> Division </button>
      <button onClick={resetNumber}> Reset </button>
      <p className={currentNumber >= 5 ? "green-number" : ""}>
        {" "}
        {currentNumber}{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="new-number"
          onChange={handleInputChange}
          placeholder="Enter a number between -100 and 100"
        />
      </form>
    </div>
  );
};

export default App;
