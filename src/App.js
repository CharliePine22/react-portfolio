import { useState } from "react";
// import { Scrollbars } from 'react-custom-scrollbars';
import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/PortfolioPage/Portfolio";
import Skills from "./components/Skills/Skills";
import Landing from "./components/LandingAnimation/Landing";
import "./index.css";

function App() {
  return (
    <>
      <Landing/>
      <Navbar />
      <Home id="home" />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <About id="about" />
      <Contact id="contact" />
    </>
  );
}

export default App;
