const arr = ['x', 'y', 'z', 'p', 'q'];

type Props = {};

const ComponentKey = (props: Props) => {
  return (
    <ul>
      {arr.map((value, index) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
};

export default ComponentKey;
