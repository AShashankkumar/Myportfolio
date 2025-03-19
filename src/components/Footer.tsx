import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Projects',
      links: [
        { name: 'Food Delivery', path: '/projects/food-delivery' },
        { name: 'Online Bidding', path: '/projects/online-bidding' },
        { name: 'UNCC Clone', path: '/projects/uncc-clone' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Github', url: 'https://github.com/AShashankkumar' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aakaram-shashank-kumar/' },
        { name: 'Instagram', url: 'https://instagram.com/your-username' },
        { name: 'Email', url: 'mailto:aakaramshashankkumar@gmail.com' }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-dark-950 to-black border-t border-dark-800">
      {/* Enhanced glowing effect */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Main glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent blur-sm" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[50%] h-[3px] bg-gradient-to-r from-transparent via-accent-blue/10 to-transparent blur-md" />
        
        {/* Additional ambient glow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[30%] h-[8px] bg-gradient-to-r from-transparent via-accent-blue/5 to-transparent blur-xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Charlotte, NC</p>
              <p>aakaramshashankkumar@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-dark-800">
          <p className="text-gray-400 text-sm">
            © {currentYear} Shashank Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com/AShashankkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aakaram-shashank-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:aakaramshashankkumar@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;