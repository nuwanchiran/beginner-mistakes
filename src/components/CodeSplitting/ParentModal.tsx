import { useState } from 'react';
import Modal from './Modal';

type Props = {};

const ParentModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <Modal closeModal={() => setIsOpen(false)}>
          <div>hello world</div>
        </Modal>
      )}
    </>
  );
};

export default ParentModal;
