import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Badge } from './ui/badge';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const bgParallaxX = useTransform(smoothMouseX, [-500, 500], [-8, 8]);
  const bgParallaxY = useTransform(smoothMouseY, [-500, 500], [-5, 5]);

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      className="hero hero-fullbleed-bg-section"
      id="home"
      onMouseMove={handleMouseMove}
    >
      {/* 1. Full-Bleed Background Taxi Photography */}
      <motion.div
        style={isDesktop && !shouldReduceMotion ? { x: bgParallaxX, y: bgParallaxY } : {}}
        className="hero-bg-photo-layer"
      >
        <img
          src="/assets/urgimchak_yellow_taxi.jpg"
          alt="Urgimchak Taxi — Bright Yellow Modern Sedan"
          className="hero-full-bg-image"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* 2. Directional Cinematic Gradient Mask (Dark Left for Text, Clear Right for Taxi) */}
      <div className="hero-full-directional-overlay"></div>
      <div className="hero-top-vignette"></div>
      <div className="hero-bottom-vignette"></div>

      {/* 3. Hero Foreground Content */}
      <div className="container hero-fullbleed-container">
        <div className="hero-text-column">
          {/* Eyebrow Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-eyebrow-wrapper"
          >
            <Badge variant="gold" className="hero-brand-badge">
              <Zap size={13} className="text-yellow-400 mr-1.5" />
              <span>{t('hero.badge')}</span>
            </Badge>
          </motion.div>

          {/* Monumental Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="hero-main-title"
          >
            <span className="hero-title-line text-white">
              {t('hero.title_line1')}
            </span>
            <br />
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
            <a href="#driver" className="hero-btn-primary">
              <span>{t('hero.cta_driver')}</span>
              <ArrowRight size={18} className="hero-btn-arrow" />
            </a>

            <a href="#about" className="hero-btn-secondary">
              <span>{t('hero.cta_info')}</span>
              <ChevronRight size={16} />
            </a>
          </motion.div>

          {/* Subtle Key Highlights Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-perks-inline"
          >
            <div className="perk-inline-item">
              <ShieldCheck size={16} className="text-yellow-400" />
              <span>100% Xavfsiz</span>
            </div>
            <span className="perk-dot">•</span>
            <div className="perk-inline-item">
              <Zap size={16} className="text-yellow-400" />
              <span>~3 Daqiqa yetib kelish</span>
            </div>
            <span className="perk-dot">•</span>
            <div className="perk-inline-item">
              <span>5% Past komissiya</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
