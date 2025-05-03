import React from 'react';
import { FaHeart, FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

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
    <footer className="relative bg-white dark:bg-gray-900 pt-16 pb-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500 opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500 opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Adil Hussain</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A passionate MERN Stack Developer focused on creating elegant, efficient, and user-friendly web applications.  
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li key={index}>
                  <a 
                    href={section.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Info</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>Sylhet, Bangladesh</p>
              <p>hussainadil981@gmail.com</p>
              <p>+8801715541267</p>
            </div>
            <div className="mt-4">
              <a 
                href="#contact"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mb-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; {currentYear} Adil Hussain. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <FaHeart className="text-red-500 mx-1" /> by Adil Hussain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
