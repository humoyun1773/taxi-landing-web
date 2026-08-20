import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Sparkles } from 'lucide-react';

export const AppDownload: React.FC = () => {
  return (
    <section className="app-download-section section" id="app">
      <div className="container">
        <div className="app-download-wrapper">
          <div className="app-ambient-glow"></div>

          <div className="app-download-grid">
            {/* Left Content */}
            <div className="app-content-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="badge app-badge"
              >
                <Sparkles size={14} /> Mobil Ilova
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="app-title"
              >
                Urgimchak Taxi Ilovasini <br />
                <span className="gradient-text-yellow">Yuklab Oling</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="app-desc"
              >
                Ilova orqali buyurtma berish 3 barobar tezroq! Haritadan haydovchini kuzating, sevimli manzillarni saqlang va birinchi sayohatingiz uchun <strong>"URGIMCHAK15"</strong> promokodi bilan 15% chegirma oling.
              </motion.p>

              {/* App Store Buttons */}
              <div className="app-store-group">
                <a href="#" className="store-badge-btn" title="App Store">
                  <AppleIcon size={26} />
                  <div className="store-text">
                    <span>Yuklab oling</span>
                    <strong>App Store</strong>
                  </div>
                </a>

                <a href="#" className="store-badge-btn" title="Google Play">
                  <GooglePlayIcon size={26} />
                  <div className="store-text">
                    <span>Yuklab oling</span>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>

              {/* QR Code Quick Scan Block */}
              <div className="qr-scan-box">
                <div className="qr-icon-wrap">
                  <QrCode size={40} className="text-amber" />
                </div>
                <div className="qr-info">
                  <strong>Kamerani QR kodga qarating</strong>
                  <p>Ilovani to'g'ridan-to'g'ri smartfoningizga tezkor yuklab oling</p>
                </div>
              </div>
            </div>

            {/* Right: 3D Floating Mockup Phone */}
            <div className="app-phone-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="phone-mockup-wrapper"
              >
                {/* Floating Animation Loop */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="phone-device"
                >
                  <div className="phone-screen">
                    <div className="phone-notch"></div>
                    <div className="screen-header">
                      <div className="screen-logo">
                        <span className="dot"></span> Urgimchak Taxi
                      </div>
                      <div className="screen-badge">Jonli</div>
                    </div>

                    <div className="screen-map-preview">
                      <div className="map-grid-lines"></div>
                      <div className="driver-car-marker">
                        <span className="pulse-radar"></span>
                        <div className="car-symbol">🚕</div>
                      </div>
                      <div className="user-dest-marker">📍 Siz shu yerdasiz</div>
                    </div>

                    <div className="screen-bottom-card">
                      <div className="car-type-info">
                        <strong>Komfort Klass</strong>
                        <span>Tracker 2 (Oq)</span>
                      </div>
                      <div className="eta-badge">2 daqiqa qoldi</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AppleIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.77 1.04-1.84.92-2.92-.9.04-2 .61-2.65 1.38-.57.66-.99 1.74-.86 2.8.97.08 2-.51 2.59-1.26z"/>
  </svg>
);

const GooglePlayIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.36-.312-.61-.795-.61-1.386V3.2c0-.591.25-1.074.61-1.386zM15.207 13.414l2.766 2.766-12.83 7.373 10.064-10.139zm0-2.828L5.143.447l12.83 7.373-2.766 2.766zm1.414 1.414l3.528 2.029c.983.565.983 1.493 0 2.058l-3.528 2.029-2.115-2.115 2.115-2.115z"/>
  </svg>
);
