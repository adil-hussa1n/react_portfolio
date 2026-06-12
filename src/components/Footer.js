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
    { icon: <FaGithub />, url: 'https://github.com/adil-hussa1n', label: 'GitHub', hoverClass: 'hover:bg-zinc-700 hover:text-white' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/adil-hussa1n/', label: 'LinkedIn', hoverClass: 'hover:bg-blue-700 hover:text-white' },
    { icon: <FaTwitter />, url: 'https://x.com/adil_hussa1n', label: 'Twitter', hoverClass: 'hover:bg-sky-500 hover:text-white' },
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/Adil.hussain2345/', label: 'Facebook', hoverClass: 'hover:bg-blue-600 hover:text-white' },
  ];

  return (
    <footer className="relative bg-zinc-100 dark:bg-zinc-950 pt-16 pb-8 overflow-hidden text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-500">
      {/* Ambient background glows */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 glow-orb-blue opacity-10 rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 glow-orb-purple opacity-10 rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          
          {/* Logo and description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-wider bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-400 bg-clip-text text-transparent dark:glow-text-purple">
              Adil Hussain
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              IT Instructor at AC Tech Institute and Full Stack Developer with expertise in React, Node, and Data Science. Passionate about building performant web products.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className={`p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 transition-all duration-300 ${link.hoverClass}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 font-mono">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {sections.map((section, index) => (
                <li key={index}>
                  <a 
                    href={section.path}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="text-purple-655 dark:text-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 font-mono">Contact Details</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400">Location:</span> Sylhet, Bangladesh
              </p>
              <p className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400">Email:</span> hussainadil981@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400">Phone:</span> +8801715541267
              </p>
            </div>
            <div className="pt-2">
              <a 
                href="#contact"
                className="btn-premium inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-purple-500/20 text-xs sm:text-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>

        </div>
        
        {/* Divider */}
        <div className="border-t border-zinc-200 dark:border-zinc-900 mb-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-zinc-500 dark:text-zinc-500 text-xs sm:text-sm gap-2">
          <p>&copy; {currentYear} Adil Hussain. All Rights Reserved.</p>
          <p className="font-mono text-zinc-400 dark:text-zinc-600">Designed &amp; Engineered by Adil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
