import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      id="lang-toggle-btn"
      aria-label={`Switch to ${language === 'hi' ? 'English' : 'Hindi'}`}
      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white text-sm font-semibold transition-all duration-200 min-h-[36px]"
    >
      <span className={language === 'hi' ? 'opacity-100' : 'opacity-50'}>हि</span>
      <span className="text-green-400 text-xs">/</span>
      <span className={language === 'en' ? 'opacity-100' : 'opacity-50'}>EN</span>
    </button>
  );
}
