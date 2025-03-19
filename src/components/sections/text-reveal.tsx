"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "end 0.3"], // Adjusted for smoother entry & exit
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative z-10 ${className}`}>
      <p className="flex flex-wrap justify-center gap-2 text-gray-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 0.5 / words.length; // Faster reveal
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.4, 1]); // Starts fading in earlier
  const color = useTransform(progress, range, ["#6b7280", "#ffffff"]); // Smooth transition from grey to white

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mx-1 transition-opacity duration-150 ease-out"
    >
      {children}
    </motion.span>
  );
};

export { TextRevealByWord };
