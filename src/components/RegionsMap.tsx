import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { regionsData } from '../data/mockData';
import { MapPin, CheckCircle2, Globe2, Compass, Radio } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { RegionData } from '../types';

export const RegionsMap: React.FC = () => {
  const { t } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState<RegionData>(regionsData[0]);

  return (
    <section className="regions-section section" id="regions">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{t('regions.subtitle')}</span>
          <h2>{t('regions.title')}</h2>
          <p>{t('regions.desc')}</p>
        </div>

        <div className="regions-layout">
          {/* Interactive Glowing Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="map-card"
          >
            <div className="map-card-top-bar">
              <div className="flex items-center gap-2">
                <Radio size={14} className="text-yellow-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                  Respublika 12 Viloyat Tarmog'i
                </span>
              </div>
              <span className="text-xs text-slate-400 font-semibold">
                Faol Hub: <strong className="text-white">{selectedRegion.center}</strong>
              </span>
            </div>

            <div className="map-network-bg">
              <svg className="uzbekistan-svg" viewBox="0 0 1000 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="mapGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#0F172A" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#030712" stopOpacity="0.95" />
                  </linearGradient>
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Country Outline Representation (Stylized Geometric Uzbekistan Silhouette) */}
                <path
                  d="M 140 210 Q 220 130 360 130 T 520 110 Q 640 120 730 160 Q 860 190 940 230 Q 960 280 910 330 Q 860 370 780 390 Q 710 420 630 470 Q 540 480 480 410 Q 400 370 300 340 Q 180 350 140 280 Z"
                  fill="url(#mapGlowGrad)"
                  stroke="#FFD21F"
                  strokeWidth="2.5"
                  strokeOpacity="0.5"
                  filter="url(#goldGlow)"
                />

                <path
                  d="M 140 210 Q 220 130 360 130 T 520 110 Q 640 120 730 160 Q 860 190 940 230 Q 960 280 910 330 Q 860 370 780 390 Q 710 420 630 470 Q 540 480 480 410 Q 400 370 300 340 Q 180 350 140 280 Z"
                  fill="none"
                  stroke="#FFD21F"
                  strokeWidth="1.2"
                  strokeOpacity="0.8"
                  strokeDasharray="6 6"
                />

                {/* Inter-region network connecting lines */}
                <path
                  d="M 740 176 L 550 302 L 420 286 L 880 242 L 930 209 L 860 181 L 260 198 L 540 385 L 620 462 L 740 176 L 860 181"
                  stroke="#FFD21F"
                  strokeWidth="1.2"
                  strokeOpacity="0.35"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Pin markers */}
              {regionsData.map((reg) => {
                const isSelected = selectedRegion.id === reg.id;
                return (
                  <button
                    key={reg.id}
                    onClick={() => setSelectedRegion(reg)}
                    style={{ left: `${reg.coords.x}%`, top: `${reg.coords.y}%` }}
                    className={`map-pin-btn ${isSelected ? 'active' : ''}`}
                    title={reg.name}
                  >
                    <span className="pin-pulse-ring"></span>
                    <span className="pin-core"></span>
                    <span className="pin-label">{reg.center}</span>
                  </button>
                );
              })}
            </div>

            <div className="map-legend">
              <div className="legend-item">
                <span className="legend-dot active-dot"></span>
                <span>Tanlangan viloyat markazi</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot live-dot"></span>
                <span>Tarmoq integratsiyasi bosqichi</span>
              </div>
            </div>
          </motion.div>

          {/* Region Details Panel */}
          <div className="region-details-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.3 }}
                className="region-info-box"
              >
                <div className="region-info-header">
                  <div className="region-name-wrap">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe2 size={16} className="text-yellow-400" />
                      <span className="region-tag">{t('regions.hub_title')}</span>
                    </div>
                    <h3>{selectedRegion.name}</h3>
                  </div>
                  <div className="region-center-badge">
                    <MapPin size={15} className="text-yellow-400" />
                    <span>{selectedRegion.center}</span>
                  </div>
                </div>

                <p className="region-hub-description">
                  {t('regions.hub_desc')}
                </p>

                <div className="region-perks-list">
                  <div className="perk-row">
                    <CheckCircle2 size={16} className="text-emerald shrink-0" />
                    <span>{t('regions.p1')}</span>
                  </div>
                  <div className="perk-row">
                    <CheckCircle2 size={16} className="text-emerald shrink-0" />
                    <span>{t('regions.p2')}</span>
                  </div>
                  <div className="perk-row">
                    <CheckCircle2 size={16} className="text-emerald shrink-0" />
                    <span>{t('regions.p3')}</span>
                  </div>
                  <div className="perk-row">
                    <CheckCircle2 size={16} className="text-emerald shrink-0" />
                    <span>{t('regions.p4')}</span>
                  </div>
                </div>

                <div className="region-status-card">
                  <Compass size={18} className="text-yellow-400 shrink-0" />
                  <span>Yagona respublika transport integratsiyasi bosqichma-bosqich yo'lga qo'yiladi.</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Region Selector Pills */}
            <div className="quick-region-pills">
              <span className="pills-title">{t('regions.quick_select')}</span>
              <div className="pills-scroll">
                {regionsData.map((reg) => (
                  <button
                    key={reg.id}
                    onClick={() => setSelectedRegion(reg)}
                    className={`region-pill-btn ${selectedRegion.id === reg.id ? 'active' : ''}`}
                  >
                    {reg.center}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
