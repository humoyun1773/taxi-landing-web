import React from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        {/* Brand Info */}
        <div className="footer-col brand-col">
          <a href="#" className="logo footer-logo">
            <div className="logo-icon-wrapper">
              <div className="logo-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3"/>
                  <path d="M5 10L19 14M5 14L19 10M12 4V20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="4" fill="#F59E0B"/>
                </svg>
              </div>
            </div>
            <span className="logo-brand">URGIMCHAK<span className="brand-accent">TAXI</span></span>
          </a>

          <p className="footer-desc">
            Urgimchak Taxi — O'zbekiston bo'ylab zamonaviy texnologiyalar, sun'iy intellekt va yuqori xavfsizlikka asoslangan premium taksi xizmati.
          </p>

          <div className="social-links">
            <a href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="footer-col">
          <h4 className="footer-heading">Navigatsiya</h4>
          <ul className="footer-links">
            <li><a href="#home">Bosh sahifa</a></li>
            <li><a href="#services">Xizmatlar</a></li>
            <li><a href="#tariffs">Tariflar</a></li>
            <li><a href="#how-it-works">Qanday Ishlaydi?</a></li>
            <li><a href="#regions">Viloyatlar Qamrovi</a></li>
            <li><a href="#safety">Xavfsizlik Tizimi</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-heading">Xizmat Turlari</h4>
          <ul className="footer-links">
            <li><a href="#tariffs">Ekonom Klass</a></li>
            <li><a href="#tariffs">Komfort Klass</a></li>
            <li><a href="#tariffs">Biznes Klass</a></li>
            <li><a href="#services">Shaharlararo Qatnov</a></li>
            <li><a href="#services">Ekspress Yetkazib Berish</a></li>
            <li><a href="#driver">Haydovchilar Uchun</a></li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Aloqa & Call-Center</h4>
          <ul className="contact-list">
            <li>
              <Phone size={18} className="contact-icon" />
              <div>
                <strong>+998 (71) 200-00-00</strong>
                <span>24/7 Qo'llab-quvvatlash</span>
              </div>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <div>
                <strong>info@urgimchaktaxi.uz</strong>
                <span>Hamkorlik & Savollar</span>
              </div>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" />
              <div>
                <strong>Toshkent shahri, Amir Temur shoh ko'chasi, 107-B</strong>
                <span>Bosh Ofis</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Urgimchak Taxi Technologies LLC. Barcha huquqlar himoyalangan.</p>
          </div>

          <div className="bottom-links">
            <a href="#">Foydalanish qoidalari</a>
            <span className="divider">•</span>
            <a href="#">Maxfiylik siyosati</a>
            <span className="divider">•</span>
            <button onClick={scrollToTop} className="scroll-top-btn" title="Yuqoriga qaytish">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
