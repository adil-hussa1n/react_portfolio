import React, { useEffect, useState } from 'react';
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
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Reduced preloader time for better UX
    const preloaderTimer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    return () => clearTimeout(preloaderTimer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`${theme} min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500`}>
      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-5 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500 opacity-5 rounded-full filter blur-3xl animate-float-medium"></div>
        <div className="absolute top-2/3 right-1/3 w-80 h-80 bg-indigo-500 opacity-5 rounded-full filter blur-3xl animate-float-fast"></div>
      </div>
      
      {showPreloader ? (
        <Preloader key="preloader" />
      ) : (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main className="relative z-10">
            <Home />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
            <ScrollToTop />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
