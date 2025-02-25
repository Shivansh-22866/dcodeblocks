'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Square {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const Details: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [squares, setSquares] = useState<Square[]>([]);
  
  // Generate squares on component mount
  useEffect(() => {
    const squaresCount = 40; // Number of squares
    const generatedSquares: Square[] = [];
    
    for (let i = 0; i < squaresCount; i++) {
      generatedSquares.push({
        id: i,
        x: Math.random() * 100, // Position as percentage of container width
        y: Math.random() * 100, // Position as percentage of container height
        size: Math.random() * 50 + 50, // Square size between 50-100px
        opacity: 0.4 // Default opacity
      });
    }
    
    setSquares(generatedSquares);
  }, []);
  
  // Update mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  
  // Calculate square opacity based on mouse proximity
  const calculateOpacity = (squareX: number, squareY: number, squareSize: number): number => {
    if (!containerRef.current) return 0.4;
    
    const rect = containerRef.current.getBoundingClientRect();
    const squareXPx = (squareX / 100) * rect.width;
    const squareYPx = (squareY / 100) * rect.height;
    
    // Calculate distance between mouse and square center
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - squareXPx, 2) + 
      Math.pow(mousePosition.y - squareYPx, 2)
    );
    
    // Max distance for glow effect (pixels)
    const maxDistance = 200;
    
    // Calculate opacity based on distance
    if (distance > maxDistance) return 0.4;
    return 0.4 + (1 - distance / maxDistance) * 0.8; // Max opacity 1.0
  };

  // Calculate glow strength for box shadow
  const calculateGlow = (opacity: number): string => {
    const glowSize = opacity * 40;
    const blurSize = opacity * 10;
    return `0 0 ${glowSize}px ${blurSize}px rgba(168, 85, 247, ${opacity})`;
  };
  
  return (
    <div 
      ref={containerRef}
      className="py-8 relative overflow-hidden bg-gradient-to-tr from-purple-950/10 to-purple-950/30"
      onMouseMove={handleMouseMove}
    >
      {squares.map(square => (
        <motion.div
          key={square.id}
          className="absolute hidden sm:block rounded-lg bg-purple-900"
          initial={{ opacity: 0.4 }}
          style={{
            left: `${square.x}%`,
            top: `${square.y}%`,
            width: `${square.size}px`,
            height: `${square.size}px`,
            opacity: calculateOpacity(square.x, square.y, square.size),
            boxShadow: calculateGlow(calculateOpacity(square.x, square.y, square.size)),
            transform: 'translate(-50%, -50%)'
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
      ))}
      
      {/* Your content goes here */}
      <div className="relative z-10 container mx-auto px-4">
        <div className='flex sm:flex-row flex-col items-center py-16 px-8'>
            <div className='sm:w-full'>
              <div className='flex flex-col gap-16'>
                <div className='flex flex-col sm:items-start items-center'>
                  <h3 className='text-7xl'>
                    150+
                  </h3>
                  <span className='text-2xl'>
                    Universities participating
                  </span>
                </div>
                <div className='flex sm:flex-row flex-col gap-16'>
                  <div className='flex flex-col items-center sm:items-start'>
                      <h4 className='text-7xl'>72+</h4>
                      <span className='text-2xl'>Judges</span>
                  </div>
                  <div className='flex flex-col items-center sm:items-start'>
                      <h4 className='text-7xl'>21</h4>
                      <span className='text-2xl'>Hackathons</span>
                  </div>
                  <div className='flex flex-col items-center sm:items-start'>
                      <h4 className='text-7xl'>36+</h4>
                      <span className='text-2xl'>Great Speakers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='sm:w-full'>
              <iframe
                width="100%"  // Makes the video responsive within the div
                className='mt-8 sm:mt-0 aspect-video'
                src="https://www.youtube.com/embed/gi1kkMbfNAE?si=O5kwjlx-_1_cvPJv"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Details;