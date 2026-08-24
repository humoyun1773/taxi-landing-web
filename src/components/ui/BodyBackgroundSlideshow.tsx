import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = [
  '/assets/taxi-bg-1.jpg',
  '/assets/taxi-bg-2.jpg',
  '/assets/taxi-bg-3.jpg',
  '/assets/taxi-bg-4.jpg',
  '/assets/taxi-bg-5.jpg',
];

export const BodyBackgroundSlideshow: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed-body-bg-slider-container">
      {/* 1. Crossfading Full-Body Background Image Layer */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIdx}
          src={backgroundImages[currentIdx]}
          alt={`Urgimchak Taxi Background ${currentIdx + 1}`}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed-body-bg-img"
          loading="eager"
          decoding="async"
        />
      </AnimatePresence>

      {/* 2. Soft Luxury Ambient Layer (Ensures clean white theme and text clarity) */}
      <div className="fixed-body-bg-overlay" />
    </div>
  );
};
