import React from 'react';
import { Car, Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-col">
          <a href="#" className="logo footer-logo">
            <div className="logo-icon">
              <Car size={24} />
            </div>
            <span className="logo-text">Taxi<span style={{ color: '#F59E0B' }}>Go</span></span>
          </a>
          <p className="footer-desc">
            TaxiGo — sizning har kungi ishonchli va xavfsiz transport hamkoringiz. Shahar va viloyatlararo eng yaxshi servis.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Telegram"><Send size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Tezkor havolalar</h4>
          <ul className="footer-links">
            <li><a href="#home">Bosh sahifa</a></li>
            <li><a href="#services">Xizmatlar</a></li>
            <li><a href="#tariffs">Tariflar</a></li>
            <li><a href="#about">Biz haqimizda</a></li>
            <li><a href="#app">Mobil Ilova</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Xizmatlar</h4>
          <ul className="footer-links">
            <li><a href="#">Standart Taxi</a></li>
            <li><a href="#">Komfort Taxi</a></li>
            <li><a href="#">Biznes Taxi</a></li>
            <li><a href="#">Shaharlararo qatnov</a></li>
            <li><a href="#">Kuryerlik xizmati</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Aloqa</h4>
          <ul className="contact-info">
            <li>
              <Phone size={18} />
              <span>+998 (71) 200-00-00</span>
            </li>
            <li>
              <Mail size={18} />
              <span>info@taxigo.uz</span>
            </li>
            <li>
              <MapPin size={18} />
              <span>Toshkent shahri, Amir Temur ko'chasi, 15-uy</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {new Date().getFullYear()} TaxiGo. Barcha huquqlar himoyalangan.</p>
          <div className="legal-links">
            <a href="#">Foydalanish shartlari</a>
            <a href="#">Maxfiylik siyosati</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
