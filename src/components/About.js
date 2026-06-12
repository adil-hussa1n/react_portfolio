import React, { useEffect, useRef } from 'react';
import { FaCode, FaServer, FaDatabase, FaLaptopCode, FaUserTie, FaGraduationCap, FaChartBar, FaTerminal } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          if (contentRef.current) {
            contentRef.current.classList.add('animate-fade-in');
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="opacity-0 py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative transition-colors duration-500"
    >
      {/* Custom ambient backgrounds */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] glow-orb-purple opacity-20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] glow-orb-blue opacity-20 rounded-full animate-pulse-slow animation-delay-3000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={contentRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text tracking-tight glow-text-purple">
            About <span className="text-zinc-900 dark:text-white">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            I am a CSE graduate, educator, and full-stack developer committed to creating interactive, robust digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left side - Who I Am & Education */}
          <div className="space-y-8 animate-fade-in-right">
            
            {/* Who I Am Glass Panel */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-zinc-200 dark:border-zinc-800/80">
              {/* Terminal header */}
              <div className="absolute top-0 left-0 w-full bg-zinc-100/60 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-900/60 py-2.5 px-4 flex items-center">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 text-[10px] font-mono text-zinc-500 flex items-center">
                  <FaTerminal className="mr-1 text-purple-600 dark:text-purple-400" /> about_me.js
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div className="flex items-center mb-2">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl mr-4 text-purple-600 dark:text-purple-400">
                    <FaUserTie className="text-2xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">Who I Am</h3>
                </div>

                <div className="font-mono text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-950/80 p-4 rounded-xl border border-zinc-200 dark:border-zinc-900">
                  <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">aboutMe</span> <span className="text-zinc-550 dark:text-zinc-550">= {'{'}</span>
                  <div className="pl-4 mt-2">
                    <span className="text-emerald-650 dark:text-emerald-400">role</span><span className="text-zinc-500">:</span> <span className="text-amber-600 dark:text-amber-300">'IT Instructor & Full Stack Dev'</span><span className="text-zinc-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-650 dark:text-emerald-400">interest</span><span className="text-zinc-500">:</span> <span className="text-amber-600 dark:text-amber-300">'Modern UI & Interactive Products'</span>
                  </div>
                  <div className="text-zinc-550 dark:text-zinc-550 mt-2">{'}'}</div>
                </div>

                <p className="text-zinc-650 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                  When I'm not developing products or teaching IT, I focus on mentoring next-generation engineers, exploring new technologies, and contributing to communities.
                </p>
              </div>
            </div>

            {/* Timeline Education Glass Panel */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-zinc-200 dark:border-zinc-800/80">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl mr-4 text-purple-600 dark:text-purple-400">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">Education Timeline</h3>
              </div>

              <div className="relative pl-8 before:content-[''] before:absolute before:left-1 before:top-2 before:h-[90%] before:w-[2px] before:bg-gradient-to-b before:from-purple-600 before:to-blue-500">
                <div className="relative">
                  <div className="absolute -left-[32px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] border-2 border-zinc-50 dark:border-zinc-950"></div>
                  <h4 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white">Leading University</h4>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">B.Sc. in Computer Science & Engineering</p>
                  <p className="text-xs text-zinc-500 mt-1">Sylhet, Bangladesh &bull; 2021 &ndash; 2024</p>
                  <div className="mt-3 pl-3 border-l-2 border-zinc-200 dark:border-zinc-850 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <p>&bull; General Secretary, LU Computer Club</p>
                    <p>&bull; Organized university hackathons and tech workshops</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach Block */}
            <div className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 dark:from-purple-900/40 dark:to-blue-900/40 border border-purple-500/10 rounded-2xl p-6 sm:p-8 text-zinc-700 dark:text-zinc-300 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/40 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl mr-4 text-purple-600 dark:text-white">
                  <FaLaptopCode className="text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">My Approach</h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                I believe in writing clean, performant, and scaleable code. Visual details, smooth micro-interactions, and accessibility are central to my design process.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6 text-xs sm:text-sm font-semibold font-mono">
                {['Problem Solving', 'Detail Oriented', 'Fast Learner', 'Collaboration'].map((tag, idx) => (
                  <div key={idx} className="bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-850 p-3 rounded-xl flex items-center justify-center text-center hover:border-purple-500/20 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">&bull;</span> {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right side - Technical Skills Panels */}
          <div className="animate-fade-in-left">
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-zinc-200 dark:border-zinc-800/80">
              {/* Terminal header */}
              <div className="absolute top-0 left-0 w-full bg-zinc-100/60 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-900/60 py-2.5 px-4 flex items-center">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 text-[10px] font-mono text-zinc-500 flex items-center">
                  <BiCodeAlt className="mr-1 text-purple-600 dark:text-purple-400" /> skills.js
                </div>
              </div>

              <div className="mt-8 space-y-8">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">Technical Arsenal</h3>
                
                <div className="space-y-6">
                  
                  {/* Skill set 1 */}
                  <div className="group transition-all">
                    <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white mb-3 flex items-center">
                      <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg mr-3 text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform">
                        <FaCode className="text-lg" />
                      </div>
                      Frontend Engineering
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-3 pl-12 leading-relaxed">
                      Crafting highly responsive user views, templates, and dynamic interfaces.
                    </p>
                    <div className="flex flex-wrap gap-2 pl-12">
                      {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Bootstrap'].map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-white dark:bg-zinc-950 hover:bg-purple-950/10 dark:hover:bg-purple-950/30 border border-zinc-200 dark:border-zinc-850 hover:border-purple-500/20 rounded-lg text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skill set 2 */}
                  <div className="group transition-all">
                    <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white mb-3 flex items-center">
                      <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg mr-3 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                        <FaServer className="text-lg" />
                      </div>
                      Backend & Architecture
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-3 pl-12 leading-relaxed">
                      Writing microservices, robust controllers, secure OAuth/JWT flows, and REST endpoints.
                    </p>
                    <div className="flex flex-wrap gap-2 pl-12">
                      {['Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth', 'GraphQL'].map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-white dark:bg-zinc-950 hover:bg-blue-950/10 dark:hover:bg-blue-950/30 border border-zinc-200 dark:border-zinc-850 hover:border-blue-500/20 rounded-lg text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skill set 3 */}
                  <div className="group transition-all">
                    <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white mb-3 flex items-center">
                      <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg mr-3 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                        <FaDatabase className="text-lg" />
                      </div>
                      Database Systems
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-3 pl-12 leading-relaxed">
                      Structuring schemas, normalizing structures, indexing queries, and caching.
                    </p>
                    <div className="flex flex-wrap gap-2 pl-12">
                      {['MongoDB', 'Mongoose', 'SQL / MySQL', 'Redis', 'Firebase'].map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-white dark:bg-zinc-950 hover:bg-emerald-950/10 dark:hover:bg-emerald-950/30 border border-zinc-200 dark:border-zinc-850 hover:border-emerald-500/20 rounded-lg text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skill set 4 */}
                  <div className="group transition-all">
                    <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white mb-3 flex items-center">
                      <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg mr-3 text-amber-605 dark:text-amber-400 group-hover:scale-105 transition-transform">
                        <FaChartBar className="text-lg" />
                      </div>
                      Data Analysis & Intelligence
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-3 pl-12 leading-relaxed">
                      Analyzing trends, graphing statistics, processing sets, and rendering charts.
                    </p>
                    <div className="flex flex-wrap gap-2 pl-12">
                      {['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'].map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-white dark:bg-zinc-950 hover:bg-amber-950/10 dark:hover:bg-amber-950/30 border border-zinc-200 dark:border-zinc-850 hover:border-amber-500/20 rounded-lg text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-300 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
