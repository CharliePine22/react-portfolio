import { useState } from "react";
import styles from "./Navbar.module.css";
import {
  FaHome,
  FaUserNinja,
  FaNewspaper,
  FaJournalWhills,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import headShot from "../../assets/images/headshot.jfif";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [navVisibility, setNavVisibility] = useState(false);

  const navStyles = navVisibility ? styles.nav : styles["nav-hidden"];

  return (
    <>
      <span className={styles["nav-toggle"]} style={navVisibility ? { top: '7px', left: '100px' } : {top: '0px', left: '0px'}}>
        <GiHamburgerMenu
          size={35}
          onClick={() => setNavVisibility(!navVisibility)} 
        />
      </span>
      <nav className={navStyles}>
        <div className={styles["nav-header"]}>
          <a href="/">
            <h1>
              <span>P</span>ine
            </h1>
          </a>
        </div>

        <ul className={styles["nav-list"]}>
          <a
            href="#home"
            style={{
              backgroundColor:
                activeNavItem == "Home" ? "#191C26" : "transparent",
            }}
            onClick={() => setActiveNavItem("Home")}
          >
            <li className={styles["nav-item"]}>
              <FaHome style={{ marginRight: "10px" }} /> Home
            </li>
          </a>
          <a
            href="#about"
            style={{
              backgroundColor:
                activeNavItem == "About" ? "#191C26" : "transparent",
            }}
            onClick={() => setActiveNavItem("About")}
          >
            <li className={styles["nav-item"]}>
              <FaUserNinja style={{ marginRight: "10px" }} /> About
            </li>
          </a>
          <a
            href="#portfolio"
            style={{
              backgroundColor:
                activeNavItem == "Portfolio" ? "#191C26" : "transparent",
            }}
            onClick={() => setActiveNavItem("Portfolio")}
          >
            <li className={styles["nav-item"]}>
              <FaNewspaper style={{ marginRight: "10px" }} /> Portfolio
            </li>
          </a>
          <a
            href="#contact"
            style={{
              backgroundColor:
                activeNavItem == "Contact" ? "#191C26" : "transparent",
            }}
            onClick={() => setActiveNavItem("Contact")}
          >
            <li className={styles["nav-item"]}>
              <FaJournalWhills style={{ marginRight: "10px" }} /> Contact
            </li>
          </a>
        </ul>
        <div className={styles["footer-container"]}>
          <div className={styles["nav-footer"]}>
            <div className={styles["footer-image"]}>
              <img src={headShot} />
            </div>
            <div className={styles["footer-info"]}>
              <p className={styles["footer-name"]}>Pine</p>
              <p className={styles["footer-email"]}>charlespine22@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
