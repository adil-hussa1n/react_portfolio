import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaTerminal, FaSearchPlus, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import imgNew1 from '../img/1.png';
import imgNew2 from '../img/2.png';
import imgNew3 from '../img/3.png';
import imgExploreConnect from '../img/exploreconnect.jpg';
import imgJobNest from '../img/jobnest.jpg';
import imgSportsAcademy from '../img/sports_academy.png';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'ai', name: 'AI & Machine Learning' },
  { id: 'mobile', name: 'Mobile' },
];

const projects = [
  {
    id: 1,
    src: imgNew1,
    title: 'OmniPOS — Universal Business Management System',
    description: 'A full-stack universal point-of-sale (POS) and business management system.',
    longDescription: 'OmniPOS is a premium React 19 + Laravel point-of-sale and business management platform designed for diverse retail and hospitality businesses. It features multiple Zustand state stores, real-time transaction processing, cart management, dynamic table/order state mapping (dine-in, takeaway, retail transaction flows), print-ready receipt rendering, dark mode, and an advanced sales analytics dashboard.',
    technologies: ['React 19', 'Vite', 'Laravel', 'MySQL', 'Zustand', 'Tailwind CSS v4'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/The-Cage-Cafe-Pos',
    demo: null,
  },
  {
    id: 2,
    src: imgSportsAcademy,
    title: 'Apex Arena',
    description: 'A full-stack indoor sports booking platform with real-time websocket scheduling.',
    longDescription: 'Apex Arena is a premium sports court reservation platform built using React 19, Express, and MySQL. It features shift-based court rates, transaction concurrency slot-locking, real-time WebSocket syncing via Socket.IO, custom alert dialogs, and an interactive Pannellum 360° virtual tour.',
    technologies: ['React 19', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Socket.io', 'Pannellum'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/Indoor-Management-System',
    demo: null,
  },
  {
    id: 3,
    src: imgNew2,
    title: 'AI Personality Predictor',
    description: 'An NLP machine learning system classifying MBTI personality types from text.',
    longDescription: 'AI Personality Predictor leverages Next.js 15, FastAPI, and scikit-learn. It processes raw user text or files through a spaCy/NLTK pipeline (URL removal, lemmatization, custom stop words) to predict MBTI types with confidence levels and full interactive Plotly probability breakdowns.',
    technologies: ['Next.js 15', 'FastAPI', 'Python', 'scikit-learn', 'NLP', 'NLTK', 'spaCy', 'Plotly'],
    category: 'ai',
    github: 'https://github.com/adil-hussa1n/AI-Personality-Prediction',
    demo: 'https://ai-personality-prediction.vercel.app/',
  },
  {
    id: 4,
    src: imgExploreConnect,
    title: 'Smart Camera Object Detection',
    description: 'An intelligent computer vision system for real-time video stream recognition.',
    longDescription: 'Smart Camera Object Detection uses OpenCV, YOLOv8, and PyTorch to perform object recognition, track security perimeter violation logic, execute threat verification log recordings, and trigger instant email/webhook notification alerts.',
    technologies: ['Python', 'OpenCV', 'YOLOv8', 'PyTorch', 'Computer Vision', 'Deep Learning'],
    category: 'ai',
    github: 'https://github.com/adil-hussa1n',
    demo: null,
  },
  {
    id: 5,
    src: imgNew3,
    title: 'Medify247',
    description: 'A full-stack medical appointment scheduling and subscription management portal.',
    longDescription: 'Medify247 is a comprehensive healthcare system with doctor/patient authentication, online booking portals, home diagnostics requests, secure subscription plans, payment gateway integration, and a dedicated admin coordination dashboard.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/Medify247',
    demo: null,
  },
  {
    id: 6,
    src: imgNew3,
    title: 'Bloodify247',
    description: 'A real-time community blood donor registration and emergency seeker network.',
    longDescription: 'Bloodify247 connects blood seekers and verified community donors instantly. It features dynamic donor filtering by location/blood group, real-time emergency request boards, SMS notification alerts, and full admin review controls.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/Bloodify247',
    demo: null,
  },
  {
    id: 7,
    src: imgJobNest,
    title: 'JobNest',
    description: 'A cross-platform mobile job portal for job search and tracking.',
    longDescription: 'JobNest is a cross-platform mobile application built using React Native and Expo. It enables candidates to search jobs with advanced filters, submit applications, track review status, and allows employers to post listings with real-time analytics dashboards.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux Store', 'REST APIs'],
    category: 'mobile',
    github: 'https://github.com/adil-hussa1n/JobNest',
    demo: null,
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    setFilteredProjects(filter === 'all' ? projects : projects.filter(p => p.category === filter));
  }, [filter]);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { closeProjectDetails(); setLightboxIndex(null); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Spotlight cursor effect handler
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    setTimeout(() => { setSelectedProject(null); document.body.style.overflow = 'auto'; }, 300);
  };

  return (
    <section
      id='portfolio'
      ref={sectionRef}
      className="opacity-0 py-20 lg:py-32 bg-transparent text-zinc-900 dark:text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            My <span className="aurora-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A hand-picked showcase of full-stack products, responsive mobile applications, and clean interfaces.
          </p>
        </div>

        {/* Category Filter — pill style */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 border-transparent text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white/50 dark:bg-zinc-900/30 border-zinc-200/50 dark:border-zinc-800/30 text-zinc-600 dark:text-zinc-400 hover:border-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-400 backdrop-blur-md'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="aurora-card spotlight-card animated-border-card rounded-2xl overflow-hidden animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              onMouseMove={handleMouseMove}
            >
              {/* Category badge header */}
              <div className="bg-zinc-50/60 dark:bg-zinc-950/40 py-2.5 px-4 flex items-center justify-between border-b border-zinc-200/40 dark:border-zinc-800/20">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono capitalize flex items-center gap-1.5">
                  {project.category}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </span>
              </div>

              {/* Image with hover overlay */}
              <div className="relative overflow-hidden group cursor-pointer" onClick={() => setLightboxIndex(index)}>
                <img
                  src={project.src}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-44 sm:h-48 lg:h-52 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <div className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors">
                    <FaSearchPlus />
                  </div>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}>
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[10px] font-mono text-emerald-600 dark:text-emerald-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 bg-zinc-100/50 dark:bg-zinc-800/30 border border-zinc-200/50 dark:border-zinc-700/30 rounded-md text-[10px] font-mono text-zinc-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => openProjectDetails(project)}
                    className="btn-aurora w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm"
                  >
                    <FaCode /> View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-lg text-zinc-500">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* ===== Lightbox ===== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={() => setLightboxIndex(null)}>
            <button onClick={() => setLightboxIndex(null)} className="absolute top-5 right-5 z-[110] p-3 rounded-full bg-zinc-900/80 border border-zinc-700/50 text-zinc-300 hover:text-white transition-colors" aria-label="Close">
              <FaTimes className="text-xl" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev === 0 ? filteredProjects.length - 1 : prev - 1); }} className="absolute left-4 z-[110] p-4 rounded-full bg-zinc-900/60 border border-zinc-700/40 text-zinc-300 hover:text-white transition-colors" aria-label="Previous">
              <FaArrowLeft />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev === filteredProjects.length - 1 ? 0 : prev + 1); }} className="absolute right-4 z-[110] p-4 rounded-full bg-zinc-900/60 border border-zinc-700/40 text-zinc-300 hover:text-white transition-colors" aria-label="Next">
              <FaArrowRight />
            </button>
            <div className="relative max-w-5xl max-h-[85vh] w-[90%] flex flex-col items-center p-2" onClick={(e) => e.stopPropagation()}>
              <motion.img key={lightboxIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
                src={filteredProjects[lightboxIndex].src} alt={filteredProjects[lightboxIndex].title}
                className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl border border-zinc-800/50" />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-white">{filteredProjects[lightboxIndex].title}</h4>
                <p className="text-sm text-zinc-400 mt-1 capitalize">{filteredProjects[lightboxIndex].category}</p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ===== Project Details Modal ===== */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={closeProjectDetails} />
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
              <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ duration: 0.3 }}
                className="inline-block align-bottom bg-white dark:bg-surface-900 border border-zinc-200/50 dark:border-zinc-800/30 text-left overflow-hidden shadow-2xl transform sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full rounded-2xl relative z-10">
                
                {/* Modal header */}
                <div className="bg-zinc-50/80 dark:bg-zinc-950/80 py-3 px-5 flex items-center justify-between border-b border-zinc-200/40 dark:border-zinc-800/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">project-details.js</span>
                  <button onClick={closeProjectDetails} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <FaTimes />
                  </button>
                </div>

                <div className="p-5 sm:p-7">
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <span className="inline-block px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400 capitalize mb-4">
                    {selectedProject.category}
                  </span>

                  <div className="relative overflow-hidden rounded-xl mb-6 group cursor-zoom-in" onClick={() => { closeProjectDetails(); setLightboxIndex(projects.findIndex(p => p.id === selectedProject.id)); }}>
                    <img src={selectedProject.src} alt={selectedProject.title} loading="lazy" className="w-full h-64 sm:h-80 object-cover object-top rounded-xl border border-zinc-200/30 dark:border-zinc-800/20 transition-transform duration-500 hover:scale-[1.02]" />
                    <div className="absolute top-4 right-4 p-2.5 bg-black/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaSearchPlus className="text-sm" />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <h4 className="text-sm font-bold mb-2 flex items-center gap-2 font-mono text-zinc-900 dark:text-white">
                        <FaTerminal className="text-emerald-500" /> Description
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 border-l-2 border-emerald-500/40 pl-4 leading-relaxed text-sm">{selectedProject.longDescription}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold mb-2 flex items-center gap-2 font-mono text-zinc-900 dark:text-white">
                        <FaCode className="text-cyan-500" /> Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs font-mono text-emerald-600 dark:text-emerald-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                          className="btn-aurora-outline inline-flex items-center px-4 py-2.5 rounded-xl text-sm bg-white/50 dark:bg-zinc-900/30 backdrop-blur-md">
                          <FaGithub className="mr-2" /> GitHub Repository
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                          className="btn-aurora inline-flex items-center px-5 py-2.5 rounded-xl text-sm">
                          <FaExternalLinkAlt className="mr-2" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
