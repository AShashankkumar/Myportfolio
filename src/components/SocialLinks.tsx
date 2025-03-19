import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    {
      icon: Mail,
      href: 'mailto:aakaramshashankkumar@gmail.com',
      hoverColor: 'hover:text-red-500',
      label: 'Email'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/your-username',
      hoverColor: 'hover:text-pink-500',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aakaram-shashank-kumar/',
      hoverColor: 'hover:text-blue-500',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/AShashankkumar',
      hoverColor: 'hover:text-white',
      label: 'GitHub'
    }
  ];

  return (
    <div className="flex space-x-4">
      {links.map(({ icon: Icon, href, hoverColor, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`text-gray-400 ${hoverColor} transform hover:scale-110 hover:-translate-y-1 transition-all duration-200`}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
