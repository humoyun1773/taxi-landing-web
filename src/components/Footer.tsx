import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Send, Instagram, Globe, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SpiderLogo } from './ui/SpiderLogo';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-master" id="contact">
      <div className="container footer-main-container">
        {/* 1. Brand Column */}
        <div className="footer-col brand-col">
          <a href="#home" className="logo footer-logo">
            <div className="logo-icon-wrapper">
              <SpiderLogo size={28} />
            </div>
            <div className="logo-title-group">
              <span className="logo-brand">
                URGIMCHAK<span className="brand-accent">TAXI</span>
              </span>
            </div>
          </a>

          <p className="footer-brand-desc">
            {t('footer.desc')}
          </p>

          {/* Social Links */}
          <div className="footer-social-row">
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="social-btn"
            >
              <Send size={15} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-btn"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://urgimchaktaxi.uz"
              target="_blank"
              rel="noreferrer"
              aria-label="Veb-sayt"
              className="social-btn"
            >
              <Globe size={15} />
            </a>
          </div>

          {/* Live System Status Pill */}
          <div className="footer-system-status">
            <span className="status-indicator-dot"></span>
            <span>Tizim & Dispetcherlik 24/7 Faol</span>
          </div>
        </div>

        {/* 2. Navigation Column */}
        <div className="footer-col">
          <h4 className="footer-column-title">
            <Sparkles size={13} className="text-yellow-400" />
            <span>{t('footer.col1')}</span>
          </h4>
          <ul className="footer-nav-list">
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#tech">{t('nav.tech')}</a></li>
            <li><a href="#tariffs">{t('nav.tariffs')}</a></li>
            <li><a href="#app">{t('app.title')}</a></li>
          </ul>
        </div>

        {/* 3. Direct Contacts Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-column-title">
            <span>{t('footer.col3')}</span>
          </h4>
          <ul className="footer-contact-list">
            <li className="contact-item">
              <div className="contact-icon-bubble">
                <Phone size={14} />
              </div>
              <div className="contact-details">
                <a href="tel:+998712000000" className="contact-main-text">
                  +998 (71) 200-00-00
                </a>
                <span className="contact-sub-text">24/7 Qo'llab-quvvatlash</span>
              </div>
            </li>

            <li className="contact-item">
              <div className="contact-icon-bubble">
                <Mail size={14} />
              </div>
              <div className="contact-details">
                <a href="mailto:info@urgimchaktaxi.uz" className="contact-main-text">
                  info@urgimchaktaxi.uz
                </a>
                <span className="contact-sub-text">Hamkorlik & Aloqa</span>
              </div>
            </li>

            <li className="contact-item">
              <div className="contact-icon-bubble">
                <MapPin size={14} />
              </div>
              <div className="contact-details">
                <span className="contact-main-text">
                  Toshkent sh., Amir Temur shox ko'chasi, 107-B
                </span>
                <span className="contact-sub-text">Bosh ofis</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* 4. Copyright & Bottom Sub-Bar */}
      <div className="footer-sub-bottom">
        <div className="container bottom-bar-flex">
          <p className="copyright-text">
            © {new Date().getFullYear()} Urgimchak Taxi Technologies Inc. {t('footer.rights')}
          </p>

          <div className="legal-links-row">
            <a href="#">{t('footer.privacy')}</a>
            <span className="legal-dot">•</span>
            <a href="#">{t('footer.terms')}</a>
          </div>

          <button onClick={scrollToTop} className="footer-scroll-top-btn" title="Yuqoriga qaytish">
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};
