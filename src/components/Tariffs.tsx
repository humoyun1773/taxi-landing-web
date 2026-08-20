import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { tariffsData } from '../data/mockData';
import { Check, Sparkles, CarFront, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Tariffs: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTariff, setSelectedTariff] = useState('comfort');

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
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedTariff(tariff.id)}
                className={`tariff-card ${tariff.isPopular ? 'popular' : ''} ${isSelected ? 'selected' : ''}`}
              >
                {tariff.isPopular && (
                  <div className="popular-ribbon">
                    <Sparkles size={13} /> {t('tariffs.popular')}
                  </div>
                )}

                <div className="tariff-header">
                  <div className="tariff-name-group">
                    <h3 className="tariff-name">{tariff.name}</h3>
                    <span className="tariff-car-pill">{tariff.cars.split(',')[0]}</span>
                  </div>
                  <div className="tariff-price-wrap">
                    <span className="price-val">{tariff.startPrice}</span>
                    <span className="price-cur">{t('tariffs.from')}</span>
                  </div>
                  <p className="tariff-desc">{tariff.description}</p>
                </div>

                <div className="tariff-features-list">
                  <div className="feature-group-title">{t('tariffs.terms')}</div>
                  <ul>
                    {tariff.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <div className="check-bullet">
                          <Check size={14} />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                    <li className="cars-info-item">
                      <div className="check-bullet car-bullet">
                        <CarFront size={14} />
                      </div>
                      <span><strong>{t('tariffs.models')}</strong> {tariff.cars}</span>
                    </li>
                  </ul>
                </div>

                <div className="tariff-action">
                  <a
                    href="#about"
                    className={`btn btn-block ${tariff.isPopular ? 'btn-primary' : 'btn-outline'}`}
                  >
                    <span>{t('tariffs.btn')}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
