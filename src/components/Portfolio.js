import React, { useRef, useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';
import img1 from '../img/p1.png';
import img2 from '../img/p2.png';
import img3 from '../img/p3.png';
import img4 from '../img/p4.png';
import img5 from '../img/p5.png';
import img6 from '../img/p6.png';

const Portfolio = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      id: 1,
      src: img1,
      title: 'Explore Connect',
      description: 'A social platform for travelers to share experiences and connect with fellow adventurers.',
      longDescription: 'Explore Connect is a full-stack MERN application that allows travelers to share their experiences, create travel logs, and connect with other travelers. Features include user authentication, profile management, post creation with image uploads, commenting, and real-time notifications.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Cloudinary'],
      category: 'fullstack',
      github: 'https://github.com/adil-hussa1n/MERN-PROJECT-Main',
      demo: null,
    },
    {
      id: 2,
      src: img2,
      title: 'Sinox Star',
      description: 'A modern portfolio website with sleek animations and responsive design.',
      longDescription: 'Sinox Star is a responsive portfolio website built with modern web technologies. It features smooth animations, dark mode support, and a clean, professional design that effectively showcases projects and skills.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
      category: 'frontend',
      github: 'https://github.com/adil-hussa1n/sinox-star',
      demo: null,
    },
    {
      id: 3,
      src: img3,
      title: 'JobNest',
      description: 'A cross-platform job search and application mobile app.',
      longDescription: 'JobNest is a cross-platform mobile application built with React Native that helps users find and apply for jobs. It features job search with filters, application tracking, resume builder, and company profiles.',
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
      category: 'mobile',
      github: 'https://github.com/adil-hussa1n/JobNest',
      demo: null,
    },
    {
      id: 4,
      src: img4,
      title: 'AC-TECH',
      description: 'A comprehensive website for a technical education institute.',
      longDescription: 'AC-TECH is a full-stack website for a technical education institute. It includes course listings, student registration, instructor profiles, blog section, and an admin dashboard for content management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/adil-hussa1n/AC-TECH',
      demo: null,
    },
    {
      id: 5,
      src: img5,
      title: 'Nexus Gadgets',
      description: 'A modern e-commerce UI/UX design for a tech gadget store.',
      longDescription: 'Nexus Gadgets is a UI/UX design project for an e-commerce platform specializing in tech gadgets. The design focuses on user experience, accessibility, and conversion optimization with a clean, modern aesthetic.',
      technologies: ['Figma', 'Adobe XD', 'Illustrator'],
      category: 'design',
      github: 'https://github.com/',
      demo: null,
    },
    {
      id: 6,
      src: img6,
      title: 'Food Panda',
      description: 'A food delivery app UI/UX redesign concept.',
      longDescription: 'Food Panda is a UI/UX redesign concept for a food delivery application. The project focuses on improving user flow, reducing friction in the ordering process, and creating a visually appealing interface that enhances the food ordering experience.',
      technologies: ['Figma', 'Sketch', 'Principle'],
      category: 'design',
      github: 'https://github.com/',
      demo: null,
    },
  ];

  // Filter projects based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

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
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      id='portfolio'
      ref={sectionRef}
      className="opacity-0 py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-purple-500 opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500 opacity-5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={contentRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Explore my recent projects. Each project represents my passion for creating elegant, efficient, and user-friendly applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-[1.02] transition-all duration-300 card-hover animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-300"
                        aria-label="View Live Demo"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => openProjectDetails(project)}
                  className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            <div className="relative">
              <img 
                src={selectedProject.src} 
                alt={selectedProject.title} 
                className="w-full h-64 md:h-80 object-cover object-center"
              />
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300"
                aria-label="Close details"
              >
                <FaTimes />
              </button>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Project Overview</h3>
                <p className="text-gray-600 dark:text-gray-300">{selectedProject.longDescription}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg flex items-center gap-2 transition-colors duration-300"
                >
                  <FaGithub /> View Repository
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-medium rounded-lg flex items-center gap-2 transition-all duration-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
