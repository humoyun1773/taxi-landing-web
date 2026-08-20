import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Car } from 'lucide-react';

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
    { label: 'Afzalliklar', href: '#about' },
    { label: 'Ilova', href: '#app' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Aloqa', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <Car size={24} />
          </div>
          <span className="logo-text">Taxi<span>Go</span></span>
        </a>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="tel:+998712000000" className="call-btn">
            <Phone size={18} />
            <span>+998 (71) 200-00-00</span>
          </a>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menyu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
