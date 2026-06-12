import React, { useRef, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          if (contentRef.current) {
            contentRef.current.classList.add('animate-fade-in');
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required.';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };
  
  const contactInfo = [
    {
      icon: <FiMapPin className="text-xl" />,
      title: "Location",
      content: "Sylhet, Bangladesh",
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: "Phone",
      content: "+8801715541267",
    },
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      content: "hussainadil981@gmail.com",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true);

      emailjs
        .sendForm(
          'service_pa2he78',
          'template_gqslsby',
          formRef.current,
          '_IH4Due-KhM-yNs9i'
        )
        .then(
          (result) => {
            setIsSent(true);
            formRef.current.reset();
            setFormData({
              fullName: '',
              phoneNumber: '',
              email: '',
              message: '',
            });
            setErrors({});
            setIsSending(false);
            setTimeout(() => setIsSent(false), 5000);
          },
          (error) => {
            console.error(error.text);
            setIsSending(false);
          }
        );
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="opacity-0 py-20 lg:py-32 relative overflow-hidden bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-500"
    >
      {/* Background decoration orbs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] glow-orb-purple opacity-20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] glow-orb-blue opacity-20 rounded-full animate-pulse-slow animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={contentRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text tracking-tight glow-text-purple">
            Get In <span className="text-zinc-900 dark:text-white">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-zinc-655 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out and I will reply as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left side - Contact Info */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in-right">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-zinc-200 dark:border-zinc-800/80">
              {/* Terminal Header */}
              <div className="absolute top-0 left-0 w-full bg-zinc-100/60 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-900/60 py-2.5 px-4 flex items-center">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 text-[10px] font-mono text-zinc-500 flex items-center">
                  <FiMail className="mr-1 text-purple-600 dark:text-purple-400" /> contact-info.js
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-6">Contact Information</h3>
                
                <div className="font-mono text-xs sm:text-sm mb-6 bg-zinc-100 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-900">
                  <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">contactInfo</span> <span className="text-zinc-655 dark:text-zinc-500">= {'{'}...{'}'}</span> <span className="text-zinc-500">{"// My contact details"}</span>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-white text-sm sm:text-base">{info.title}</h4>
                        <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-0.5">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              
                <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-900">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-4 text-sm sm:text-base">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {[
                      { url: "https://www.facebook.com/Adil.hussain2345/", icon: <FaFacebookF />, hoverClass: "hover:bg-blue-600 hover:text-white" },
                      { url: "https://x.com/adil_hussa1n", icon: <FaTwitter />, hoverClass: "hover:bg-sky-500 hover:text-white" },
                      { url: "https://www.linkedin.com/in/adil-hussa1n/", icon: <FaLinkedinIn />, hoverClass: "hover:bg-blue-700 hover:text-white" },
                      { url: "https://github.com/adil-hussa1n", icon: <FaGithub />, hoverClass: "hover:bg-zinc-700 hover:text-white" }
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-3 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 transition-all duration-300 ${item.hoverClass}`}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 dark:from-purple-900/40 dark:to-blue-900/40 border border-purple-500/10 rounded-2xl p-6 sm:p-8 text-zinc-755 dark:text-zinc-300 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">Let's Build Something Amazing</h3>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">I am currently available for freelance work and open to new opportunities.</p>
              <a 
                href="/resume10.pdf" 
                download="adil-hussain_cv.pdf"
                className="btn-premium inline-block px-5 py-2.5 bg-white text-zinc-950 font-bold rounded-xl hover:bg-zinc-100 transition-colors shadow-md text-sm"
              >
                Download CV
              </a>
            </div>

          </div>
          
          {/* Right side - Contact Form */}
          <div className="lg:col-span-7 animate-fade-in-left">
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-zinc-200 dark:border-zinc-800/80">
              {/* Terminal Header */}
              <div className="absolute top-0 left-0 w-full bg-zinc-100/60 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-900/60 py-2.5 px-4 flex items-center">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 text-[10px] font-mono text-zinc-500 flex items-center">
                  <FiSend className="mr-1 text-purple-600 dark:text-purple-400" /> message-form.js
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-6">Send Me a Message</h3>
                
                <div className="font-mono text-xs sm:text-sm mb-6 bg-zinc-100 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-900">
                  <span className="text-purple-600 dark:text-purple-400">function</span> <span className="text-blue-600 dark:text-blue-400">sendMessage</span><span className="text-zinc-655 dark:text-zinc-500">(formData) {'{'}</span>
                  <div className="pl-4 mt-1 text-zinc-500">{"// Fill out the form below to send me a message"}</div>
                  <span className="text-zinc-655 dark:text-zinc-500">{'}'}</span>
                </div>
              
                <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                  <div>
                    <label className="block mb-2 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 pl-12 bg-white dark:bg-zinc-950/80 border ${errors.fullName ? 'border-red-500/85' : 'border-zinc-200 dark:border-zinc-800'} rounded-xl focus:outline-none focus:border-purple-500/80 focus:ring-4 focus:ring-purple-500/10 text-zinc-900 dark:text-white transition-all duration-300 text-sm`}
                        placeholder="ADIL HUSSAIN"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    {errors.fullName && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.fullName}</p>}
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">Phone Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 pl-12 bg-white dark:bg-zinc-950/80 border ${errors.phoneNumber ? 'border-red-500/85' : 'border-zinc-200 dark:border-zinc-800'} rounded-xl focus:outline-none focus:border-purple-500/80 focus:ring-4 focus:ring-purple-500/10 text-zinc-900 dark:text-white transition-all duration-300 text-sm`}
                        placeholder="+8801711223344"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-500">
                        <FiPhone className="h-4 w-4" />
                      </div>
                    </div>
                    {errors.phoneNumber && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.phoneNumber}</p>}
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 pl-12 bg-white dark:bg-zinc-950/80 border ${errors.email ? 'border-red-500/85' : 'border-zinc-200 dark:border-zinc-800'} rounded-xl focus:outline-none focus:border-purple-500/80 focus:ring-4 focus:ring-purple-500/10 text-zinc-900 dark:text-white transition-all duration-300 text-sm`}
                        placeholder="adil@gmail.com"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-500">
                        <FiMail className="h-4 w-4" />
                      </div>
                    </div>
                    {errors.email && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`block w-full px-4 py-3 bg-white dark:bg-zinc-950/80 border ${errors.message ? 'border-red-500/85' : 'border-zinc-200 dark:border-zinc-800'} rounded-xl focus:outline-none focus:border-purple-500/80 focus:ring-4 focus:ring-purple-500/10 text-zinc-900 dark:text-white transition-all duration-300 text-sm`}
                      placeholder="Write your message here..."
                    ></textarea>
                    {errors.message && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn-premium w-full py-3.5 px-6 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 disabled:opacity-75 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend /> Send Message
                      </>
                    )}
                  </button>
                  
                  {isSent && (
                    <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-655 dark:text-emerald-400 rounded-xl animate-fade-in text-sm font-semibold">
                      <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Message sent successfully! I will get back to you soon.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
