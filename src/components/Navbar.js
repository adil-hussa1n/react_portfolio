import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/70 dark:bg-surface-950/70 border-b border-zinc-200/50 dark:border-zinc-800/30 shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <span className="text-xl md:text-2xl font-bold tracking-tight aurora-text group-hover:opacity-80 transition-opacity">
            ADIL
          </span>
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </a>

        {/* Right controls */}
        <div className="flex items-center md:order-2 space-x-2 sm:space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-white/60 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/40 hover:border-zinc-300 dark:hover:border-zinc-700 backdrop-blur-md transition-all duration-300"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun className="text-amber-400" /> : <FaMoon className="text-zinc-500" />}
          </button>

          <a
            href="/resume10.pdf"
            download="adil-hussain_resume.pdf"
            className="btn-aurora hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm"
          >
            <FaDownload className="text-xs" /> Resume
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2.5 justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-xl md:hidden bg-white/60 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/40 backdrop-blur-md transition-all duration-300"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-5 h-4">
              <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 top-1.5' : 'top-0'}`}></span>
              <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'} top-1.5`}></span>
              <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 top-1.5' : 'top-3'}`}></span>
            </div>
          </button>
        </div>

        {/* Desktop nav — pill indicator style */}
        <div className="hidden md:flex items-center md:order-1">
          <div className="relative flex items-center bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md rounded-2xl p-1.5 border border-zinc-200/40 dark:border-zinc-800/30">
            {['home', 'about', 'portfolio', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => handleSetActiveLink(item)}
                className={`relative px-5 py-2 rounded-xl capitalize text-sm font-medium transition-all duration-300 ${
                  activeLink === item
                    ? 'text-white'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {activeLink === item && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl shadow-lg shadow-cyan-500/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full md:hidden overflow-hidden mt-3"
              id="mobile-menu"
            >
              <ul className="flex flex-col p-3 rounded-2xl bg-white/80 dark:bg-surface-900/80 border border-zinc-200/50 dark:border-zinc-800/30 backdrop-blur-xl shadow-2xl space-y-1">
                {['home', 'about', 'portfolio', 'contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => handleSetActiveLink(item)}
                      className={`block py-3 px-4 rounded-xl capitalize transition-all duration-300 text-center text-sm font-medium ${
                        activeLink === item
                          ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-cyan-500/20'
                          : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40'
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li className="pt-1">
                  <a
                    href="/resume10.pdf"
                    download="adil-hussain_resume.pdf"
                    className="btn-aurora flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm"
                  >
                    <FaDownload /> Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
