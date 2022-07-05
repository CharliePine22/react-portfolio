import styles from './NavToggler.module.css';
import React from 'react';

const NavToggler = (props) => {
  return (
    <div className={styles.container}>
      {/* <CSSTransition
        in={props.toggler}
        timeout={300}
        classNames={styles}
        unmountOnExit
      > */}
      <div className={styles.toggler} onClick={props.toggleNav}>
        <span className={props.toggler ? styles.closeNav : styles.openNav}>
          |
        </span>
        <span className={props.toggler ? styles.closeNav : styles.openNav}>
          |
        </span>
        <span className={props.toggler ? styles.closeNav : styles.openNav}>
          |
        </span>
      </div>
      {/* </CSSTransition> */}
    </div>
  );
};

export default NavToggler;
