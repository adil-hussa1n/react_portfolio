import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Initializing Aurora environment...',
    'Loading styling variables...',
    'Building component elements...',
    'Pre-loading images & assets...',
    'Establishing secure link...',
    'System ready.'
  ];

  const totalSegments = 10;
  const activeSegments = Math.floor((loading / 100) * totalSegments);

  useEffect(() => {
    // Increment progress
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepIndex = Math.min(
      Math.floor((loading / 100) * steps.length),
      steps.length - 1
    );
    setCurrentStep(stepIndex);
  }, [loading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#040406] z-50 overflow-hidden">
      {/* Subtle center glow only, no mesh gradient or dot grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/5 blur-[80px] rounded-full"></div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        
        {/* Holographic Target Bounding Box & Developer Emblem */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-10">
          {/* Breathing cyber background ring */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border border-zinc-800/40 animate-pulse-slow"></div>
          
          {/* Dynamic rotating outer compass points */}
          <div className="absolute inset-0 border border-dashed border-zinc-800/40 rounded-2xl animate-spin-slow"></div>

          {/* Corner brackets frame */}
          <div className="absolute inset-1.5 animate-pulse" style={{ animationDuration: '3s' }}>
            {/* Top Left */}
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-500 rounded-tl-md"></div>
            {/* Top Right */}
            <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-500 rounded-tr-md"></div>
            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-500 rounded-bl-md"></div>
            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-500 rounded-br-md"></div>
          </div>

          {/* Glowing Code Emblem */}
          <div className="relative font-mono text-4xl font-black tracking-widest bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.45)]">
            &lt;/&gt;
          </div>
        </div>

        {/* Cyber Segmented Progress Bar */}
        <div className="flex flex-col items-center w-full mb-8">
          <div className="flex items-center gap-1.5 justify-center mb-3">
            {[...Array(totalSegments)].map((_, i) => {
              const isActive = i < activeSegments;
              return (
                <div
                  key={i}
                  className={`w-4.5 h-8 skew-x-[-12deg] rounded-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-t from-emerald-500 to-cyan-400 opacity-100 shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                      : 'bg-zinc-800/60 opacity-30 border border-zinc-700/20'
                  }`}
                />
              );
            })}
          </div>
          
          <div className="flex items-center justify-between w-full max-w-[210px] px-1 font-mono text-[10px] text-zinc-500">
            <span>SYS_READY</span>
            <span className="text-cyan-400 font-semibold tracking-wider">[{loading}%]</span>
            <span>SEC_LINK</span>
          </div>
        </div>

        {/* Holographic console card */}
        <div className="w-full bg-black/60 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-4 font-mono text-left shadow-2xl">
          {/* Window header */}
          <div className="flex items-center gap-1.5 border-b border-zinc-800/80 pb-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
            <span className="text-[10px] text-zinc-500 ml-2">sys_boot.log</span>
          </div>

          {/* Logs */}
          <div className="space-y-1.5 text-xs">
            {steps.slice(0, currentStep).map((step, idx) => (
              <div key={idx} className="text-zinc-500 flex items-center gap-2">
                <span className="text-emerald-500">✔</span>
                <span>{step}</span>
              </div>
            ))}
            <div className="text-cyan-400 flex items-center gap-2 animate-pulse">
              <span className="text-cyan-500">&gt;</span>
              <span>{steps[currentStep]}</span>
            </div>
          </div>
        </div>

        {/* Elegant branded subtext */}
        <div className="mt-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 font-medium">
            Adil Hussain
          </span>
          <p className="text-[10px] font-mono text-zinc-600 dark:text-zinc-600 mt-1">
            v3.5.0 // Aurora Edition
          </p>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
