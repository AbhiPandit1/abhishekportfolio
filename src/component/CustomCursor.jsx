import React, { useContext } from 'react';
import { CursorContext } from './CursorProvider';

const CustomCursor = () => {
  const { cursorPosition, hovered } = useContext(CursorContext);

  if (!cursorPosition) return null; // Prevent errors when cursorPosition is undefined

  return (
    <div
      className={`fixed w-12 h-12 rounded-full bg-amber-400 opacity-30 pointer-events-none transition-transform duration-100 ease-out ${
        hovered ? 'scale-100' : 'scale-0'
      }`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        transform: `translate(-50%, -50%)`,
        willChange: 'transform', // Optimizes performance
      }}
    />
  );
};

export default CustomCursor;
