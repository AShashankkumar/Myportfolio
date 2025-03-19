import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Lightbulb, Smartphone, Layout, Monitor, Code, Server } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-accent-blue hover:text-accent-hover">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const getIconForMockupType = (type: string) => {
    switch (type.toLowerCase()) {
      case 'wireframe':
        return Lightbulb;
      case 'mobile':
      case 'responsive':
        return Smartphone;
      case 'prototype':
        return Monitor;
      case 'userflow':
        return Code;
      case 'database':
        return Server;
      default:
        return Layout;
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-gray-400 tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xl text-gray-300">{project.fullDescription}</p>
        </motion.div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {project.detailImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative aspect-video overflow-hidden rounded-lg border border-dark-600"
            >
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Mockups Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.mockups.map((mockup, index) => {
              const Icon = getIconForMockupType(mockup.type);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-dark-800 border border-dark-600">
                    <img
                      src={mockup.image}
                      alt={`${mockup.type} design`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-accent-blue" />
                    <h3 className="text-lg font-semibold text-white capitalize">
                      {mockup.type}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">{mockup.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-dark-800 rounded-full text-gray-300 text-sm border border-dark-600 hover:border-accent-blue/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Project Info</h2>
            <div className="space-y-4 text-gray-300">
              <p><span className="text-gray-400">Role:</span> {project.role}</p>
              <p><span className="text-gray-400">Duration:</span> {project.duration}</p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-accent-blue rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex gap-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-dark-800 px-6 py-3 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600"
              >
                <Github className="w-5 h-5" />
                View Source
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white bg-accent-blue px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;