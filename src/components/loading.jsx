import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

const LoadingScreen = ({ onComplete }) => {
  const [showText, setShowText] = useState(true);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
      count++;

      if (count === 2) {
        clearInterval(interval);
        const exitTimeout = setTimeout(() => {
          setExitAnimation(true);
          const showTimeout = setTimeout(() => {
            setShowWebsite(true);
            onComplete && onComplete();
          }, 1500);
          return () => clearTimeout(showTimeout);
        }, 500);
        return () => clearTimeout(exitTimeout);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white overflow-hidden">
      {!showWebsite ? (
        <motion.div
          className="relative"
          initial={{ scale: 1 }}
          animate={exitAnimation ? { scale: 4 } : {}}
          transition={{ duration: 1.5 }}
        >
          <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <polygon points="70,300 200,80 280,300" fill="none" stroke="black" strokeWidth="8" />
            <polygon points="73,296 204,80 130,296" fill="black" />
            <AnimatePresence>
              <rect x="150" y="285" width="76" height="20" fill="white" />
              <rect x="30" y="180" width="280" height="50" fill="white" />
              {showText && !exitAnimation && (
                <motion.text
                  x="164"
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
          </svg>
          {exitAnimation && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              initial={{ clipPath: "polygon(70px 300px, 200px 80px, 280px 300px)" }}
              transition={{ duration: 1.5 }}
            >
              <Outlet />
            </motion.div>
          )}
        </motion.div>
      ) : (
        <Outlet />
      )}
    </motion.div>
  );
};

export default LoadingScreen;
