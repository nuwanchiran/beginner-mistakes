import styles from './Modal.module.css';

type Props = {
  children: React.ReactNode;
  closeModal: () => void;
};

const Modal = (props: Props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <button className={styles.close} onClick={props.closeModal}>
          &times;
        </button>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
