import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-dark-800 rounded-lg border border-dark-600 shadow-xl 
      hover:border-accent-blue/50 hover:shadow-accent-blue/20 
      transform hover:-translate-y-1 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedCard;