import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const backgroundImages = [
  { url: '/assets/taxi-bg-1.jpg', title: "1-Sahna: Shahar bo'ylab" },
  { url: '/assets/taxi-bg-2.jpg', title: "2-Sahna: Ikki taksi" },
  { url: '/assets/taxi-bg-3.jpg', title: "3-Sahna: Mehmonxona" },
  { url: '/assets/taxi-bg-4.jpg', title: "4-Sahna: Kechki shahar" },
  { url: '/assets/taxi-bg-5.jpg', title: "5-Sahna: Milliy festival" },
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
      {/* 1. Dynamic Full-Resolution Cartoon Taxi Background */}
      <div className="hero-bg-photo-layer">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIdx}
            src={backgroundImages[currentIdx].url}
            alt={backgroundImages[currentIdx].title}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-full-bg-image"
            loading="eager"
            decoding="async"
          />
        </AnimatePresence>
      </div>

      {/* 2. Soft Ambient Tint (Keeping background 100% vibrant & clear) */}
      <div className="hero-clean-tint-overlay"></div>

      {/* 3. Hero Foreground Content with Glassmorphism Card */}
      <div className="container hero-fullbleed-container">
        <div className="hero-glass-panel">
          {/* Badge */}
          <div className="hero-live-badge">
            <Sparkles size={14} className="text-amber-500 animate-spin-slow" />
            <span>O'zbekistondagi №1 Milliy Taksi</span>
          </div>

          {/* Monumental Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="hero-subtext"
          >
            {t('hero.desc')}
          </motion.p>

          {/* Focused CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
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
          <div className="hero-perks-inline">
            <div className="perk-inline-item">
              <ShieldCheck size={16} className="text-amber-600" />
              <span>100% Xavfsiz</span>
            </div>
            <span className="perk-dot">•</span>
            <div className="perk-inline-item">
              <Zap size={16} className="text-amber-600" />
              <span>Tezkor 3 daqiqada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

