import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className={styles.container}>
        <div className={styles["portfolio-description"]}>
          <div className={styles.title}>
            <h3>Portfolio</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
