import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AppDownload: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="app-download-section section" id="app">
      <div className="container">
        <div className="app-download-wrapper">
          <div className="app-ambient-glow"></div>

          <div className="app-download-grid">
            {/* Left Content: Mobile Platform Overview */}
            <div className="app-content-col">

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="app-title"
              >
                {t('app.title')}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="app-desc"
              >
                {t('app.desc')}
              </motion.p>

              {/* Luxury Feature Cards Grid */}
              <div className="app-feature-list-grid">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{ x: 6 }}
                  className="app-feat-item"
                >
                  <div className="app-feat-icon icon-gold">
                    <Navigation size={22} />
                  </div>
                  <div className="app-feat-text">
                    <div className="app-feat-header">
                      <strong>{t('app.f1_title')}</strong>
                      <ChevronRight size={16} className="feat-arrow" />
                    </div>
                    <p>{t('app.f1_desc')}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  whileHover={{ x: 6 }}
                  className="app-feat-item"
                >
                  <div className="app-feat-icon icon-emerald">
                    <CreditCard size={22} />
                  </div>
                  <div className="app-feat-text">
                    <div className="app-feat-header">
                      <strong>{t('app.f2_title')}</strong>
                      <ChevronRight size={16} className="feat-arrow" />
                    </div>
                    <p>{t('app.f2_desc')}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  whileHover={{ x: 6 }}
                  className="app-feat-item"
                >
                  <div className="app-feat-icon icon-shield">
                    <ShieldCheck size={22} />
                  </div>
                  <div className="app-feat-text">
                    <div className="app-feat-header">
                      <strong>{t('app.f3_title')}</strong>
                      <ChevronRight size={16} className="feat-arrow" />
                    </div>
                    <p>{t('app.f3_desc')}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Ultra-Realistic 3D Smartphone Display */}
            <div className="app-phone-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="real-phone-showcase-wrapper"
              >
                {/* Floating Animation Loop */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="real-phone-frame"
                >
                  <div className="phone-ambient-underglow"></div>
                  <img
                    src="/assets/urgimchak_app_mockup.jpg"
                    alt="Urgimchak Taxi 3D Smartphone App Interface"
                    className="real-phone-img"
                    loading="lazy"
                  />
                  <div className="phone-glass-reflection-overlay"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
