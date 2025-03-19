import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="relative group">
      <div className="relative flex items-center justify-center w-12 h-12">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 animate-pulse" />
        
        {/* Main logo shape */}
        <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-dark-900 rounded-lg transform group-hover:rotate-12 transition-all duration-500 border border-dark-600 group-hover:border-pink-500">
          {/* Delta Symbol */}
          <span className="text-3xl font-logo bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent transform group-hover:scale-110 transition-all duration-500">
            Δ
          </span>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-500" />
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-1 transition-all duration-500" />
      </div>
    </Link>
  );
};

export default Logo;