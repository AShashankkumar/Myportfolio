import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  tags: string[];
  image: string;
  index: number;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tags, image, index, onClick }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-dark-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark-950/50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>
      
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
            {title}
            <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </h2>
          <div className="mt-2 flex gap-4">
            {tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="text-sm text-gray-400 tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;