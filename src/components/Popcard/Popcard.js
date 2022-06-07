import { FaGithub, FaLink } from "react-icons/fa";
import styles from "./Popcard.module.css";

const Popcard = (props) => {
  // Replaces current window with the corresponding social media page.
  const goToGithub = () => {
    window.open(props.github, "_blank");
  };

  return (
    <div className={styles.card} key={props.title}>
      {/* Project Number */}
      <div className={styles.rank}>
        <span>{props.rank + 1}</span>
      </div>
      {/* Front of Card */}
      <div className={styles.front}>
        <img
          className={styles.thumbnail}
          src={props.image}
          alt="thumbnail of current project"
        />
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.stats}>
          <p className={styles.stack}>Stack:</p>
          <div className={styles["stack-items"]}>
            {props.stack.map((item, i) => (
              <img
                src={item}
                key={i}
                alt="thumbnail icons of tools used in app"
              />
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
          <div className={styles.action} onClick={goToGithub}>
            <FaGithub size={22} />
          </div>
          {props.live !== "" && (
            <div className={styles.action}>
              <FaLink size={22} />
            </div>
          )}
        </div>
      </div>

      <div className={styles.background}></div>
    </div>
  );
};

export default Popcard;
