import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { stepsData } from '../data/mockData';
import { MapPin, Smartphone, Car, Smile } from 'lucide-react';

const stepIconMap = {
  MapPin: MapPin,
  Smartphone: Smartphone,
  Car: Car,
  Smile: Smile,
};

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Oson va Tushunarli</span>
          <h2>Taksi Chaqirish Qanday Ishlaydi?</h2>
          <p>Atigi 4 ta oddiy qadam orqali qulay va xavfsiz safarni boshlang</p>
        </div>

        {/* Timeline Desktop & Mobile Grid */}
        <div className="steps-container">
          {/* Connecting Progress Line (Desktop) */}
          <div className="timeline-track">
            <motion.div
              className="timeline-progress-bar"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>

          <div className="steps-grid">
            {stepsData.map((step, idx) => {
              const Icon = stepIconMap[step.iconName];
              const isCurrent = activeStep === idx;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`step-card ${isCurrent ? 'active' : ''}`}
                >
                  <div className="step-badge-number">{step.number}</div>

                  <div className="step-icon-circle">
                    <Icon size={28} />
                    <div className="step-circle-pulse"></div>
                  </div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>

                  <div className="step-indicator-bar">
                    <span className="step-dot"></span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
