import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import Location from '../component/ContactComponent/Location';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [showIcons, setShowIcons] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID_GET,
        e.target,
        import.meta.env.VITE_TEMPLATE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Error sending message. Please try again.');
        }
      );
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold  text-white mb-6">
        Contact Me
        <span className="block w-22 h-1 bg-amber-400 mt-2 rounded-full"></span>
      </h2>
      <Location />
      <div className="bg-gradient-to-r min-h-screen flex  gap-2 sm:gap-12 p-0 sm:p-6">
        <div className="bg-transparent rounded-lg shadow-lg p-8 w-full max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label className="text-white mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-amber-400 rounded-lg hover:bg-amber-500 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>

          {status && (
            <div className="mt-4 text-center text-white font-semibold">
              {status}
            </div>
          )}

          {/* New Contact Icon */}
          <FiMail
            size={50}
            className="fixed bottom-12 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => setShowIcons(!showIcons)} // Toggle icons on click
          />

          {/* Additional Contact Icons */}
          {showIcons && (
            <div className="fixed bottom-32 right-6 flex flex-col space-y-4">
              <button
                onClick={() => setShowIcons(false)} // Close icons when cross button clicked
                className="bg-red-500 flex justify-center items-center p-3 rounded-full text-white shadow-lg hover:bg-red-600 transition duration-300 ease-in-out mb-2"
              >
                <IoClose size={30} />
              </button>
              <a
                href="https://www.linkedin.com/in/abhishek-jha-087a761a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-4 rounded-full text-white shadow-lg hover:bg-blue-700 transform transition duration-300 ease-in-out"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/abhishek1008_?igsh=c3Y2MXg4NnowYmho&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-4 rounded-full text-white shadow-lg hover:bg-pink-600 transform transition duration-300 ease-in-out"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://wa.me/919958329820"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-4 rounded-full text-white shadow-lg transform transition duration-300 ease-in-out"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
