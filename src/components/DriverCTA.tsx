import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const DriverCTA: React.FC = () => {
  return (
    <section className="driver-cta">
      <div className="container">
        <div className="driver-banner">
          <div className="driver-info">
            <h2>Haydovchi bo'lib ishlamoqchimisiz?</h2>
            <p>O'z avtomobilingiz bilan erkin grafik asosida kunlik yuqori daromad toping!</p>
            <ul className="driver-perks">
              <li>
                <CheckCircle2 size={20} /> Kam komissiya (faqat 5%)
              </li>
              <li>
                <CheckCircle2 size={20} /> Darhol to'lovlarni yechib olish
              </li>
              <li>
                <CheckCircle2 size={20} /> Bonuslar va mukofotlar
              </li>
            </ul>
            <a href="#contact" className="btn btn-dark">
              Haydovchi sifatida ulanish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
