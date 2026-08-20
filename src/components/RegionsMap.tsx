import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { regionsData } from '../data/mockData';
import { MapPin, Car, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
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
          {/* Interactive Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="map-card"
          >
            <div className="map-network-bg">
              <svg className="uzbekistan-svg" viewBox="0 0 1000 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Country Outline Representation */}
                <path
                  d="M120,240 C150,180 230,120 380,110 C500,100 620,130 730,170 C840,200 950,210 930,280 C900,340 850,370 780,390 C720,410 650,470 580,480 C500,490 470,400 390,370 C300,340 180,350 120,280 Z"
                  fill="url(#mapGradient)"
                  stroke="#EAB308"
                  strokeWidth="1.8"
                  strokeOpacity="0.4"
                  strokeDasharray="6 6"
                />

                {/* Network connecting lines */}
                <path
                  d="M 740 176 L 550 302 L 420 286 L 880 242 L 930 209 L 860 181 L 260 198 L 540 385 L 620 462"
                  stroke="#EAB308"
                  strokeWidth="1.2"
                  strokeOpacity="0.25"
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
                <span>Doimiy Faol Viloyatlar</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot live-dot"></span>
                <span>24/7 Shaharlararo Qatnov</span>
              </div>
            </div>
          </motion.div>

          {/* Region Details Panel */}
          <div className="region-details-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="region-info-box"
              >
                <div className="region-info-header">
                  <div className="region-name-wrap">
                    <span className="region-tag">{t('regions.active_tag')}</span>
                    <h3>{selectedRegion.name}</h3>
                  </div>
                  <div className="region-center-badge">
                    <MapPin size={16} /> {t('regions.center')}: {selectedRegion.center}
                  </div>
                </div>

                <div className="region-metrics-grid">
                  <div className="metric-box">
                    <Car size={20} className="metric-icon" />
                    <div>
                      <strong>{selectedRegion.activeCars.toLocaleString()} ta</strong>
                      <p>{t('regions.cars_on_road')}</p>
                    </div>
                  </div>

                  <div className="metric-box">
                    <Clock size={20} className="metric-icon" />
                    <div>
                      <strong>~{selectedRegion.avgArrival}</strong>
                      <p>{t('regions.avg_arrival')}</p>
                    </div>
                  </div>
                </div>

                <div className="region-perks">
                  <div className="perk-row">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>{t('regions.p1')}</span>
                  </div>
                  <div className="perk-row">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>{t('regions.p2')}</span>
                  </div>
                  <div className="perk-row">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>{t('regions.p3')}</span>
                  </div>
                </div>

                <a href="#about" className="btn btn-primary btn-block">
                  <span>{t('regions.btn')}</span>
                  <ArrowRight size={16} />
                </a>
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
