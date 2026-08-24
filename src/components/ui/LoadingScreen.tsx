import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpiderLogo } from './SpiderLogo';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth, realistic progressive loading animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        // Accelerate smoothly as it gets closer to 100
        const step = Math.max(1, Math.floor((100 - prev) / 6));
        const next = prev + step;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="loading-screen-overlay"
        >
          {/* Ambient Soft Gold Halo */}
          <div className="loading-ambient-glow"></div>

          <div className="loading-content-card">
            {/* Animated Logo with Ripple Rings */}
            <div className="loading-logo-container">
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="loading-logo-wrapper"
              >
                <SpiderLogo size={64} />
              </motion.div>

              {/* Pulsing Ripple Rings */}
              <div className="loading-ring-pulse ring-1"></div>
              <div className="loading-ring-pulse ring-2"></div>
            </div>

            {/* Brand Title */}
            <div className="loading-brand-title">
              <span>URGIMCHAK</span>
              <span className="brand-accent">TAXI</span>
            </div>

            {/* Subtitle Badge */}
            <p className="loading-subtitle">
              Intellektual & Xavfsiz Taksi Ekotizimi
            </p>

            {/* Progress Bar Container */}
            <div className="loading-progress-bar-track">
              <motion.div
                className="loading-progress-bar-fill"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Status Text & Percentage */}
            <div className="loading-status-row">
              <span className="loading-status-text">
                {progress < 40
                  ? "Tizim ishga tushirilmoqda..."
                  : progress < 80
                  ? "Xarita va tariflar tayyorlanmoqda..."
                  : "Xush kelibsiz!"}
              </span>
              <span className="loading-percent-number">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
