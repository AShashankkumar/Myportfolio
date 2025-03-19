import React from 'react';
import { motion } from 'framer-motion';

const AnimatedShapes = () => {
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent-blue/5 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-accent-purple/5 rounded-full blur-xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent-pink/5 rounded-full blur-xl animate-pulse" />
      </motion.div>
    </div>
  );
};

export default AnimatedShapes;