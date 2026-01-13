import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Features from './components/Features';
import Process from './components/Process';
import Difference from './components/Difference';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Process />
      <Difference />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
