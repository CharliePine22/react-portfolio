import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import Home from './components/HomePage/Home';
import Navbar from './components/Navbar/Navbar';
import PortfolioNew from './components/PortfolioPage/PortfolioNew';
import Skills from './components/Skills/Skills';
import './index.css';

function App() {
  // Scroll to top of window on refresh to view animation
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   const timer = setTimeout(() => {
  //     document.body.style.overflow = 'overlay';
  //   }, 2600);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <Navbar />
      <Home id='home' />

      {/* <Portfolio id="portfolio" /> */}
      <PortfolioNew id='portfolio' />
      <Skills id='skills' />
      <About id='about' />
      <Contact id='contact' />
    </>
  );
}

export default App;
