import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Phone, Award, Star } from 'lucide-react';
import { siteConfig } from '../config';

export default function Hero() {
  const { t } = useTranslation();
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('नमस्ते, मुझे Gold Medal 941 हाइब्रिड सरसों बीज के बारे में जानकारी चाहिए।')}`;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a3d0a 0%, #1B5E20 55%, #2d6a30 100%)',
      }}
      aria-label="Hero Section"
    >
      {/* Decorative mustard field pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #F9A825 0px,
            #F9A825 2px,
            transparent 2px,
            transparent 30px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-lg px-4 py-20 mt-16 flex flex-col lg:flex-row items-center gap-10">

        {/* Text side */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="badge-gold flex items-center gap-1">
              <Award size={14} />
              {t('hero.badge2')}
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
              <Star size={14} className="text-brand-mustard" fill="#F9A825" />
              {t('hero.badge1')}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
            {t('hero.headline')}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-brand-mustard mb-3">
            {t('hero.subheadline')}
          </p>
          <p className="text-lg text-green-200 mb-8 max-w-md mx-auto lg:mx-0">
            {t('hero.tagline')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 flex-wrap">
            <Link to="/dealers" id="hero-dealer-btn" className="btn-secondary w-full sm:w-auto">
              <MapPin size={18} />
              {t('hero.cta1')}
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              {t('hero.cta2')}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              id="hero-call-btn"
              className="btn-outline border-white text-white hover:bg-white hover:text-brand-green w-full sm:w-auto"
            >
              <Phone size={18} />
              {t('hero.cta3')}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-mustard">100%</div>
              <div className="text-green-300 text-xs">Hybrid Quality</div>
            </div>
            <div className="w-px h-10 bg-green-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-mustard">✓</div>
              <div className="text-green-300 text-xs">Tested Seeds</div>
            </div>
            <div className="w-px h-10 bg-green-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-mustard">Pan India</div>
              <div className="text-green-300 text-xs">Available</div>
            </div>
          </div>
        </motion.div>

        {/* Visual side – real product image */}
        <motion.div
          className="flex-1 w-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg lg:max-w-2xl flex justify-center">
            <img
              src="/src/assets/hero.png"
              alt="Gold Medal 941 Hybrid Mustard Seed – Nova Seeds"
              className="w-full h-auto max-h-[500px] lg:max-h-[560px] rounded-3xl shadow-2xl object-cover drop-shadow-2xl border-2 border-brand-mustard/30"
            />
            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 w-18 h-18 sm:w-20 sm:h-20 p-2 rounded-full flex flex-col items-center justify-center text-center shadow-2xl border-2 border-white/60"
              style={{ background: 'linear-gradient(135deg, #F9A825, #FFC107)' }}
            >
              <div className="text-brand-green font-black text-xs sm:text-sm leading-tight">किसान<br />पसंद</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1.5 h-2.5 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
