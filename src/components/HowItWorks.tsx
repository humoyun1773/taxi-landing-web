import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MapPin, Car, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { stepsData } from '../data/mockData';

const stepIcons = {
  Smartphone: Smartphone,
  MapPin: MapPin,
  Car: Car,
  Smile: Smile,
};

export const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{t('howItWorks.subtitle')}</span>
          <h2>{t('howItWorks.title')}</h2>
          <p>{t('howItWorks.desc')}</p>
        </div>

        <div className="steps-container">
          {/* Animated Connecting Line */}
          <div className="timeline-track">
            <motion.div
              className="timeline-progress-bar"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="steps-grid">
            {stepsData.map((step, idx) => {
              const Icon = stepIcons[step.iconName];

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="step-card"
                >
                  <div className="step-badge-number">{step.number}</div>

                  <div className="step-icon-circle">
                    <Icon size={28} />
                  </div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>

                  <div className="step-indicator-bar"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
