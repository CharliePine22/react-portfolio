import { useState } from 'react';
import React from 'react';
import styles from './Navbar.module.css';
import NavToggler from '../NavToggler/NavToggler';

// For scrolling and auto setting active classes on nav items on links.
import { Link } from 'react-scroll';

// React Nav Icons
import {
  FaHome,
  FaUserNinja,
  FaNewspaper,
  FaJournalWhills,
  FaBookReader,
} from 'react-icons/fa';
// import { GiHamburgerMenu } from "react-icons/gi";

// Headshot for bottom of nav with larger desktops
import headShot from '../../assets/images/headshot.jfif';

const Navbar = () => {
  const [navVisibility, setNavVisibility] = useState(false);

  const closeNav = () => {
    setNavVisibility(false);
  };

  // On mobile, hide the nav unless the user opens it
  const navStyles = navVisibility ? styles.nav : styles['nav-hidden'];

  return (
    <>
      <span className={styles['nav-toggle']}>
        <NavToggler
          toggleNav={() => setNavVisibility(!navVisibility)}
          toggler={navVisibility}
        />
      </span>
      <nav className={navStyles}>
        <div className={styles['nav-header']}>
          <a href='/'>
            <h1>
              <span>P</span>ine
            </h1>
          </a>
        </div>

        <ul className={styles['nav-list']}>
          {/* Home Page Link */}
          <li className={styles['nav-item']}>
            <Link
              to='home'
              activeClass={styles.active}
              spy={true}
              onClick={closeNav}
            >
              <FaHome style={{ marginRight: '10px' }} /> Home
            </Link>
          </li>

          {/* Portfolio Page Link */}
          <li className={styles['nav-item']}>
            <Link
              to='portfolio'
              activeClass={styles.active}
              spy={true}
              onClick={closeNav}
            >
              <FaNewspaper style={{ marginRight: '10px' }} /> Portfolio
            </Link>
          </li>

          {/* Skills and Experience Link */}
          <li className={styles['nav-item']}>
            <Link
              to='skills'
              activeClass={styles.active}
              spy={true}
              onClick={closeNav}
            >
              <FaBookReader style={{ marginRight: '10px' }} /> Skills
            </Link>
          </li>

          {/* About Page Link */}
          <li className={styles['nav-item']}>
            <Link
              to='about'
              activeClass={styles.active}
              spy={true}
              onClick={closeNav}
            >
              <FaUserNinja style={{ marginRight: '10px' }} /> About
            </Link>
          </li>

          {/* Contact Page Link */}
          <li className={styles['nav-item']}>
            <Link
              to='contact'
              activeClass={styles.active}
              spy={true}
              onClick={closeNav}
            >
              <FaJournalWhills style={{ marginRight: '10px' }} /> Contact
            </Link>
          </li>
        </ul>
        <div className={styles['footer-container']}>
          <div className={styles['nav-footer']}>
            <div className={styles['footer-image']}>
              <img src={headShot} />
            </div>
            <div className={styles['footer-info']}>
              <p className={styles['footer-name']}>Pine</p>
              <p className={styles['footer-email']}>charlespine22@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
