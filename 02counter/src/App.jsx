import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    setCounter(counter + 1);
    console.log("1st update", counter);

    setCounter(counter + 2);
    console.log("2nd update", counter);

    setCounter(counter + 7);

    console.log("3rd update", counter);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button>add value</button>
    </>
  );
}

export default App;
