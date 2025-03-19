import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/project/ProjectCard';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Link to={`/projects/${project.id}`} key={index}>
              <ProjectCard
                title={project.title}
                tags={project.tags}
                image={project.image}
                index={index}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;