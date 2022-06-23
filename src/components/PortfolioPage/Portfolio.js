import styles from "./Portfolio.module.css";
// Portfolio Nav Icons
import { FaReact, FaPython, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { useState, useEffect } from "react";

// Imported Project Data
import { projectTitles } from "./ProjectData";

// Carousel Imports
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Component Imports
import FadeInSection from "../Fade/FadeInSection";
import Popcard from "../Popcard/Popcard";

const Portfolio = (props) => {
  // TODO: HAVE TO FIX PYTHON HOVER COLORS
  const [currentLanguage, setCurrentLanguage] = useState("React");
  const [width, setWidth] = useState(window.innerWidth);
  const selectedLanguage = currentLanguage.split(" ")[0].toLowerCase();

  // Styles for Portfolio Nav Icons
  const reactStyles =
    currentLanguage == "React" ? styles["react-active"] : styles.react;
  const pythonStyles =
    currentLanguage == "Python" ? styles["python-active"] : styles.python;
  const htmlStyles =
    currentLanguage == "HTML | CSS | JS"
      ? styles["frontend-active"]
      : styles.frontend;

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width <= 430;

  // Determine if user is on a mobile device and if so, add the carousel effect
  const determineSwiper = () => {
    // If the user is on a mobile device, enable carousel effect
    if (isMobile) {
      return (
        <>
          <Carousel
            className={styles.carousel}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            style={{overflow: 'visible'}}
          >
            {projectTitles[selectedLanguage].map((project, i) => {
              return (
                <Popcard
                  key={project.title}
                  title={project.title}
                  id={`card${i}`}
                  rank={i}
                  description={project.description}
                  image={project.image}
                  github={project.github}
                  live={project.live}
                  stack={project.stack}
                />
              );
            })}
          </Carousel>
        </>
      );
    }
    // Otherwise, display normal styles
    else {
      return projectTitles[selectedLanguage].map((project, i) => {
        return (
          <Popcard
            key={project.title}
            title={project.title}
            id={`card${i}`}
            rank={i}
            description={project.description}
            image={project.image}
            github={project.github}
            live={project.live}
            stack={project.stack}
          />
        );
      });
    }
  };

  return (
    <>
      <main id={props.id} className={styles.container}>
        <div className={styles["portfolio-content"]}>
          <h3>Portfolio</h3>
          <FadeInSection style={{ width: "100%" }}>
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
                  <FaReact
                    size={
                      width >= 1440
                        ? 50
                        : width <= 375
                        ? 35
                        : 48
                    }
                  />
                </span>

                {/* Python Projects Icon */}
                <span
                  className={pythonStyles}
                  onClick={() => setCurrentLanguage("Python")}
                >
                  <FaPython
                    size={
                      width >= 1440
                        ? 50
                        : width <= 375
                        ? 35
                        : 48
                    }
                  />
                </span>

                {/* HTML, CSS, JS Projects Icon */}
                <span
                  className={htmlStyles}
                  onClick={() => setCurrentLanguage("HTML | CSS | JS")}
                >
                  <FaHtml5
                    className={styles.html}
                    size={
                      width >= 1440
                        ? 42
                        : width <= 375
                        ? 30
                        : 33
                    }
                    style={{
                      color:
                        currentLanguage == "HTML | CSS | JS"
                          ? "#E34F26"
                          : "#A3A9BD",
                    }}
                  />{" "}
                  <FaCss3
                    className={styles.css}
                    size={
                      width >= 1440
                        ? 42
                        : width <= 375
                        ? 30
                        : 33
                    }
                    style={{
                      color:
                        currentLanguage == "HTML | CSS | JS"
                          ? "#2965f1"
                          : "#A3A9BD",
                    }}
                  />{" "}
                  <IoLogoJavascript
                    className={styles.javascript}
                    size={
                      width >= 1440
                        ? 42
                        : width <= 375
                        ? 30
                        : 33
                    }
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
                {/* Popcard for each project */}
                <div className={styles["current-projects"]}>
                  {determineSwiper()}
                </div>
              </div>
            </div>
            {/* <div className={styles.more}>
              <button>More Details</button>
            </div> */}
          </FadeInSection>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
