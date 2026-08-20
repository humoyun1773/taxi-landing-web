import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { tariffsData } from '../data/mockData';
import { Check, Sparkles, CarFront, ArrowRight } from 'lucide-react';

export const Tariffs: React.FC = () => {
  const [selectedTariff, setSelectedTariff] = useState('comfort');

  return (
    <section className="tariffs section light-dark-bg" id="tariffs">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Shaffof Tariflar</span>
          <h2>Har Qanday Talab Uchun Mos Tariflar</h2>
          <p>Yashirin to'lovlarsiz, aniq belgilangan hamyonbop va qulay tariflar rejasi</p>
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
                    <Sparkles size={13} /> {tariff.badge || 'Eng Mashhur'}
                  </div>
                )}

                <div className="tariff-header">
                  <div className="tariff-name-group">
                    <h3 className="tariff-name">{tariff.name}</h3>
                    <span className="tariff-car-pill">{tariff.cars.split(',')[0]}</span>
                  </div>
                  <div className="tariff-price-wrap">
                    <span className="price-val">{tariff.startPrice}</span>
                    <span className="price-cur">so'mdan</span>
                  </div>
                  <p className="tariff-desc">{tariff.description}</p>
                </div>

                <div className="tariff-features-list">
                  <div className="feature-group-title">Tarif shartlari:</div>
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
                      <span><strong>Modellar:</strong> {tariff.cars}</span>
                    </li>
                  </ul>
                </div>

                <div className="tariff-action">
                  <a
                    href="#booking"
                    className={`btn btn-block ${tariff.isPopular ? 'btn-primary' : 'btn-outline'}`}
                  >
                    <span>{tariff.name} bilan ketish</span>
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
