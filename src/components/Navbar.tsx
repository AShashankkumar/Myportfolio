import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo'; // Ensure Logo component exists and is correctly exported

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if the current path is active
  const isActive = (path: string) => location.pathname === path;

  const navItems = ['', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-dark-950/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Component */}
          <Logo />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="md:hidden rounded-md p-2 text-gray-400 hover:text-white hover:bg-dark-800/50 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((path) => (
              <Link
                key={path}
                to={`/${path}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transform hover:scale-105 transition-all duration-200 ${
                  isActive(`/${path}`)
                    ? 'text-white bg-dark-800/50 shadow-lg hover:shadow-accent-blue/20'
                    : 'text-gray-400 hover:text-white hover:bg-dark-800/50'
                }`}
              >
                {path === '' ? 'Home' : path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-950/90 backdrop-blur-sm">
          {navItems.map((path) => (
            <Link
              key={path}
              to={`/${path}`}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(`/${path}`)
                  ? 'text-white bg-dark-800/50'
                  : 'text-gray-400 hover:text-white hover:bg-dark-800/50'
              }`}
            >
              {path === '' ? 'Home' : path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
