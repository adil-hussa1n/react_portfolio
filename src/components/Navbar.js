import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active link based on scroll position
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200/50 dark:border-zinc-900/40 shadow-lg dark:shadow-2xl' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 py-3">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-16">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <>
            <motion.a 
              href="#home" 
              variants={itemVariants}
              className="flex items-center space-x-2 group"
            >
              <span className="self-center text-xl md:text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">ADIL</span>
            </motion.a>
            
            <div className="flex items-center md:order-2 space-x-2 sm:space-x-3">
              <motion.button
                variants={itemVariants}
                onClick={toggleTheme}
                className="p-2 rounded-xl text-zinc-650 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-200/85 dark:hover:bg-zinc-800/80 transition-colors duration-300"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-purple-550 dark:text-purple-400" />}
              </motion.button>
              
              <motion.a
                variants={itemVariants}
                href="/resume10.pdf"
                download="adil-hussain_cv.pdf"
                className="btn-premium hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 font-semibold rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaDownload /> Resume
              </motion.a>
              
              <motion.button
                variants={itemVariants}
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 justify-center text-zinc-650 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white rounded-xl md:hidden bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-200/85 dark:hover:bg-zinc-800/80 focus:outline-none transition-colors duration-300"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-5 h-4">
                  <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 top-1.5' : 'top-0'}`}></span>
                  <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'} top-1.5`}></span>
                  <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 top-1.5' : 'top-3'}`}></span>
                </div>
              </motion.button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-between md:w-auto md:order-1" id="desktop-menu">
              <ul className="flex flex-row font-medium space-x-6 lg:space-x-8 md:bg-transparent">
                {['home', 'about', 'portfolio', 'contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => handleSetActiveLink(item)}
                      className={`relative block py-1.5 px-1 capitalize transition-colors duration-300 text-zinc-650 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white font-semibold text-sm ${activeLink === item ? 'text-purple-600 dark:text-purple-400' : ''}`}
                    >
                      {item}
                      {activeLink === item && (
                        <motion.span 
                          layoutId="activeSection"
                          className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Dropdown with smooth Framer Motion height/opacity animation */}
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full md:hidden overflow-hidden mt-3" 
                  id="mobile-menu"
                >
                  <ul className="flex flex-col font-medium p-4 rounded-2xl bg-white/90 dark:bg-zinc-950/90 border border-zinc-200 dark:border-zinc-900 backdrop-blur-xl shadow-2xl space-y-2">
                    {['home', 'about', 'portfolio', 'contact'].map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item}`}
                          onClick={() => handleSetActiveLink(item)}
                          className={`block py-2.5 px-4 rounded-xl capitalize transition-all duration-300 text-center text-sm ${activeLink === item 
                            ? 'text-white bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg shadow-purple-500/20' 
                            : 'text-zinc-650 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/60 hover:text-zinc-950 dark:hover:text-white'}`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                    <li className="pt-2">
                      <a
                        href="/resume10.pdf"
                        download="adil-hussain_cv.pdf"
                        className="btn-premium flex items-center justify-center gap-2 py-2.5 px-4 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                      >
                        <FaDownload /> Download Resume
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
