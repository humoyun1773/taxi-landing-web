import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './ui/LanguageSelector';
import { ThemeToggle } from './ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
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
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.tech'), href: '#tech' },
    { label: t('nav.tariffs'), href: '#tariffs' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.safety'), href: '#safety' },
    { label: t('nav.regions'), href: '#regions' },
    { label: t('nav.faq'), href: '#faq' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container nav-container">
        {/* Luxury Brand Logo */}
        <a href="#home" className="logo">
          <div className="logo-icon-wrapper">
            <div className="logo-glow"></div>
            <div className="logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#FACC15" strokeWidth="1.8" strokeDasharray="3 3"/>
                <path d="M5 10L19 14M5 14L19 10M12 4V20" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="4" fill="#FACC15"/>
              </svg>
            </div>
          </div>
          <div className="logo-title-group">
            <span className="logo-brand">URGIMCHAK<span className="brand-accent">TAXI</span></span>
            <span className="logo-sub">PREMIUM MOBILITY</span>
          </div>
        </a>

        {/* Minimal Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.04, duration: 0.35 }}
              >
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Controls: Language Selector, Theme Toggle, Phone */}
        <div className="nav-actions">
          <LanguageSelector />
          <ThemeToggle />

          <a href="tel:+998712000000" className="call-btn">
            <div className="call-pulse">
              <Phone size={14} />
            </div>
            <span>{t('nav.call')}</span>
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
              <div className="mobile-controls-row">
                <LanguageSelector />
                <ThemeToggle />
              </div>
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
                <a href="tel:+998712000000" onClick={() => setIsMenuOpen(false)} className="btn btn-outline btn-block">
                  <Phone size={16} /> {t('nav.call')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
