import styles from "./Portfolio.module.css";
import { FaReact, FaPython } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className={styles.container}>
        <div className={styles["portfolio-content"]}>
          <h3>Portfolio</h3>

          <div className={styles["portfolio-description"]}>
            <p>Here are some of the projects that I've worked on!</p>
          </div>
          <div className={styles.projects}>
            <div className={styles["projects-nav"]}>
              <span className={styles.react}>
                <FaReact size={40} />
              </span>
              <span className={styles.python}>
                <FaPython size={40} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
