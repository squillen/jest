import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCounter] = useState(0)
  return (
    <div data-test="component__app" className="App">
      <div className="counter">
        <div className="counter__text">{`The counter is at ${count}`}</div>
        <button className="counter__btn" type="button" onClick={() => setCounter(count + 1)}>increment</button>
      </div>
    </div>
  );
}

export default App;
