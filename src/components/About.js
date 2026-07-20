import React, { useEffect, useRef } from 'react';
import { FaCode, FaServer, FaDatabase, FaCloud, FaUserTie, FaGraduationCap, FaBriefcase, FaTerminal } from 'react-icons/fa';

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          if (contentRef.current) contentRef.current.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Frontend',
      color: 'emerald',
      skills: ['React.js', 'React Native', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Vite'],
    },
    {
      icon: <FaServer />,
      title: 'Backend',
      color: 'cyan',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
    },
    {
      icon: <FaDatabase />,
      title: 'Database',
      color: 'violet',
      skills: ['MongoDB', 'Mongoose', 'Supabase', 'Firebase'],
    },
    {
      icon: <FaCloud />,
      title: 'Cloud & DevOps',
      color: 'amber',
      skills: ['AWS', 'Vercel', 'Netlify', 'Docker', 'Git', 'Postman'],
    },
  ];

  const colorMap = {
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      text: 'text-emerald-600 dark:text-emerald-400',
      hoverBg: 'hover:bg-emerald-500/10',
      hoverBorder: 'hover:border-emerald-500/30',
      hoverText: 'hover:text-emerald-600 dark:hover:text-emerald-300',
    },
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      text: 'text-cyan-600 dark:text-cyan-400',
      hoverBg: 'hover:bg-cyan-500/10',
      hoverBorder: 'hover:border-cyan-500/30',
      hoverText: 'hover:text-cyan-600 dark:hover:text-cyan-300',
    },
    violet: {
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/20',
      text: 'text-violet-600 dark:text-violet-400',
      hoverBg: 'hover:bg-violet-500/10',
      hoverBorder: 'hover:border-violet-500/30',
      hoverText: 'hover:text-violet-600 dark:hover:text-violet-300',
    },
    amber: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      text: 'text-amber-600 dark:text-amber-400',
      hoverBg: 'hover:bg-amber-500/10',
      hoverBorder: 'hover:border-amber-500/30',
      hoverText: 'hover:text-amber-600 dark:hover:text-amber-300',
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="opacity-0 py-20 lg:py-32 overflow-hidden bg-transparent text-zinc-900 dark:text-white relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={contentRef}>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            About <span className="aurora-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            I am a CSE graduate, software engineer, and full-stack developer committed to creating interactive, robust digital experiences.
          </p>
        </div>

        {/* ===== BENTO GRID LAYOUT ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* BENTO: Who I Am — spans 2 cols on lg */}
          <div className="lg:col-span-2 aurora-card spotlight-card animated-border-card rounded-2xl p-6 sm:p-8 bento-item">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mr-4 text-emerald-500">
                <FaUserTie className="text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Who I Am</h3>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-zinc-50/50 dark:bg-zinc-950/50 p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-800/30 mb-4">
              <span className="text-violet-500">const</span> <span className="text-cyan-500">aboutMe</span> <span className="text-zinc-500">= {'{'}</span>
              <div className="pl-4 mt-1">
                <span className="text-emerald-500">role</span><span className="text-zinc-500">:</span> <span className="text-amber-500">'Software Engineer & Full Stack Dev'</span><span className="text-zinc-500">,</span>
              </div>
              <div className="pl-4">
                <span className="text-emerald-500">interest</span><span className="text-zinc-500">:</span> <span className="text-amber-500">'Modern UI & Interactive Products'</span>
              </div>
              <span className="text-zinc-500">{'}'}</span>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
              When I'm not building full-stack applications at Darun Tech, I focus on mentoring next-generation engineers, exploring new technologies, and contributing to communities.
            </p>
          </div>

          {/* BENTO: Education — 1 col */}
          <div className="aurora-card spotlight-card animated-border-card rounded-2xl p-6 sm:p-8 bento-item">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mr-4 text-cyan-500">
                <FaGraduationCap className="text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Education</h3>
            </div>

            <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:h-[90%] before:w-[2px] before:bg-gradient-to-b before:from-emerald-500 before:to-cyan-500">
              <div className="relative space-y-2">
                <div className="absolute -left-[28px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] border-2 border-white dark:border-surface-950"></div>
                <h4 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white">Leading University</h4>
                <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">B.Sc. in Computer Science & Engineering</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  March 2025
                </p>
                <div className="pt-2.5 border-t border-zinc-200/40 dark:border-zinc-800/30 mt-3 text-xs text-zinc-650 dark:text-zinc-400">
                  <p className="flex items-start gap-1.5">
                    <span className="text-emerald-500">&bull;</span>
                    <span>Former General Secretary, Steering Committee (2024-2025), LUCC</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO: Experience — spans full width on lg */}
          <div className="lg:col-span-3 aurora-card spotlight-card animated-border-card rounded-2xl p-6 sm:p-8 bento-item">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-violet-500/10 border border-violet-500/20 rounded-xl mr-4 text-violet-500">
                <FaBriefcase className="text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Professional Experience</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Darun Tech */}
              <div className="relative pl-6 border-l-2 border-emerald-500/30">
                <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-emerald-500/10 rounded-full text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  CURRENT
                </div>
                <h4 className="font-bold text-base sm:text-lg">Darun Tech Private Limited</h4>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Software Engineer</p>
                <p className="text-xs text-zinc-500 mt-1">October 2025 &ndash; Present</p>
                <div className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                  <p>&bull; Develop and maintain scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB</p>
                  <p>&bull; Build responsive, user-centric interfaces and integrate RESTful APIs</p>
                  <p>&bull; Collaborate with cross-functional teams using Agile methodologies</p>
                </div>
              </div>

              {/* AC Tech */}
              <div className="relative pl-6 border-l-2 border-cyan-500/30">
                <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>
                <h4 className="font-bold text-base sm:text-lg mt-1">AC Tech Institute</h4>
                <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">IT Instructor</p>
                <p className="text-xs text-zinc-500 mt-1">January 2025 &ndash; September 2025</p>
                <div className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                  <p>&bull; Delivered instruction in HTML, CSS, JavaScript and responsive web design</p>
                  <p>&bull; Mentored students through capstone projects resulting in portfolio-ready applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO: My Approach — 1 col */}
          <div className="aurora-card spotlight-card animated-border-card rounded-2xl p-6 sm:p-8 bento-item bg-gradient-to-br from-emerald-500/5 to-cyan-500/5">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mr-4 text-cyan-500">
                <FaTerminal className="text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">My Approach</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
              Clean, performant, and scalable code. Visual details, smooth interactions, and accessibility are central to my process.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono font-semibold">
              {['Problem Solving', 'Detail Oriented', 'Fast Learner', 'Collaboration'].map((tag, idx) => (
                <div key={idx} className="bg-white/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/30 p-2.5 rounded-xl text-center hover:border-cyan-500/30 transition-all text-zinc-600 dark:text-zinc-400">
                  <span className="text-emerald-500 mr-1">&bull;</span>{tag}
                </div>
              ))}
            </div>
          </div>

          {/* BENTO: Skills — spans 2 cols on lg */}
          <div className="lg:col-span-2 aurora-card spotlight-card animated-border-card rounded-2xl p-6 sm:p-8 bento-item">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Technical Arsenal</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((cat, catIdx) => {
                const colors = colorMap[cat.color];
                return (
                  <div key={catIdx} className="group">
                    <h4 className="text-sm font-bold mb-3 flex items-center">
                      <div className={`p-2 ${colors.bg} border ${colors.border} rounded-lg mr-3 ${colors.text} group-hover:scale-110 transition-transform`}>
                        {cat.icon}
                      </div>
                      {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 bg-white/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/30 ${colors.hoverBorder} rounded-lg text-[11px] font-mono text-zinc-600 dark:text-zinc-400 ${colors.hoverText} transition-all duration-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
