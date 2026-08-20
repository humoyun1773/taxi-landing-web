import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, DollarSign, Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const DriverSection: React.FC = () => {
  const { t } = useTranslation();
  const [hoursPerDay, setHoursPerDay] = useState<number>(8);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(6);

  const calculateMonthlyIncome = () => {
    const hourlyAvg = 45000;
    const grossMonthly = hoursPerDay * daysPerWeek * 4.2 * hourlyAvg;
    const netIncome = grossMonthly * 0.95; // 5% commission
    return new Intl.NumberFormat('uz-UZ').format(Math.round(netIncome)) + " so'm";
  };

  return (
    <section className="driver-section section" id="driver">
      <div className="container">
        <div className="driver-banner-wrapper">
          <div className="driver-banner-grid">
            {/* Left Content */}
            <div className="driver-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="sub-title driver-badge"
              >
                <Award size={14} /> {t('driver.subtitle')}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="driver-heading"
              >
                {t('driver.title')}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="driver-desc"
              >
                {t('driver.desc')}
              </motion.p>

              <div className="driver-perks-list">
                <div className="perk-item">
                  <div className="perk-icon">
                    <DollarSign size={22} />
                  </div>
                  <div>
                    <strong>{t('driver.p1_title')}</strong>
                    <p>{t('driver.p1_desc')}</p>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-icon">
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong>{t('driver.p2_title')}</strong>
                    <p>{t('driver.p2_desc')}</p>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-icon">
                    <Award size={22} />
                  </div>
                  <div>
                    <strong>{t('driver.p3_title')}</strong>
                    <p>{t('driver.p3_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Driver Income Interactive Calculator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="driver-calculator"
            >
              <div className="calculator-card">
                <div className="calc-header">
                  <Calculator size={20} className="text-gold" />
                  <h3>{t('driver.calc_title')}</h3>
                </div>

                <div className="calc-sliders">
                  <div className="slider-group">
                    <div className="slider-label-row">
                      <span>{t('driver.hours_label')}</span>
                      <strong>{hoursPerDay} {t('driver.hours_unit')}</strong>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="14"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(Number(e.target.value))}
                      className="custom-range"
                    />
                  </div>

                  <div className="slider-group">
                    <div className="slider-label-row">
                      <span>{t('driver.days_label')}</span>
                      <strong>{daysPerWeek} {t('driver.days_unit')}</strong>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="7"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                      className="custom-range"
                    />
                  </div>
                </div>

                <div className="calc-result-box">
                  <span className="result-label">{t('driver.est_monthly')}</span>
                  <div className="result-amount">{calculateMonthlyIncome()}</div>
                  <span className="result-sub">{t('driver.calc_note')}</span>
                </div>

                <div className="driver-quick-steps">
                  <div className="q-step">
                    <span>1</span> {t('driver.step1')}
                  </div>
                  <div className="q-step">
                    <span>2</span> {t('driver.step2')}
                  </div>
                  <div className="q-step">
                    <span>3</span> {t('driver.step3')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
