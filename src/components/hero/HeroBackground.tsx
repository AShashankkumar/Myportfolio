import React from 'react';
import { motion } from 'framer-motion';

interface HeroBackgroundProps {
  imageUrl: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = () => {
  return (
    <>
      {/* Background Color */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-950 to-dark-950" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-grid-pattern" />
      </div>
    </>
  );
};

export default HeroBackground;