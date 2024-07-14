import { useState } from 'react';
import useCounter from '../hooks/useCounter';

type Props = {};

const numbers = [1, 2, 3, 4, 5];

const InitializeState = (props: Props) => {
  const [state, setState] = useState(
    numbers.reduce((acc, curr) => acc + curr, 0)
  );

  console.log('render');

  const { count, handleDecrement, handleIncrement } = useCounter();
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
