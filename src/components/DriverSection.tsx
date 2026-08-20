import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Zap, ChevronRight, Calculator } from 'lucide-react';

export const DriverSection: React.FC = () => {
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerWeek, setDaysPerWeek] = useState(6);

  // Income formula: 8h/day * 6 days ≈ 12-18 mln sum/month
  const estimatedMonthly = Math.round(hoursPerDay * daysPerWeek * 4.3 * 45000);
  const formattedIncome = new Intl.NumberFormat('uz-UZ').format(estimatedMonthly) + " so'm";

  return (
    <section className="driver-section section" id="driver">
      <div className="container">
        <div className="driver-banner-wrapper">
          <div className="driver-ambient-glow"></div>

          <div className="driver-banner-grid">
            {/* Left Content */}
            <div className="driver-info">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="badge driver-badge"
              >
                <Zap size={14} /> Haydovchilar Uchun Hamkorlik
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="driver-heading"
              >
                O'z Avtomobilingiz Bilan <br />
                <span className="gradient-text-yellow">Erkin Grafikda</span> Katta Daromad Toping
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="driver-desc"
              >
                Urgimchak Taxi tizimida komissiya atigi 5%. Har bir buyurtmadan tushgan mablag'ni darhol bank kartangizga yechib oling va bonuslarga ega bo'ling.
              </motion.p>

              <div className="driver-perks-list">
                <div className="perk-item">
                  <div className="perk-icon">
                    <PercentIcon size={18} />
                  </div>
                  <div>
                    <strong>Eng Past Komissiya</strong>
                    <p>Atigi 5% komissiya va doimiy bonuslar</p>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-icon">
                    <DollarSign size={18} />
                  </div>
                  <div>
                    <strong>Darhol To'lovlar</strong>
                    <p>Kunlik topgan pulingizni 24/7 kartaga yeching</p>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong>Erkin Ish Grafigi</strong>
                    <p>Qachon va qancha ishlashni o'zingiz tanlaysiz</p>
                  </div>
                </div>
              </div>

              <div className="driver-actions">
                <a href="#contact" className="btn btn-primary">
                  <span>Haydovchi Bo'lib Ulanish</span>
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>

            {/* Right: Interactive Income Calculator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="calculator-card"
            >
              <div className="calc-header">
                <Calculator size={22} className="text-amber" />
                <h3>Daromad Kalkulyatori</h3>
              </div>

              <div className="calc-sliders">
                {/* Hours Slider */}
                <div className="slider-group">
                  <div className="slider-label-row">
                    <span>Kunlik ish vaqti:</span>
                    <strong>{hoursPerDay} soat</strong>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="14"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    className="custom-range"
                  />
                </div>

                {/* Days Slider */}
                <div className="slider-group">
                  <div className="slider-label-row">
                    <span>Haftalik ish kunlari:</span>
                    <strong>{daysPerWeek} kun</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={daysPerWeek}
                    onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                    className="custom-range"
                  />
                </div>
              </div>

              {/* Estimated monthly earning result */}
              <div className="calc-result-box">
                <span className="result-label">Oylik taxminiy daromad:</span>
                <div className="result-amount">{formattedIncome}</div>
                <p className="result-sub">*Mijozlar bergan choypullari hisobga olinmagan</p>
              </div>

              <div className="driver-quick-steps">
                <div className="q-step">
                  <span>1</span> Ariza qoldiring
                </div>
                <div className="q-step">
                  <span>2</span> 10 min tekshiruv
                </div>
                <div className="q-step">
                  <span>3</span> Buyurtma oling!
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PercentIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="5" x2="5" y2="19"></line>
    <circle cx="6.5" cy="6.5" r="2.5"></circle>
    <circle cx="17.5" cy="17.5" r="2.5"></circle>
  </svg>
);
