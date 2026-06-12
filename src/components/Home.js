import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaArrowDown, FaFolder, FaSearch, FaHistory, FaCog, FaCheckCircle } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-500"
    >
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] glow-orb-purple opacity-30 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] glow-orb-blue opacity-30 rounded-full animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] glow-orb-purple opacity-20 rounded-full animate-float-medium"></div>
      </div>

      <div
        ref={containerRef}
        className="container mx-auto max-w-7xl opacity-0 z-10 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 font-medium text-xs sm:text-sm mb-2 backdrop-blur-md">
              <span className="flex items-center gap-2">👋 Welcome to my interactive portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Hi, I'm <span className="gradient-text glow-text-purple">Adil Hussain</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-mono text-zinc-655 dark:text-zinc-400 h-10 sm:h-12 flex justify-center lg:justify-start items-center">
              <span className="text-purple-600 dark:text-purple-500 mr-2">&gt;</span>
              <Typewriter
                options={{
                  strings: [
                    'IT Instructor',
                    'Full Stack Developer',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              IT Instructor at AC Tech Institute and Part-time Web Developer at Darun Tech. Based in Sylhet, Bangladesh. Dedicated to creating high-performance web applications and mentoring future tech talent.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#contact"
                className="btn-premium px-6 py-3.5 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/20 flex items-center gap-2 text-sm sm:text-base"
              >
                <FiMail className="text-lg" /> Contact Me
              </a>
              <a
                href="/resume10.pdf"
                download="adil-hussain_cv.pdf"
                className="btn-premium px-6 py-3.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              {[
                { url: "https://www.facebook.com/Adil.hussain2345/", icon: <FaFacebookF />, label: "Facebook", hoverClass: "hover:bg-blue-600 hover:border-blue-600 hover:text-white" },
                { url: "https://x.com/adil_hussa1n", icon: <FaTwitter />, label: "Twitter", hoverClass: "hover:bg-sky-500 hover:border-sky-500 hover:text-white" },
                { url: "https://www.linkedin.com/in/adil-hussa1n/", icon: <FaLinkedinIn />, label: "LinkedIn", hoverClass: "hover:bg-blue-700 hover:border-blue-700 hover:text-white" },
                { url: "https://github.com/adil-hussa1n", icon: <FaGithub />, label: "GitHub", hoverClass: "hover:bg-zinc-700 hover:border-zinc-700 hover:text-white" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 transition-all duration-300 ${item.hoverClass}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Premium High-Fidelity IDE Mockup */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-full">
              {/* Backglow behind the editor */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl filter blur-2xl opacity-60"></div>
              
              {/* IDE container */}
              <div className="relative glass-panel rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/85 shadow-2xl flex flex-col h-[380px] sm:h-[420px] font-mono text-xs sm:text-sm">
                
                {/* Visual Editor Header/Tabs */}
                <div className="bg-zinc-100 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-zinc-500 dark:text-zinc-500 text-xs select-none">adil-workspace &mdash; VS Code</div>
                  <div className="w-12"></div>
                </div>

                <div className="flex flex-1 overflow-hidden">
                  {/* Vertical Activity Bar */}
                  <div className="w-10 sm:w-12 bg-zinc-100/50 dark:bg-zinc-950/50 border-r border-zinc-200 dark:border-zinc-900/60 flex flex-col items-center py-4 justify-between text-zinc-400 dark:text-zinc-650">
                    <div className="flex flex-col space-y-4 items-center w-full">
                      <FaFolder className="text-purple-600 dark:text-purple-500 text-base sm:text-lg cursor-pointer hover:text-purple-500 transition-colors" />
                      <FaSearch className="text-base sm:text-lg cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors" />
                      <FaHistory className="text-base sm:text-lg cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors" />
                    </div>
                    <FaCog className="text-base sm:text-lg cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors" />
                  </div>

                  {/* Main Code View Area */}
                  <div className="flex-1 flex flex-col bg-white dark:bg-zinc-950/20">
                    {/* Tabs */}
                    <div className="flex bg-zinc-50 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-900 select-none">
                      <div className="bg-white dark:bg-zinc-900/90 text-purple-600 dark:text-purple-400 border-t border-purple-500 px-4 py-2 flex items-center gap-2 border-r border-zinc-200 dark:border-zinc-900">
                        <span className="text-yellow-600 dark:text-yellow-500 font-bold">{}</span> adil.json
                      </div>
                      <div className="text-zinc-400 dark:text-zinc-500 px-4 py-2 flex items-center gap-2 border-r border-zinc-200 dark:border-zinc-900 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900/40 hover:text-zinc-600 dark:hover:text-zinc-455 transition-colors">
                        skills.css
                      </div>
                    </div>

                    {/* Code Content */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-2.5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      <div>
                        <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> <span className="text-zinc-500">=</span> <span className="text-zinc-600 dark:text-zinc-400">{'{'}</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-blue-600 dark:text-blue-400">name</span><span className="text-zinc-500">:</span> <span className="text-amber-600 dark:text-amber-300">'Adil Hussain'</span><span className="text-zinc-500">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-blue-600 dark:text-blue-400">title</span><span className="text-zinc-500">:</span> <span className="text-amber-600 dark:text-amber-300">'Full Stack Developer'</span><span className="text-zinc-500">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-blue-600 dark:text-blue-400">work</span><span className="text-zinc-500">:</span> <span className="text-zinc-600 dark:text-zinc-400">{'{'}</span>
                        <div className="pl-5">
                          <span className="text-blue-600 dark:text-blue-400">instructor</span><span className="text-zinc-500">:</span> <span className="text-amber-600 dark:text-amber-300">'AC Tech Institute'</span><span className="text-zinc-500">,</span>
                        </div>
                        <div className="pl-5">
                          <span className="text-blue-600 dark:text-blue-400">developer</span><span className="text-zinc-500">:</span> <span className="text-amber-600 dark:text-amber-300">'Darun Tech'</span>
                        </div>
                        <span className="text-zinc-600 dark:text-zinc-400">{'}'}</span><span className="text-zinc-500">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-blue-600 dark:text-blue-400">location</span><span className="text-zinc-500">:</span> <span className="text-amber-600 dark:text-amber-300">'Sylhet, Bangladesh'</span><span className="text-zinc-500">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-blue-600 dark:text-blue-400">skills</span><span className="text-zinc-500">:</span> <span className="text-zinc-655 dark:text-zinc-400 font-bold">[</span><span className="text-amber-600 dark:text-amber-300">'React'</span><span className="text-zinc-500">,</span> <span className="text-amber-600 dark:text-amber-300">'Node'</span><span className="text-zinc-500">,</span> <span className="text-amber-600 dark:text-amber-300">'Python'</span><span className="text-zinc-655 dark:text-zinc-400 font-bold">]</span>
                      </div>
                      <div>
                        <span className="text-zinc-600 dark:text-zinc-400">{'}'}</span><span className="text-purple-600 dark:text-purple-400">;</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="bg-purple-600/90 dark:bg-purple-700/85 text-white px-3 py-1 flex items-center justify-between text-[10px] select-none">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-emerald-350 animate-pulse" /> Live Sync</span>
                    <span>branch: main</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>UTF-8</span>
                    <span>JSON</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-350 dark:hover:border-zinc-700 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-purple-600 dark:text-purple-400 focus:outline-none"
        aria-label="Scroll down"
      >
        <FaArrowDown className="text-sm sm:text-base" />
      </button>
    </section>
  );
};

export default Home;
