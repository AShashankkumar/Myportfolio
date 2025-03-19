import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'Spring Boot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'C',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    },
    {
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'UI/UX',
      icon: '/uiux-icon.svg' // This will be the path to your UI/UX icon
    }
  ];

  // Duplicate the skills array for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 font-cinzel">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-metal">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="relative w-full">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10" />

          {/* First Row */}
          <div className="flex overflow-hidden mb-8">
            <div className="flex animate-scroll">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-1-${index}`}
                  className="flex flex-col items-center justify-center mx-8 min-w-[120px]"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mb-2 filter brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                  <span className="text-gray-400 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row (Reverse Direction) */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-reverse">
              {duplicatedSkills.reverse().map((skill, index) => (
                <div
                  key={`${skill.name}-2-${index}`}
                  className="flex flex-col items-center justify-center mx-8 min-w-[120px]"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mb-2 filter brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                  <span className="text-gray-400 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;