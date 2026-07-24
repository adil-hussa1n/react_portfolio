import React, { useEffect, useState, useRef } from 'react';

const steps = [
  'Initializing Aurora environment...',
  'Loading styling variables...',
  'Building component elements...',
  'Pre-loading images & assets...',
  'Establishing secure link...',
  'System ready.'
];

const Preloader = () => {
  const [loading, setLoading] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const totalSegments = 15;
  const activeSegments = Math.floor((loading / 100) * totalSegments);

  // Web Audio API refs
  const audioContextRef = useRef(null);
  const humOscRef = useRef(null);
  const sweepOscRef = useRef(null);
  const humGainRef = useRef(null);
  const sweepGainRef = useRef(null);

  // Initialize Audio Context and base oscillators
  const initAudio = () => {
    if (audioContextRef.current) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      const now = ctx.currentTime;

      // 1. Low ambient cyber hum
      const humOsc = ctx.createOscillator();
      const humGain = ctx.createGain();
      humOsc.type = 'sine';
      humOsc.frequency.setValueAtTime(65, now); // Low hum (around C2)
      humGain.gain.setValueAtTime(0.015, now); // Subtle volume

      humOsc.connect(humGain);
      humGain.connect(ctx.destination);
      humOsc.start(now);

      humOscRef.current = humOsc;
      humGainRef.current = humGain;

      // 2. Rising power-up sweep oscillator
      const sweepOsc = ctx.createOscillator();
      const sweepGain = ctx.createGain();
      sweepOsc.type = 'triangle'; // Softer harmonics than sawtooth
      sweepOsc.frequency.setValueAtTime(90, now);
      sweepGain.gain.setValueAtTime(0.01, now);

      // Low pass filter to make the sweep warmer/smoother
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350, now);

      sweepOsc.connect(filter);
      filter.connect(sweepGain);
      sweepGain.connect(ctx.destination);
      sweepOsc.start(now);

      sweepOscRef.current = sweepOsc;
      sweepGainRef.current = sweepGain;
    } catch (e) {
      console.warn('Web Audio API not supported or blocked:', e);
    }
  };

  // Play micro terminal beep
  const playStepBeep = () => {
    const ctx = audioContextRef.current;
    if (!ctx || ctx.state === 'suspended') return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      // High-tech beep with a bit of pitch variance
      const pitch = 950 + Math.random() * 80;
      osc.frequency.setValueAtTime(pitch, now);

      gain.gain.setValueAtTime(0.012, now);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {
      // Ignore audio glitches
    }
  };

  // Play melodic chord when booting completes
  const playCompleteChime = () => {
    const ctx = audioContextRef.current;
    if (!ctx || ctx.state === 'suspended') return;

    try {
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Ascending arpeggio)
      
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.018, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    } catch (e) {
      // Ignore audio glitches
    }
  };

  // Smoothly fade out ambient sounds
  const fadeOutAmbient = () => {
    const ctx = audioContextRef.current;
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      if (humGainRef.current) {
        humGainRef.current.gain.setValueAtTime(humGainRef.current.gain.value, now);
        humGainRef.current.gain.exponentialRampToValueAtTime(0.00001, now + 0.4);
      }
      if (sweepGainRef.current) {
        sweepGainRef.current.gain.setValueAtTime(sweepGainRef.current.gain.value, now);
        sweepGainRef.current.gain.exponentialRampToValueAtTime(0.00001, now + 0.4);
      }

      // Stop oscillators after fade
      setTimeout(() => {
        try {
          if (humOscRef.current) humOscRef.current.stop();
          if (sweepOscRef.current) sweepOscRef.current.stop();
        } catch (err) {}
      }, 500);
    } catch (e) {}
  };

  useEffect(() => {
    // Attempt to initialize on load
    initAudio();

    // Event listener to unlock audio if blocked by autoplay policy
    const handleUnlock = () => {
      initAudio();
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
    };

    window.addEventListener('click', handleUnlock);
    window.addEventListener('touchstart', handleUnlock);
    window.addEventListener('keydown', handleUnlock);

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

    return () => {
      clearInterval(interval);
      window.removeEventListener('click', handleUnlock);
      window.removeEventListener('touchstart', handleUnlock);
      window.removeEventListener('keydown', handleUnlock);
      // Clean up oscillators on unmount
      try {
        if (humOscRef.current) humOscRef.current.stop();
        if (sweepOscRef.current) sweepOscRef.current.stop();
      } catch (e) {}
    };
  }, []);

  useEffect(() => {
    const stepIndex = Math.min(
      Math.floor((loading / 100) * steps.length),
      steps.length - 1
    );
    setCurrentStep(stepIndex);
  }, [loading]);

  // Sync sweep pitch with loading progress
  useEffect(() => {
    if (sweepOscRef.current && audioContextRef.current) {
      try {
        const now = audioContextRef.current.currentTime;
        // Ramp pitch from 90Hz to 480Hz dynamically as loading increments
        const targetFreq = 90 + (loading * 3.9);
        sweepOscRef.current.frequency.setValueAtTime(targetFreq, now);
      } catch (e) {}
    }

    if (loading === 100) {
      playCompleteChime();
      fadeOutAmbient();
    }
  }, [loading]);

  // Play beeps on step change
  useEffect(() => {
    if (currentStep > 0) {
      playStepBeep();
    }
  }, [currentStep]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#030305] z-50 overflow-hidden select-none">
      {/* Interactive Scanlines Overlay */}
      <div className="preloader-scanlines"></div>

      {/* Cyber ambient glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-violet-500/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* Main Holographic Panel */}
      <div className="glitch-flicker relative z-10 flex flex-col items-center max-w-md w-full px-6 text-zinc-100">
        
        {/* Holographic Target Bounding Box & HUD SVG Emblem */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center mb-8">
          {/* Animated concentric HUD circles SVG */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              {/* Outer dashed ring - clockwise */}
              <circle cx="100" cy="100" r="90" className="hud-ring-cw stroke-zinc-800/40" strokeWidth="1" fill="none" strokeDasharray="5, 10" />
              
              {/* Outer corner ticks */}
              <circle cx="100" cy="100" r="84" className="stroke-zinc-800/20" strokeWidth="0.5" fill="none" />
              
              {/* Middle split ring - counter clockwise */}
              <circle cx="100" cy="100" r="76" className="hud-ring-ccw stroke-cyan-500/30" strokeWidth="1.5" fill="none" strokeDasharray="40, 15, 10, 15, 60, 20" />
              
              {/* Inner ring - clockwise */}
              <circle cx="100" cy="100" r="66" className="hud-ring-cw stroke-emerald-500/40" strokeWidth="1" fill="none" strokeDasharray="120, 20, 10, 20" />
              
              {/* Central static circles and brackets */}
              <circle cx="100" cy="100" r="56" className="stroke-zinc-800/60" strokeWidth="0.75" fill="none" strokeDasharray="3, 3" />
              <circle cx="100" cy="100" r="48" className="hud-ring-pulse stroke-cyan-400/20 fill-cyan-500/5" strokeWidth="1" />
              
              {/* HUD Crosshairs */}
              <line x1="100" y1="12" x2="100" y2="24" className="stroke-cyan-500/50" strokeWidth="1.5" />
              <line x1="100" y1="176" x2="100" y2="188" className="stroke-cyan-500/50" strokeWidth="1.5" />
              <line x1="12" y1="100" x2="24" y2="100" className="stroke-cyan-500/50" strokeWidth="1.5" />
              <line x1="176" y1="100" x2="188" y2="100" className="stroke-cyan-500/50" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Centered Glowing Code Emblem */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="font-mono text-3xl sm:text-4xl font-black tracking-widest bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.45)]">
              &lt;/&gt;
            </div>
            <div className="font-mono text-[9px] text-cyan-400/80 mt-2 tracking-[0.2em] font-semibold uppercase animate-pulse">
              boot_sys
            </div>
          </div>
        </div>

        {/* Cyber Segmented Progress Bar */}
        <div className="flex flex-col items-center w-full mb-8">
          <div className="flex items-center gap-1.5 justify-center mb-3.5 w-full">
            {[...Array(totalSegments)].map((_, i) => {
              const isActive = i < activeSegments;
              return (
                <div
                  key={i}
                  className={`flex-1 h-3.5 skew-x-[-12deg] rounded-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-t from-emerald-500 to-cyan-400 opacity-100 shadow-[0_0_8px_rgba(6,182,212,0.4)]'
                      : 'bg-zinc-900 border border-zinc-800/40 opacity-30'
                  }`}
                />
              );
            })}
          </div>
          
          <div className="flex items-center justify-between w-full px-1 font-mono text-[10px] text-zinc-500">
            <span className="tracking-wider">SYS_BOOT_STABLE</span>
            <span className="text-cyan-400 font-bold tracking-wider">[{loading}%]</span>
            <span className="tracking-wider">PORT_80_ONLINE</span>
          </div>
        </div>

        {/* Holographic console card */}
        <div className="w-full bg-black/60 backdrop-blur-md border border-zinc-800/80 rounded-xl p-4 font-mono text-left shadow-2xl shadow-cyan-500/2">
          {/* Window header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40"></span>
              <span className="text-[10px] text-zinc-500 ml-2">sys_boot.log</span>
            </div>
            <span className="text-[9px] text-zinc-600">ADDR: 0x8F9E</span>
          </div>

          {/* Logs */}
          <div className="space-y-1.5 text-xs">
            {steps.slice(0, currentStep).map((step, idx) => (
              <div key={idx} className="text-zinc-500 flex items-start gap-2.5">
                <span className="text-emerald-500 font-semibold font-sans">✓</span>
                <span className="text-[10px] text-zinc-700 font-semibold">0x0{idx + 3}A</span>
                <span className="text-emerald-500/70 font-semibold">[OK]</span>
                <span className="text-zinc-400">{step}</span>
              </div>
            ))}
            {currentStep < steps.length && (
              <div className="text-cyan-400 flex items-start gap-2.5 animate-pulse">
                <span className="text-cyan-500 font-bold">&gt;</span>
                <span className="text-[10px] text-cyan-800 font-semibold">0x0{currentStep + 3}A</span>
                <span className="text-cyan-400 font-semibold">[RUN]</span>
                <span>{steps[currentStep]}</span>
              </div>
            )}
          </div>
        </div>

        {/* Elegant branded subtext */}
        <div className="mt-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">
            Adil Hussain
          </span>
          <p className="text-[10px] font-mono text-zinc-600 mt-1.5 tracking-wider">
            v3.5.0 // Aurora Core Edition
          </p>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
