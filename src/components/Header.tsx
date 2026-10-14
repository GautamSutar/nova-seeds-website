import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '../config';
import LanguageToggle from './LanguageToggle';
import logoImage from '../assets/logo.jpg';

const NAV_LINKS = [
  { to: '/', key: 'home' },
  { to: '/product', key: 'product' },
  { to: '/benefits', key: 'benefits' },
  { to: '/dealers', key: 'dealers' },
  { to: '/about', key: 'about' },
  { to: '/contact', key: 'contact' },
] as const;

export default function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-green-900 shadow-xl' : 'bg-green-900/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-lg px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 shrink-0">
          <img
            src={logoImage}
            alt="Nova Seeds Logo"
            className="w-11 h-11 rounded-full object-cover border-2 border-brand-mustard shadow"
          />
          <div className="leading-tight">
            <div className="text-white font-bold text-base leading-none">Nova Seeds</div>
            <div className="text-mustard-300 text-[10px] leading-none font-normal">Research &amp; Hybrid Seeds</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(({ to, key }) => (
            <NavLink
              key={key}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-brand-mustard' : 'text-green-100 hover:text-white'
                }`
              }
            >
              {t(`nav.${key}`)}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a
            href={`tel:${siteConfig.phone}`}
            id="header-call-btn"
            className="hidden sm:flex items-center gap-1.5 btn-secondary !py-2 !px-3 !text-sm !min-h-[36px]"
          >
            <Phone size={14} />
            {t('nav.callNow')}
          </a>
          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-white hover:text-brand-mustard transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-green-950 border-t border-green-800 animate-fade-in">
          <nav className="flex flex-col">
            {NAV_LINKS.map(({ to, key }) => (
              <NavLink
                key={key}
                to={to}
                end={to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-6 py-4 text-base font-medium border-b border-green-900 transition-colors ${
                    isActive ? 'text-brand-mustard bg-green-900' : 'text-green-100 hover:bg-green-900'
                  }`
                }
              >
                {t(`nav.${key}`)}
              </NavLink>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={closeMenu}
              className="mx-4 my-3 btn-secondary flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              {t('nav.callNow')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
