import "./App.css";
import CalculatorFront from "./components/CalculatorFront";

function App() {
  return (
    <>
      <div className="p-8 text-black bg-white bg-opacity-50 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
        <h1>React Calculator</h1>
        <CalculatorFront />
      </div>
    </>
  );
}

export default App;
