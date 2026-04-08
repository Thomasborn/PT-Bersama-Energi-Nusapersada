import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { BenLogo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8 relative border-t border-white/5">
      {/* Elegant Gulf Gradient Ribbon */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <BenLogo className="h-10" light={true} />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('nav.about')}</Link></li>
              <li><Link to="/partnership" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('nav.partnership')}</Link></li>
              {/* <li><Link to="/news" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('nav.news')}</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('nav.careers')}</Link></li> */}
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">{t('footer.products')}</h3>
            <ul className="space-y-3">
              {/* <li><Link to="/products" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('products.automotiveLubes')}</Link></li> */}
              <li><Link to="/products" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('products.industrialLubes')}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('products.heavyEquipLubes')}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('products.constructionEquip')}</Link></li>
              {/* <li><Link to="/products" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('products.filtersParts')}</Link></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">{t('footer.contactInfo')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm">
                  {t('footer.hqAddress')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">info@bersamaenergi.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PT. Bersama Energi Nusapersada. {t('footer.rights')}
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
