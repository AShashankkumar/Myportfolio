import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { y: "100%" },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.3,
        }}
        className="relative"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default TextReveal;