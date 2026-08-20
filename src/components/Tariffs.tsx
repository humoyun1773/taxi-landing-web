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
        return <Zap size={20} className="text-yellow-400" />;
      case 'comfort':
        return <Sparkles size={20} className="text-yellow-400" />;
      case 'business':
        return <Crown size={20} className="text-yellow-400" />;
      case 'delivery':
        return <PackageCheck size={20} className="text-yellow-400" />;
      default:
        return <Zap size={20} className="text-yellow-400" />;
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

        <div className="tariffs-grid">
          {tariffsData.map((tariff, idx) => {
            const isSelected = selectedTariff === tariff.id;
            return (
              <motion.div
                key={tariff.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedTariff(tariff.id)}
                className={`tariff-card-master ${tariff.isPopular ? 'popular' : ''} ${
                  isSelected ? 'selected' : ''
                }`}
              >
                {tariff.isPopular && (
                  <div className="popular-badge-pill">
                    <Sparkles size={12} />
                    <span>{t('tariffs.popular')}</span>
                  </div>
                )}

                {/* Header */}
                <div className="tariff-card-header">
                  <div className="tariff-header-top">
                    <div className="tariff-icon-wrap">
                      {getTariffIcon(tariff.id)}
                    </div>
                    <span className="tariff-badge-tag">{tariff.badge}</span>
                  </div>

                  <h3 className="tariff-title-name">{tariff.name}</h3>

                  <div className="tariff-pricing-box">
                    <div className="pricing-number-row">
                      <span className="price-digits">{tariff.startPrice}</span>
                      <span className="price-currency-unit">{t('tariffs.from')}</span>
                    </div>
                    <span className="price-sub-note">{tariff.baseDistance}</span>
                  </div>

                  <p className="tariff-description-text">{tariff.description}</p>
                </div>

                {/* Complete Features List (Toliq Shartlar) */}
                <div className="tariff-specs-list">
                  <div className="specs-section-heading">Tarif afzalliklari:</div>
                  <ul>
                    {tariff.features.map((feat, fIdx) => (
                      <li key={fIdx} className="spec-item-row">
                        <div className="spec-check-icon">
                          <Check size={13} />
                        </div>
                        <span className="spec-item-text">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fleet Models Footer Box */}
                <div className="tariff-models-footer">
                  <div className="models-icon-box">
                    <CarFront size={16} />
                  </div>
                  <div className="models-info-wrap">
                    <span className="models-label">Avtopark modellari:</span>
                    <strong className="models-names">{tariff.cars}</strong>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
