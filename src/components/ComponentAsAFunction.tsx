import useCounter from '../hooks/useCounter';

type Props = {};

const ComponentAsAFunction = (props: Props) => {
  const { count, handleIncrement, handleDecrement } = useCounter();

  const DisplayTitle = () => {
    return (
      <div>
        <h1>Title</h1>
        <p>Paragraph</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Main Component</h1>
      <DisplayTitle />
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default ComponentAsAFunction;
