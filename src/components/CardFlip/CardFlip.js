import { useState } from "react";
import styles from "./CardFlip.module.css";
import ReactCardFlip from "react-card-flip";
import { FaGithub, FaLink } from "react-icons/fa";

import { IoReturnUpBackOutline } from "react-icons/io5";

const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipCard, setFlipCard] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  // Replaces current window with the corresponding social media page.
  const goToGithub = () => {
    window.open(props.github, "_blank");
  };

  const currentWindowWidth = window.innerWidth;

  if (currentWindowWidth <= 375) {
    
  } 

  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        containerClassName={styles.container}
      >
        {/* Front Of Card */}
        <div className={styles["card-front"]} onClick={handleFlip}>
          <div className={styles.front}>
            <p className={styles["project-title"]}>{props.title}</p>
          </div>
        </div>
        {/* Back Of Card */}
        <div className={styles["card-back"]}>
          <div className={styles.back}>
            {/* <img className={styles['background-image']} src={props.image} /> */}
            {/* Back Arrow */}
            <div className={styles["back-arrow"]} onClick={handleFlip}>
              <IoReturnUpBackOutline size={25} />
            </div>
            {/* Project Title */}
            <h3 className={styles.title}>{props.title}</h3>
            {/* Project Description */}
            <p className={styles.description}>{props.description}</p>
            {/* Project Links */}
            <div className={styles["links-container"]}>
              <ul className={styles.links}>
                <li className={styles.github} onClick={goToGithub}>
                  <FaGithub size={25} />
                </li>
                <li className={styles.link}>
                  <FaLink size={25} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
};
export default CardFlip;
