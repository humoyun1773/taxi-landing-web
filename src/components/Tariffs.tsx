import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { tariffsData } from '../data/mockData';
import { Check, Sparkles, CarFront, Zap, Crown, PackageCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Tariffs: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTariff, setSelectedTariff] = useState('comfort');

  const getTariffIcon = (id: string) => {
    switch (id) {
      case 'eco':
        return <Zap size={18} className="text-yellow-400" />;
      case 'comfort':
        return <Sparkles size={18} className="text-yellow-400" />;
      case 'business':
        return <Crown size={18} className="text-yellow-400" />;
      case 'delivery':
        return <PackageCheck size={18} className="text-yellow-400" />;
      default:
        return <Zap size={18} className="text-yellow-400" />;
    }
  };

  return (
    <section className="tariffs section light-dark-bg" id="tariffs">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{t('tariffs.subtitle')}</span>
          <h2>{t('tariffs.title')}</h2>
          <p>{t('tariffs.desc')}</p>
        </div>

        <div className="tariffs-grid-compact">
          {tariffsData.map((tariff, idx) => {
            const isSelected = selectedTariff === tariff.id;
            return (
              <motion.div
                key={tariff.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedTariff(tariff.id)}
                className={`tariff-card-compact ${tariff.isPopular ? 'popular' : ''} ${
                  isSelected ? 'selected' : ''
                }`}
              >
                {tariff.isPopular && (
                  <div className="compact-popular-badge">
                    <Sparkles size={11} />
                    <span>{t('tariffs.popular')}</span>
                  </div>
                )}

                {/* Top Row: Icon + Title + Badge */}
                <div className="compact-header-row">
                  <div className="flex items-center gap-3">
                    <div className="compact-icon-box">
                      {getTariffIcon(tariff.id)}
                    </div>
                    <div>
                      <h3 className="compact-tariff-title">{tariff.name}</h3>
                      <span className="compact-badge-text">{tariff.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="compact-price-section">
                  <div className="compact-price-row">
                    <span className="compact-digits">{tariff.startPrice}</span>
                    <span className="compact-unit">{t('tariffs.from')}</span>
                  </div>
                  <span className="compact-dist-note">• {tariff.baseDistance}</span>
                </div>

                {/* Specs Bullets */}
                <ul className="compact-specs-list">
                  {tariff.features.map((feat, fIdx) => (
                    <li key={fIdx} className="compact-spec-item">
                      <div className="compact-check-circle">
                        <Check size={11} />
                      </div>
                      <span className="compact-spec-text">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Fleet Pill Footer */}
                <div className="compact-models-pill">
                  <CarFront size={14} className="text-yellow-400 shrink-0" />
                  <span className="compact-models-names">{tariff.cars}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
