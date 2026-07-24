import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    document.documentElement.classList.toggle('dark', theme === 'dark');

    return () => clearTimeout(preloaderTimer);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`${theme} min-h-screen bg-surface-50 dark:bg-surface-950 transition-colors duration-500`}>
      {/* Mesh gradient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="mesh-gradient absolute inset-0 opacity-40 dark:opacity-30"></div>
        <div className="dot-grid absolute inset-0 opacity-50"></div>
        {/* Floating aurora orbs */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] glow-orb-emerald opacity-40 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 -left-20 w-[400px] h-[400px] glow-orb-cyan opacity-30 rounded-full animate-float-medium"></div>
        <div className="absolute top-2/3 right-1/3 w-[350px] h-[350px] glow-orb-violet opacity-25 rounded-full animate-float-fast"></div>
      </div>
      
      <AnimatePresence mode="wait">
        {showPreloader && (
          <motion.div
            key="preloader-wrapper"
            initial={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0, 
              y: '-100vh',
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-50 pointer-events-auto"
          >
            <Preloader theme={theme} />
          </motion.div>
        )}
      </AnimatePresence>

      {!showPreloader && (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main className="relative z-10">
            <Home />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
            <ScrollToTop />
          </main>
        </motion.div>
      )}
    </div>
  );
}

export default App;
