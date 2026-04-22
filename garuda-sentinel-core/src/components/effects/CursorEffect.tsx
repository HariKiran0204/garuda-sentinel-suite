
import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    // Using requestAnimationFrame for smoother cursor movement
    let animationFrameId: number;
    let currentPosition = { x: -100, y: -100 };
    
    const updatePosition = (e: MouseEvent) => {
      // Store the target position
      currentPosition = { x: e.clientX, y: e.clientY };
    };

    const renderCursor = () => {
      // Apply position updates in animation frame for smoother movement
      setPosition(prev => currentPosition);
      animationFrameId = requestAnimationFrame(renderCursor);
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300); // Shorter animation time
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button') || 
          target.tagName === 'A' || target.closest('a')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(renderCursor);
    
    // Add event listeners
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('click', handleClick);
    document.addEventListener('mouseover', handleHover);

    return () => {
      // Clean up
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot fixed pointer-events-none z-50 will-change-transform"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: clicked ? 'scale(1.5)' : hovered ? 'scale(2.5)' : 'scale(1)',
          transition: 'transform 0.15s ease-out' // Faster transition
        }}
      />
      <div 
        className="cursor-ring fixed pointer-events-none z-50 will-change-transform"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: clicked ? 'scale(0.8)' : hovered ? 'scale(1.5)' : 'scale(1)',
          transition: 'transform 0.15s ease-out' // Faster transition
        }}
      />
    </>
  );
};

export default CursorEffect;
