import { useState } from "react";
import styles from "./Projects.module.css";
// Card Image Imports, named them the first word of the title to dynamically insert when needed
// React Project Images
import retro from '../../../assets/images/ProjectImages/retro-chat.png';
import simply from '../../../assets/images/ProjectImages/simply-phresh.png';
import video from '../../../assets/images/ProjectImages/video-game-database.jpg';
// Python Project Images
import animal from '../../../assets/images/ProjectImages/animal-crossing-database.png';
import planner from '../../../assets/images/ProjectImages/planner.png';
import spotify from '../../../assets/images/ProjectImages/spotify.jpg';
// HTML, CSS, JS Project Images
import terror from '../../../assets/images/ProjectImages/terror-trades.png';
import tindog from '../../../assets/images/ProjectImages/yuna.jpg';
import top from '../../../assets/images/ProjectImages/top-movies.png';

const Projects = (props) => {
  const currentLanguage = props.currentLanguage;
  const projectTitles = {
    react: ["Retro Chat", "Simply Phresh", "Video Game Database"],
    python: [
      "Animal Crossing Database",
      "Planner",
      "Spotify Playlist Generator",
    ],
    html: ["Terror Trades", "Tindog", "Top Movies Database"],
  };

  const selectedLanguage = currentLanguage.split(" ")[0].toLowerCase();
  const el = document.querySelectorAll(`.${styles.card}`);
  
  console.log(el[0])

  return (
    <div className={styles.container}>
      {projectTitles[selectedLanguage].map((title) => (
        <div key={title} className={styles.card} id={title} style={ {backgroundImage: `url(${title.split(' ')[0].toLowerCase()})`}}>
          <p className={styles['project-title']}>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;