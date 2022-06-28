import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import resume from "../../assets/images/FinalizedResume.PDF";
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Home = (props) => {
  // Grab user screen height to determine icon size
  const [iconSize, setIconSize] = useState();

  // Social Media Icons from React Icons
  const socialIcons = [
    <FaFacebook className={styles.facebook} size={iconSize} />,
    <FaInstagram className={styles.instagram} size={iconSize} />,
    <FaTwitch className={styles.twitch} size={iconSize} />,
    <FaGithub className={styles.github} size={iconSize} />,
    <FaLinkedin className={styles.linkedin} size={iconSize} />,
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 425) {
        setIconSize(32)
      } else if (window.innerWidth <= 375) {
        setIconSize(27)
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  // Replaces current window with the corresponding social media page.
  const goToSocial = (i) => {
    switch (i) {
      case 0:
        window.location.replace("https://www.facebook.com/charlie.c.pine");
        break;
      case 1:
        window.location.replace("https://www.instagram.com/mintyphreshh/");
        break;
      case 2:
        window.location.replace("https://www.twitch.tv/epiqagl");
        break;
      case 3:
        window.location.replace("https://github.com/CharliePine22/");
        break;
      case 4:
        window.location.replace("https://www.linkedin.com/in/charlespine/");
        break;
    }
  };

  return (
    <main id={props.id} className={styles.container}>
      <div className={styles["description-container"]}>
        <div className={styles["headshot-container"]} />
        <div className={styles.description}>
          <h1>Charles Pine</h1>
          <p>
            I'm a Full-Stack React Developer with a focus on Front-End
            Development and UI.
          </p>
          <ul className={styles.socials}>
            {socialIcons.map((icon, i) =>
              i == 4 ? (
                <li onClick={() => goToSocial(i)} key={i}>
                  {icon}
                </li>
              ) : (
                <li
                  onClick={() => goToSocial(i)}
                  className={styles["icon-border"]}
                  key={i}
                >
                  {icon}
                </li>
              )
            )}
          </ul>
          <a
            href={resume}
            className={styles.resume}
            download="cpine-resume.jpg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
