import { useMemo } from 'react';

type Props = {};

const numbers = [1, 2, 3, 4, 5];

const Memoization = (props: Readonly<Props>) => {
  const total = useMemo(
    () => numbers.reduce((acc, curr) => acc + curr, 0),
    [numbers]
  );

  return <div>Total:${total}</div>;
};

export default Memoization;
