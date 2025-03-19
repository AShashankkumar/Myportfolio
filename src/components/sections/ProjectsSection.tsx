import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../project/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scale = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    [0.8, 1]
  );

  return (
    <section id="projects" className="min-h-screen py-20 bg-black">
      <motion.div 
        style={{ scale: isMobile ? 1 : scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tags={project.tags}
              image={project.image}
              index={index}
              onClick={() => navigate(`/projects/${project.id}`)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;