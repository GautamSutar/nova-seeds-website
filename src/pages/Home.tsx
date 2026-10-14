import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Droplets, Sprout, Globe, Phone, MessageCircle, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import BenefitCard from '../components/BenefitCard';
import TestimonialSlider from '../components/TestimonialSlider';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import testimonials from '../data/testimonials.json';
import { siteConfig } from '../config';

const BENEFITS = [
  {
    icon: TrendingUp,
    titleHi: 'उच्च उपज क्षमता',
    titleEn: 'High Yield Potential',
    descHi: 'प्रति एकड़ अधिक पैदावार की संभावना',
    descEn: 'Better yield per acre potential',
  },
  {
    icon: Shield,
    titleHi: 'रोग प्रतिरोधक क्षमता',
    titleEn: 'Disease Tolerance',
    descHi: 'सामान्य रोगों से बेहतर सुरक्षा',
    descEn: 'Better protection from common diseases',
  },
  {
    icon: Droplets,
    titleHi: 'उत्तम तेल प्रतिशत',
    titleEn: 'Good Oil Percentage',
    descHi: 'बेहतर गुणवत्ता वाला तेल',
    descEn: 'Better quality oil content',
  },
  {
    icon: Sprout,
    titleHi: 'मजबूत पौधा',
    titleEn: 'Strong Plant',
    descHi: 'ज़्यादा शाखाएँ, ज़्यादा फसल',
    descEn: 'More branches, more crop',
  },
  {
    icon: Globe,
    titleHi: 'विविध मौसम अनुकूल',
    titleEn: 'Multi-region Suitable',
    descHi: 'विभिन्न क्षेत्रों के लिए उपयुक्त',
    descEn: 'Suitable for various agro-climatic regions',
  },
];

export default function Home() {
  const { t } = useTranslation();
  const { isHindi } = useLanguage();
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('नमस्ते, Gold Medal 941 के बारे में जानकारी चाहिए।')}`;

  return (
    <>
      <SEO
        titleHi="नोवा सीड्स – Gold Medal 941 हाइब्रिड सरसों बीज | अच्छे बीज, भरपूर पैदावार"
        titleEn="Nova Seeds – Gold Medal 941 Hybrid Mustard Seeds | Good Seeds, Abundant Harvest"
        descriptionHi="नोवा सीड्स का Gold Medal 941 – भारतीय किसानों के लिए उन्नत हाइब्रिड सरसों बीज। अधिक उपज, बेहतर तेल, मजबूत पौधा।"
        descriptionEn="Nova Seeds Gold Medal 941 – Advanced hybrid mustard seeds for Indian farmers. Higher yield potential, better oil content, stronger plants."
        canonical="/"
      />

      {/* Hero */}
      <Hero />

      {/* Benefits Strip */}
      <section className="section bg-section-alt" id="benefits-strip">
        <div className="container-lg">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">{t('benefits.title')}</h2>
            <p className="section-subtitle">{t('benefits.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BENEFITS.map((b, i) => (
              <BenefitCard key={b.titleEn} {...b} isHindi={isHindi} delay={i * 0.1} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/benefits" className="btn-outline">
              {isHindi ? 'सभी फायदे देखें →' : 'View All Benefits →'}
            </Link>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="section" id="product-highlight">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="badge-gold mb-3 inline-flex">⭐ Gold Medal 941</div>
              <h2 className="section-title">{t('product.title')}</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {t('product.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/product" id="home-product-btn" className="btn-primary">
                  {isHindi ? 'उत्पाद देखें' : 'View Product'}
                </Link>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle size={16} />
                  {isHindi ? 'पूछताछ करें' : 'Enquire Now'}
                </a>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/src/assets/hero.png"
                alt="Gold Medal 941 Hybrid Mustard Seeds"
                className="w-full max-w-sm rounded-3xl shadow-xl object-contain drop-shadow-md border-2 border-brand-mustard/40"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-section-alt" id="testimonials">
        <div className="container-lg">
          <div className="text-center mb-8">
            <h2 className="section-title">{t('testimonials.title')}</h2>
            <p className="section-subtitle">{t('testimonials.subtitle')}</p>
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* Dealer Teaser */}
      <section className="section" id="dealer-teaser">
        <div className="container-lg text-center">
          <MapPin size={40} className="text-brand-green mx-auto mb-3" />
          <h2 className="section-title">{t('dealers.title')}</h2>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">{t('dealers.subtitle')}</p>
          <Link to="/dealers" id="home-dealer-btn" className="btn-primary text-lg px-8 py-4">
            <MapPin size={20} />
            {t('hero.cta1')}
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="section text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1B5E20, #0a3d0a)' }}
        id="contact-cta"
      >
        <div className="container-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {isHindi ? 'कोई सवाल है? हमसे पूछें!' : 'Got Questions? Ask Us!'}
          </h2>
          <p className="text-green-300 mb-8">
            {isHindi ? 'हम किसानों की मदद के लिए हमेशा तैयार हैं।' : "We're always ready to help farmers."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone}`} id="cta-call-btn" className="btn-secondary text-lg">
              <Phone size={20} />
              {t('nav.callNow')}
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" id="cta-wa-btn" className="btn-whatsapp text-lg">
              <MessageCircle size={20} />
              {t('nav.whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
