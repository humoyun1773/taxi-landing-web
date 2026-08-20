import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Route, PackageCheck, PlaneTakeoff, ShieldAlert, Sparkles, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/mockData';

const serviceIcons = {
  Navigation: Navigation,
  Route: Route,
  PackageCheck: PackageCheck,
  PlaneTakeoff: PlaneTakeoff,
  ShieldAlert: ShieldAlert,
  Sparkles: Sparkles,
};

export const Services: React.FC = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Ekotizim Xizmatlari</span>
          <h2>Har Qanday Ehtiyoj Uchun Mukammal Transport</h2>
          <p>Shaharda tezkor qatnovdan tortib, viloyatlararo qulay sayohat va ekspress yetkazib berishgacha</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, idx) => {
            const Icon = serviceIcons[service.iconName];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="service-card"
              >
                <div className="service-card-glow"></div>
                <div className="service-header">
                  <div className="service-icon-box">
                    <Icon size={26} />
                  </div>
                  <span className="service-sub-label">{service.subtitle}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <div className="service-footer">
                  <a href="#app" className="service-link">
                    <span>Xizmat haqida batafsil</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
