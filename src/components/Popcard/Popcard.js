import { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import styles from "./Popcard.module.css";

const Popcard = (props) => {
  // Todo: Fix Rank styling (2 and 3 have more space due to number shape)
  return (
    <div className={styles.card} key={props.title}>
      {/* Project Number */}
      <div className={styles.rank}>{props.rank + 1}</div>
      {/* Front of Card */}
      <div className={styles.front}>
        <img className={styles.thumbnail} src={props.image} alt="project-image" />
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.stats}>
          <p className={styles.stack}>Stack</p>
          <div className={styles["stack-items"]}>
            {props.stack.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Back of Card */}
      <div className={styles.back}>
        <div className={styles["project-info"]}>
          <p className={styles.description}>{props.description}</p>
        </div>
        {/* <button>See Full Description</button>{" "} */}
        {/* Either see full descriptions or see more projects or something else*/}
        <div className={styles.actions}>
          <div className={styles.action}>
            <p className={styles["action-title"]}><FaGithub /></p>
          </div>
          <div className={styles.action}>
            <p className={styles["action-title"]}><FaLink /></p>
          </div>
        </div>
      </div>

      <div className={styles.background}>

      </div>
    </div>
  );
};

export default Popcard;
