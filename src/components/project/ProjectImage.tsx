import React from 'react';
import { motion } from 'framer-motion';

interface ProjectImageProps {
  image: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ image }) => {
  return (
    <motion.div className="absolute inset-0 w-full h-full">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
      />
    </motion.div>
  );
};

export default ProjectImage;