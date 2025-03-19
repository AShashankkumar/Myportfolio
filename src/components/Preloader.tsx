import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const greetings = [
    { text: "Hello", language: "English" },
    { text: "నమస్కారం", language: "Telugu" },
    { text: "नमस्ते", language: "Hindi" },
    { text: "Bonjour", language: "French" },
    { text: "こんにちは", language: "Japanese" },
    { text: "안녕하세요", language: "Korean" },
    { text: "Ciao", language: "Italian" },
    { text: "你好", language: "Chinese" },
    { text: "Hola", language: "Spanish" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < greetings.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800); // Wait after last greeting
      }
    }, 500); // Change greeting every 500ms

    return () => clearInterval(interval);
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950"
    >
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-brush mb-2 text-white">
              {greetings[currentIndex].text}
            </h1>
            <p className="text-gray-400 text-sm tracking-widest uppercase">
              {greetings[currentIndex].language}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Preloader;
