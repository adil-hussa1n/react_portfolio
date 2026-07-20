import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaArrowDown, FaFolder, FaTerminal, FaCheckCircle } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Home = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          if (containerRef.current) containerRef.current.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent text-zinc-900 dark:text-white"
    >
      <div ref={containerRef} className="container mx-auto max-w-7xl opacity-0 z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Text */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 font-medium text-xs sm:text-sm backdrop-blur-md">
              <span className="text-base">⚡</span>
              Software Engineer · Building for the web
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Hi, I'm <span className="aurora-text-glow">Adil Hussain</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-mono text-zinc-500 dark:text-zinc-400 h-10 sm:h-12 flex justify-center lg:justify-start items-center">
              <span className="text-emerald-500 mr-2">&gt;</span>
              <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
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
              Software Engineer at Darun Tech Private Limited. BSc in CSE from Leading University, Sylhet. Building scalable full-stack web applications with React, Node.js, and MongoDB.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#contact"
                className="btn-aurora px-6 py-3.5 rounded-xl flex items-center gap-2 text-sm sm:text-base"
              >
                <FiMail className="text-lg" /> Contact Me
              </a>
              <a
                href="/resume10.pdf"
                download="adil-hussain_resume.pdf"
                className="btn-aurora-outline px-6 py-3.5 rounded-xl flex items-center gap-2 text-sm sm:text-base bg-white/50 dark:bg-zinc-900/30 backdrop-blur-md"
              >
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 justify-center lg:justify-start pt-4">
              {[
                { url: "https://www.facebook.com/Adil.hussain2345/", icon: <FaFacebookF />, label: "Facebook" },
                { url: "https://x.com/adil_hussa1n", icon: <FaTwitter />, label: "Twitter" },
                { url: "https://www.linkedin.com/in/adil-hussa1n/", icon: <FaLinkedinIn />, label: "LinkedIn" },
                { url: "https://github.com/adil-hussa1n", icon: <FaGithub />, label: "GitHub" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/30 text-zinc-500 dark:text-zinc-400 backdrop-blur-md hover:border-cyan-500/40 hover:text-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column — 3D Floating Terminal */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="perspective-container relative mx-auto max-w-sm sm:max-w-md lg:max-w-full">
              {/* Aurora backglow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 rounded-2xl filter blur-3xl opacity-60"></div>

              {/* 3D Terminal */}
              <div className="terminal-3d terminal rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/5 flex flex-col h-[380px] sm:h-[420px] font-mono text-xs sm:text-sm">
                
                {/* Terminal header */}
                <div className="bg-zinc-100/80 dark:bg-zinc-950/80 border-b border-zinc-200/60 dark:border-zinc-800/40 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-zinc-500 text-xs flex items-center gap-2">
                    <FaTerminal className="text-emerald-500" />
                    <span>adil@workspace</span>
                  </div>
                  <div className="w-12"></div>
                </div>

                <div className="flex flex-1 overflow-hidden">
                  {/* Sidebar */}
                  <div className="w-10 sm:w-12 bg-zinc-50/50 dark:bg-zinc-950/50 border-r border-zinc-200/40 dark:border-zinc-800/30 flex flex-col items-center py-4 space-y-4 text-zinc-400 dark:text-zinc-600">
                    <FaFolder className="text-emerald-500 text-base sm:text-lg" />
                    <FaTerminal className="text-base sm:text-lg hover:text-zinc-500 transition-colors cursor-pointer" />
                  </div>

                  {/* Code area */}
                  <div className="flex-1 flex flex-col bg-white/30 dark:bg-zinc-950/20">
                    {/* Tab bar */}
                    <div className="flex bg-zinc-50/60 dark:bg-zinc-950/60 border-b border-zinc-200/40 dark:border-zinc-800/30">
                      <div className="bg-white/80 dark:bg-zinc-900/60 text-emerald-600 dark:text-emerald-400 border-t-2 border-emerald-500 px-4 py-2 flex items-center gap-2 text-xs font-medium">
                        <span className="text-cyan-500 font-bold">{'{}'}</span> adil.config.js
                      </div>
                    </div>

                    {/* Code content */}
                    <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-2 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      <div className="text-zinc-400 text-[10px] mb-3">{"// Software Engineer Profile"}</div>
                      <div>
                        <span className="text-violet-500">const</span> <span className="text-cyan-500">developer</span> <span className="text-zinc-500">=</span> <span className="text-zinc-500">{'{'}</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-emerald-500">name</span><span className="text-zinc-500">:</span> <span className="text-amber-500">'Adil Hussain'</span><span className="text-zinc-500">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-emerald-500">title</span><span className="text-zinc-500">:</span> <span className="text-amber-500">'Software Engineer'</span><span className="text-zinc-500">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-emerald-500">company</span><span className="text-zinc-500">:</span> <span className="text-amber-500">'Darun Tech Pvt Ltd'</span><span className="text-zinc-500">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-emerald-500">location</span><span className="text-zinc-500">:</span> <span className="text-amber-500">'Sylhet, Bangladesh'</span><span className="text-zinc-500">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-emerald-500">skills</span><span className="text-zinc-500">:</span> <span className="text-zinc-400 font-bold">[</span><span className="text-amber-500">'React'</span><span className="text-zinc-500">,</span> <span className="text-amber-500">'Node'</span><span className="text-zinc-500">,</span> <span className="text-amber-500">'MongoDB'</span><span className="text-zinc-400 font-bold">]</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">{'}'}</span><span className="text-violet-500">;</span>
                      </div>
                      <div className="mt-4 pt-3 border-t border-zinc-200/30 dark:border-zinc-800/30">
                        <span className="text-violet-500">export default</span> <span className="text-cyan-500">developer</span><span className="text-violet-500">;</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="bg-gradient-to-r from-emerald-600/90 to-cyan-600/90 text-white px-3 py-1 flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-emerald-200 animate-pulse" /> Live</span>
                    <span>main</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>UTF-8</span>
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white/60 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/30 backdrop-blur-md p-2.5 sm:p-3 rounded-full shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 text-cyan-500 focus:outline-none"
        aria-label="Scroll down"
      >
        <FaArrowDown className="text-sm sm:text-base" />
      </button>
    </section>
  );
};

export default Home;
