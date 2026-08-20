import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Phone, ShieldCheck, Star, ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-wrapper">
          <div className="final-cta-glow"></div>

          <div className="final-cta-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="badge final-badge"
            >
              <Zap size={14} /> Kelajak Mobilligi
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="final-title"
            >
              Yangi Avlod Taksi Ekotizimi — <br />
              <span className="gradient-text-gold">Urgimchak Taxi</span> Bilan Birga!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="final-desc"
            >
              Shahar ichida va viloyatlararo eng xavfsiz va qulay sayohatlar tajribasini his qiling. Biz bilan hamkorlik qiling yoki savollaringiz bo'lsa bog'laning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="final-cta-buttons"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-primary btn-large"
              >
                <span>Loyiha Bilan Tanishish</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="tel:+998712000000"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-outline-white btn-large"
              >
                <Phone size={18} />
                <span>+998 (71) 200-00-00</span>
              </motion.a>
            </motion.div>

            <div className="final-trust-footer">
              <div className="trust-item">
                <ShieldCheck size={16} className="text-gold" />
                <span>100% Xavfsizlik nazorati</span>
              </div>
              <div className="trust-item">
                <Star size={16} className="text-gold" />
                <span>4.9 Ilova reytingi</span>
              </div>
              <div className="trust-item">
                <Zap size={16} className="text-gold" />
                <span>3 daqiqada yetib kelish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
