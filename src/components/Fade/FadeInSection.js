import { useRef, useState, useEffect } from "react";
import React from "react";
import styles from "./FadeInSection.module.css";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`${styles["fade-in-section"]} ${
        isVisible ? styles["is-visible"] : ""
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
