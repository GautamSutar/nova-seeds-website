import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './lib/i18n';
import './index.css';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { CookieConsentProvider } from './context/CookieConsentContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <CookieConsentProvider>
            <App />
          </CookieConsentProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
