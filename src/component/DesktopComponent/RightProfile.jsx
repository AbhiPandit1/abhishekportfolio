import { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MobileNav from '../MobileComponent/MobileNav';

// Lazy load components
const About = lazy(() => import('../../pages/About'));
const Resume = lazy(() => import('../../pages/Resume'));
const Portfolio = lazy(() => import('../../pages/Portfolio'));
const Blogs = lazy(() => import('../../pages/Blogs'));
const Contact = lazy(() => import('../../pages/Contact'));

// Circular Skeleton Loader
const SkeletonLoader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-transparent">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

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
        <Suspense fallback={<SkeletonLoader />}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default RightProfile;
