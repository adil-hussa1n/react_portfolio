import React, { useRef, useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaTerminal, FaSearchPlus, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

import imgNew1 from '../img/1.png';
import imgNew2 from '../img/2.png';
import imgNew3 from '../img/3.png';
import imgExploreConnect from '../img/exploreconnect.jpg';
import imgJobNest from '../img/jobnest.jpg';
import imgDataDashboard from '../img/data_dashboard.jpg';
import imgSportsAcademy from '../img/sports_academy.png';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'data', name: 'Data Analysis' },
];

const projects = [
  {
    id: 1,
    src: imgExploreConnect,
    title: 'Explore Connect',
    description: 'A full-stack travel booking web application for exploring Bangladesh.',
    longDescription: 'Explore Connect is a full-stack travel booking web application with secure user authentication, online payments, and admin/client dashboards for managing trips across Bangladesh. Features include user profiles, booking management, payment processing, and detailed trip information.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT Authentication'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/explore-connect',
    demo: null,
  },
  {
    id: 2,
    src: imgJobNest,
    title: 'JobNest',
    description: 'A cross-platform mobile app for job search and management.',
    longDescription: 'JobNest is a cross-platform mobile application designed to enable users to search, post, and manage jobs with real-time updates, filters, and personalized dashboards. The app provides a seamless experience for both job seekers and employers.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
    category: 'mobile',
    github: 'https://github.com/adil-hussa1n/JobNest',
    demo: null,
  },
  {
    id: 3,
    src: imgSportsAcademy,
    title: 'Sports Academy',
    description: 'A full-stack web portal for sports class registration and management.',
    longDescription: 'Sports Academy is a full-stack web portal for class registration, featuring user accounts, admin class management, and integrated payment processing. The platform allows students to browse available classes, register, and manage their schedules.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/sports-academy',
    demo: null,
  },
  {
    id: 4,
    src: imgNew1,
    title: 'AC-TECH Institute',
    description: 'A comprehensive website for a technical education institute.',
    longDescription: 'AC-TECH Institute is a full-stack website for a technical education institute where I work as an IT Instructor. It includes course listings, student registration, instructor profiles, blog section, and an admin dashboard for content management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/AC-TECH',
    demo: null,
  },
  {
    id: 5,
    src: imgDataDashboard,
    title: 'Data Analysis Dashboard',
    description: 'Interactive data visualization dashboard for business analytics.',
    longDescription: 'A comprehensive data analysis dashboard built with Python and Power BI that visualizes business metrics and KPIs. The dashboard includes interactive charts, filters, and drill-down capabilities for in-depth analysis of sales, marketing, and operational data.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI'],
    category: 'data',
    github: 'https://github.com/adil-hussa1n',
    demo: null,
  },
  {
    id: 6,
    src: imgNew2,
    title: 'Personal Account Assistant AI',
    description: 'An AI-powered financial dashboard for tracking transactions, managing accounts, and budgeting.',
    longDescription: 'Personal Account Assistant AI is a comprehensive financial dashboard featuring real-time transaction tracking, accounts management, category breakdowns, budgeting tools, calendar views, and smart insights to optimize your financial health.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/Personal-Account-Assistant-AI',
    demo: null,
  },
  {
    id: 7,
    src: imgNew3,
    title: 'Bloodify247',
    description: 'A community blood donor network connecting donors and seekers in real-time.',
    longDescription: 'Bloodify247 is a web application designed to connect blood donors with those in need within the Beanibazar community. Features include donor registration, real-time donor search by blood group, emergency requests posting, and a comprehensive admin dashboard.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/adil-hussa1n/Bloodify247',
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
  
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter projects based on active category
  useEffect(() => {
    const filtered = filter === 'all'
      ? projects
      : projects.filter(project => project.category === filter);
    setFilteredProjects(filtered);
  }, [filter]);

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

  // Handle ESC key to close modal/lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeProjectDetails();
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id='portfolio'
      ref={sectionRef}
      className="opacity-0 py-20 lg:py-32 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative overflow-hidden transition-colors duration-500"
    >
      {/* Background decoration orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] glow-orb-purple opacity-20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] glow-orb-blue opacity-20 rounded-full animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text tracking-tight glow-text-purple">My Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A hand-picked showcase of full-stack products, responsive mobile applications, interactive data dashboards, and clean interfaces.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 border ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 border-transparent text-white shadow-lg shadow-purple-500/20'
                  : 'bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden shadow-xl animate-fade-in-up relative flex flex-col justify-between"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Terminal-like header */}
              <div className="bg-zinc-100/60 dark:bg-zinc-950/70 py-2.5 px-4 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-900">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-500 font-mono flex items-center">
                  <span className="mr-1.5 capitalize">{project.category}</span>
                  <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
                </div>
              </div>

              {/* Card Image Wrapper with Hover Zoom Icon overlay */}
              <div className="relative overflow-hidden group cursor-pointer" onClick={() => setLightboxIndex(index)}>
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-44 sm:h-48 lg:h-52 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <div className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-white/25">
                    <FaSearchPlus className="text-xl" />
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 hover:text-white transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-zinc-800"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <div className="mb-4 font-mono text-sm">
                    <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">proj</span> <span className="text-zinc-650 dark:text-zinc-550">= {'{'}</span>
                    <div className="pl-4 mt-1">
                      <span className="text-emerald-650 dark:text-emerald-400">name</span><span className="text-zinc-500">:</span> <span className="text-amber-600 dark:text-amber-300">'{project.title}'</span>
                    </div>
                    <span className="text-zinc-655 dark:text-zinc-550">{'}'}</span>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 border-l-2 border-purple-500/50 pl-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack with code-like tags */}
                  <div className="mb-4 font-mono text-[11px]">
                    <span className="text-emerald-655 dark:text-emerald-400">stack</span><span className="text-zinc-500">:</span> <span className="text-zinc-655 dark:text-zinc-550">[</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] bg-purple-550/10 dark:bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300">
                          '{tech}'
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="text-zinc-655 dark:text-zinc-550">]</span>
                  </div>

                  <button
                    onClick={() => openProjectDetails(project)}
                    className="btn-premium w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-purple-500/20 text-sm"
                  >
                    <FaCode /> View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-lg text-zinc-500 dark:text-zinc-400">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Picture Preview Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 select-none" onClick={() => setLightboxIndex(null)}>
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-[110] p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close Lightbox"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 z-[110] p-4 rounded-full bg-zinc-900/60 border border-zinc-800/60 text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
              aria-label="Previous Image"
            >
              <FaArrowLeft className="text-lg" />
            </button>

            {/* Right navigation arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 z-[110] p-4 rounded-full bg-zinc-900/60 border border-zinc-800/60 text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
              aria-label="Next Image"
            >
              <FaArrowRight className="text-lg" />
            </button>

            {/* Image display panel */}
            <div className="relative max-w-5xl max-h-[85vh] w-[90%] flex flex-col items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={filteredProjects[lightboxIndex].src}
                alt={filteredProjects[lightboxIndex].title}
                className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl border border-zinc-800/50"
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-white font-mono">{filteredProjects[lightboxIndex].title}</h4>
                <p className="text-sm text-zinc-400 mt-1 capitalize">{filteredProjects[lightboxIndex].category} Project</p>
              </div>
            </div>

          </div>
        )}
      </AnimatePresence>

      {/* Project Details Text Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* Overlay background */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
                aria-hidden="true" 
                onClick={closeProjectDetails}
              />

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              {/* Modal box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="inline-block align-bottom bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full rounded-2xl relative z-10"
              >
                {/* Terminal-like header */}
                <div className="bg-zinc-100 dark:bg-zinc-950 py-3 px-5 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-500 font-mono flex items-center">
                    <BiCodeAlt className="mr-1 text-purple-600 dark:text-purple-400" /> project-details.js
                  </div>
                  <button
                    type="button"
                    className="text-zinc-500 hover:text-zinc-800 dark:hover:text-white transition-colors focus:outline-none"
                    onClick={closeProjectDetails}
                  >
                    <span className="sr-only">Close</span>
                    <FaTimes className="text-lg" />
                  </button>
                </div>

                <div className="bg-white dark:bg-zinc-900 px-5 pt-5 pb-5 sm:p-7">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:text-left w-full">
                      {/* Project title with code-like formatting */}
                      <div className="font-mono text-sm mb-5 text-zinc-850 dark:text-zinc-200">
                        <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">projectDetails</span> <span className="text-zinc-650 dark:text-zinc-550">= {'{'}</span>
                        <div className="pl-4 mt-1">
                          <span className="text-emerald-650 dark:text-emerald-400">title</span><span className="text-zinc-500">:</span> <span className="text-amber-600 dark:text-amber-300">"{selectedProject.title}"</span><span className="text-zinc-500">,</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-emerald-655 dark:text-emerald-400">category</span><span className="text-zinc-500">:</span> <span className="text-amber-600 dark:text-amber-300">"{selectedProject.category}"</span>
                        </div>
                        <span className="text-zinc-650 dark:text-zinc-550">{'}'}</span>
                      </div>

                      {/* Display Image with quick preview zoom button inside details too */}
                      <div className="mt-4 mb-6 relative overflow-hidden rounded-xl group cursor-zoom-in" onClick={() => { closeProjectDetails(); setLightboxIndex(projects.findIndex(p => p.id === selectedProject.id)); }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-40 mix-blend-overlay"></div>
                        <img
                          src={selectedProject.src}
                          alt={selectedProject.title}
                          className="w-full h-64 sm:h-80 object-cover object-top rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800/40 transition-transform duration-500 hover:scale-102"
                        />
                        <div className="absolute top-4 right-4 p-2.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <FaSearchPlus className="text-base" />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2 font-mono">
                            <FaTerminal className="text-purple-600 dark:text-purple-400" />
                            Project Description
                          </h4>
                          <p className="text-zinc-600 dark:text-zinc-400 border-l-2 border-purple-500/60 pl-4 py-1.5 leading-relaxed text-sm">{selectedProject.description}</p>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2 font-mono">
                            <FaCode className="text-blue-600 dark:text-blue-400" />
                            Technologies Used
                          </h4>
                          <div className="font-mono text-xs bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-900">
                            <span className="text-emerald-650 dark:text-emerald-400">technologies</span><span className="text-zinc-500">:</span> <span className="text-zinc-650 dark:text-zinc-550">[</span>
                            <div className="flex flex-wrap gap-2 mt-2 pl-4">
                              {selectedProject.technologies.map((tech, index) => (
                                <span key={index} className="px-2.5 py-1 bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/20 rounded-md text-xs text-purple-600 dark:text-purple-300">
                                  '{tech}'
                                </span>
                              ))}
                            </div>
                            <span className="text-zinc-650 dark:text-zinc-550">]</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                          {selectedProject.github && (
                            <a
                              href={selectedProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2.5 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold rounded-xl text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-850 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-md"
                            >
                              <FaGithub className="mr-2" /> GitHub Repository
                            </a>
                          )}
                          {selectedProject.demo && (
                            <a
                              href={selectedProject.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-premium inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/10"
                            >
                              <FaExternalLinkAlt className="mr-2" /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>
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
