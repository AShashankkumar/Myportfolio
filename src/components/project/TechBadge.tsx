import React from 'react';
import { motion } from 'framer-motion';

interface TechBadgeProps {
  tech: string;
  index: number;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-dark-600 
        hover:border-accent-blue/50 hover:text-white transform hover:-translate-y-1 transition-all duration-200"
    >
      {tech}
    </motion.span>
  );
};

export default TechBadge;