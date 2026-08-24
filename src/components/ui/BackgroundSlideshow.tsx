import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import bg1 from '../../assets/taxi-bg-1.jpg';
import bg2 from '../../assets/taxi-bg-2.jpg';
import bg3 from '../../assets/taxi-bg-3.jpg';
import bg4 from '../../assets/taxi-bg-4.jpg';
import bg5 from '../../assets/taxi-bg-5.jpg';

const bgImages = [
  { src: bg1, alt: "Urgimchak Taxi — Shahar bo'ylab qulay sayohat" },
  { src: bg2, alt: "Urgimchak Taxi — Har doim eng yaqin avtomobil" },
  { src: bg3, alt: "Urgimchak Taxi — Qadimiy va zamonaviy ko'chalar" },
  { src: bg4, alt: "Urgimchak Taxi — 24/7 Tungi xavfsiz qatnovlar" },
  { src: bg5, alt: "Urgimchak Taxi — Bayramona va quvnoq kayfiyat" },
];

export const BackgroundSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="body-background-slideshow-container" aria-hidden="true">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
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

      {/* Light subtle overlay so text is crisp and readable */}
      <div className="body-background-gradient-overlay"></div>

      {/* Floating indicator dots */}
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
