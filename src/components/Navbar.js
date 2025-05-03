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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-16">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <>
            <motion.a 
              href="#home" 
              variants={itemVariants}
              className="flex items-center space-x-2 group"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl">A</div>
              <span className="self-center text-xl md:text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">ADIL HUSSAIN</span>
            </motion.a>
            
            <div className="flex items-center md:order-2 space-x-3">
              <motion.button
                variants={itemVariants}
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
              </motion.button>
              
              <motion.a
                variants={itemVariants}
                href="/resume10.pdf"
                download="adil-hussain_cv.pdf"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaDownload /> Resume
              </motion.a>
              
              <motion.button
                variants={itemVariants}
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-700 dark:text-gray-300 rounded-lg md:hidden hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors duration-300"
                aria-controls="navbar-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-5">
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'} top-2`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
                </div>
              </motion.button>
            </div>
            
            <AnimatePresence>
              <div 
                className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} 
                id="navbar-menu"
              >
                <motion.ul 
                  variants={navVariants}
                  className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white/90 dark:bg-gray-900/90 md:bg-transparent backdrop-blur-md"
                >
                  {['home', 'about', 'portfolio', 'contact'].map((item) => (
                    <motion.li key={item} variants={itemVariants}>
                      <a
                        href={`#${item}`}
                        onClick={() => handleSetActiveLink(item)}
                        className={`relative block py-2 px-3 md:p-0 rounded capitalize transition-colors duration-300 ${activeLink === item 
                          ? 'text-purple-600 dark:text-purple-400' 
                          : 'text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'}`}
                      >
                        {item}
                        {activeLink === item && (
                          <motion.span 
                            layoutId="activeSection"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 md:block hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li variants={itemVariants} className="md:hidden mt-4">
                    <a
                      href="/resume10.pdf"
                      download="adil-hussain_cv.pdf"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 font-medium rounded-lg text-sm transition-all duration-300"
                    >
                      <FaDownload /> Resume
                    </a>
                  </motion.li>
                </motion.ul>
              </div>
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
