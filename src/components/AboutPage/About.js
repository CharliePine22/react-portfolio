import React from 'react';
import styles from './About.module.css';
import Chicago from '../../assets/images/Chicago.jpg';
import FadeInSection from '../Fade/FadeInSection';
import { FaDumbbell, FaGamepad, FaBook } from 'react-icons/fa';

const About = (props) => {
  return (
    <>
      <main id={props.id} className={styles['about-container']}>
        <div className={styles['about-content']}>
          <div className={styles['about-title']}>
            <h3>About Me</h3>
          </div>
          <FadeInSection>
            <div className={styles['about-info']}>
              {/* Left Side */}
              <div className={styles['about-info-left']}>
                <h3>
                  Hey there, I'm <span>Charles Pine</span>
                </h3>
                <p>
                  I'm a Full Stack Developer with 3 years of experience. I love
                  making people laugh and exploring new places. My passion for
                  coding allows me to continue learning new ways to approach
                  problems and different ways to google Stack Overflow.
                </p>
              </div>
              {/* Right Side */}
              <div className={styles['about-info-right']}>
                <img src={Chicago} alt='The city of Chciago' />
              </div>
            </div>
            {/* Hobbies */}
            <div className={styles.hobbies}>
              <h3>Hobbies</h3>
              <p>
                I'm always up for an adventure! When I'm not coding, I'm usually
                playing with my dog. Besides that, these are just a few of the
                things that I enjoy most!
              </p>
              <div className={styles['hobbies-list']}>
                <ul>
                  <li>
                    <span>Exercising</span>
                    <FaDumbbell size={38} />
                  </li>
                  <li>
                    <span>Reading</span>
                    <FaBook size={38} />
                  </li>
                  <li>
                    <span>Video Games</span>
                    <FaGamepad size={38} />
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </main>
    </>
  );
};

export default About;
