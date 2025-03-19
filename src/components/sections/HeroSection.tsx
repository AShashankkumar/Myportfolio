import React from "react";
import TypewriterText from "../TypewriterText";
import SocialLinks from "../SocialLinks";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white">
            Hi, I'm Shashank Kumar.
          </h1>

          {/* Role with Typewriter Effect */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            I'm a <TypewriterText texts={['Full Stack Developer.', 'Software Developer.']} className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            I specialize in building scalable web applications and creating efficient solutions that drive business success.
          </p>

          {/* Social Links */}
          <div className="pt-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;