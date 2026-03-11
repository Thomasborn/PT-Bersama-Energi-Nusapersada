import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BenLogo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.partnership'), path: '/partnership' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.careers'), path: '/careers' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-black/80 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <BenLogo className="h-10 md:h-12" light={!scrolled} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : scrolled ? 'text-gray-800' : 'text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-2 border-l border-gray-300 pl-6 ml-2">
              <button 
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-800' : 'text-gray-200'}`}
              >
                <Globe size={16} />
                <span className="uppercase">{language}</span>
              </button>
            </div>

            <a href="tel:+622112345678" className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-sm font-medium transition-colors text-sm">
              <Phone size={16} />
              <span>{t('nav.callUs')}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-800' : 'text-gray-200'}`}
            >
              <Globe size={16} />
              <span className="uppercase">{language}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-black' : 'text-white'} hover:text-primary focus:outline-none`}
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
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-primary bg-orange-50'
                    : 'text-gray-800 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
