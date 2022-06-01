import styles from "./Portfolio.module.css";
import { FaReact, FaPython, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { useState } from "react";
import Projects from "./Projects/Projects";

const Portfolio = (props) => {
  // TODO: HAVE TO FIX PYTHON HOVER COLORS
  const [currentLanguage, setCurrentLanguage] = useState("React");

  const currentWindowWidth = window.innerWidth;

  const reactStyles =
    currentLanguage == "React" ? styles["react-active"] : styles.react;
  const pythonStyles =
    currentLanguage == "Python" ? styles["python-active"] : styles.python;
  const htmlStyles =
    currentLanguage == "HTML | CSS | JS"
      ? styles["frontend-active"]
      : styles.frontend;

  const activePythonFill = e => {
    e.target.style.fill = "url(#python-gradient)";
  }

  const normalPythonFill = e => {
    e.target.style.fill = "#A3A9BD";
  }

  return (
    <>
      <svg className={styles['python-fill']} width="0" height="0">
        <linearGradient
          id="python-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="rgba(52,113,162,1)" offset="50%" />
          <stop stopColor="rgba(255,210,62,1)" offset="50%" />
        </linearGradient>
      </svg>
      <main id={props.id} className={styles.container}>
        <div className={styles["portfolio-content"]}>
          <h3>Portfolio</h3>
          <div className={styles["portfolio-description"]}>
            <p>Here are some of the projects that I've worked on!</p>
          </div>
          {/* Projects Card */}
          <div className={styles.projects}>
            {/* Nav Side */}
            <div className={styles["projects-nav"]}>
              {/* React Projects Icon */}
              <span
                className={reactStyles}
                onClick={() => setCurrentLanguage("React")}
              >
                <FaReact size={currentWindowWidth > 1440 ? 55 : 48} />
              </span>

              {/* Python Projects Icon */}
              <span
                className={pythonStyles}
                onClick={() => setCurrentLanguage("Python")}
              >
                <FaPython
                  onMouseOver={activePythonFill}
                  onMouseOut={normalPythonFill}
                  size={currentWindowWidth > 1440 ? 55 : 48}
                  style={{
                    fill:
                      currentLanguage == "Python"
                        ? "url(#python-gradient)"
                        : "#A3A9BD",
                  }}
                />
              </span>

              {/* HTML, CSS, JS Projects Icon */}
              <span
                className={htmlStyles}
                onClick={() => setCurrentLanguage("HTML | CSS | JS")}
              >
                <FaHtml5
                  className={styles.html}
                  size={currentWindowWidth > 1440 ? 45 : 38}
                  style={{
                    color:
                      currentLanguage == "HTML | CSS | JS"
                        ? "#E34F26"
                        : "#A3A9BD",
                  }}
                />{" "}
                <FaCss3
                  className={styles.css}
                  size={currentWindowWidth > 1440 ? 45 : 38}
                  style={{
                    color:
                      currentLanguage == "HTML | CSS | JS"
                        ? "#2965f1"
                        : "#A3A9BD",
                  }}
                />{" "}
                <IoLogoJavascript
                  className={styles.javascript}
                  size={currentWindowWidth > 1440 ? 45 : 38}
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
      </main>
    </>
  );
};

export default Portfolio;
