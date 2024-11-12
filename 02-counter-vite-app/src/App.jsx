import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 15;

  let addValue = () => {
    setCounter(counter + 1);
  };

  let removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React Learn with Practise {counter}</h1>
      <h2>React Counter App: {counter} </h2>
      <button onClick={addValue}>Add Value </button>
      <button onClick={removeValue}>Remove Value</button>
      <footer>App Close: {counter} </footer>
    </>
  );
}

export default App;
