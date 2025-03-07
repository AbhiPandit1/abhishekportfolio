import React, { createContext, useState, useEffect } from 'react';

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
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
    <CursorContext.Provider value={{ cursorPosition, hovered, setHovered }}>
      {children}
    </CursorContext.Provider>
  );
};
