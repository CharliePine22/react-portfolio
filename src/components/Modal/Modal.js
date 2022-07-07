import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { CSSTransition } from 'react-transition-group';

const Modal = (props) => {
  // Timeout to allow for modal fade out animation
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Submit form with details from previous submission
  const submitFormHandler = (e) => {
    props.onSubmit(e);
    props.onClose();
  };

  // Escape Key Press Function
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  // Listen for escape key press to close modal
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  // Modal Styles for Fade Animations
  const modalStyles = props.show ? styles.modal : styles.modalHidden;
  const modalContentStyles = props.show
    ? styles.modalContent
    : styles.modalContentHidden;

  return createPortal(
    <>
      <div className={modalStyles} id='modal'>
        <div className={modalContentStyles} id='modalContent'>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{props.title}</h5>
            <hr className={styles.border} />
          </div>
          <div className={styles.modalBody}>{props.children}</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.submitBtn} onClick={submitFormHandler}>
                Send
              </button>
              <button className={styles.cancelBtn} onClick={props.onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('root')
  );
};

export default Modal;
