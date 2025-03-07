import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const TypingText = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Function to update text dynamically
  const updateText = useCallback(() => {
    const currentPhrase = texts[textIndex];

    if (!isDeleting && charIndex < currentPhrase.length) {
      setCurrentText(currentPhrase.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    } else if (isDeleting && charIndex > 0) {
      setCurrentText(currentPhrase.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, isDeleting, textIndex, texts, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const typingInterval = setInterval(updateText, speed);

    return () => clearInterval(typingInterval);
  }, [updateText, deletingSpeed, typingSpeed]);

  return (
    <motion.span
      className="text-xl md:text-2xl bg-gradient-to-r from-blue-300 to-indigo-600 inline-block text-transparent bg-clip-text"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-live="polite" // Accessibility improvement
    >
      {currentText}
      <motion.span
        className="text-white"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>{" "}
      {/* Blinking Cursor */}
    </motion.span>
  );
};

export default TypingText;
