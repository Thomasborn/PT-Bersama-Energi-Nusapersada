import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BenLogo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.partnership'), path: '/partnership' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-2 transition-all duration-300 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <BenLogo className="h-10 md:h-12" light={false} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-2 border-l border-gray-200 pl-5 ml-1 lg:pl-6 lg:ml-2">
              <button 
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="flex items-center gap-1 text-[13px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors text-secondary hover:text-primary"
              >
                <Globe size={16} />
                <span>{language}</span>
              </button>
            </div>

            <a href="tel:+622112345678" className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-sm font-semibold whitespace-nowrap transition-colors text-[13px]">
              <Phone size={16} />
              <span>{t('nav.callUs')}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="flex items-center gap-1 text-sm font-bold uppercase transition-colors text-secondary hover:text-primary"
            >
              <Globe size={16} />
              <span>{language}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-secondary hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider ${
                  location.pathname === link.path
                    ? 'text-primary bg-orange-50'
                    : 'text-secondary hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Corporate Sub-Header Strip (Filling the gap) */}
      <div className="hidden md:flex w-full bg-gray-50 border-t border-gray-100 py-1.5 absolute bottom-0 translate-y-full shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center text-[11px] font-medium tracking-wide text-gray-500 uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
              Gulf Oil International Licensee
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
              Official Distributor PT. BEN
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="text-secondary font-bold">100+</span> Tahun Warisan Global
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="flex items-center gap-1.5">
              Dukungan Teknis 24/7
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
