import React, { useEffect, useRef } from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaLaptopCode, FaUserTie } from 'react-icons/fa';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'Frontend Development', icon: <FaCode />, description: 'Building responsive and interactive user interfaces with React.js, Redux, HTML5, CSS3, and JavaScript.' },
    { name: 'Backend Development', icon: <FaServer />, description: 'Creating robust server-side applications using Node.js, Express.js, and RESTful APIs.' },
    { name: 'Mobile Development', icon: <FaMobileAlt />, description: 'Developing cross-platform mobile applications using React Native.' },
    { name: 'Database Management', icon: <FaDatabase />, description: 'Designing and managing databases with MongoDB, MySQL, and Firebase.' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="opacity-0 py-20 lg:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500 opacity-5 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500 opacity-5 rounded-full filter blur-3xl animate-float-medium"></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-indigo-500 opacity-5 rounded-full filter blur-3xl animate-float-fast"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={contentRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            I'm a passionate MERN stack developer dedicated to creating elegant, efficient, and user-friendly web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About Me */}
          <div className="space-y-6 animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 card-hover">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl mr-4 text-white">
                  <FaUserTie className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Who I Am</h3>
              </div>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-purple-600 before:to-blue-500 before:rounded-full">
                  I am a MERN stack developer with a passion for creating clean, efficient, and user-friendly web applications. Currently, I'm a student at Leading University, studying Computer Science and Engineering.
                </p>
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-purple-600 before:rounded-full">
                  Alongside my studies, I actively participate in various extracurricular activities that enhance my skills and broaden my knowledge in the field of web development and software engineering.
                </p>
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-purple-600 before:to-blue-500 before:rounded-full">
                  When I'm not coding, I love exploring new technologies, reading tech blogs, and working on personal projects that challenge me to grow as a developer.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-8 text-white shadow-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl mr-4">
                  <FaLaptopCode className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">My Approach</h3>
              </div>
              <p className="mb-4">
                I believe in writing clean, maintainable code and creating intuitive user experiences. My goal is to build applications that not only look great but also perform exceptionally well.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center">
                  <span className="font-semibold">Problem Solver</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center">
                  <span className="font-semibold">Detail Oriented</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center">
                  <span className="font-semibold">Fast Learner</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center">
                  <span className="font-semibold">Team Player</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 card-hover">
              <h3 className="text-2xl font-bold mb-6 gradient-text">My Skills</h3>
              <div className="space-y-6">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h4 className="text-lg font-semibold mb-3 flex items-center text-gray-800 dark:text-white">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3 text-purple-600 dark:text-purple-400">
                      <FaCode className="text-xl" />
                    </div>
                    Frontend Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 pl-12">
                    I create responsive and interactive user interfaces using modern frontend technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 pl-12">
                    {['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Tailwind CSS', 'Bootstrap'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-200 dark:border-purple-800/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:from-purple-500/20 hover:to-blue-500/20 dark:hover:from-purple-500/30 dark:hover:to-blue-500/30 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h4 className="text-lg font-semibold mb-3 flex items-center text-gray-800 dark:text-white">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3 text-blue-600 dark:text-blue-400">
                      <FaServer className="text-xl" />
                    </div>
                    Backend Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 pl-12">
                    I build robust server-side applications and APIs to power web applications.
                  </p>
                  <div className="flex flex-wrap gap-2 pl-12">
                    {['Node.js', 'Express.js', 'REST API', 'GraphQL', 'JWT', 'OAuth'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 border border-blue-200 dark:border-blue-800/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:from-blue-500/20 hover:to-indigo-500/20 dark:hover:from-blue-500/30 dark:hover:to-indigo-500/30 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h4 className="text-lg font-semibold mb-3 flex items-center text-gray-800 dark:text-white">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3 text-green-600 dark:text-green-400">
                      <FaDatabase className="text-xl" />
                    </div>
                    Database Management
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 pl-12">
                    I work with various database systems to store and manage application data efficiently.
                  </p>
                  <div className="flex flex-wrap gap-2 pl-12">
                    {['MongoDB', 'MySQL', 'Firebase', 'Redis'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 border border-green-200 dark:border-green-800/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:from-green-500/20 hover:to-teal-500/20 dark:hover:from-green-500/30 dark:hover:to-teal-500/30 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h4 className="text-lg font-semibold mb-3 flex items-center text-gray-800 dark:text-white">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3 text-red-600 dark:text-red-400">
                      <FaMobileAlt className="text-xl" />
                    </div>
                    Mobile Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 pl-12">
                    I develop cross-platform mobile applications using modern frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2 pl-12">
                    {['React Native', 'Expo', 'Android Studio', 'iOS'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 border border-red-200 dark:border-red-800/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:from-red-500/20 hover:to-orange-500/20 dark:hover:from-red-500/30 dark:hover:to-orange-500/30 transition-all duration-300">
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
    </section>
  );
};

export default About;
