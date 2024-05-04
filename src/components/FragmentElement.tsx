import { Fragment } from 'react';

const numbers = [1, 2, 3, 4, 5];

type Props = {};

const FragmentElement = (props: Props) => {
  return (
    <>
      {numbers.map((number) => (
        <Fragment key={number}>
          <h1>{number}</h1>
          <h1>{number + 1}</h1>
        </Fragment>
      ))}
    </>
  );
};

export default FragmentElement;
