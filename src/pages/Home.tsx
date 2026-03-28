import { ArrowRight, ChevronRight, ShieldCheck, Globe, Wrench, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BenLogo } from '../components/Logo';
import { useLanguage } from '../context/LanguageContext';
import GulfProductCard from '../components/GulfProductCard';
import { gulfCategories } from '../data/gulfProducts';
import TrustSection from '../components/TrustSection';
import ClientLogos from '../components/ClientLogos';
import TechnicalValue from '../components/TechnicalValue';
import DistributorCTA from '../components/DistributorCTA';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
                Solusi Energi, Pelumas, dan Alat Berat untuk <span className="text-primary">Industri Indonesia</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                PT. Bersama Energi Nusapersada (BEN) adalah distributor yang menghadirkan produk pelumas Gulf dan solusi alat berat Shantui untuk kebutuhan industri, komersial, dan operasional di Indonesia.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/products" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-sm font-semibold transition-all flex items-center gap-2 group">
                  Lihat Produk Gulf
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-sm font-semibold transition-all flex items-center gap-2">
                  Hubungi BEN
                </Link>
                <Link to="/partnership" className="bg-transparent hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-sm font-semibold transition-all flex items-center gap-2">
                  Menjadi Mitra
                </Link>
              </div>

              {/* Horizontal Logo Display */}
              <div className="pt-10 mt-10 border-t border-white/20">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12">
                  <div className="flex flex-col items-start justify-center">
                    <BenLogo className="h-14 md:h-16" light={true} />
                  </div>
                  <div className="h-16 w-px bg-white/20 hidden sm:block"></div>
                  <div className="flex items-center gap-6 md:gap-10 mt-6 sm:mt-0">
                    <img src="/gulf.png" alt="Gulf Oil" className="h-16 md:h-20 w-auto object-contain bg-white rounded-full p-1 shadow-lg" />
                    <img src="/shantui-logo.jpeg" alt="Shantui" className="h-10 md:h-12 object-contain bg-white rounded-sm p-2 shadow-lg" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative h-full min-h-[500px]"
            >
              {/* The background image already serves as the visual, but we can add a decorative element here if needed, or leave it empty to show the background */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* B2B Client Logos */}
      <ClientLogos />

      {/* About BEN Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Watermark Logo removed to fix overlapping text */}

              <div className="relative z-10">
                <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('about.subtitle')}</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
                  {t('about.title')}
                </h3>
                <div className="w-20 h-1 bg-primary mb-8"></div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {t('about.desc1')}
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {t('about.desc2')}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['Mining', 'Construction', 'Manufacturing', 'Transportation', 'Energy'].map((sector, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ShieldCheck className="text-primary" size={20} />
                      <span className="font-medium text-gray-800">{sector}</span>
                    </div>
                  ))}
                </div>

                {/* Logos in About Section */}
                <div className="pt-8 mt-8 border-t border-gray-200 mb-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
                    <div className="flex flex-col items-start">
                      <BenLogo className="h-12 md:h-14 mb-2" light={false} />
                      <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">{t('hero.officialPartner')}</span>
                    </div>
                    <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
                    <div className="flex items-center gap-6 mt-4 sm:mt-0">
                      <img src="/gulf.png" alt="Gulf Oil" className="h-12 md:h-16 object-contain" />
                      <img src="/shantui-logo.jpeg" alt="Shantui" className="h-8 md:h-10 object-contain" />
                    </div>
                  </div>
                </div>

                <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors">
                  {t('about.readFullStory')} <ChevronRight size={20} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial Operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-secondary text-white p-8 rounded-sm shadow-xl max-w-xs hidden md:block">
                <div className="text-4xl font-heading font-bold text-primary mb-2">15+</div>
                <div className="text-sm font-medium uppercase tracking-wider">{t('about.yearsExcellence')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('partners.subtitle')}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">{t('partners.title')}</h3>
            <p className="text-gray-600 text-lg">
              {t('partners.desc')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <BenLogo className="h-12 md:h-16" light={false} />
            <img src="/gulf.png" alt="Gulf Oil" className="h-20 object-contain" />
            <img src="/shantui-logo.jpeg" alt="Shantui" className="h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Gulf Products Hub Section */}
      <section className="py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Pusat Produk Gulf</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-4">Solusi Pelumasan Premium</h3>
              <p className="text-gray-600 text-lg">Jelajahi rangkaian produk Gulf Oil untuk berbagai kebutuhan mobilitas dan industri Anda, didukung oleh teknologi yang teruji di lintasan balap.</p>
            </div>
            <Link to="/products" className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-sm font-semibold transition-colors flex items-center gap-2 flex-shrink-0">
              Lihat Semua Produk <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gulfCategories.map((category, index) => (
              <GulfProductCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('home.sectorsSubtitle')}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t('home.sectorsTitle')}</h3>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { name: t('home.mining'), img: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: t('home.construction'), img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: t('home.transportation'), img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: t('home.manufacturing'), img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: t('home.agriculture'), img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: t('home.energySector'), img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group overflow-hidden rounded-sm aspect-square md:aspect-[4/3]"
              >
                <img src={industry.img} alt={industry.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h4 className="text-xl md:text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">{industry.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BEN */}
      <section className="py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('home.strengthsSubtitle')}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">{t('home.strengthsTitle')}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Globe size={32} />, title: t('home.strength1Title'), desc: t('home.strength1Desc') },
              { icon: <ShieldCheck size={32} />, title: t('home.strength2Title'), desc: t('home.strength2Desc') },
              { icon: <Wrench size={32} />, title: t('home.strength3Title'), desc: t('home.strength3Desc') },
              { icon: <MapPin size={32} />, title: t('home.strength4Title'), desc: t('home.strength4Desc') }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-primary"
              >
                <div className="text-primary mb-6 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-heading font-bold text-secondary mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Value Proposition */}
      <TechnicalValue />

      {/* Distributor CTA */}
      <DistributorCTA />

      {/* Trust Section: Motorsport & Gulf Heritage */}
      <TrustSection />
    </div>
  );
}
