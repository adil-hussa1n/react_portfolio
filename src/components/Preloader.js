import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Preloader = () => {
  const [showFirstText, setShowFirstText] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const firstTextTimer = setTimeout(() => {
      setShowFirstText(false);
    }, 3000); // Show "Hey, Welcome To" for 3 seconds

    const preloaderTimer = setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
      navigate('/'); // Redirect to home page after hiding preloader
    }, 6000); // Total duration of 6 seconds before hiding preloader

    return () => {
      clearTimeout(firstTextTimer);
      clearTimeout(preloaderTimer);
    };
  }, [navigate]);

  return (
    <div
      id="preloader"
      className="fixed inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900 z-[10000] flex items-center justify-center"
    >
      <div className="text-center font-extrabold text-white">
        {showFirstText ? (
          <h1 className="text-3xl sm:text-3xl xs:text-2xl animate-text-fade-in-out">
            Hey, Welcome To
          </h1>
        ) : (
          <h1 className="text-4xl sm:text-2xl xs:text-xl animate-text-fade-in-out">
            ADILHUSSA1N.COM
          </h1>
        )}
      </div>
    </div>
  );
};

export default Preloader;
