import { useState } from 'react';

type Props = {};

const numbers = [1, 2, 3, 4, 5];

const InitializeState = (props: Props) => {
  const [state, setState] = useState(() => {
    console.log('init');
    return numbers.reduce((acc, curr) => acc + curr, 0);
  });

  console.log('render');

  // IGNORE THIS CODE BLOCK
  // ****************************************************
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  // ****************************************************

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <h1>Total: ${state}</h1>
    </div>
  );
};

export default InitializeState;
