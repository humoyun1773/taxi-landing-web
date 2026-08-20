import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { faqData } from '../data/mockData';

export const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string | null>('faq1');

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq section light-dark-bg" id="faq">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{t('faq.subtitle')}</span>
          <h2>{t('faq.title')}</h2>
          <p>{t('faq.desc')}</p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-wrap">
          {faqData.map((item, idx) => {
            const isOpen = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <div className="question-text">
                    <span className="q-badge">{item.category}</span>
                    <span>{item.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="chevron-box"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer"
                    >
                      <div className="faq-answer-inner">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="faq-help-box">
          <p>{t('faq.help_text')}</p>
          <a href="tel:+998712000000" className="help-phone-link">
            <Phone size={16} /> +998 (71) 200-00-00
          </a>
        </div>
      </div>
    </section>
  );
};
