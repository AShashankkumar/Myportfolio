import React from 'react';
import { Code2, Database, Globe, Palette } from 'lucide-react';
import SkillCategory from '../components/SkillCategory';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'Spring Boot', 'Python', 'PostgreSQL', 'REST APIs', 'MongoDB'],
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C#'],
    },
    {
      title: 'Design and Tools',
      icon: Palette,
      skills: ['UI/UX Design', 'Figma', 'Git', 'Github', 'Word', 'Excel', 'Powerpoint', 'Gradle', 'Docker', 'Responsive Design'],
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;