import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';

type Props = {};

const UpdateState = (props: Props) => {
  const { count, handleDecrement, handleIncrement } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default UpdateState;
