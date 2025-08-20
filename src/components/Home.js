import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaArrowDown } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaCode, FaLaptopCode, FaDatabase } from 'react-icons/fa';

const Home = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          if (containerRef.current) {
            containerRef.current.classList.add('animate-fade-in');
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-white"
    >
      {/* Animated Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500 opacity-10 dark:opacity-5 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-56 sm:w-80 h-56 sm:h-80 bg-blue-500 opacity-10 dark:opacity-5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-52 sm:w-72 h-52 sm:h-72 bg-purple-600 opacity-10 dark:opacity-5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div 
        ref={containerRef}
        className="container mx-auto max-w-7xl opacity-0 z-10 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left mt-8 lg:mt-0">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 font-medium text-xs sm:text-sm mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span>👋 Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Hi, I'm <span className="gradient-text">Adil Hussain</span>
              </h1>
              
              <div className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 h-8 sm:h-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Typewriter
                  options={{
                    strings: [
                      'IT Instructor',
                      'Full Stack Developer',
                    
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                IT Instructor at AC Tech Institute and Part-time Web Developer at Darun Tech. Based in Sylhet, Bangladesh. Passionate about creating modern, responsive web applications and teaching the next generation of developers.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <a 
                  href="#contact" 
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base"
                >
                  <FiMail className="text-lg" /> Contact Me
                </a>
                <a 
                  href="/resume10.pdf" 
                  download="adil-hussain_cv.pdf"
                  className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                >
                  Download Resume
                </a>
              </div>
              
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                <a href="https://www.facebook.com/Adil.hussain2345/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300">
                  <FaFacebookF className="text-sm sm:text-base" />
                </a>
                <a href="https://x.com/adil_hussa1n" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-400 hover:text-white dark:hover:bg-blue-400 transition-all duration-300">
                  <FaTwitter className="text-sm sm:text-base" />
                </a>
                <a href="https://www.linkedin.com/in/adil-hussa1n/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 transition-all duration-300">
                  <FaLinkedinIn className="text-sm sm:text-base" />
                </a>
                <a href="https://github.com/adil-hussa1n" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 transition-all duration-300">
                  <FaGithub className="text-sm sm:text-base" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Modern Hero Design */}
          <div className="order-1 lg:order-2 animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
                
                {/* Modern Code-themed Hero Design */}
                <div className="p-6 flex flex-col space-y-6">
                  {/* Terminal Header */}
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-xs text-gray-500 dark:text-gray-400">developer_profile.js</div>
                  </div>
                  
                  {/* Code Content */}
                  <div className="font-mono text-sm text-gray-800 dark:text-gray-200 space-y-3">
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> <span className="text-gray-600 dark:text-gray-400">=</span> <span className="text-gray-600 dark:text-gray-400">{'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-green-600 dark:text-green-400">name:</span> <span className="text-orange-600 dark:text-orange-400">'Adil Hussain'</span><span className="text-gray-600 dark:text-gray-400">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-green-600 dark:text-green-400">title:</span> <span className="text-orange-600 dark:text-orange-400">'Full Stack Developer'</span><span className="text-gray-600 dark:text-gray-400">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-green-600 dark:text-green-400">location:</span> <span className="text-orange-600 dark:text-orange-400">'Sylhet, Bangladesh'</span><span className="text-gray-600 dark:text-gray-400">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-green-600 dark:text-green-400">skills:</span> <span className="text-gray-600 dark:text-gray-400">[</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-orange-600 dark:text-orange-400">'React'</span><span className="text-gray-600 dark:text-gray-400">,</span> <span className="text-orange-600 dark:text-orange-400">'JavaScript'</span><span className="text-gray-600 dark:text-gray-400">,</span> <span className="text-orange-600 dark:text-orange-400">'Node.js'</span><span className="text-gray-600 dark:text-gray-400">,</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-orange-600 dark:text-orange-400">'Tailwind'</span><span className="text-gray-600 dark:text-gray-400">,</span> <span className="text-orange-600 dark:text-orange-400">'Python'</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-600 dark:text-gray-400">]</span>
                    </div>
                    <div><span className="text-gray-600 dark:text-gray-400">{'}'}</span><span className="text-purple-600 dark:text-purple-400">;</span></div>
                  </div>
                  
                  {/* Tech Icons */}
                  <div className="flex justify-around pt-2">
                    <div className="flex flex-col items-center">
                      <FaCode className="text-2xl text-purple-600 dark:text-purple-400" />
                      <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Frontend</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaLaptopCode className="text-2xl text-blue-600 dark:text-blue-400" />
                      <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Backend</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaDatabase className="text-2xl text-green-600 dark:text-green-400" />
                      <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Data</span>
                    </div>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator - Optimized for mobile */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-purple-600 dark:text-purple-400 focus:outline-none"
        aria-label="Scroll down"
      >
        <FaArrowDown className="text-sm sm:text-base" />
      </button>
    </section>
  );
};

export default Home;
