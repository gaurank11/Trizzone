import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [showText, setShowText] = useState(true);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      setShowText((prev) => !prev);
      count++;

      if (count === 5) {
        clearInterval(interval);
        setExitAnimation(true);
        setTimeout(onComplete, 1000);
      }
    }, 500);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={exitAnimation ? { opacity: 0, scale: 1.2 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 1 }}
        animate={exitAnimation ? { scale: 3, opacity: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <polygon
          points="100,300 200,80 300,300"
          fill="none"
          stroke="black"
          strokeWidth="10"
        />

        {/* Left Shaded Triangle */}
        <polygon points="120,300 175,180" fill="black" />

        {/* Right Open Triangle */}
        <polyline
          points="280,300 200"
          stroke="black"
          strokeWidth="10"
          fill="none"
        />

        {/* Text "TRIZZONE" Cutting the Outline */}
        <rect x="90" y="180" width="220" height="50" fill="white" />

        {/* Blinking Text */}
        <AnimatePresence>
          {showText && (
            <motion.text
              x="200"
              y="220"
              fontSize="50"
              fontWeight="bold"
              fill="black"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              TRIZZONE
            </motion.text>
          )}
        </AnimatePresence>
      </motion.svg>
    </motion.div>
  );
};

export default LoadingScreen;
