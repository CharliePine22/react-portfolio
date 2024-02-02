import styles from './Portfolio.module.css';
import React, { useState, useEffect } from 'react';

// Imported Project Data
import { projectTitles } from './ProjectData';

// Component Imports
import FadeInSection from '../Fade/FadeInSection';

const PortfolioNew = (props) => {
  // TODO: HAVE TO FIX PYTHON HOVER COLORS
  const [currentLanguage, setCurrentLanguage] = useState('React');
  const [width, setWidth] = useState(window.innerWidth);
  const selectedLanguage = currentLanguage.split(' ')[0].toLowerCase();

  const goToGithub = (project) => {
    window.open(project, '_blank');
  };

  const goToWebsite = (project) => {
    window.open(project, '_blank');
  };

  // Watch for the width of the screen to determine mobile carousel effect
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = width <= 600;

  return (
    <>
      <main id={props.id} className={styles.container}>
        <div className={styles['portfolio-content']}>
          <FadeInSection style={{ width: '100%' }}>
            <h3>Portfolio</h3>
            <div className={styles['portfolio-description']}>
              <p>Here are some of the projects that I've worked on!</p>
            </div>
            <div className={styles.wrapper}>
              {projectTitles[selectedLanguage].map((project, i) => {
                return (
                  // Each indivdual project
                  <div
                    className={styles.portfolioItem}
                    key={project.title}
                    id={`card${i}`}
                    rank={i}
                    stack={project.stack}
                  >
                    {/* Project Information */}
                    <div className={styles.projectItemHeader}>
                      <h2>{project.title}</h2>
                      {project.title == 'Phantom Chat' && (
                        <h6>Currently in Development</h6>
                      )}
                      <p>{project.description}</p>

                      {/* Project Toolkit */}
                      <div className={styles.projectStack}>
                        <h6>Toolkit</h6>
                        <div
                          className={styles.stackList}
                          // style={{
                          //   justifyContent: (i == 3 || i == 1) && "flex-end",
                          // }}
                        >
                          {project.stack.map((item) => {
                            return (
                              <div className={styles.projectStackItem}>
                                <img src={item.src} />
                                <span>{item.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className={styles.portfolioActions}>
                        <div
                          className={styles.action}
                          onClick={() => goToGithub(project.github)}
                        >
                          <p>Github</p>
                          {/* <FaGithub size={26} /> */}
                        </div>
                        <div
                          className={styles.action}
                          onClick={() => goToWebsite(project.live)}
                        >
                          <p>View Site</p>
                          {/* <FaLink size={26} /> */}
                        </div>
                      </div>
                    </div>
                    {/* Project Image */}
                    <img src={project.image} />
                  </div>
                );
              })}
            </div>
          </FadeInSection>
        </div>
      </main>
    </>
  );
};

export default PortfolioNew;
