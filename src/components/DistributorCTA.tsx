import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface DistributorCTAProps {
  theme?: 'light' | 'dark' | 'primary';
}

export default function DistributorCTA({ theme = 'primary' }: DistributorCTAProps) {
  const { t } = useLanguage();
  
  const bgClass = theme === 'primary' 
    ? 'bg-primary text-white' 
    : theme === 'dark' 
      ? 'bg-secondary text-white' 
      : 'bg-grey text-secondary border-t-4 border-primary';

  const titleClass = theme === 'light' ? 'text-secondary' : 'text-white';
  const textClass = theme === 'light' ? 'text-gray-600' : 'text-white/80';
  const buttonClass = theme === 'primary'
    ? 'bg-white text-primary hover:bg-gray-100'
    : theme === 'dark'
      ? 'bg-primary text-white hover:bg-primary-hover'
      : 'bg-primary text-white hover:bg-primary-hover';

  return (
    <div className={`${bgClass} rounded-3xl shadow-2xl overflow-hidden relative border border-white/5 max-w-6xl mx-auto mb-16`}>
      {theme === 'primary' && (
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      )}
      
      <div className="relative z-10 p-10 md:p-14 lg:p-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
          
          <div className="max-w-2xl">
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 tracking-tight leading-[1.15] ${titleClass}`}>
              {t('home.distributorCTA.title')}
            </h3>
            <p className={`text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xl ${textClass}`}>
              {t('home.distributorCTA.desc')}
            </p>
            
            <div className={`flex flex-wrap gap-4 ${textClass}`}>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-sm transition-transform hover:-translate-y-1 cursor-default">
                <Mail size={18} className={theme === 'light' ? 'text-primary' : 'text-white'} />
                <span className="font-bold tracking-wide">info@bersamaenergi.co.id</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-4 min-w-[240px]">
            <Link 
              to="/contact" 
              className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all text-center w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 ${buttonClass}`}
            >
              {t('home.distributorCTA.button')}
              <ArrowRight size={20} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
