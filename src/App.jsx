import './App.css'
import logo from "./assets/images/logo.svg";

import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
// import tour7 from "./assets/images/tour-7.jpeg";
// import tour8 from "./assets/images/tour-8.jpeg";
// import tour9 from "./assets/images/tour-9.jpeg";
function App() {

  return (
    <div className="react-backroads">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
