import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Microscope, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useTranslation();
  const { isHindi } = useLanguage();

  const sections = [
    {
      icon: Target,
      titleHi: 'हमारा मिशन',
      titleEn: 'Our Mission',
      textHi: 'हर किसान को उच्च गुणवत्ता वाले बीज उपलब्ध कराना और उनकी आमदनी बढ़ाना। हम मानते हैं कि बेहतर बीज से बेहतर जीवन संभव है।',
      textEn: 'To provide high-quality seeds to every farmer and increase their income. We believe that better seeds lead to a better life.',
    },
    {
      icon: Microscope,
      titleHi: 'हमारा शोध',
      titleEn: 'Our Research',
      textHi: 'नोवा सीड्स में हम नई किस्मों पर लगातार शोध करते हैं। हमारी टीम भारतीय मौसम और मिट्टी की परिस्थितियों के अनुकूल बीज विकसित करने में जुटी है।',
      textEn: 'At Nova Seeds, we continuously research new varieties. Our team is dedicated to developing seeds suited to Indian climatic and soil conditions.',
    },
    {
      icon: Award,
      titleHi: 'गुणवत्ता',
      titleEn: 'Quality',
      textHi: 'हमारे बीज कड़ी गुणवत्ता जाँच से गुजरते हैं। हम केवल उन्हीं बीजों को बाज़ार में उतारते हैं जो हमारे कठोर मानकों पर खरे उतरते हैं।',
      textEn: 'Our seeds undergo rigorous quality checks. We only bring to market seeds that meet our strict quality standards.',
    },
  ];

  return (
    <>
      <SEO
        titleHi="हमारे बारे में – नोवा सीड्स | नोवा रिसर्च एंड हाइब्रिड सीड्स"
        titleEn="About Us – Nova Seeds | Nova Research & Hybrid Seeds"
        descriptionHi="नोवा सीड्स के बारे में जानें – भारतीय किसानों के लिए उन्नत हाइब्रिड बीज अनुसंधान।"
        descriptionEn="Learn about Nova Seeds – advanced hybrid seed research for Indian farmers."
        canonical="/about"
      />

      <div className="pt-16">
        <div className="bg-hero-gradient text-white py-12 px-4">
          <div className="container-lg">
            <h1 className="text-3xl font-bold mb-2">{t('about.title')}</h1>
          </div>
        </div>

        <div className="container-lg px-4 py-10 space-y-12">
          {/* Story */}
          <div className="prose max-w-3xl">
            <p className="text-gray-700 text-lg leading-relaxed">{t('about.story')}</p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.titleEn}
                className="card p-6 border border-green-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={28} className="text-brand-green" strokeWidth={1.5} />
                </div>
                <h2 className="font-bold text-brand-green text-lg mb-2">
                  {isHindi ? s.titleHi : s.titleEn}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {isHindi ? s.textHi : s.textEn}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Placeholder note for company to fill in */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
            <strong>Note (remove before launch):</strong> This About page contains placeholder content. Please replace with your actual company story, founding year, key milestones, team info, and certifications.
          </div>
        </div>
      </div>
    </>
  );
}
