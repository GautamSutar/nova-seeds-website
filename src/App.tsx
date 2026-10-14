import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const Benefits = lazy(() => import('./pages/Benefits'));
const Dealers = lazy(() => import('./pages/Dealers'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Admin pages (code split separately)
const AdminLogin = lazy(() => import('./admin/Login'));
const AdminDashboard = lazy(() => import('./admin/Dashboard'));
const EnquiriesManager = lazy(() => import('./admin/EnquiriesManager'));
const DealersManager = lazy(() => import('./admin/DealersManager'));

// Page loading spinner
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin w-10 h-10 border-4 border-brand-green border-t-transparent rounded-full" />
  </div>
);

// Layout wrapper for public pages
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <WhatsAppButton />
    <CookieBanner />
  </>
);

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Admin routes – no public layout */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/enquiries" element={<EnquiriesManager />} />
        <Route path="/admin/dealers" element={<DealersManager />} />

        {/* Public routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/product"
          element={
            <PublicLayout>
              <Product />
            </PublicLayout>
          }
        />
        <Route
          path="/benefits"
          element={
            <PublicLayout>
              <Benefits />
            </PublicLayout>
          }
        />
        <Route
          path="/dealers"
          element={
            <PublicLayout>
              <Dealers />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <PublicLayout>
              <Gallery />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          }
        />
        <Route
          path="/faq"
          element={
            <PublicLayout>
              <FAQ />
            </PublicLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PublicLayout>
              <PrivacyPolicy />
            </PublicLayout>
          }
        />
        <Route
          path="/privacy"
          element={
            <PublicLayout>
              <PrivacyPolicy />
            </PublicLayout>
          }
        />
        <Route
          path="/terms"
          element={
            <PublicLayout>
              <Terms />
            </PublicLayout>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <PublicLayout>
              <Disclaimer />
            </PublicLayout>
          }
        />
        <Route
          path="*"
          element={
            <PublicLayout>
              <NotFound />
            </PublicLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}
