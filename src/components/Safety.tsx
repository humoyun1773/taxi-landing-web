import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { safetyData } from '../data/mockData';

export const Safety: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="safety-section section light-dark-bg" id="safety">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{t('safety.subtitle')}</span>
          <h2>{t('safety.title')}</h2>
          <p>{t('safety.desc')}</p>
        </div>

        <div className="safety-layout">
          {/* Left: Safety checklist items */}
          <div className="safety-cards-grid">
            {safetyData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="safety-feature-item"
              >
                <div className="safety-check-icon">
                  <CheckCircle2 size={24} />
                </div>
                <div className="safety-text-group">
                  <div className="safety-tag-row">
                    <h4>{item.title}</h4>
                    <span className="safety-badge">{item.tag}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: 3D Shield Interactive Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="safety-visual-card"
          >
            <div className="shield-icon-wrapper">
              <div className="shield-ring-pulse"></div>
              <div className="shield-ring-pulse outer"></div>
              <Shield size={72} className="shield-main-icon" />
            </div>

            <div className="shield-interactive-box">
              <h3>{t('safety.shield_title')}</h3>
              <p>{t('safety.shield_desc')}</p>

              <div className="safety-status-indicators">
                <div className="status-item">
                  <span className="pulse-dot"></span>
                  <span>{t('safety.st1')}</span>
                </div>
                <div className="status-item">
                  <span className="pulse-dot"></span>
                  <span>{t('safety.st2')}</span>
                </div>
                <div className="status-item">
                  <span className="pulse-dot"></span>
                  <span>{t('safety.st3')}</span>
                </div>
              </div>

              <div className="emergency-sos-bar">
                <div className="sos-alert-label">
                  <ShieldAlert size={18} className="text-rose" />
                  <span className="sos-label">{t('safety.sos_title')}</span>
                </div>
                <span className="sos-status">{t('safety.sos_status')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
