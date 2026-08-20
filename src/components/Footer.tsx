import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Send, ShieldCheck, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SpiderLogo } from './ui/SpiderLogo';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <a href="#home" className="logo footer-logo">
            <div className="logo-icon-wrapper">
              <SpiderLogo size={32} />
            </div>
            <div className="logo-title-group">
              <span className="logo-brand">URGIMCHAK<span className="brand-accent">TAXI</span></span>
              <span className="logo-sub">PREMIUM MOBILITY</span>
            </div>
          </a>

          <p className="footer-desc">
            {t('footer.desc')}
          </p>

          <div className="social-links">
            <a href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram">
              <Send size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Heart size={18} />
            </a>
            <a href="#" aria-label="Xavfsizlik sertifikati">
              <ShieldCheck size={18} />
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-col">
          <h4 className="footer-heading">{t('footer.col1')}</h4>
          <ul className="footer-links">
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#tech">{t('nav.tech')}</a></li>
            <li><a href="#tariffs">{t('nav.tariffs')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#regions">{t('nav.regions')}</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-col">
          <h4 className="footer-heading">{t('footer.col2')}</h4>
          <ul className="footer-links">
            <li><a href="#driver">{t('driver.subtitle')}</a></li>
            <li><a href="#app">{t('app.subtitle')}</a></li>
            <li><a href="#about">{t('about.subtitle')}</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4 className="footer-heading">{t('footer.col3')}</h4>
          <ul className="contact-list">
            <li>
              <Phone size={18} className="contact-icon" />
              <div>
                <strong>+998 (71) 200-00-00</strong>
                <span>24/7 Call Center</span>
              </div>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <div>
                <strong>info@orgimchaktaxi.uz</strong>
                <span>Texnik yordam</span>
              </div>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" />
              <div>
                <strong>Toshkent shahri, Amir Temur ko'chasi, 107-B</strong>
                <span>Bosh ofis</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>© {new Date().getFullYear()} Urgimchak Taxi Technologies Inc. {t('footer.rights')}</p>
          <div className="bottom-links">
            <a href="#">{t('footer.privacy')}</a>
            <span className="divider">•</span>
            <a href="#">{t('footer.terms')}</a>
          </div>
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Yuqoriga qaytish">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};
