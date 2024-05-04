import { MouseEventHandler } from 'react';

const numbers = [1, 2, 3, 4, 5];

type Props = {};

const CurringOnClick = (props: Props) => {
  const handleClick =
    (n: number): MouseEventHandler =>
    () => {
      console.log(n);
    };
  return (
    <ul>
      {numbers.map((n) => (
        <li key={n}>
          <button onClick={handleClick(n)}>{n}</button>
        </li>
      ))}
    </ul>
  );
};

export default CurringOnClick;
