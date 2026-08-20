import React from 'react';
import { Check } from 'lucide-react';
import { tariffsData } from '../data/mockData';

export const Tariffs: React.FC = () => {
  return (
    <section className="tariffs section light-bg" id="tariffs">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Tariflar</span>
          <h2>Har kim uchun mos tariflar</h2>
          <p>Hamyonbop narxlar va yuqori darajadagi servis</p>
        </div>

        <div className="tariffs-grid">
          {tariffsData.map((tariff) => (
            <div
              key={tariff.id}
              className={`tariff-card ${tariff.isPopular ? 'popular' : ''}`}
            >
              {tariff.isPopular && <div className="popular-badge">Eng mashhur</div>}
              <div className="tariff-header">
                <span className="tariff-name">{tariff.name}</span>
                <div className="tariff-price">
                  {tariff.pricePerMin.split(' ')[0]} {tariff.pricePerMin.split(' ')[1]}{' '}
                  <span>/ min.</span>
                </div>
                <p>{tariff.description}</p>
              </div>

              <div className="tariff-body">
                <ul>
                  {tariff.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={18} className="check-icon" /> {feature}
                    </li>
                  ))}
                  <li>
                    <Check size={18} className="check-icon" /> Avtomobillar: {tariff.cars}
                  </li>
                </ul>
              </div>

              <div className="tariff-footer">
                <a
                  href="#booking"
                  className={`btn btn-block ${tariff.isPopular ? 'btn-primary' : 'btn-outline'}`}
                >
                  Tanlash
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
