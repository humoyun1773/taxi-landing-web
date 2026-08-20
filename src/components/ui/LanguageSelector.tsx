import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'uz', label: "O'zbekcha", short: 'UZ', flag: '🇺🇿' },
    { code: 'ru', label: 'Русский', short: 'RU', flag: '🇷🇺' },
    { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸' },
  ];

  const currentLang = languages.find((l) => l.code === (i18n.language || 'uz')) || languages[0];

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18nextLng', code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-selector-wrapper" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="shadcn-btn shadcn-btn-ghost lang-trigger-btn"
        aria-label="Tilni tanlash"
        aria-expanded={isOpen}
      >
        <Globe size={16} className="lang-globe-icon" />
        <span className="lang-short-code">{currentLang.short}</span>
        <ChevronDown
          size={14}
          className={`lang-chevron ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="shadcn-dropdown lang-dropdown-menu"
          >
            <div className="shadcn-dropdown-header">
              <span>{t('nav.lang_uz') !== "O'zbekcha" ? 'Language / Язык' : 'Tilni tanlang'}</span>
            </div>
            <div className="shadcn-dropdown-divider"></div>
            {languages.map((lang) => {
              const isSelected = lang.code === currentLang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`shadcn-dropdown-item ${isSelected ? 'active' : ''}`}
                >
                  <span className="lang-flag">{lang.flag}</span>
                  <span className="lang-name">{lang.label}</span>
                  {isSelected && <Check size={14} className="lang-check" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
