import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, ArrowRight, TrendingUp, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AboutProject: React.FC = () => {
  const { t } = useTranslation();

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
            <span className="sub-title">{t('about.subtitle')}</span>
            <h2>{t('about.title')}</h2>
            <p className="about-lead">
              {t('about.lead')}
            </p>
            <p className="about-text">
              {t('about.text')}
            </p>

            <div className="about-metrics-row">
              <div className="about-metric">
                <div className="metric-icon-wrap">
                  <TrendingUp size={22} className="text-gold" />
                </div>
                <div>
                  <strong>{t('about.m1_title')}</strong>
                  <span>{t('about.m1_sub')}</span>
                </div>
              </div>

              <div className="about-metric">
                <div className="metric-icon-wrap">
                  <Users size={22} className="text-emerald" />
                </div>
                <div>
                  <strong>{t('about.m2_title')}</strong>
                  <span>{t('about.m2_sub')}</span>
                </div>
              </div>
            </div>

            <div className="about-cta-group">
              <a href="#tariffs" className="btn btn-primary">
                <span>{t('about.cta')}</span>
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
              <div className="about-feature-box">
                <div className="feat-header">
                  <div className="feat-icon">
                    <Cpu size={24} />
                  </div>
                  <h4>{t('about.f1_title')}</h4>
                </div>
                <p>{t('about.f1_desc')}</p>
              </div>

              <div className="about-feature-box">
                <div className="feat-header">
                  <div className="feat-icon gold">
                    <Zap size={24} />
                  </div>
                  <h4>{t('about.f2_title')}</h4>
                </div>
                <p>{t('about.f2_desc')}</p>
              </div>

              <div className="about-feature-box">
                <div className="feat-header">
                  <div className="feat-icon green">
                    <ShieldCheck size={24} />
                  </div>
                  <h4>{t('about.f3_title')}</h4>
                </div>
                <p>{t('about.f3_desc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
