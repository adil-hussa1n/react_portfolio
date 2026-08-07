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
  const [formData, setFormData] = useState({ fullName: '', phoneNumber: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          if (contentRef.current) contentRef.current.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required.';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const contactInfo = [
    { icon: <FiMapPin className="text-xl" />, title: "Location", content: "Sylhet, Bangladesh" },
    { icon: <FiPhone className="text-xl" />, title: "Phone", content: "+8801715541267" },
    { icon: <FiMail className="text-xl" />, title: "Email", content: "hussainadil981@gmail.com" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true);
      emailjs.sendForm('service_pa2he78', 'template_gqslsby', formRef.current, '_IH4Due-KhM-yNs9i')
        .then(() => {
          setIsSent(true);
          formRef.current.reset();
          setFormData({ fullName: '', phoneNumber: '', email: '', message: '' });
          setErrors({});
          setIsSending(false);
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => { console.error(error.text); setIsSending(false); });
    }
  };

  const inputClasses = (field) =>
    `block w-full px-4 py-3 bg-white/50 dark:bg-zinc-900/30 border ${errors[field] ? 'border-red-500/60' : 'border-zinc-200/50 dark:border-zinc-800/30'} rounded-xl focus:outline-none input-glow backdrop-blur-md text-zinc-900 dark:text-white transition-all duration-300 text-sm placeholder-zinc-400 dark:placeholder-zinc-500`;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="opacity-0 py-20 lg:py-32 relative overflow-hidden bg-transparent text-zinc-900 dark:text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={contentRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Get In <span className="aurora-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out and I will reply as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left — Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="aurora-card spotlight-card animated-border-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{info.title}</h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-0.5">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200/30 dark:border-zinc-800/20">
                <h4 className="font-semibold text-sm mb-4">Connect With Me</h4>
                <div className="flex space-x-3">
                  {[
                    { url: "https://www.facebook.com/Adil.hussain2345/", icon: <FaFacebookF /> },
                    { url: "https://x.com/adil_hussa1n", icon: <FaTwitter /> },
                    { url: "https://www.linkedin.com/in/adil-hussa1n/", icon: <FaLinkedinIn /> },
                    { url: "https://github.com/adil-hussa1n", icon: <FaGithub /> }
                  ].map((item, idx) => (
                    <a key={idx} href={item.url} target="_blank" rel="noreferrer"
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/30 text-zinc-500 hover:border-cyan-500/40 hover:text-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 backdrop-blur-md transition-all duration-300">
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="aurora-card rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 flex items-center justify-center">
              <a href="/resume10.pdf" download="adil-hussain_resume.pdf"
                className="btn-aurora-outline inline-block px-6 py-3 rounded-xl text-sm bg-white/50 dark:bg-zinc-900/30 backdrop-blur-md font-semibold">
                Resume
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <div className="aurora-card spotlight-card animated-border-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label className="block mb-2 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                    className={inputClasses('fullName')} placeholder="Your full name" />
                  {errors.fullName && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block mb-2 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">Phone Number</label>
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                    className={inputClasses('phoneNumber')} placeholder="+8801711223344" />
                  {errors.phoneNumber && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.phoneNumber}</p>}
                </div>

                <div>
                  <label className="block mb-2 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className={inputClasses('email')} placeholder="you@example.com" />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>}
                </div>

                <div>
                  <label className="block mb-2 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5"
                    className={inputClasses('message')} placeholder="Write your message here..." />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.message}</p>}
                </div>

                <button type="submit" disabled={isSending}
                  className="btn-aurora w-full py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSending ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </button>

                {isSent && (
                  <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl animate-slide-up text-sm font-semibold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! I will get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
