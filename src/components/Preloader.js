import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after a short delay
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Progress bar animation
    const interval = setInterval(() => {
      setLoading((prevLoading) => {
        if (prevLoading >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevLoading + 1;
      });
    }, 25); // Faster loading for better UX

    return () => {
      clearInterval(interval);
      clearTimeout(textTimer);
    };
  }, []);

  // Letters for animation
  const letters = "ADIL HUSSAIN".split('');

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black z-50">
      <div className="text-center px-4">
        <div className="mb-8">
          {showText && (
            <div className="flex flex-wrap justify-center mb-6">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className={`text-3xl md:text-5xl font-bold ${letter === ' ' ? 'mx-2' : ''} 
                    opacity-0 animate-fade-in-down`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    {letter}
                  </span>
                </span>
              ))}
            </div>
          )}
          <p 
            className="text-lg text-gray-400 mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '1.8s' }}
          >
            Portfolio Loading
          </p>
        </div>

        <div className="relative w-64 md:w-80 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full transition-all duration-100"
            style={{ width: `${loading}%` }}
          />
        </div>

        <div className="flex justify-between mt-2 text-xs text-gray-500 w-64 md:w-80 mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <span>0%</span>
          <span>{loading}%</span>
          <span>100%</span>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-3 h-3 bg-purple-600 rounded-full mx-1 animate-bounce"
            style={{ animationDelay: '0s' }}
          />
          <div className="w-3 h-3 bg-blue-500 rounded-full mx-1 animate-bounce"
            style={{ animationDelay: '0.2s' }}
          />
          <div className="w-3 h-3 bg-purple-400 rounded-full mx-1 animate-bounce"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
