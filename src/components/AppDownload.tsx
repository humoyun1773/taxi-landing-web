import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Navigation, ShieldCheck, CreditCard } from 'lucide-react';

export const AppDownload: React.FC = () => {
  return (
    <section className="app-download-section section" id="app">
      <div className="container">
        <div className="app-download-wrapper">
          <div className="app-ambient-glow"></div>

          <div className="app-download-grid">
            {/* Left Content: Mobile Platform Overview */}
            <div className="app-content-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="sub-title app-badge"
              >
                <Sparkles size={14} /> Raqamli Ekotizim
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="app-title"
              >
                Intellektual Mobil <br />
                <span className="gradient-text-gold">Foydalanuvchi Tajribasi</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="app-desc"
              >
                Urgimchak Taxi ilovasi zamonaviy dizayn, intuitiv interfeys va neyrotarmoqli marshrutlash bilan qurollangan. Barcha jarayonlar maksimal sodda va qulay tarzda avtomatlashtirilgan.
              </motion.p>

              {/* App Capabilities Grid */}
              <div className="app-feature-list-grid">
                <div className="app-feat-item">
                  <div className="app-feat-icon">
                    <Navigation size={20} className="text-gold" />
                  </div>
                  <div>
                    <strong>Jonli GPS Telemetriya</strong>
                    <p>Avtomobil harakatini sekundma-sekund real vaqtda kuzatish</p>
                  </div>
                </div>

                <div className="app-feat-item">
                  <div className="app-feat-icon">
                    <CreditCard size={20} className="text-emerald" />
                  </div>
                  <div>
                    <strong>Qulay To'lov Tizimlari</strong>
                    <p>Payme, Click, Uzcard, Humo va naqd to'lovlarni to'liq qo'llab-quvvatlash</p>
                  </div>
                </div>

                <div className="app-feat-item">
                  <div className="app-feat-icon">
                    <ShieldCheck size={20} className="text-gold" />
                  </div>
                  <div>
                    <strong>O'rnatilgan SOS Himoya</strong>
                    <p>Safar davomida 24/7 tezkor xavfsizlik va dispetcher monitoringi</p>
                  </div>
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
                      <div className="screen-badge">AI Faol</div>
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
