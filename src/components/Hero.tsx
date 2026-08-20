import React from 'react';
import { ShieldCheck, Car, Play } from 'lucide-react';
import { BookingForm } from './BookingForm';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <ShieldCheck size={16} /> 100% Xavfsiz & Ishonchli Sayohat
          </div>
          <h1 className="hero-title">
            Istalgan manzilga <span className="highlight">tez va qulay</span> yetib oling!
          </h1>
          <p className="hero-desc">
            TaxiGo bilan shahar bo'ylab va viloyatlararo xavfsiz safar qiling. Eng yaxshi haydovchilar, qulay narxlar va 24/7 xizmat.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>500K+</h3>
              <p>Mamnun mijozlar</p>
            </div>
            <div className="stat-item">
              <h3>3 Min</h3>
              <p>O'rtacha kelish vaqti</p>
            </div>
            <div className="stat-item">
              <h3>4.9 ★</h3>
              <p>Ilova reytingi</p>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#booking" className="btn btn-primary">
              <Car size={18} /> Taksi chaqirish
            </a>
            <a href="#app" className="btn btn-outline">
              <Play size={18} /> Ilovani yuklab olish
            </a>
          </div>
        </div>

        <div className="hero-card" id="booking">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};
