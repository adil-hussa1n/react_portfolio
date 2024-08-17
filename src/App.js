import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    
    const preloaderTimer = setTimeout(() => {
      setShowPreloader(false);
    }, 6000);

    return () => clearTimeout(preloaderTimer);
  }, []);

  return (
    <div>
      {showPreloader ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
