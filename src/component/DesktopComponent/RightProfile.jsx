import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MobileNav from '../MobileComponent/MobileNav';
import About from '../../pages/About';
import Resume from '../../pages/Resume';
import Portfolio from '../../pages/Portfolio';
import Blogs from '../../pages/Blogs';
import Contact from '../../pages/Contact';

const RightProfile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="h-[120vh] sm:h-[120vh] overflow-scroll bg-gray-950 text-white shadow-2xl rounded-2xl z-99 border-[0.1px] border-white relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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

      {/* Navigation Bar */}
      <div className="flex justify-end">
        {isMobile ? <MobileNav /> : <Nav />}
      </div>

      {/* Dynamic Content (Based on Route) */}
      <div className="p-6">
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<Blogs />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default RightProfile;
