import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bgImages = [
  {
    src: '/assets/taxi-bg-1.jpg',
    alt: "Urgimchak Taxi — Shahar bo'ylab qulay sayohat",
  },
  {
    src: '/assets/taxi-bg-2.jpg',
    alt: "Urgimchak Taxi — Har doim eng yaqin avtomobil",
  },
  {
    src: '/assets/taxi-bg-3.jpg',
    alt: "Urgimchak Taxi — Qadimiy va zamonaviy ko'chalar",
  },
  {
    src: '/assets/taxi-bg-4.jpg',
    alt: "Urgimchak Taxi — 24/7 Tungi xavfsiz qatnovlar",
  },
  {
    src: '/assets/taxi-bg-5.jpg',
    alt: "Urgimchak Taxi — Bayramona va quvnoq kayfiyat",
  },
];

export const BackgroundSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 4800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="body-background-slideshow-container" aria-hidden="true">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="body-background-slide-layer"
        >
          <img
            src={bgImages[currentIndex].src}
            alt={bgImages[currentIndex].alt}
            className="body-background-img"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Layered Luxury Light Frosted Glass Overlays */}
      <div className="body-background-gradient-overlay"></div>
      <div className="body-background-blur-overlay"></div>
      <div className="body-background-vignette-top"></div>
      <div className="body-background-vignette-bottom"></div>

      {/* Floating Indicator Dots for Slide Switch */}
      <div className="slideshow-indicators-row">
        {bgImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`slideshow-dot ${idx === currentIndex ? 'active' : ''}`}
            aria-label={`Slayd ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
