import React, { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import animationData from '../Ani.json';

const App = () => {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const textRef = useRef(null);
  const detailsRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
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
    }
  }, [loading]);

  return (
    <section
      ref={homeRef}
      id="home"
      className="opacity-0 transform translate-y-10 transition-opacity duration-1000 ease-in-out h-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 text-white pt-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left md:pr-8 mt-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Hey, Welcome</h2>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">I'm ADIL</h2>
          <p
            ref={textRef}
            className="text-xl md:text-2xl font-light opacity-0 transform translate-y-5 transition-all duration-1000 ease-in-out"
          >
            <Typewriter
              options={{
                strings: ['MERN Stack Developer'],
                autoStart: true,
                loop: true,
                cursor: '',
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </p>
          <div
            ref={detailsRef}
            className="opacity-0 transform translate-y-5 transition-all duration-1000 ease-in-out mt-6 space-y-2"
          >
            <p className="text-base md:text-lg">Experienced in building full-stack web applications</p>
            <p className="text-base md:text-lg">Proficient in MongoDB, Express.js, React.js, and Node.js</p>
            <p className="text-base md:text-lg">Passionate about clean code and user-friendly designs</p>
          </div>
          <div
            ref={socialRef}
            className="opacity-0 transform translate-y-5 transition-all duration-1000 ease-in-out mt-6 flex justify-center md:justify-start space-x-4"
          >
            <a href="https://www.facebook.com/Adil.hussain2345/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800" size="lg" />
            </a>
            <a href="https://x.com/adil_hussa1n" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="text-blue-400 hover:text-blue-600" size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/adil-hussa1n/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 hover:text-blue-900" size="lg" />
            </a>
            <a href="https://github.com/adil-hussa1n" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="text-gray-600 hover:text-gray-800" size="lg" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center relative">
          <div className="w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem] bg-gray-800 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 mx-auto md:mx-0 flex items-center justify-center relative">
            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
              <Lottie animationData={animationData} loop className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
