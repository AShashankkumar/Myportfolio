import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text?: string;
  texts?: string[];
  delay?: number;
  className?: string;
  deleteDelay?: number;
  pauseDelay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  texts = ['Full Stack Developer.', 'Software Developer.'],
  delay = 150,
  deleteDelay = 75,
  pauseDelay = 2000,
  className = ''
}) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const currentWord = text || texts[textIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentWord) {
      // Pause before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && currentText === '') {
      // Move to next word when current word is deleted
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Handle typing or deleting
      timeout = setTimeout(() => {
        setCurrentText(prev => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentWord.slice(0, prev.length + 1);
          }
        });
      }, isDeleting ? deleteDelay : delay);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWord, delay, deleteDelay, pauseDelay, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;