import React, { Suspense, useState } from 'react';

const DynamicModal = React.lazy(() => import('./Modal'));

type Props = {};

const ParentModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Suspense fallback={'Loading'}>
        {isOpen && (
          <DynamicModal closeModal={() => setIsOpen(false)}>
            <div>hello world</div>
          </DynamicModal>
        )}
      </Suspense>
    </>
  );
};

export default ParentModal;
