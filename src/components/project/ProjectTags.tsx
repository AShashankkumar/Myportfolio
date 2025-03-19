import React from 'react';
import { motion } from 'framer-motion';

interface ProjectTagsProps {
  tags: string[];
}

const ProjectTags: React.FC<ProjectTagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, index) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-sm font-medium tracking-wider text-gray-300"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
};

export default ProjectTags;