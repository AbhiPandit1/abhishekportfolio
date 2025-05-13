import { useEffect, useState } from 'react';
import {
  FaBirthdayCake,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaDownload,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import profile from '../../assets/profile3.jpeg';

// Cursor Component
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-10 h-10 bg-amber-400 rounded-full pointer-events-none transition-transform duration-50"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        mixBlendMode: 'difference',
      }}
    ></div>
  );
};

const LeftProfile = ({ textColor }) => {
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
      input: '+91 9958329820 / +44 7438393283',
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
    <div className="relative">
      <Cursor /> {/* Cursor effect applied */}
      <div className="h-[120vh] pb-10 flex flex-col gap-4 bg-gray-950 shadow-2xl rounded-2xl z-99 border-[0.1px] border-white">
        {/* Profile Image */}
        <div className="flex bg-gray-800 justify-between h-[25vh] items-center mx-auto mt-[10%] w-[60%] shadow-2xl rounded-2xl z-99 border-[0.1px]">
          <img
            src={profile}
            className="h-[90%] w-[90%] m-auto flex justify-center items-center hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Name */}
        <div
          className={`text-${textColor} flex justify-center items-center text-2xl font-bold `}
        >
          Abhishek Jha
          <a
            href="https://drive.google.com/file/d/1RAclaLQ7XsmPES_e9bYJxLG7cMs5olJj/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm p-1 ml-2 mr-2 border border-gray-400 rounded-md shadow-sm hover:bg-gray-800 transition-all"
          >
            <FaDownload className="w-3 h-3" />
          </a>
        </div>

        {/* Role */}
        <div
          className={`flex justify-center items-center w-[50%] bg-gray-800 p-1 rounded-xl mx-auto shadow-gray-850 shadow-2xl text-${textColor}`}
        >
          Full Stack Developer
        </div>

        {/* Details Section */}
        <div className="border-2 border-t-white mx-auto p-4 shadow-md w-[90%]">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-6 border-b border-gray-700 last:border-none group hover:bg-gray-800 transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 p-4 flex justify-center items-center rounded-lg bg-gray-800 shadow-md border border-gray-500 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Label & Value */}
              <div className="flex flex-col overflow-x-hidden max-w-[80%]">
                <label className={`text-${textColor} font-semibold`}>
                  {item.label}:
                </label>
                <div className={`text-${textColor}`}>
                  {item.label === 'Email' ? (
                    <a
                      href={`mailto:${item.input}`}
                      className={`text-${textColor} hover:underline`}
                    >
                      {item.input}
                    </a>
                  ) : (
                    item.input
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-4">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full shadow-md hover:scale-125 transition-transform duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftProfile;
