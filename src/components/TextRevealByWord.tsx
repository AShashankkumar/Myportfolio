import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`relative px-4 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <p className="flex flex-wrap justify-center text-2xl md:text-3xl lg:text-4xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative mx-1.5 lg:mx-2">
      <motion.span
        style={{ opacity }}
        className="text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };