import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "../SocialLinks";
import AnimatedBackground from "./AnimatedBackground";
import AnimatedShapes from "./AnimatedShapes";
import ShinyText from "../common/ShinyText";

interface HeroContentProps {
  name: string;
  role: string;
  imageUrl: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ name, role, imageUrl }) => {
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* First Name, Image, and Last Name */}
        <div className="relative flex items-center justify-center mb-8 space-x-8">
          {/* First Name */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-brush text-white"
          >
            {firstName}
          </motion.h1>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-[300px] h-[300px]"
          >
            <img
              src={imageUrl}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-accent-blue/20"
            />
          </motion.div>

          {/* Last Name */}
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-brush text-white"
          >
            {lastName}
          </motion.h1>
        </div>

        {/* Role with ShinyText Effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-gray-400 mb-4"
        >
          <ShinyText
            text={role}
            speed={5}
            className="text-gray-400 text-xl"
          />
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center space-x-4 mt-4"
        >
          <SocialLinks />
        </motion.div>
      </div>

      <AnimatedShapes />
    </div>
  );
};

export default HeroContent;