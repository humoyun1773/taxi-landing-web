import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Globe, Compass, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const TechArchitecture: React.FC = () => {
  const { t } = useTranslation();

  const techPillars = [
    {
      id: 'tp1',
      icon: Cpu,
      title: t('tech.tp1_title'),
      description: t('tech.tp1_desc'),
    },
    {
      id: 'tp2',
      icon: Zap,
      title: t('tech.tp2_title'),
      description: t('tech.tp2_desc'),
    },
    {
      id: 'tp3',
      icon: Shield,
      title: t('tech.tp3_title'),
      description: t('tech.tp3_desc'),
    },
    {
      id: 'tp4',
      icon: Globe,
      title: t('tech.tp4_title'),
      description: t('tech.tp4_desc'),
    },
    {
      id: 'tp5',
      icon: Compass,
      title: t('tech.tp5_title'),
      description: t('tech.tp5_desc'),
    },
    {
      id: 'tp6',
      icon: Layers,
      title: t('tech.tp6_title'),
      description: t('tech.tp6_desc'),
    },
  ];

  return (
    <section className="tech-section section" id="tech">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{t('tech.subtitle')}</span>
          <h2>{t('tech.title')}</h2>
          <p>{t('tech.desc')}</p>
        </div>

        <div className="tech-grid">
          {techPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="tech-card"
              >
                <div className="tech-icon-wrap">
                  <Icon size={26} />
                </div>
                <h3 className="tech-title">{pillar.title}</h3>
                <p className="tech-desc">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
