import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import hi from '../locales/hi.json';
import en from '../locales/en.json';

const savedLang = localStorage.getItem('nova_lang') ?? 'hi';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      hi: { translation: hi.hi },
      en: { translation: en.en },
    },
    lng: savedLang,
    fallbackLng: 'hi',
    interpolation: { escapeValue: false },
  });

export default i18n;
