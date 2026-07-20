import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;

      setIsVisible(scrollTop > 300);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG circle parameters
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
      } fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none group`}
      aria-label="Scroll to top"
    >
      {/* Progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
        {/* Background circle */}
        <circle cx="24" cy="24" r={radius} fill="none" stroke="currentColor"
          className="text-zinc-200 dark:text-zinc-800" strokeWidth="2" />
        {/* Progress circle */}
        <circle cx="24" cy="24" r={radius} fill="none"
          stroke="url(#auroraGradient)" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
          className="transition-all duration-150" />
        <defs>
          <linearGradient id="auroraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center background */}
      <div className="absolute inset-1.5 rounded-full bg-white/80 dark:bg-surface-900/80 backdrop-blur-md border border-zinc-200/30 dark:border-zinc-800/20 group-hover:border-cyan-500/30 transition-colors"></div>

      {/* Arrow icon */}
      <FaArrowUp className="relative z-10 text-sm text-cyan-500 group-hover:text-emerald-500 transition-colors" />
    </button>
  );
};

export default ScrollToTop;
