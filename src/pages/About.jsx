import React, { useState, useEffect } from 'react';
import FirstAboutComponent from '../component/AboutComponent/FirstAboutComponent';
import TestimonialComponent from '../component/AboutComponent/TestimonialComponent';

const About = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex flex-col items-start space-y-6 p-6">
      {/* Cursor Effect */}
      <div
        className={`fixed w-12 h-12 rounded-full bg-amber-400 opacity-30 pointer-events-none transition-transform duration-100 ${
          hovered ? 'scale-100' : 'scale-0'
        }`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>

      {/* Heading with an underlined effect */}
      <h2 className="text-4xl font-bold text-white relative pb-2">
        About Me
        <span className="absolute left-0 bottom-0 w-16 h-1 bg-amber-400 rounded-full"></span>
      </h2>

      {/* About Description - Divided into Three Paragraphs */}
      <p
        className="text-sm sm:text-base text-gray-300 transition-colors duration-300 cursor-pointer relative z-10 text-justify"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        A{' '}
        <span className="hover:text-amber-400">
          highly skilled Full Stack Developer{''}
        </span>
        <span className="hover:text-amber-400"> with </span> over{' '}
        <span className="hover:text-amber-400">3 years of experience</span>,
        specializing in <span className="hover:text-amber-400">MERN stack</span>
        ,<span className="hover:text-amber-400"> scalable architecture</span>,
        and
        <span className="hover:text-amber-400"> system optimization</span>. I
        have successfully developed and led projects for
        <span className="hover:text-amber-400"> freelance marketplaces</span>,
        <span className="hover:text-amber-400"> fitness platforms</span>, and
        <span className="hover:text-amber-400"> high-traffic blogs</span>.
      </p>

      <p
        className="text-sm sm:text-base text-gray-300 transition-colors duration-300 cursor-pointer relative z-10 text-justify"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Ranked <span className="hover:text-amber-400">Top 5% globally</span> on
        LeetCode with{' '}
        <span className="hover:text-amber-400">800+ problems solved</span>, and
        secured a <span className="hover:text-amber-400">Top 4 UK ranking</span>{' '}
        in LeetCode Contests. Recognized with an
        <span className="hover:text-amber-400">
          {' '}
          Outstanding Contributor Award
        </span>
        for frontend optimization.
      </p>

      <p
        className="text-sm sm:text-base text-gray-300 transition-colors duration-300 cursor-pointer relative z-10 text-justify"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Passionate about building
        <span className="hover:text-amber-400">
          {' '}
          efficient, high-performing applications
        </span>
        and continuously refining my expertise. Always eager to learn and
        contribute to innovative projects.
      </p>

      <FirstAboutComponent />
      <TestimonialComponent />
    </div>
  );
};

export default About;
