import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftProfile from './component/DesktopComponent/LeftProfile';
import RightProfile from './component/DesktopComponent/RightProfile';
import MobileLeftProfile from './component/MobileComponent/MobileLeftProfile';
import { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="h-[100vh] bg-black p-auto grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-0 sm:px-[10%] px-[4%] py-[5%] overflow-y-scroll">
        {/* Left Section (Always Present) */}
        <div className="col-span-1">
          {isMobile ? <MobileLeftProfile /> : <LeftProfile textColor="white" />}
        </div>

        {/* Right Section (Changes Based on Route) */}
        <div className="col-span-2 sm:mt-0 mt-4">
          <RightProfile />
        </div>
      </div>
    </Router>
  );
}

export default App;
