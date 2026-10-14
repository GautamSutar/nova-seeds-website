import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../context/CookieConsentContext';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const { t } = useTranslation();
  const { showBanner, acceptAll, rejectAll, hideBanner } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-green-950 border-t border-green-700 shadow-2xl animate-slide-up"
    >
      <div className="container-lg flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie size={24} className="text-brand-mustard shrink-0 mt-0.5" />
        <p className="text-green-200 text-sm flex-1">
          {t('cookie.message')}{' '}
          <Link to="/privacy-policy" className="underline text-brand-mustard hover:text-yellow-300">
            {t('cookie.learnMore')}
          </Link>
        </p>
        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            onClick={acceptAll}
            id="cookie-accept-btn"
            className="btn-secondary !py-2 !px-4 !text-sm !min-h-[40px]"
          >
            {t('cookie.accept')}
          </button>
          <button
            onClick={rejectAll}
            id="cookie-reject-btn"
            className="btn-outline border-green-600 text-green-300 hover:bg-green-800 hover:text-white !py-2 !px-4 !text-sm !min-h-[40px]"
          >
            {t('cookie.reject')}
          </button>
          <button
            onClick={hideBanner}
            className="p-2 text-green-400 hover:text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
