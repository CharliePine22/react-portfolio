import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
// For scrolling and auto setting active classes on nav items on links.
import { Link } from "react-scroll";

// React Nav Icons
import {
  FaHome,
  FaUserNinja,
  FaNewspaper,
  FaJournalWhills,
  FaBookReader
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// Headshot for bottom of nav with larger desktops
import headShot from "../../assets/images/headshot.jfif";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [navVisibility, setNavVisibility] = useState(false);

  // On mobile, hide the nav unless the user opens it
  const navStyles = navVisibility ? styles.nav : styles["nav-hidden"];

  return (
    <>
      <span className={styles["nav-toggle"]}>
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
          {/* Home Page Link */}
          <Link
            to="home"
            activeClass={styles.active}
            spy={true}
            style={{
              backgroundColor:
                activeNavItem == "Home" ? "#191C26" : "transparent",
            }}
            onClick={() => setActiveNavItem("Home")}
          >
            <li className={styles["nav-item"]}>
              <FaHome style={{ marginRight: "10px" }} /> Home
            </li>
          </Link>

          {/* Portfolio Page Link */}
          <Link
            to="portfolio"
            offset={70}
            activeClass={styles.active}
            spy={true}
            style={{
              backgroundColor:
                activeNavItem == "Portfolio" ? "#191C26" : "transparent",
            }}
            onClick={() => setActiveNavItem("Portfolio")}
          >
            <li className={styles["nav-item"]}>
              <FaNewspaper style={{ marginRight: "10px" }} /> Portfolio
            </li>
          </Link>

          {/* Skills and Experience Link */}
          <Link
            to="skills"
            offset={70}
            activeClass={styles.active}
            spy={true}
            style={{
              backgroundColor:
                activeNavItem == "Skills" ? "#191C26" : "transparent",
            }}
            onClick={() => setActiveNavItem("Skills")}
          >
            <li className={styles["nav-item"]}>
              <FaBookReader style={{ marginRight: "10px" }} /> Skills & Experience
            </li>
          </Link>

          {/* About Page Link */}
          <Link
            to="about"
            activeClass={styles.active}
            offset={70}
            spy={true}
            style={{
              backgroundColor:
                activeNavItem == "About" ? "#191C26" : "transparent",
            }}
            onClick={() => setActiveNavItem("About")}
          >
            <li className={styles["nav-item"]}>
              <FaUserNinja style={{ marginRight: "10px" }} /> About
            </li>
          </Link>

          {/* Contact Page Link */}
          <Link
            to="contact"
            offset={70}
            activeClass={styles.active}
            spy={true}
            style={{
              backgroundColor:
                activeNavItem == "Contact" ? "#191C26" : "transparent",
            }}
            onClick={() => setActiveNavItem("Contact")}
          >
            <li className={styles["nav-item"]}>
              <FaJournalWhills style={{ marginRight: "10px" }} /> Contact
            </li>
          </Link>
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
