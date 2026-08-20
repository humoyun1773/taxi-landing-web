import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bosh sahifa', href: '#home' },
    { label: 'Xizmatlar', href: '#services' },
    { label: 'Tariflar', href: '#tariffs' },
    { label: 'Qanday Ishlaydi?', href: '#how-it-works' },
    { label: 'Hududlar', href: '#regions' },
    { label: 'Xavfsizlik', href: '#safety' },
    { label: 'Haydovchilarga', href: '#driver' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="logo">
          <div className="logo-icon-wrapper">
            <div className="logo-glow"></div>
            <div className="logo-icon">
              {/* Custom SVG Spider-Taxi Symbol */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3"/>
                <path d="M5 10L19 14M5 14L19 10M12 4V20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="4" fill="#F59E0B"/>
              </svg>
            </div>
          </div>
          <div className="logo-title-group">
            <span className="logo-brand">URGIMCHAK<span className="brand-accent">TAXI</span></span>
            <span className="logo-sub">PREMIUM MOTION MOBILITY</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
              >
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* CTA & Actions */}
        <div className="nav-actions">
          <a href="tel:+998712000000" className="call-btn">
            <div className="call-pulse">
              <Phone size={16} />
            </div>
            <span className="phone-num">+998 (71) 200-00-00</span>
          </a>

          <a href="#booking" className="btn btn-primary nav-order-btn">
            <span>Buyurtma</span>
            <ArrowRight size={16} className="btn-arrow" />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menyuni ochish"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-drawer"
          >
            <div className="container mobile-drawer-content">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mobile-drawer-footer">
                <a href="#booking" onClick={() => setIsMenuOpen(false)} className="btn btn-primary btn-block">
                  <Zap size={18} /> Taksi Chaqirish
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
