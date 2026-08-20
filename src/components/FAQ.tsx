import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq1');
  const [activeCategory, setActiveCategory] = useState<string>('Hammasi');

  const categories = ['Hammasi', 'Buyurtma', 'To\'lov', 'Shaharlararo', 'Haydovchilar', 'Xavfsizlik'];

  const filteredFAQ = activeCategory === 'Hammasi'
    ? faqData
    : faqData.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Ko'p So'raladigan Savollar</span>
          <h2>Barcha Savollaringizga Aniq Javoblar</h2>
          <p>Urgimchak Taxi xizmati, tariflar, to'lovlar va xavfsizlik haqida batafsil ma'lumot</p>
        </div>

        {/* Category Filters */}
        <div className="faq-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`faq-pill ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-wrap">
          {filteredFAQ.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="question-text">
                    <span className="q-badge">{item.category}</span>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
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
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="faq-answer-content"
                    >
                      <div className="faq-answer-inner">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="faq-help-box">
          <HelpCircle size={22} className="text-amber" />
          <span>Boshqa savollaringiz bormi? 24/7 aloqa markazimizga qo'ng'iroq qiling: </span>
          <a href="tel:+998712000000" className="help-phone-link">+998 (71) 200-00-00</a>
        </div>
      </div>
    </section>
  );
};
