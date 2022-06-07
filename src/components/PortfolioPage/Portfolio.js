import styles from "./Portfolio.module.css";
// Portfolio Nav Icons
import { FaReact, FaPython, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { useState } from "react";
// Imported Project Data
import { projectTitles } from "./ProjectData";
// Swiper Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import FadeInSection from "../Fade/FadeInSection";
import Popcard from "../Popcard/Popcard";

const Portfolio = (props) => {
  // TODO: HAVE TO FIX PYTHON HOVER COLORS
  const [currentLanguage, setCurrentLanguage] = useState("React");
  const currentWindowWidth = window.innerWidth;
  const selectedLanguage = currentLanguage.split(" ")[0].toLowerCase();

  // Styles for Portfolio Nav Icons
  const reactStyles =
    currentLanguage == "React" ? styles["react-active"] : styles.react;
  const pythonStyles =
    currentLanguage == "Python" ? styles["python-fill"] : styles.python;
  const htmlStyles =
    currentLanguage == "HTML | CSS | JS"
      ? styles["frontend-active"]
      : styles.frontend;

  // Active Hover Effect for Python
  const activePythonFill = (e) => {
    e.target.style.fill = "url(#python-gradient)";
  };

  // Normal Python Color
  const normalPythonFill = (e) => {
    e.target.style.fill = "#A3A9BD";
  };

  console.log(window.innerWidth);

  // Determine if user is on a mobile device and if so, add the carousel effect
  const determineSwiper = () => {
    // If the user is on a mobile device, enable carousel effect
    if (window.innerWidth <= 425) {
      return (
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {projectTitles[selectedLanguage].map((project, i) => {
              return (
                <>
                  <SwiperSlide>
                    <Popcard
                      key={i}
                      title={project.title}
                      id={`card${i}`}
                      rank={i}
                      description={project.description}
                      image={project.image}
                      github={project.github}
                      live={project.live}
                      stack={project.stack}
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </>
      );
    }
    // Otherwise, display normal styles
    else {
      projectTitles[selectedLanguage].map((project, i) => {
        return (
          <Popcard
            key={i}
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
      <svg className={styles["python-fill"]} width="0" height="0">
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
          <FadeInSection>
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
                      currentWindowWidth >= 1440
                        ? 50
                        : currentWindowWidth <= 375
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
                    onMouseOver={activePythonFill}
                    onMouseOut={normalPythonFill}
                    size={
                      currentWindowWidth >= 1440
                        ? 50
                        : currentWindowWidth <= 375
                        ? 35
                        : 48
                    }
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
                    size={
                      currentWindowWidth >= 1440
                        ? 42
                        : currentWindowWidth <= 375
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
                      currentWindowWidth >= 1440
                        ? 42
                        : currentWindowWidth <= 375
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
                      currentWindowWidth >= 1440
                        ? 42
                        : currentWindowWidth <= 375
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
                  {projectTitles[selectedLanguage].map((project, i) => {
                    return (
                      <Popcard
                        key={i}
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
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
