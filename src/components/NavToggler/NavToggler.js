import styles from "./NavToggler.module.css";
import React from "react";

const NavToggler = (props) => {
 
  return (
    <div className={styles.container}>
      <div className={styles.toggler} onClick={props.toggleNav}>
        <span className={props.toggler ? styles.closeNav : styles.openNav}>|</span>
        <span className={props.toggler ? styles.closeNav : styles.openNav}>|</span>
        <span className={props.toggler ? styles.closeNav : styles.openNav}>|</span>
      </div>
    </div>
  );
};

export default NavToggler;
