import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="shadcn-btn shadcn-btn-ghost theme-toggle-btn"
      aria-label={isDark ? 'Yorug‘ rejimga o‘tish' : 'Qorong‘u rejimga o‘tish'}
      title={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="theme-icon-container"
      >
        {isDark ? (
          <Sun size={18} className="theme-sun-icon" />
        ) : (
          <Moon size={18} className="theme-moon-icon" />
        )}
      </motion.div>
    </button>
  );
};
