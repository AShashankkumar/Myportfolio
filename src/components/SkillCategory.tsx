import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon: Icon, skills }) => {
  return (
    <div className="bg-dark-800 rounded-lg p-6 shadow-xl border border-dark-600">
      <div className="flex items-center mb-4">
        <div className="text-accent-blue mr-3">
          <Icon className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-dark-700 rounded px-3 py-2 text-gray-300 text-sm border border-dark-600"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;