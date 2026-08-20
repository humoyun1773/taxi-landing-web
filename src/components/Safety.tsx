import React from 'react';
import { motion } from 'framer-motion';
import { safetyData } from '../data/mockData';
import { ShieldCheck, Lock, Radio, PhoneCall, Check } from 'lucide-react';

export const Safety: React.FC = () => {
  return (
    <section className="safety-section section" id="safety">
      <div className="container">
        <div className="safety-layout">
          {/* Left Text & Safety Features List */}
          <div className="safety-content">
            <div className="section-title text-left">
              <span className="sub-title">100% Xavfsizlik Kafolati</span>
              <h2>Sizning Xavfsizligingiz — Bizning Oliy Maqsadimiz</h2>
              <p>
                Urgimchak Taxi tizimi har bir safarni boshidan oxirigacha intellektual telemetriya va xavfsizlik protokollari bilan nazorat qiladi.
              </p>
            </div>

            <div className="safety-cards-grid">
              {safetyData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="safety-feature-item"
                >
                  <div className="safety-check-icon">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1, type: 'spring' }}
                    >
                      <Check size={18} />
                    </motion.div>
                  </div>
                  <div>
                    <div className="safety-tag-row">
                      <h4>{item.title}</h4>
                      <span className="safety-badge">{item.tag}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual: Animated Security Shield & Live SOS Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="safety-visual-card"
          >
            <div className="safety-glow-bg"></div>

            <div className="shield-interactive-box">
              <div className="shield-icon-wrapper">
                <div className="shield-ring-pulse"></div>
                <div className="shield-ring-pulse outer"></div>
                <ShieldCheck size={56} className="shield-main-icon" />
              </div>

              <h3>24/7 Intellektual Himoya</h3>
              <p>Har bir soniyada sun'iy intellekt nazorati ostidasiz</p>

              <div className="safety-status-indicators">
                <div className="status-item">
                  <Radio size={18} className="text-emerald" />
                  <span>Jonli GPS Kuzatuv Faol</span>
                </div>
                <div className="status-item">
                  <Lock size={18} className="text-amber" />
                  <span>Shaxsiy Ma'lumotlar Shifrlangan</span>
                </div>
                <div className="status-item">
                  <PhoneCall size={18} className="text-rose" />
                  <span>Tezkor SOS Dispetcher Tarmog'i</span>
                </div>
              </div>

              <div className="emergency-sos-bar">
                <span className="sos-label">SOS Favqulodda Tugma</span>
                <span className="sos-status">Tayyor holatda</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
