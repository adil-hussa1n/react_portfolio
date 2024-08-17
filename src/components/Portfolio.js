import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../img/p1.png';
import img2 from '../img/p2.png';
import img3 from '../img/p3.png';
import img4 from '../img/p4.png';
import img5 from '../img/p5.png';
import img6 from '../img/p6.png';

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      if (
        portfolioRef.current &&
        portfolioRef.current.getBoundingClientRect().top < window.innerHeight
      ) {
        portfolioRef.current.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      src: img1,
      title: 'Explore Connect',
      description: 'Fullstack MERN Web Application.',
      link: 'https://github.com/adil-hussa1n/MERN-PROJECT-Main',
    },
    {
      src: img2,
      title: 'Sinox Star',
      description: 'Portfolio.',
      link: 'https://github.com/adil-hussa1n/sinox-star',
    },
    {
      src: img3,
      title: 'JobNest',
      description: 'Cross Platform Job Application.',
      link: 'https://github.com/adil-hussa1n/JobNest',
    },
    {
      src: img4,
      title: 'AC-TECH',
      description: 'Fullstack Tech Institute Website.',
      link: 'https://github.com/adil-hussa1n/AC-TECH',
    },
    {
      src: img5,
      title: 'Nexus Gadgets',
      description: 'UI/UX Design.',
      link: 'https://github.com/',
    },
    {
      src: img6,
      title: 'Food Panda',
      description: 'UI/UX Design.',
      link: 'https://github.com/',
    },
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id='portfolio'
      ref={portfolioRef}
      data-aos="fade-up"
      className="bg-white dark:bg-gray-900 py-10 px-6 md:px-12 lg:px-24 relative"
    >
      <div className="absolute top-12 right-4">
        <a
          href="https://github.com/adil-hussa1n"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-white bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl transform-gpu hover:shadow-blue-700/50"
        >
          Visit My GitHub
        </a>
      </div>

      <div className="container mx-auto">
        <h1 className="mt-7 text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          My Portfolio
        </h1>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          Showcase of my recent projects. Click on the project titles to view more details.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
        {/* Portfolio items start */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 transform transition-transform duration-300 hover:scale-95 cursor-pointer"
            onClick={() => handleImageClick(project.src)}
          >
            <img
              src={project.src}
              alt={project.title}
              className="object-cover w-full rounded-xl aspect-square"
            />
            <h1 className="mt-4 text-xl font-semibold text-gray-700 capitalize dark:text-white">
              {project.title}
            </h1>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex mt-3 -mx-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 transition-opacity duration-300">
          <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-500 scale-105 p-4 max-w-md">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-96 border-8 border-gray-200 rounded-lg object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 transition duration-300 shadow-lg"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
