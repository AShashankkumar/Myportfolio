import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's in Information Technology",
      school: "The University of North Carolina at Charlotte",
      year: "2023-2024",
      description: "Specialized in Emerging Technologies",
      achievements: [
        "GPA: 4.0/4.0",
        "Teaching Assistant in Network Based Application Development Class"
      ]
    },
    {
      degree: "Bachelor's in Electronics and Communication Engineering",
      school: "Anurag Group of Institutions",
      year: "2017-2021",
      description: "Focus on Electronics and Software Development",
      achievements: [
        "First Class Honours",
        "Led university coding team"
      ]
    }
  ];

  return (
    <div className="bg-dark-800 rounded-lg shadow-xl p-8 mt-8 border border-dark-600">
      <div className="flex items-center mb-6">
        <GraduationCap className="w-6 h-6 text-accent-blue mr-3" />
        <h2 className="text-2xl font-bold text-white">Education</h2>
      </div>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-accent-blue pl-4">
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-gray-300 mt-1">{edu.school}</p>
            <p className="text-accent-blue text-sm mt-1">{edu.year}</p>
            <p className="text-gray-400 mt-2">{edu.description}</p>
            <ul className="mt-2 space-y-1">
              {edu.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-400 text-sm">• {achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;