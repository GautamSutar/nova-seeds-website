import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin,  } from 'lucide-react';
import { siteConfig } from '../config';
import logoImage from '../assets/logo.jpg';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-green-100">
      {/* Main footer */}
      <div className="container-lg px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src={logoImage}
              alt="Nova Seeds Logo"
              className="w-11 h-11 rounded-full object-cover border-2 border-brand-mustard shadow"
            />
            <div>
              <div className="text-white font-bold text-base leading-none">Nova Seeds</div>
              <div className="text-mustard-300 text-xs">Research &amp; Hybrid Seeds</div>
            </div>
          </div>
          <p className="text-green-300 text-sm mt-2">{t('footer.tagline')}</p>
          <p className="text-green-400 text-xs mt-3 italic">{t('footer.imageDisclaimer')}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-brand-mustard font-semibold mb-3">{t('footer.quickLinks')}</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: '/', label: t('nav.home') },
              { to: '/product', label: t('nav.product') },
              { to: '/benefits', label: t('nav.benefits') },
              { to: '/dealers', label: t('nav.dealers') },
              { to: '/about', label: t('nav.about') },
              { to: '/contact', label: t('nav.contact') },
              { to: '/faq', label: t('nav.faq') },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-green-300 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-brand-mustard font-semibold mb-3">{t('footer.legal')}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="text-green-300 hover:text-white">{t('footer.privacy')}</Link></li>
            <li><Link to="/terms" className="text-green-300 hover:text-white">{t('footer.terms')}</Link></li>
            {siteConfig.ecommerceMode === 'ecommerce' && (
              <li><Link to="/refund" className="text-green-300 hover:text-white">{t('footer.refund')}</Link></li>
            )}
            <li><Link to="/disclaimer" className="text-green-300 hover:text-white">{t('footer.disclaimer')}</Link></li>
          </ul>
          <div className="mt-4 text-xs text-green-400">
            <span className="font-semibold text-green-300">{t('footer.seedLicense')}</span>{' '}
            {siteConfig.seedLicenseNo}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-brand-mustard font-semibold mb-3">{t('nav.contact')}</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-2 text-green-300 hover:text-white">
                <Phone size={14} className="mt-0.5 shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-2 text-green-300 hover:text-white">
                <Mail size={14} className="mt-0.5 shrink-0" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-2 text-green-300">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
            </li>
          </ul>
          {/* Social */}
          <div className="flex gap-3 mt-4">
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-green-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
              {/* <Facebook size={16} /> */}
            </a>
            <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-green-800 hover:bg-red-600 flex items-center justify-center transition-colors">
              {/* <Youtube size={16} /> */}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900 py-4 px-4 text-center text-xs text-green-400">
        <span>{t('footer.copyright').replace('2024', String(year))}</span>
      </div>
    </footer>
  );
}
