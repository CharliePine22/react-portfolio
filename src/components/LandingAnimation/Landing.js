import favicon from '../../assets/images/landing-icon.png';
import styles from './Landing.module.css';
import React from 'react';

const Landing = (props) => {
  return (
    <>
      <div className={styles['landing-container']}>
        <div className={styles['landing-left']} />
        <span className={styles['icon-container']}>
          <img className={styles.icon} src={favicon} />
        </span>
        <div className={styles['landing-right']} />
      </div>
      {props.children}
    </>
  );
};

export default Landing;
