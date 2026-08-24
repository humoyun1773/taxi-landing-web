import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const backgroundImages = [
  '/assets/taxi-bg-1.jpg',
  '/assets/taxi-bg-2.jpg',
  '/assets/taxi-bg-3.jpg',
  '/assets/taxi-bg-4.jpg',
  '/assets/taxi-bg-5.jpg',
];

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-switch background image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero hero-fullbleed-bg-section" id="home">
      {/* 1. Dynamic Rotating Background Slider */}
      <div className="hero-bg-photo-layer">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIdx}
            src={backgroundImages[currentIdx]}
            alt={`Urgimchak Taxi Illustration Scene ${currentIdx + 1}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-full-bg-image"
            loading="eager"
            decoding="async"
          />
        </AnimatePresence>
      </div>

      {/* 2. Directional Cinematic Gradient Mask (Clean text readability on white theme) */}
      <div className="hero-full-directional-overlay"></div>
      <div className="hero-top-vignette"></div>
      <div className="hero-bottom-vignette"></div>

      {/* 3. Hero Foreground Content */}
      <div className="container hero-fullbleed-container">
        <div className="hero-text-column">
          {/* Monumental Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="hero-main-title"
          >
            <span className="hero-title-line hero-title-main">
              {t('hero.title_line1')}
            </span>
            <span className="hero-title-line hero-title-yellow">
              {t('hero.title_line2')}
            </span>
          </motion.h1>

          {/* Subheading Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="hero-subtext"
          >
            {t('hero.desc')}
          </motion.p>

          {/* Focused CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="hero-actions-row"
          >
            <a href="#tariffs" className="hero-btn-primary">
              <span>{t('hero.cta_driver')}</span>
              <ArrowRight size={18} className="hero-btn-arrow" />
            </a>

            <a href="#about" className="hero-btn-secondary">
              <span>{t('hero.cta_info')}</span>
              <ChevronRight size={16} />
            </a>
          </motion.div>

          {/* Key Highlights Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-perks-inline"
          >
            <div className="perk-inline-item">
              <ShieldCheck size={16} className="text-yellow-400" />
              <span>100% Xavfsiz Safarlar</span>
            </div>
            <span className="perk-dot">•</span>
            <div className="perk-inline-item">
              <Zap size={16} className="text-yellow-400" />
              <span>Hamyonbop va Qulay Tariflar</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Interactive Scene Switcher Indicators */}
      <div className="hero-bg-indicators">
        {backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`hero-bg-dot ${currentIdx === idx ? 'active' : ''}`}
            aria-label={`Rasm ${idx + 1} ga o'tish`}
          />
        ))}
      </div>
    </section>
  );
};

