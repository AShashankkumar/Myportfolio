import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name, level, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-dark-800 rounded-xl p-4 border border-dark-600 hover:border-accent-blue/50 transition-all duration-300"
    >
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="font-medium text-white">{name}</span>
      </div>
      <div className="mt-3 bg-dark-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color.replace('text-', 'bg-')}`}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;