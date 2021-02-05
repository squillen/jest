import { useState } from 'react';
import './App.css';;

function App() {
  const [count, setCounter] = useState(0);

  const handleDecrement = () => {
    if (count > 0) setCounter(count - 1);
  }
  return (
    <div data-test="component__app" className="App">
      <div className="counter">
        <span data-test="counter__text" className="counter__text">
          The value of the count is&nbsp;
          <span data-test="counter__count" className="counter__count">{count}</span>.
        </span>
        <button
          data-test="counter__inc_btn"
          className="counter__btn"
          type="button"
          onClick={() => setCounter(count + 1)}
        >
          increment
        </button>
        <button
          data-test="counter__dec_btn"
          className="counter__btn"
          type="button"
          onClick={handleDecrement}
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
