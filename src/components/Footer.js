import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Contact', path: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/adil-hussa1n', label: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/adil-hussa1n/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/adil_hussa1n', label: 'Twitter' },
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/Adil.hussain2345/', label: 'Facebook' },
  ];

  return (
    <footer className="relative bg-white/30 dark:bg-surface-950/50 pt-16 pb-8 overflow-hidden text-zinc-600 dark:text-zinc-400 border-t border-zinc-200/30 dark:border-zinc-800/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight aurora-text">
              Adil Hussain
            </h2>
            <p className="text-sm leading-relaxed">
              Web Developer at Darun Tech Private Limited. Full Stack Developer specializing in React, Node.js, and MongoDB. Passionate about building scalable web applications.
            </p>
            <div className="flex space-x-2 pt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/30 text-zinc-500 hover:border-cyan-500/40 hover:text-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 backdrop-blur-md transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-4">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={section.path}
                    className="hover:text-cyan-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="text-emerald-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-4">Contact Details</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p><span className="text-emerald-500 font-medium">Location:</span> Sylhet, Bangladesh</p>
              <p><span className="text-emerald-500 font-medium">Email:</span> hussainadil981@gmail.com</p>
              <p><span className="text-emerald-500 font-medium">Phone:</span> +8801715541267</p>
            </div>
            <a href="#contact" className="btn-aurora inline-flex items-center px-5 py-2.5 rounded-xl text-xs sm:text-sm mt-2">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Animated gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent mb-6"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-zinc-500 text-xs sm:text-sm gap-2">
          <p>&copy; {currentYear} Adil Hussain. All Rights Reserved.</p>
          <p className="font-mono text-zinc-400 dark:text-zinc-600">Designed &amp; Engineered by Adil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
