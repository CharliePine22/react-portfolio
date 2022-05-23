import About from "./components/AboutPage/About";
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
    </>
  );
}

export default App;
