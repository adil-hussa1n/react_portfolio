import React, { useRef, useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaTerminal } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import img1 from '../img/p1.png';
import img2 from '../img/p2.png';
import img3 from '../img/p3.png';
import img4 from '../img/p4.png';
import img5 from '../img/p5.png';
import img6 from '../img/p6.png';
import img11 from '../img/p11.png';

const Portfolio = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      src: img11,
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
      src: img11,
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
      src: img11,
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
      src: img11,
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
      src: img11,
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
      src: img11,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Tailwind CSS.',
      longDescription: 'My personal portfolio website built with React and Tailwind CSS. Features include responsive design, dark mode, animations, and contact form integration with EmailJS. The site showcases my projects, skills, and professional experience.',
      technologies: ['React', 'Tailwind CSS', 'EmailJS', 'AOS'],
      category: 'frontend',
      github: 'https://github.com/adil-hussa1n/react_portfolio',
      demo: 'https://adilhussain.online',
    },
  ];

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'UI/UX Design' },
  ];

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

  return (
    <section
      id='portfolio'
      ref={sectionRef}
      className="opacity-0 py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-purple-500 opacity-5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500 opacity-5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-green-500 opacity-5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-green-500 opacity-5 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text tracking-tight">My Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my recent projects showcasing my expertise in web development, mobile applications, data analysis, and UI/UX design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 mt-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg ${filter === 'all' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'} transition-all duration-300 transform hover:scale-105`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg ${filter === 'fullstack' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'} transition-all duration-300 transform hover:scale-105`}
          >
            Full Stack
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg ${filter === 'frontend' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'} transition-all duration-300 transform hover:scale-105`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter('mobile')}
            className={`px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg ${filter === 'mobile' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'} transition-all duration-300 transform hover:scale-105`}
          >
            Mobile
          </button>
          <button
            onClick={() => setFilter('data')}
            className={`px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg ${filter === 'data' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'} transition-all duration-300 transform hover:scale-105`}
          >
            Data Analysis
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-[1.02] transition-all duration-300 card-hover animate-fade-in-up relative"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Terminal-like header */}
              <div className="bg-gray-100 dark:bg-gray-700 py-2 px-3 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                  <span className="mr-1.5">{project.category}</span>
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></div>
                </div>
              </div>
              
              <div className="relative overflow-hidden group">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-40 sm:h-44 lg:h-48 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub className="text-sm sm:text-lg" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-300"
                        aria-label="View Live Demo"
                      >
                        <FaExternalLinkAlt className="text-sm sm:text-lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-5">
                {/* Project title with code-like formatting */}
                <div className="mb-3 font-mono">
                  <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">project</span> <span className="text-gray-600 dark:text-gray-400">= {'{'}</span>
                  <div className="pl-4 mt-1">
                    <span className="text-green-600 dark:text-green-400">name:</span> <span className="text-orange-600 dark:text-orange-400">'{project.title}'</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{'}'}</div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 border-l-2 border-gray-300 dark:border-gray-600 pl-3">{project.description}</p>
                
                {/* Tech stack with code-like formatting */}
                <div className="mb-3 font-mono text-xs">
                  <span className="text-green-600 dark:text-green-400">stack:</span> <span className="text-gray-600 dark:text-gray-400">[</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200 dark:border-blue-800/30 text-blue-800 dark:text-blue-300">
                        '{tech}'
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">]</div>
                </div>
                
                <button
                  onClick={() => openProjectDetails(project)}
                  className="w-full py-1.5 sm:py-2 px-3 sm:px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-medium rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  <FaCode /> View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-xl text-gray-600 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeProjectDetails}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full border border-gray-200 dark:border-gray-700">
              {/* Terminal-like header */}
              <div className="bg-gray-100 dark:bg-gray-700 py-2 px-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                  <BiCodeAlt className="mr-1" /> project-details.js
                </div>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                  onClick={closeProjectDetails}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    {/* Project title with code-like formatting */}
                    <div className="font-mono mb-4">
                      <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">projectDetails</span> <span className="text-gray-600 dark:text-gray-400">= {'{'}</span>
                      <div className="pl-4 mt-1">
                        <span className="text-green-600 dark:text-green-400">title:</span> <span className="text-orange-600 dark:text-orange-400">"{selectedProject.title}"</span><span className="text-gray-600 dark:text-gray-400">,</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-green-600 dark:text-green-400">category:</span> <span className="text-orange-600 dark:text-orange-400">"{selectedProject.category}"</span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">{'}'}</div>
                    </div>
                    
                    <div className="mt-4 mb-6 relative overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 mix-blend-overlay"></div>
                      <img 
                        src={selectedProject.src} 
                        alt={selectedProject.title} 
                        className="w-full h-64 sm:h-80 object-cover object-center rounded-lg shadow-md"
                      />
                    </div>
                    
                    <div className="mt-6 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <FaTerminal className="mr-2 text-purple-600 dark:text-purple-400" /> 
                          Project Description
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 border-l-4 border-purple-500 pl-4 py-2">{selectedProject.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <FaCode className="mr-2 text-blue-600 dark:text-blue-400" /> 
                          Technologies Used
                        </h4>
                        <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                          <span className="text-green-600 dark:text-green-400">technologies:</span> <span className="text-gray-600 dark:text-gray-400">[</span>
                          <div className="flex flex-wrap gap-2 mt-2 pl-4">
                            {selectedProject.technologies.map((tech, index) => (
                              <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200 dark:border-blue-800/30 rounded-md text-sm font-medium text-blue-800 dark:text-blue-300">
                                '{tech}'
                              </span>
                            ))}
                          </div>
                          <span className="text-gray-600 dark:text-gray-400">]</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 pt-2">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-800 dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                          <FaGithub className="mr-2" /> GitHub Repository
                        </a>
                        {selectedProject.demo && (
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                          >
                            <FaExternalLinkAlt className="mr-2" /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
