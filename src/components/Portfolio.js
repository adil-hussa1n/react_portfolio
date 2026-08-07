import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaTerminal, FaSearchPlus, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import omnipos1 from '../img/omnipos/1.png';
import omnipos2 from '../img/omnipos/2.png';
import omnipos3 from '../img/omnipos/3.png';
import omnipos4 from '../img/omnipos/4.png';
import imgJobNest from '../img/jobnest.jpg';

// Screenshots Gallery Imports
import medify1 from '../img/medify_247/1.png';
import medify2 from '../img/medify_247/2.png';
import medify3 from '../img/medify_247/3.png';
import medify4 from '../img/medify_247/4.png';

import bloodify1 from '../img/bloodify_247/1.png';
import bloodify2 from '../img/bloodify_247/2.png';
import bloodify3 from '../img/bloodify_247/3.png';
import bloodify4 from '../img/bloodify_247/4.png';

import indoor1 from '../img/indoor_management_system/1.png';
import indoor2 from '../img/indoor_management_system/2.png';
import indoor3 from '../img/indoor_management_system/3.png';
import indoor4 from '../img/indoor_management_system/4.png';
import indoor5 from '../img/indoor_management_system/5.png';
import indoor6 from '../img/indoor_management_system/6.png';

import personality1 from '../img/personality_ai/1.png';
import personality2 from '../img/personality_ai/2.png';
import personality3 from '../img/personality_ai/3.png';
import personality4 from '../img/personality_ai/4.png';
import personality5 from '../img/personality_ai/5.png';
import personality6 from '../img/personality_ai/6.png';
import personality7 from '../img/personality_ai/7.png';

import sential1 from '../img/sential_ai/1.png';
import sential2 from '../img/sential_ai/2.png';
import sential3 from '../img/sential_ai/3.png';
import sential4 from '../img/sential_ai/4.png';
import sential5 from '../img/sential_ai/5.png';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'ai', name: 'AI & Machine Learning' },
  { id: 'mobile', name: 'Mobile' },
];

