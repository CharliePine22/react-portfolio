import favicon from "../../assets/images/favicon.ico";
import styles from "./Landing.module.css";

const Landing = (props) => {
  return (
    <>
      <div className={styles['landing-container']}>
        <div className={styles["landing-left"]} />
        <img className={styles.icon} src={favicon} />
        <div className={styles["landing-right"]} />
      </div>
    </>
  );
};

export default Landing;
