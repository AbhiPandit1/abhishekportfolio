import { useState } from 'react';
import {
  FaChevronDown,
  FaBirthdayCake,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaDownload, // Import the Download icon
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import profile from '../../assets/profile3.jpeg';

const MobileLeftProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      id: '1',
      label: 'Email',
      input: '224abhishekjhauk@gmail.com',
      icon: <FaEnvelope className="text-amber-200" />,
    },
    {
      id: '2',
      label: 'Phone',
      input: '+91 9958329820 / +44 7887479032',
      icon: <FaPhone className="text-amber-200" />,
    },
    {
      id: '3',
      label: 'Birthdate',
      input: '10-08-1998',
      icon: <FaBirthdayCake className="text-amber-200" />,
    },
    {
      id: '4',
      label: 'Location',
      input: 'India / UK',
      icon: <FaMapMarkerAlt className="text-amber-200" />,
    },
  ];

  const socialLinks = [
    {
      id: '1',
      icon: <FaInstagram className="text-pink-500 text-2xl" />,
      link: 'https://www.instagram.com/abhishek1008_?igsh=c3Y2MXg4NnowYmho&utm_source=qr',
    },
    {
      id: '2',
      icon: <FaTwitter className="text-blue-400 text-2xl" />,
      link: 'https://x.com/abhishekjh61869?s=21',
    },
    {
      id: '3',
      icon: <FaLinkedin className="text-blue-600 text-2xl" />,
      link: 'https://www.linkedin.com/in/abhishek-jha-087a761a8/',
    },
    {
      id: '4',
      icon: <SiLeetcode className="text-orange-400 text-2xl" />,
      link: 'https://leetcode.com/u/Abhishek_pandit/',
    },
  ];

  return (
    <div className="relative w-full p-4 z-99 bg-gray-950 rounded-lg shadow-lg border-2 border-white">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        {/* Profile Image (Left Aligned) */}
        <img src={profile} alt="Profile" className="w-14 h-14 rounded-full" />

        {/* Name & Role */}
        <div className="flex flex-col flex-1 pl-3">
          <span className="text-white font-bold text-xl">Abhishek Jha</span>
          <span className="text-gray-400 text-sm">Full Stack Developer</span>
        </div>

        {/* Download CV Icon */}
        <a
          href="https://drive.google.com/file/d/1RAclaLQ7XsmPES_e9bYJxLG7cMs5olJj/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm p-1 mr-2 border border-gray-400 rounded-md shadow-sm hover:bg-gray-800 transition-all"
        >
          <FaDownload className="w-4 h-4" />
        </a>

        {/* Open Button (Small Down Arrow in Top Right Corner) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-sm p-1 border border-gray-400 rounded-md shadow-sm hover:bg-gray-800 transition-all"
        >
          <FaChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Details Section (Slide-in effect) */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-4 border-2 border-t-white shadow-md">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 border-b border-gray-700 last:border-none"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 p-4 flex justify-center items-center bg-gray-800 rounded-md border border-gray-500">
                {item.icon}
              </div>

              {/* Label & Value */}
              <div className="flex flex-col text-white">
                <span className="font-semibold">{item.label}:</span>
                <span className="text-gray-300">
                  {item.label === 'Email' ? (
                    <a
                      href={`mailto:${item.input}`}
                      className="hover:underline"
                    >
                      {item.input}
                    </a>
                  ) : (
                    item.input
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-4">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-500 shadow-md hover:scale-110 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileLeftProfile;
