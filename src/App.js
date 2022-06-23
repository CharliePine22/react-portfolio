import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/PortfolioPage/Portfolio";
import Skills from "./components/Skills/Skills";
import "./index.css";

function App() {
  // CHROME DEVELOPER MAC SCREEN SIZE 1440x759
  return (
    <>
      <Navbar />
      <Home id="home" />
      <Portfolio id="portfolio" />
      <Skills id='skills' />
      <About id="about" />
      <Contact id="contact" />
    </>
  );
}

export default App;
