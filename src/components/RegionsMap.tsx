import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Route, ShieldCheck, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const RegionsMap: React.FC = () => {
  const { t } = useTranslation();

  const networkHighlights = [
    {
      icon: <MapPin size={18} className="text-yellow-400" />,
      title: "12 ta Viloyat Markazi",
      desc: "Respublika bo'ylab to'liq qamrov tarmog'i"
    },
    {
      icon: <Route size={18} className="text-yellow-400" />,
      title: "Shaharlararo Qatnovlar",
      desc: "Viloyatlar o'rtasida tezkor va qulay transport"
    },
    {
      icon: <ShieldCheck size={18} className="text-emerald" />,
      title: "Xavfsiz Safarlar",
      desc: "Har bir yo'nalish bo'yicha doimiy GPS nazorat"
    },
    {
      icon: <Headphones size={18} className="text-blue-400" />,
      title: "Yagona Dispetcherlik",
      desc: "24/7 kechayu-kunduz mijozlarni qo'llab-quvvatlash"
    }
  ];

  return (
    <section className="regions-section section light-dark-bg" id="regions">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{t('regions.subtitle')}</span>
          <h2>{t('regions.title')}</h2>
          <p>{t('regions.desc')}</p>
        </div>

        {/* Photorealistic 3D Geographic Digital Map Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="real-map-master-card"
        >
          <div className="real-map-wrapper">
            <div className="real-map-ambient-glow"></div>
            <img
              src="/assets/uzbekistan_taxi_map.jpg"
              alt="O'zbekiston Bo'ylab Yagona Urgimchak Taxi Tarmog'i Xaritasi"
              className="real-map-image"
              loading="lazy"
            />
            <div className="real-map-vignette-overlay"></div>
          </div>

          {/* 4 Clean Network Highlights Bar */}
          <div className="map-highlights-grid">
            {networkHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="map-highlight-box"
              >
                <div className="map-highlight-icon">
                  {item.icon}
                </div>
                <div className="map-highlight-text">
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
