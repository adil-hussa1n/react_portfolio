import React, { useEffect, useRef } from 'react';
import image1 from '../img/1.jpg';
import image2 from '../img/2.png';
import image3 from '../img/3.png';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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

  return (
    <section
    ref={sectionRef}
    id="about"
    className="opacity-0 transition-opacity duration-1000 overflow-hidden pt-24 pb-16 lg:pt-[130px] lg:pb-[100px] bg-gray-100 dark:bg-gray-800"
  >
    <div className="container mx-auto mt-10 mb-10">
      <div className="flex flex-wrap items-center justify-between -mx-4">
        <div className="w-full px-4 lg:w-6/12">
          <div className="flex items-center -mx-3 sm:-mx-4">
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <div className="py-3 sm:py-4 mx-2">
                <img
                  src={image1}
                  alt="Image 1"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="py-3 sm:py-4 mx-2">
                <img
                  src={image3}
                  alt="Image 2"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <div className="relative my-4 mx-2">
                <img
                  src={image2}
                  alt="Image 3"
                  className="w-full rounded-2xl"
                />
                <span className="absolute -right-7 -bottom-7 z-[-1]">
                  <svg
                    width={134}
                    height={106}
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG circles */}
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-5/12">
          <div className="py-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white mx-2">
              About Me
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 mx-2">
              I am a passionate MERN stack developer with extensive experience in building scalable web applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 mx-2">
              I am currently a student at Leading University, studying in the CSE department. Alongside my studies, I actively participate in various extracurricular activities that enhance my skills and broaden my knowledge.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 mx-2">
              When I'm not coding, I love exploring new technologies, reading tech blogs, and working on personal projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
