import { motion } from 'motion/react';
import { Handshake, Store, Factory, Truck, HardHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Partnership() {
  const { t } = useLanguage();

  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-dark-grey text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">{t('partnership.heroTitle')} <span className="text-primary">{t('partnership.heroTitleHighlight')}</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('partnership.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('partnership.opportunitiesSubtitle')}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-black mb-6">{t('partnership.opportunitiesTitle')}</h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('partnership.opportunitiesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Handshake size={32} />, title: t('partnership.dealers'), desc: t('partnership.dealersDesc') },
              { icon: <Store size={32} />, title: t('partnership.retailers'), desc: t('partnership.retailersDesc') },
              { icon: <Factory size={32} />, title: t('partnership.industrial'), desc: t('partnership.industrialDesc') },
              { icon: <Truck size={32} />, title: t('partnership.fleet'), desc: t('partnership.fleetDesc') },
              { icon: <HardHat size={32} />, title: t('partnership.contractors'), desc: t('partnership.contractorsDesc') }
            ].map((partner, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-primary group"
              >
                <div className="text-primary mb-6 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {partner.icon}
                </div>
                <h4 className="text-xl font-heading font-bold text-black mb-3">{partner.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('partnership.benefitsSubtitle')}</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-black mb-6 leading-tight">
                {t('partnership.benefitsTitle')}
              </h3>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              
              <ul className="space-y-6">
                {[
                  { title: t('partnership.benefit1Title'), desc: t('partnership.benefit1Desc') },
                  { title: t('partnership.benefit2Title'), desc: t('partnership.benefit2Desc') },
                  { title: t('partnership.benefit3Title'), desc: t('partnership.benefit3Desc') },
                  { title: t('partnership.benefit4Title'), desc: t('partnership.benefit4Desc') },
                  { title: t('partnership.benefit5Title'), desc: t('partnership.benefit5Desc') }
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-black mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Business Partnership" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-sm shadow-xl max-w-xs hidden md:block">
                <h4 className="text-2xl font-heading font-bold mb-2">{t('partnership.joinNetwork')}</h4>
                <p className="text-sm font-medium opacity-90">{t('partnership.joinNetworkDesc')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form CTA */}
      <section className="py-24 bg-dark-grey text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t('partnership.readyToStart')}</h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            {t('partnership.readyToStartDesc')}
          </p>
          <Link to="/contact" className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-sm font-bold transition-colors text-lg inline-flex items-center gap-2">
            {t('partnership.applyNow')} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
