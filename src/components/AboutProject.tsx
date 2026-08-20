import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, ArrowRight, TrendingUp, Users } from 'lucide-react';

export const AboutProject: React.FC = () => {
  return (
    <section className="about-project section light-dark-bg" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Mission & Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-info-col"
          >
            <span className="sub-title">Loyiha Haqida & Missiyamiz</span>
            <h2>O'zbekiston Shaharlarida Qulay Va Xavfsiz Harakatlanishning Yangi Standarti</h2>
            <p className="about-lead">
              <strong>Urgimchak Taxi</strong> — bu an'anaviy taksi xizmatlarini tubdan o'zgartiruvchi, sun'iy intellekt va zamonaviy transport telemetriyasiga asoslangan yagona raqamli mobillik ekotizimidir.
            </p>
            <p className="about-text">
              Bizning maqsadimiz — yo'lovchilarga bir necha daqiqada arzon va xavfsiz avtomobil topib berish, haydovchilarga esa eng past komissiya (5%) bilan erkin va yuqori daromad yaratishdir.
            </p>

            <div className="about-metrics-row">
              <div className="about-metric">
                <div className="metric-icon-wrap">
                  <TrendingUp size={22} className="text-gold" />
                </div>
                <div>
                  <strong>30% Tezroq</strong>
                  <span>Tirbandliklarsiz aqlli marshrut</span>
                </div>
              </div>

              <div className="about-metric">
                <div className="metric-icon-wrap">
                  <Users size={22} className="text-emerald" />
                </div>
                <div>
                  <strong>5% Komissiya</strong>
                  <span>Haydovchilar uchun eng qulay shart</span>
                </div>
              </div>
            </div>

            <div className="about-cta-group">
              <a href="#tariffs" className="btn btn-primary">
                <span>Avtopark va Tariflar bilan tanishish</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-visual-col"
          >
            <div className="about-card-showcase">
              <div className="showcase-glow"></div>
              
              <div className="about-feature-box">
                <div className="feat-header">
                  <div className="feat-icon">
                    <Cpu size={24} />
                  </div>
                  <h4>Sun'iy Intellektli Algoritm</h4>
                </div>
                <p>Buyurtma tushgan zahoti eng yaqin bo'sh haydovchi sekundning ulushlarida aniqlanadi va yetib kelish vaqti 3 daqiqagacha qisqaradi.</p>
              </div>

              <div className="about-feature-box">
                <div className="feat-header">
                  <div className="feat-icon gold">
                    <Zap size={24} />
                  </div>
                  <h4>Shaffof va Ochiq Ekotizim</h4>
                </div>
                <p>Yo'lovchi uchun adolatli narx, haydovchi uchun eng past komissiya va 24/7 tezkor to'lovlar tizimi integratsiya qilingan.</p>
              </div>

              <div className="about-feature-box">
                <div className="feat-header">
                  <div className="feat-icon green">
                    <ShieldCheck size={24} />
                  </div>
                  <h4>100% Xavfsizlik Kafolati</h4>
                </div>
                <p>Barcha haydovchilar shaxsi tekshirilgan, har bir safar real vaqtli GPS orqali kuzatiladi va doimiy SOS yordam xizmati mavjud.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
