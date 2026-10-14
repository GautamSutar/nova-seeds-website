import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import { useLanguage } from '../context/LanguageContext';
import faqData from '../data/faqs.json';

export default function FAQ() {
  const { t } = useTranslation();
  const { isHindi } = useLanguage();

  return (
    <>
      <SEO
        titleHi="सवाल-जवाब – नोवा सीड्स | Gold Medal 941 अक्सर पूछे जाने वाले प्रश्न"
        titleEn="FAQ – Nova Seeds | Gold Medal 941 Frequently Asked Questions"
        descriptionHi="नोवा सीड्स Gold Medal 941 के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर।"
        descriptionEn="Answers to frequently asked questions about Nova Seeds Gold Medal 941 hybrid mustard seeds."
        canonical="/faq"
      />

      <div className="pt-16">
        <div className="bg-hero-gradient text-white py-12 px-4">
          <div className="container-lg">
            <h1 className="text-3xl font-bold mb-2">{t('faq.title')}</h1>
            <p className="text-green-200">{t('faq.subtitle')}</p>
          </div>
        </div>

        <div className="container-lg px-4 py-10 max-w-3xl">
          <FAQAccordion items={faqData} />
        </div>
      </div>
    </>
  );
}
