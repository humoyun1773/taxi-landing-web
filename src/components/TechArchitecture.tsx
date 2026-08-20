import React from 'react';
import { motion } from 'framer-motion';
import { techPillarsData } from '../data/mockData';
import { Cpu, Zap, Shield, Globe, Compass, Layers } from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  Zap: Zap,
  Shield: Shield,
  Globe: Globe,
  Compass: Compass,
  Layers: Layers,
};

export const TechArchitecture: React.FC = () => {
  return (
    <section className="tech-section section" id="tech">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Texnologik Arxitektura</span>
          <h2>Platforma Qanday Texnologiyalar Asosida Ishlaydi?</h2>
          <p>
            Urgimchak Taxi — ilg'or neyrotarmoqlar, geografik axborot tizimlari (GIS) va real vaqtli telemetriya bilan qurollangan zamonaviy texnologik platformadir
          </p>
        </div>

        <div className="tech-grid">
          {techPillarsData.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName];
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
