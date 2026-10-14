import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Droplets, Sprout, Globe, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const BENEFITS = [
  {
    icon: TrendingUp,
    titleHi: 'उच्च उपज क्षमता',
    titleEn: 'High Yield Potential',
    pointsHi: ['प्रति एकड़ अधिक पैदावार की संभावना', 'उन्नत हाइब्रिड तकनीक से विकसित', 'बेहतर अंकुरण दर'],
    pointsEn: ['Better yield per acre potential', 'Developed using advanced hybrid technology', 'Better germination rate'],
  },
  {
    icon: Shield,
    titleHi: 'रोग प्रतिरोधक क्षमता',
    titleEn: 'Disease Tolerance',
    pointsHi: ['सामान्य सरसों रोगों से बेहतर सुरक्षा', 'कम नुकसान, ज़्यादा फसल', 'मजबूत जड़ प्रणाली'],
    pointsEn: ['Better protection from common mustard diseases', 'Less loss, more crop', 'Strong root system'],
  },
  {
    icon: Droplets,
    titleHi: 'उत्तम तेल प्रतिशत',
    titleEn: 'Good Oil Percentage',
    pointsHi: ['बेहतर गुणवत्ता वाला तेल', 'तेल मिल में अच्छी कीमत', 'पोषक तत्वों से भरपूर'],
    pointsEn: ['Better quality oil content', 'Good price at oil mill', 'Nutrient-rich seeds'],
  },
  {
    icon: Sprout,
    titleHi: 'मजबूत पौधा',
    titleEn: 'Strong Plant',
    pointsHi: ['ज़्यादा शाखाएँ, ज़्यादा फसल', 'तेज़ हवा में भी खड़ा रहे', 'एकसमान वृद्धि'],
    pointsEn: ['More branches, more crop', 'Stands firm in strong winds', 'Uniform growth'],
  },
  {
    icon: Globe,
    titleHi: 'विविध मौसम अनुकूल',
    titleEn: 'Multi-region Suitable',
    pointsHi: ['विभिन्न क्षेत्रों के लिए उपयुक्त', 'सिंचित और असिंचित क्षेत्रों के लिए', 'अलग-अलग मिट्टी में उगाया जा सकता है'],
    pointsEn: ['Suitable for various agro-climatic regions', 'For irrigated and rainfed areas', 'Can be grown in different soil types'],
  },
];

export default function Benefits() {
  const { t } = useTranslation();
  const { isHindi } = useLanguage();

  return (
    <>
      <SEO
        titleHi="Gold Medal 941 के फायदे – नोवा सीड्स | हाइब्रिड सरसों बीज के लाभ"
        titleEn="Benefits of Gold Medal 941 – Nova Seeds | Hybrid Mustard Seed Advantages"
        descriptionHi="जानें नोवा सीड्स Gold Medal 941 हाइब्रिड सरसों बीज के सभी फायदे – उच्च उपज, रोग प्रतिरोधक, तेल प्रतिशत।"
        descriptionEn="Discover all benefits of Nova Seeds Gold Medal 941 – high yield potential, disease tolerance, oil content."
        canonical="/benefits"
      />

      <div className="pt-16">
        <div className="bg-hero-gradient text-white py-12 px-4">
          <div className="container-lg">
            <h1 className="text-3xl font-bold mb-2">{t('benefits.title')}</h1>
            <p className="text-green-200">{t('benefits.subtitle')}</p>
          </div>
        </div>

        <div className="container-lg px-4 py-10 space-y-8">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.titleEn}
              className="card p-6 sm:p-8 flex flex-col sm:flex-row gap-6 border border-green-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                <b.icon size={32} className="text-brand-green" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-brand-green mb-3">
                  {isHindi ? b.titleHi : b.titleEn}
                </h2>
                <ul className="space-y-2">
                  {(isHindi ? b.pointsHi : b.pointsEn).map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={16} className="text-brand-mustard mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <p className="text-gray-400 text-sm text-center italic">
            {isHindi
              ? '* फसल की उपज मिट्टी, मौसम, सिंचाई और खेती की पद्धतियों पर निर्भर करती है। कोई भी दावा गारंटी नहीं है।'
              : '* Crop yield depends on soil, weather, irrigation, and farming practices. No claims are guaranteed.'}
          </p>
        </div>
      </div>
    </>
  );
}
