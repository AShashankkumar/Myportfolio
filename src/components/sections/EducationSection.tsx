import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import AnimatedCard from '../common/AnimatedCard';

const EducationSection = () => {
  const education = [
    {
      degree: "Master's in Information Technology",
      school: "The University of North Carolina at Charlotte",
      logo: "https://tse1.mm.bing.net/th?id=OIP.73V-HCtJ3GdYsuo6bXm9OAHaHa&pid=Api&P=0&h=180",
      year: "2023-2024",
      description: "Specialized in Emerging Technologies and Advanced Computing",
      achievements: [
        "GPA: 4.0/4.0",
        "Teaching Assistant in Network Based Application Development Class",
        "Active member of Graduate Student Association"
      ]
    },
    {
      degree: "Bachelor's in Electronics and Communication Engineering",
      school: "Anurag Group of Institution",
      logo: "https://www.logolynx.com/images/logolynx/s_d2/d2824a8030bcd0aa35e1908fc37ff5c3.jpeg",
      year: "2017-2021",
      description: "Focus on Electronics and Communication Systems",
      achievements: [
        "First Class Honours",
        "Best Project Award"
      ]
    }
  ];

  return (
    <div className="mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8 font-cinzel">
          My <span className="text-gradient">Education</span>
        </h3>
        
        <div className="space-y-6 font-metal">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <AnimatedCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={edu.logo}
                      alt={edu.school}
                      className="w-16 h-16 rounded-lg object-cover border-2 border-accent-blue/20"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <p className="text-accent-blue mt-1">{edu.school}</p>
                    <p className="text-gray-400 text-sm">{edu.year}</p>
                    <p className="text-gray-300 mt-2">{edu.description}</p>
                    <ul className="mt-3 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EducationSection;