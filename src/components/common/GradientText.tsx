import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-accent-purple via-accent-pink to-accent-orange bg-clip-text text-transparent animate-gradient-x ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;