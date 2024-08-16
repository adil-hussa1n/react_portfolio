import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Preloader;
