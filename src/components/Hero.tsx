import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Zap, ArrowRight, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 140 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const carParallaxX = useTransform(smoothMouseX, [-500, 500], [-15, 15]);
  const carParallaxY = useTransform(smoothMouseY, [-500, 500], [-10, 10]);

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="hero" id="home" onMouseMove={handleMouseMove}>
      {/* Ambient Lighting & Trail Network */}
      <div className="hero-bg-network">
        <div className="hero-radial-glow primary-glow"></div>
        <div className="hero-radial-glow secondary-glow"></div>
        <div className="light-trail-container">
          <div className="light-trail trail-1"></div>
          <div className="light-trail trail-2"></div>
          <div className="light-trail trail-3"></div>
        </div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Premium Typography & Project CTAs */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hero-badge"
          >
            <Zap size={14} />
            <span>{t('hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title"
          >
            {t('hero.title_prefix')} <br />
            {t('hero.title_mid')} <br />
            <span className="gradient-text-gold">{t('hero.title_accent')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hero-desc"
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-buttons"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary"
            >
              <span>{t('hero.cta_about')}</span>
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#tech"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-glass"
            >
              <Layers size={16} />
              <span>{t('hero.cta_tech')}</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Clean Standalone Modern Taxi Car Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="hero-visual-column"
        >
          <motion.div
            style={{ x: carParallaxX, y: carParallaxY }}
            className="hero-standalone-car-wrap"
          >
            <div className="hero-car-underglow"></div>
            <img
              src="https://images.unsplash.com/photo-1556122071-e404eaedb77f?auto=format&fit=crop&w=1200&q=85"
              alt="Urgimchak Taxi Car"
              className="hero-standalone-car-img"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
