import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './components/AboutPage';

// Search crawler bot detection
const isSearchBot = () => {
  if (typeof navigator === 'undefined' || !navigator.userAgent) return false;
  return /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|twitterbot|facebookexternalhit|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|developers\.google\.com|lighthouse/i.test(navigator.userAgent);
};

function MainPortfolio() {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

function App() {
  const [showPreloader, setShowPreloader] = useState(() => {
    // If visited by a search engine bot or crawler, bypass the preloader immediately for instant indexation
    return !isSearchBot();
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (showPreloader) {
      const preloaderTimer = setTimeout(() => {
        setShowPreloader(false);
      }, 2400);
      return () => clearTimeout(preloaderTimer);
    }
  }, [showPreloader]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
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
      
      {/* Preloader overlay (Only displayed for human users, unmounts automatically) */}
      {showPreloader && <Preloader key="preloader" theme={theme} />}

      <a
        href="#main-content"
        id="skip-to-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-white focus:rounded-xl focus:shadow-lg focus:outline-none font-medium text-sm transition-all"
      >
        Skip to main content
      </a>

      {!showPreloader && <Navbar theme={theme} toggleTheme={toggleTheme} />}

      {/* Main semantic content is ALWAYS in the DOM so crawlers never index an empty or loading state */}
      <main id="main-content" className="relative z-10">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/about" element={<AboutPage theme={theme} />} />
          <Route path="*" element={<MainPortfolio />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
