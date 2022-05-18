import styles from "./Portfolio.module.css";

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
              <div className={styles['projects-nav']}>

              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
