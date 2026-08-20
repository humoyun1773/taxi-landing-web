import React from 'react';
import { Apple, Play } from 'lucide-react';

export const AppDownload: React.FC = () => {
  return (
    <section className="app-section section" id="app">
      <div className="container app-container">
        <div className="app-content">
          <span className="sub-title">Mobil Ilova</span>
          <h2>TaxiGo ilovasini yuklab oling</h2>
          <p>
            Ilova orqali buyurtma berish yanada oson va qulayroq. Birinchi sayohatingiz uchun 15% chegirma promokodini qo'lga kiriting!
          </p>
          <div className="app-buttons">
            <a href="#" className="store-btn">
              <Apple size={28} />
              <div>
                <span>Yuklab oling</span>
                <strong>App Store</strong>
              </div>
            </a>
            <a href="#" className="store-btn">
              <Play size={28} />
              <div>
                <span>Yuklab oling</span>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
        </div>

        <div className="app-preview">
          <div className="phone-mockup">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
              alt="Taxi ilovasi ko'rinishi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
