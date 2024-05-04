const numbers = [1, 2, 3, 4, 5];

type Props = {};

const ComponentKey = (props: Props) => {
  return (
    <ul>
      {numbers.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
  );
};

export default ComponentKey;
