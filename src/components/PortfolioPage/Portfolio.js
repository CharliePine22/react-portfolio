import styles from "./Portfolio.module.css";
import { FaReact, FaPython, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { useState } from "react";
import Projects from "./Projects/Projects";

const Portfolio = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState("React");

  const reactStyles =
    currentLanguage == "React" ? styles["react-active"] : styles.react;
  const pythonStyles =
    currentLanguage == "Python" ? styles["python-active"] : styles.python;
  const htmlStyles =
    currentLanguage == "HTML | CSS | JS"
      ? styles["html-active"]
      : styles.frontend;

  return (
    <>
      <div id={props.id} className={styles.container}>
        <div className={styles["portfolio-content"]}>
          <h3>Portfolio</h3>
          <div className={styles["portfolio-description"]}>
            <p>Here are some of the projects that I've worked on!</p>
          </div>
          {/* Projects Card */}
          <div className={styles.projects}>
            {/* Left Side */}
            <div className={styles["projects-nav"]}>
              <span
                className={reactStyles}
                onClick={() => setCurrentLanguage("React")}
              >
                <FaReact size={40} />
              </span>
              <span
                className={pythonStyles}
                onClick={() => setCurrentLanguage("Python")}
              >
                <FaPython size={40} />
              </span>
              <span
                className={htmlStyles}
                onClick={() => setCurrentLanguage("HTML | CSS | JS")}
              >
                <FaHtml5
                  className={styles.html}
                  size={30}
                  style={{
                    color:
                      currentLanguage == "HTML | CSS | JS"
                        ? "#E34F26"
                        : "#A3A9BD",
                  }}
                />{" "}
                <FaCss3
                  className={styles.css}
                  size={30}
                  style={{
                    color:
                      currentLanguage == "HTML | CSS | JS"
                        ? "#2965f1"
                        : "#A3A9BD",
                  }}
                />{" "}
                <IoLogoJavascript
                  className={styles.javascript}
                  size={30}
                  style={{
                    color:
                      currentLanguage == "HTML | CSS | JS"
                        ? "#F7DF1E"
                        : "#A3A9BD",
                  }}
                />
              </span>
            </div>
            {/* Right Side */}
            <div className={styles["projects-container"]}>
              <div className={styles["language-title"]}>
                <h3>{currentLanguage}</h3>
              </div>
              <div className={styles["current-projects"]}>
                <Projects currentLanguage={currentLanguage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
