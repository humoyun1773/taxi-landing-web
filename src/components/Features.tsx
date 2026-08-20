import React from 'react';
import { Clock, UserCheck, CreditCard } from 'lucide-react';
import { featuresData } from '../data/mockData';

const iconMap = {
  Clock: Clock,
  UserCheck: UserCheck,
  CreditCard: CreditCard,
};

export const Features: React.FC = () => {
  return (
    <section className="about section" id="about">
      <div className="container about-container">
        <div className="about-image">
          <div className="img-box">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
              alt="TaxiGo avtomobili"
              className="main-img"
            />
            <div className="experience-card">
              <h4>7+ Yil</h4>
              <p>Ishonchli xizmat tajribasi</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="section-title text-left">
            <span className="sub-title">Nega aynan biz?</span>
            <h2>Sizning qulayligingiz va xavfsizligingiz bizning ustuvor maqsadimiz</h2>
          </div>

          <div className="features-list">
            {featuresData.map((item) => {
              const IconComponent = iconMap[item.iconName];
              return (
                <div key={item.id} className="feature-item">
                  <div className="feature-icon">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
