import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/PortfolioPage/Portfolio";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </>
  );
}

export default App;
