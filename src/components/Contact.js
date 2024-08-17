import React, { useRef, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactRef = useRef(null);
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
    const handleScroll = () => {
      if (
        contactRef.current &&
        contactRef.current.getBoundingClientRect().top < window.innerHeight
      ) {
        contactRef.current.classList.add('animate-fade-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
  };

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
    <section ref={contactRef} id='contact' className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 opacity-0 transition-opacity duration-1000 overflow-hidden">
      <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
          <div className="text-white lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Get In Touch</h1>
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="mx-2 text-white truncate w-72">Sylhet, Bangladesh</span>
              </p>
              <p className="flex items-start -mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="mx-2 text-white truncate w-72">+8801715541267</span>
              </p>
              <p className="flex items-start -mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="mx-2 text-white truncate w-72">hussainadil981@gmail.com</span>
              </p>
            </div>
            <div className="mt-6 md:mt-8">
              <div className="flex mt-4 -mx-1.5">
                <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="https://www.facebook.com/Adil.hussain2345/">
                  <FaFacebookF className="w-8 h-8" />
                </a>
                <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="https://x.com/adil_hussa1n">
                  <FaTwitter className="w-8 h-8" />
                </a>
                <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="https://www.linkedin.com/in/adil-hussa1n/">
                  <FaLinkedinIn className="w-8 h-8" />
                </a>
                <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="https://github.com/adil-hussa1n">
                  <FaGithub className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
              <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact Me</h1>
              <form ref={formRef} onSubmit={sendEmail} className="mt-4">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-200 dark:border-gray-600 ${errors.fullName ? 'border-red-500' : ''}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>
                <div className="flex-1 mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-200 dark:border-gray-600 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                </div>
                <div className="flex-1 mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-200 dark:border-gray-600 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="flex-1 mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-200 dark:border-gray-600 ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full px-6 py-3 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
