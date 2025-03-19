import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import ProjectImage from './project/ProjectImage';
import TechBadge from './project/TechBadge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-dark-800 rounded-lg overflow-hidden shadow-xl border border-dark-600 
        hover:border-accent-blue/50 hover:shadow-accent-blue/20 transition-all duration-300"
    >
      <ProjectImage image={image} title={title} liveUrl={liveUrl} />
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-blue transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 line-clamp-2 hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechBadge key={tech} tech={tech} index={index} />
          ))}
        </div>

        <div className="pt-4 border-t border-dark-600">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-white transform hover:-translate-y-1 transition-all duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            <span>View Source</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;