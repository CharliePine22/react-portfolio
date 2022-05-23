import styles from "./Home.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Home = (props) => {
  // Icons for social media list

  const socialIcons = [
    <FaFacebook />,
    <FaInstagram />,
    <FaTwitch />,
    <FaGithub />,
    <FaLinkedin />,
  ];

  // Replaces current window with the corresponding social media page.
  const goToSocial = (i) => {
    switch (i) {
      case 0:
        window.location.replace("https://www.facebook.com/charlie.c.pine");
        break;
      case 1:
        window.location.replace("https://www.instagram.com/mintyphreshh/")
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
        </div>
      </div>
    </main>
  );
};

export default Home;
