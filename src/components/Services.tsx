import React from 'react';
import { Building2, Navigation, Package, Plane } from 'lucide-react';
import { servicesData } from '../data/mockData';

const iconMap = {
  Building2: Building2,
  Navigation: Navigation,
  Package: Package,
  Plane: Plane,
};

export const Services: React.FC = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Xizmatlarimiz</span>
          <h2>Siz uchun keng qamrovli xizmatlar</h2>
          <p>Har qanday ehtiyojingiz uchun mos transport va yetkazib berish xizmatlari</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <IconComponent size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
