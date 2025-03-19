import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-accent-pink/5 to-accent-orange/5" />
      <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-accent-purple/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
    </div>
  );
};

export default AnimatedBackground;