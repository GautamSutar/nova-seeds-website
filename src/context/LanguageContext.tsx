import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'hi' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isHindi: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'hi',
  toggleLanguage: () => {},
  isHindi: true,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem('nova_lang') as Language) ?? 'hi'
  );

  const toggleLanguage = () => {
    const next: Language = language === 'hi' ? 'en' : 'hi';
    setLanguage(next);
    i18n.changeLanguage(next);
    localStorage.setItem('nova_lang', next);
    // Update html lang attribute for a11y
    document.documentElement.lang = next;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isHindi: language === 'hi' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
