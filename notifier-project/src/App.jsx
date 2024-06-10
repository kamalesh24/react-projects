import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const addVal = () => {
    setCounter(counter+1)
  }

  // Subtract by 4
  const subVal = () => {
    setCounter((prevCounter) => prevCounter-1); // Using Callback(param) becuz multiple setCnt(cnt+1)
    setCounter((prevCounter) => prevCounter-1); // doesn't work due to "patching" of similar ops.
    setCounter((prevCounter) => prevCounter-1); // Callbacks fetch the prev val of the counter and
    setCounter((prevCounter) => prevCounter-1); // returns the value, it cannot patch the ops together
  }

  return (
    <>
      <h1>Counter APP</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addVal}>Add</button> {" "}
      <button onClick={subVal}>Subtract</button>
    </>
  )
}

export default App
