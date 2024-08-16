import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import animationData from '../Ani.json';

const Home = () => {
  const homeRef = useRef(null);
  const textRef = useRef(null);
  const detailsRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    if (homeRef.current) {
      setTimeout(() => {
        homeRef.current.classList.add('animate');
      }, 1000);
    }
    if (textRef.current) {
      setTimeout(() => {
        textRef.current.classList.remove('opacity-0', 'translate-y-5');
      }, 1500);
    }
    if (detailsRef.current) {
      setTimeout(() => {
        detailsRef.current.classList.remove('opacity-0', 'translate-y-5');
      }, 2000);
    }
    if (socialRef.current) {
      setTimeout(() => {
        socialRef.current.classList.remove('opacity-0', 'translate-y-5');
      }, 2500);
    }
  }, []);

  return (
    <section
      ref={homeRef}
      id="home"
      className="opacity-0 transform translate-y-10 transition-opacity duration-1000 ease-in-out h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-5xl font-extrabold mb-4">Hey, Welcome</h1>
          <h2 className="text-4xl font-semibold mb-2">I'm ADIL</h2>
          <p
            ref={textRef}
            className="text-2xl font-light opacity-0 transform translate-y-5 transition-all duration-1000 ease-in-out"
          >
            <Typewriter
              options={{
                strings: ['MERN Stack Developer'],
                autoStart: true,
                loop: true,
                cursor: '|',
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </p>
          <div
            ref={detailsRef}
            className="opacity-0 transform translate-y-5 transition-all duration-1000 ease-in-out mt-6 space-y-2"
          >
            <p className="text-lg">Experienced in building full-stack web applications</p>
            <p className="text-lg">Proficient in MongoDB, Express.js, React.js, and Node.js</p>
            <p className="text-lg">Passionate about clean code and user-friendly designs</p>
          </div>
          <div
            ref={socialRef}
            className="opacity-0 transform translate-y-5 transition-all duration-1000 ease-in-out mt-6 flex justify-center md:justify-start space-x-4"
          >
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800" size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-blue-400 hover:text-blue-600" size="2x" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 hover:text-blue-900" size="2x" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-gray-600 hover:text-gray-800" size="2x" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center relative">
          <div className="w-[32rem] h-[32rem] bg-gray-800 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 mx-auto md:mx-0 flex items-center justify-center relative">
            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
              {/* Lottie Animation */}
              <Lottie
                animationData={animationData}
                loop
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
