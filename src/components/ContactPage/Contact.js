import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import ReactTypingEffect from "react-typing-effect";
import { useRef, useState } from "react";
import { FaPhone, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FadeInSection from "../Fade/FadeInSection";
import Modal from "../Modal/Modal";

const Contact = (props) => {
  // Message Form States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  // Modal Display State
  const [show, setShow] = useState(false);

  // Used for submitting EmailJS Form
  const formRef = useRef();

  // Input Refs used for resetting values
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // List of dictionaries containing contact data to be mapped out
  const contactIcons = [
    { name: "Phone", icon: <FaPhone size={26} />, content: "224-944-3640" },
    {
      name: "Email",
      icon: <MdEmail size={30} />,
      content: "charlespine22@gmail.com",
    },
    { name: "Discord", icon: <FaDiscord size={30} />, content: "EpiqAGL#5924" },
  ];

  // Submit Button Styles
  const submitButtonStyles = isSubmitting
    ? styles["submit-loading"]
    : !isSubmitting && !hasError && statusMessage !== ""
    ? `${styles.submit} ${styles.success}`
    : !isSubmitting && hasError && statusMessage !== ""
    ? `${styles.submit} ${styles.error}`
    : styles.submit;

  // Status Message Styles
  const statusMessageStyles =
    statusMessage !== "" && !isSubmitting && hasError
      ? `${styles.status} ${styles["status-error"]}`
      : statusMessage !== "" && !isSubmitting && !hasError
      ? `${styles.status} ${styles["status-success"]}`
      : styles.status;

  // If the user has already submitted a message and they click an input, remove the message and styles
  const inputFocusHandler = (e) => {
    if (statusMessage !== "" && isSubmitting == false) {
      setStatusMessage("");
    }
    e.target.style.borderColor = 'rgba(169, 175, 195, 0.5)';
  };

  // Form Submit
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let flag = false;

    // If any fields are left blank or not formatted correctly, cancel send function and display error
    if (nameRef.current.value.trim() == "") {
      setStatusMessage('Please fill out all fields!');
      nameRef.current.style.borderColor = 'red';
    }
    if (emailRef.current.value.trim() == "" || !emailRef.current.value.includes('@')) {
      setStatusMessage("Please use the correct email format.")
      emailRef.current.style.borderColor = 'red';
    }
    if (messageRef.current.value.trim() == "") {
      setStatusMessage('Please fill out all fields!');
      messageRef.current.style.borderColor = 'red';
    } 

    // If the message is blank, it means there are no erorrs, so continue with sending message
    if(statusMessage == "") {
      flag = true;
    }


    if (flag) {
      // EmailJS SDK Sent Email
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
          process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStatusMessage("Message Sent!");
            setHasError(false);
          },
          (error) => {
            setStatusMessage("An error occured, please try again!");
            setHasError(true);
          }
        );

      setTimeout(() => {
        setIsSubmitting(false);
        // Reset Input Values
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      }, 1500);
    } else {
      setIsSubmitting(false);
      setHasError(true);
    }
  };

  return (
    <main id={props.id} className={styles.contact}>
      <div className={styles.container}>
        {/* Contact Page Header */}

        <div className={styles.title}>
          <h3>Contact</h3>
          <p>
            Looking to get in touch? Reach out using any of the methods below!
          </p>
        </div>
        <FadeInSection>
          {/* Phone, Email, and Discord Contact List */}
          <div className={styles["contact-methods-container"]}>
            <ul className={styles["contact-methods-list"]}>
              {contactIcons.map((icon) => (
                <li key={icon.name} className={styles["contact-item"]}>
                  <div className={styles.top}>
                    {icon.icon}
                    <h3>{icon.name}</h3>
                  </div>
                  <div className={styles.bottom}>
                    <p>{icon.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Message Form */}
          <div className={styles["form-container"]}>
            <div className={styles["form-title"]}>
              <h3>
                Looking to discuss something further? <br /> Or talk about{" "}
                <strong>
                  <i>
                    {" "}
                    <ReactTypingEffect
                      text={["work?", "books?", "puppies?"]}
                      typingDelay={0}
                      eraseDelay={2500}
                      speed={350}
                    />
                  </i>
                </strong>
              </h3>
              <p>Send a message below and I'll do my best to reply soon!</p>
            </div>
            {/* Form */}
            <form method="POST" ref={formRef}>
              {/* Name */}
              <div className={styles["form-name"]}>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onFocus={inputFocusHandler}
                  required
                />
              </div>
              {/* Email */}
              <div className={styles["form-email"]}>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  placeholder="Email"
                  onFocus={inputFocusHandler}
                  name="email"
                  required
                />
              </div>
              {/* Message */}
              <div className={styles["form-message"]}>
                <input
                  ref={messageRef}
                  type="textarera"
                  id="message"
                  placeholder="Message"
                  onFocus={inputFocusHandler}
                  name="message"
                  required
                />
              </div>
              {/* Submit Button and Status Container */}
              <div className={styles.actions}>
                {/* Button */}
                <button
                  onClick={() => setShow(true)}
                  type="button"
                  className={submitButtonStyles}
                  onMouseOver={() => setStatusMessage("")}
                >
                  {isSubmitting ? "Submitting" : "Submit"}
                </button>
                <div className={statusMessageStyles}>
                  {/* Status */}
                  <p>{statusMessage}</p>
                </div>
                <Modal
                  title="Confirm Submit"
                  onSubmit={formSubmitHandler}
                  onClose={() => setShow(false)}
                  show={show}
                >
                  <p>Are you sure you want to send your message?</p>
                </Modal>
              </div>
            </form>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default Contact;
