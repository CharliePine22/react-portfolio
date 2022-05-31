import styles from "./Contact.module.css";
import { useRef, useState } from "react";
import { FaPhone, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("Submit");

  // Input Refs
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

  // Form Submit 
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setSubmitStatus('Submitting');
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    console.log(name);
    console.log(email);
    console.log(message);

    setSubmitStatus('Submit');
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
              Looking to discuss something further? <br />{" "}
              <strong>Or talk about puppies?</strong>
            </h3>
            <p>
              Go ahead and send a message below and I'll do my best to reply
              soon!
            </p>
          </div>
          <form method="POST" onSubmit={formSubmitHandler}>
            {/* Name */}
            <div className={styles["form-name"]}>
              <input
                ref={nameRef}
                type="text"
                id="name"
                placeholder="Name"
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
                required
              />
            </div>
            <div className={styles.actions}>
              <button type="submit">{submitStatus}</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
