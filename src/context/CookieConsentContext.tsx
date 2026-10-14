import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ConsentState = 'pending' | 'accepted' | 'rejected' | 'partial';

interface CookieConsentContextType {
  consent: ConsentState;
  acceptAll: () => void;
  rejectAll: () => void;
  showBanner: boolean;
  hideBanner: () => void;
  analyticsAllowed: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType>({
  consent: 'pending',
  acceptAll: () => {},
  rejectAll: () => {},
  showBanner: true,
  hideBanner: () => {},
  analyticsAllowed: false,
});

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<ConsentState>('pending');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('nova_cookie_consent') as ConsentState | null;
    if (saved) {
      setConsent(saved);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    setConsent('accepted');
    localStorage.setItem('nova_cookie_consent', 'accepted');
    setShowBanner(false);
    // Load analytics only after consent
    loadAnalytics();
  };

  const rejectAll = () => {
    setConsent('rejected');
    localStorage.setItem('nova_cookie_consent', 'rejected');
    setShowBanner(false);
  };

  const hideBanner = () => setShowBanner(false);

  const loadAnalytics = () => {
    // GA4 – loaded only after consent
    const ga4Id = import.meta.env.VITE_GA4_ID;
    if (ga4Id && !document.getElementById('ga4-script')) {
      const s = document.createElement('script');
      s.id = 'ga4-script';
      s.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
      s.async = true;
      document.head.appendChild(s);
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function () { (window as any).dataLayer.push(arguments); };
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', ga4Id);
    }
  };

  return (
    <CookieConsentContext.Provider
      value={{ consent, acceptAll, rejectAll, showBanner, hideBanner, analyticsAllowed: consent === 'accepted' }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => useContext(CookieConsentContext);
