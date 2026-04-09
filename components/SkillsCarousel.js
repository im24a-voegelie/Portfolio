'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function SkillsCarousel({ skills }) {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentGroup(
      (prev) => (prev + newDirection + skills.length) % skills.length
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentGroup((prev) => (prev + 1) % skills.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, skills.length]);

  const currentSkillGroup = skills[currentGroup];

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div className="relative min-h-64 flex flex-col items-center justify-center p-8">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentGroup}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex flex-col items-center justify-center px-8"
          >
            <h3 className="text-section-lg bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-400 dark:to-violet-600 bg-clip-text text-transparent mb-10">
              {currentSkillGroup.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
              {currentSkillGroup.items.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-violet-50 dark:from-violet-900/30 dark:to-violet-800/20 text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base hover:shadow-md transition-shadow"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        aria-label="Previous skills"
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        aria-label="Next skills"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="flex gap-2 justify-center mt-4">
        {skills.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setDirection(idx > currentGroup ? 1 : -1);
              setCurrentGroup(idx);
              setIsAutoPlay(false);
              setTimeout(() => setIsAutoPlay(true), 8000);
            }}
            className={`h-2 rounded-full transition-all ${
              idx === currentGroup
                ? 'bg-violet-600 dark:bg-violet-500 w-8'
                : 'bg-violet-300 dark:bg-violet-700 w-2 hover:bg-violet-400 dark:hover:bg-violet-600'
            }`}
            aria-label={`Go to ${skills[idx].category}`}
          />
        ))}
      </div>
    </div>
  );
}
