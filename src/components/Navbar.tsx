import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BenLogo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Add a slight shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.products') || 'Produk', path: '/products' },
    { name: t('nav.about') || 'Tentang Kami', path: '/about' },
    { name: t('nav.partnership') || 'Kemitraan', path: '/partnership' },
    { name: t('nav.news') || 'Berita', path: '/news' },
    { name: t('nav.contact') || 'Kontak', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      
      {/* ── TOP UTILITY TIER ─────────────────────────────────────────────────── */}
      <div className="w-full bg-[#f8f9fa] hidden md:block">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-8 flex justify-end items-center">
          <div className="flex items-center space-x-6 text-[11px] font-medium text-gray-500">
            <Link to="/careers" className="hover:text-primary transition-colors">Karir</Link>
            <a href="#" className="hover:text-primary transition-colors">Gulf Extranet</a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV TIER ─────────────────────────────────────────────────────── */}
      <div className={`w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <BenLogo className="h-12 md:h-16" light={false} />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[15px] font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Divider */}
              <div className="h-6 w-px bg-gray-300 mx-2"></div>

              {/* Utility Icons */}
              <div className="flex items-center space-x-6">
                <button className="text-primary hover:text-primary-hover transition-colors">
                  <Search size={22} strokeWidth={2} />
                </button>
                
                <button 
                  onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                  className="flex items-center gap-2 border border-[#ff6600] text-[#002b5b] hover:bg-orange-50 px-4 py-1.5 rounded-full transition-colors text-sm"
                >
                  <Globe className="text-[#ff6600]" size={16} strokeWidth={2} />
                  <span className="font-bold flex items-center gap-1.5">
                    <span className={language === 'id' ? 'text-[#ff6600]' : 'text-gray-400'}>ID</span>
                    <span className="text-gray-300">|</span>
                    <span className={language === 'en' ? 'text-[#ff6600]' : 'text-gray-400'}>EN</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <button className="text-primary">
                <Search size={24} strokeWidth={2} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-secondary focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-primary bg-orange-50/50'
                    : 'text-secondary hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-4 mt-2">
              <Link to="/careers" className="block px-4 py-3 text-sm text-gray-500 hover:text-primary" onClick={() => setIsOpen(false)}>Karir</Link>
              <a href="#" className="block px-4 py-3 text-sm text-gray-500 hover:text-primary" onClick={() => setIsOpen(false)}>Gulf Extranet</a>
            </div>
            <div className="px-4 py-4">
              <button 
                onClick={() => {
                  setLanguage(language === 'id' ? 'en' : 'id');
                  setIsOpen(false);
                }}
                className="flex items-center justify-center w-full gap-2 border border-[#ff6600] text-[#002b5b] hover:bg-orange-50 px-4 py-2.5 rounded-full transition-colors text-sm"
              >
                <Globe className="text-[#ff6600]" size={18} />
                <span className="font-bold flex items-center gap-1.5">
                  <span className={language === 'id' ? 'text-[#ff6600]' : 'text-gray-400'}>ID</span>
                  <span className="text-gray-300">|</span>
                  <span className={language === 'en' ? 'text-[#ff6600]' : 'text-gray-400'}>EN</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}
