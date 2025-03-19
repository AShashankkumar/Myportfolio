"use client";
import { TextRevealByWord } from "./text-reveal"; // Adjust based on the correct file location

export default function AboutSection() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-black">
      {/* Content Box for About Section */}
      <div className="w-full max-w-5xl p-6 rounded-lg bg-black shadow-lg">
        <h2 className="text-5xl font-bold text-center mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-orange-400 text-transparent bg-clip-text">
            Me
          </span>
        </h2>
        <TextRevealByWord text="I am Shashank Kumar Aakaram, a software developer with over two years of experience in building and deploying scalable web applications. Proficient in technologies like Java, Spring Boot, ReactJS, and Oracle. I specialize in creating efficient and impactful solutions that drive business success." />
      </div>
    </div>
  );
}