const projects = [
  {
    id: 1,
    src: indoor1,
    screenshots: [indoor1, indoor2, indoor3, indoor4, indoor5, indoor6],
    title: 'Indoor Management System',
    description: 'A full-stack multi-tenant SaaS platform for indoor sports businesses to manage venues, court bookings, schedules, customers, and daily operations.',
    longDescription: 'Apex Arena is a premium multi-tenant indoor sports management SaaS platform built with React 19, Node.js, Express, and MySQL. Designed for indoor sports businesses, the platform provides centralized management of courts, bookings, schedules, customers, transactions, and day-to-day venue operations. It features shift-based court pricing, real-time availability, transaction concurrency and slot-locking to prevent double bookings, real-time synchronization through Socket.IO, interactive booking workflows, custom alert dialogs, and an immersive Pannellum 360° virtual venue tour. The SaaS architecture is designed to support multiple indoor sports businesses through independent business environments while maintaining centralized platform administration.',
    technologies: ['React 19', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Socket.io', 'Pannellum'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/Indoor-Management-System',
    demo: null,
  },
  {
    id: 2,
    src: omnipos4,
    screenshots: [omnipos4, omnipos1, omnipos2, omnipos3],
    title: 'Restaurant POS & Management SaaS',
    description: 'A full-stack multi-tenant SaaS platform for restaurant POS and business management.',
    longDescription: 'A premium React 19 + Laravel multi-tenant SaaS platform designed to help restaurants and food service businesses manage point-of-sale operations, orders, tables, transactions, and business performance from a centralized system. It features multiple Zustand state stores, real-time transaction calculations, cart and order management, dynamic table and order state mapping for dine-in and takeaway workflows, print-ready receipt generation, dark mode, and an advanced sales analytics dashboard. The platform is designed with a scalable SaaS architecture to support multiple restaurant businesses within a centralized management environment.',
    technologies: ['React 19', 'Vite', 'Laravel', 'MySQL', 'Zustand', 'Tailwind CSS v4'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n',
    demo: null,
  },
  {
    id: 3,
    src: personality1,
    screenshots: [personality1, personality2, personality3, personality4, personality5, personality6, personality7],
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
    src: sential1,
    screenshots: [sential1, sential2, sential3, sential4, sential5],
    title: 'Sentinel AI — Smart Camera Object Detection',
    description: 'An intelligent computer vision & object detection system for real-time stream analysis.',
    longDescription: 'Sentinel AI is an intelligent computer vision system leveraging Python, OpenCV, YOLOv8, and PyTorch to perform real-time video stream object recognition, perimeter threat monitoring, security violation log tracking, and instant automated alert triggers.',
    technologies: ['Python', 'OpenCV', 'YOLOv8', 'PyTorch', 'Computer Vision', 'Deep Learning', 'FastAPI'],
    category: 'ai',
    github: 'https://github.com/adil-hussa1n/Sentinel-AI',
    demo: null,
  },
  {
    id: 5,
    src: medify1,
    screenshots: [medify1, medify2, medify3, medify4],
    title: 'Medify_247',
    description: 'A full-stack medical appointment scheduling and subscription management portal.',
    longDescription: 'Medify_247 is a comprehensive healthcare system with doctor/patient authentication, online booking portals, home diagnostics requests, secure subscription plans, payment gateway integration, and a dedicated admin coordination dashboard.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/Medify_247',
    demo: null,
  },
  {
    id: 6,
    src: bloodify1,
    screenshots: [bloodify1, bloodify2, bloodify3, bloodify4],
    title: 'Bloodify-247',
    description: 'A real-time community blood donor registration and emergency seeker network.',
    longDescription: 'Bloodify-247 connects blood seekers and verified community donors instantly. It features dynamic donor filtering by location/blood group, real-time emergency request boards, SMS notification alerts, and full admin review controls.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/Blood-donation',
    demo: null,
  },
  {
    id: 7,
    src: imgJobNest,
    screenshots: [imgJobNest],
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
  const [activeScreenshot, setActiveScreenshot] = useState(null);
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

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
    setActiveScreenshot(project.src);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    setTimeout(() => { setSelectedProject(null); setActiveScreenshot(null); document.body.style.overflow = 'auto'; }, 300);
  };

  return (
    <>
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
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${filter === cat.id
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
                <div className="relative overflow-hidden group cursor-pointer" onClick={() => { setLightboxIndex(index); setLightboxImageIndex(0); }}>
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
          {lightboxIndex !== null && filteredProjects[lightboxIndex] && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md" onClick={() => setLightboxIndex(null)}>
              {/* Close Button */}
              <button onClick={() => setLightboxIndex(null)} className="absolute top-5 right-5 z-[110] p-3 rounded-full bg-zinc-900/80 border border-zinc-700/50 text-zinc-300 hover:text-white transition-colors" aria-label="Close">
                <FaTimes className="text-xl" />
              </button>

              {/* Left/Right Navigation buttons for Screenshots within the current project or projects array */}
              {lightboxImageIndex > 0 && (
                <button onClick={(e) => { e.stopPropagation(); setLightboxImageIndex(prev => prev - 1); }} className="absolute left-4 z-[110] p-4 rounded-full bg-zinc-900/70 border border-zinc-700/50 text-zinc-300 hover:text-white transition-colors" aria-label="Previous Screenshot">
                  <FaArrowLeft />
                </button>
              )}

              {filteredProjects[lightboxIndex].screenshots && lightboxImageIndex < filteredProjects[lightboxIndex].screenshots.length - 1 && (
                <button onClick={(e) => { e.stopPropagation(); setLightboxImageIndex(prev => prev + 1); }} className="absolute right-4 z-[110] p-4 rounded-full bg-zinc-900/70 border border-zinc-700/50 text-zinc-300 hover:text-white transition-colors" aria-label="Next Screenshot">
                  <FaArrowRight />
                </button>
              )}

              <div className="relative max-w-5xl max-h-[90vh] w-[92%] flex flex-col items-center p-2" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  key={`${lightboxIndex}-${lightboxImageIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={filteredProjects[lightboxIndex].screenshots ? filteredProjects[lightboxIndex].screenshots[lightboxImageIndex] || filteredProjects[lightboxIndex].src : filteredProjects[lightboxIndex].src}
                  alt={filteredProjects[lightboxIndex].title}
                  className="max-w-full max-h-[78vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-zinc-800/50 select-none"
                />

                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold text-white">{filteredProjects[lightboxIndex].title}</h4>
                  <p className="text-xs text-zinc-400 mt-1 font-mono">
                    Screenshot {lightboxImageIndex + 1} of {(filteredProjects[lightboxIndex].screenshots || [filteredProjects[lightboxIndex].src]).length}
                  </p>

                  {/* Lightbox Thumbnails Strip */}
                  {filteredProjects[lightboxIndex].screenshots && filteredProjects[lightboxIndex].screenshots.length > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-3 overflow-x-auto max-w-full py-1">
                      {filteredProjects[lightboxIndex].screenshots.map((imgSrc, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => setLightboxImageIndex(sIdx)}
                          className={`w-14 h-10 rounded-md overflow-hidden border-2 transition-all ${lightboxImageIndex === sIdx ? 'border-cyan-400 scale-110 shadow-lg' : 'border-zinc-700 opacity-50 hover:opacity-100'
                            }`}
                        >
                          <img src={imgSrc} alt={`Thumb ${sIdx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </section>

      {/* ===== Project Details Modal (Portal/Global Viewport level) ===== */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeProjectDetails}
            />

            {/* Centered Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-surface-900 border border-zinc-200/50 dark:border-zinc-800/30 text-left overflow-hidden shadow-2xl max-w-5xl w-full rounded-2xl relative z-10 max-h-[85vh] flex flex-col"
            >

              {/* Modal header */}
              <div className="bg-zinc-50/80 dark:bg-zinc-950/80 py-3 px-5 flex items-center justify-between border-b border-zinc-200/40 dark:border-zinc-800/30 flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <span className="text-xs text-zinc-500 font-mono font-semibold truncate max-w-[250px] sm:max-w-none">
                  {selectedProject.title}
                </span>
                <button onClick={closeProjectDetails} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50">
                  <FaTimes />
                </button>
              </div>

              <div className="p-5 sm:p-7 overflow-y-auto flex-1 scrollbar-thin">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                  {/* Left Column — Screenshots Preview */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="relative overflow-hidden rounded-xl group cursor-zoom-in bg-zinc-950/80 border border-zinc-800/20 flex items-center justify-center min-h-[220px] max-h-[380px]" onClick={() => {
                      closeProjectDetails();
                      const pIdx = projects.findIndex(p => p.id === selectedProject.id);
                      const sIdx = (selectedProject.screenshots || []).findIndex(s => s === activeScreenshot);
                      setLightboxIndex(pIdx);
                      setLightboxImageIndex(sIdx >= 0 ? sIdx : 0);
                    }}>
                      <img src={activeScreenshot || selectedProject.src} alt={selectedProject.title} className="w-full h-auto max-h-[380px] object-contain rounded-xl transition-all duration-300 group-hover:scale-[1.01]" />
                      <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <FaSearchPlus className="text-xs" />
                      </div>
                    </div>

                    {/* Thumbnails */}
                    {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                      <div>
                        <p className="text-[11px] font-mono text-zinc-500 mb-2 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Screenshots ({selectedProject.screenshots.length}):
                        </p>
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                          {selectedProject.screenshots.map((imgSrc, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveScreenshot(imgSrc)}
                              className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${(activeScreenshot === imgSrc || (!activeScreenshot && idx === 0))
                                ? 'border-cyan-500 scale-105 shadow-md shadow-cyan-500/20'
                                : 'border-zinc-300 dark:border-zinc-700 opacity-60 hover:opacity-100'
                                }`}
                            >
                              <img src={imgSrc} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column — Project Information */}
                  <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400 capitalize mb-2">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">{selectedProject.title}</h3>

                      <div className="mb-4">
                        <h4 className="text-xs font-bold mb-1.5 flex items-center gap-2 font-mono text-zinc-900 dark:text-white uppercase tracking-wider">
                          <FaTerminal className="text-emerald-500" /> Description
                        </h4>
                        <p className="text-zinc-600 dark:text-zinc-400 border-l-2 border-emerald-500/40 pl-3 leading-relaxed text-xs sm:text-sm">{selectedProject.longDescription}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold mb-2 flex items-center gap-2 font-mono text-zinc-900 dark:text-white uppercase tracking-wider">
                          <FaCode className="text-cyan-500" /> Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs font-mono text-emerald-600 dark:text-emerald-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5 pt-4 border-t border-zinc-200/30 dark:border-zinc-800/20">
                      {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                          className="btn-aurora-outline inline-flex items-center px-4 py-2 rounded-xl text-xs sm:text-sm bg-white/50 dark:bg-zinc-900/30 backdrop-blur-md">
                          <FaGithub className="mr-2" /> GitHub Repository
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                          className="btn-aurora inline-flex items-center px-4 py-2 rounded-xl text-xs sm:text-sm">
                          <FaExternalLinkAlt className="mr-2" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
