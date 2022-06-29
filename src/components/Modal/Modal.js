import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Modal = (props) => {
  // Submit form with details from previous submission
  const submitFormHandler = (e) => {
    props.onSubmit(e);
    props.onClose();
  };

  // Close modal on escape key click
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  // Listen for click outside of modal content and close the modal
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  // If there is no modal initiator, dont show.
  if (!props.show) {
    return null;
  }

  return createPortal(
    <>
      <div className={styles.modal} id="modal">
        <div className={styles.modalContent} id="modalContent">
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{props.title}</h5>
          </div>
          <hr className={styles.border} />
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
    document.getElementById("root")
  );
};

export default Modal;
