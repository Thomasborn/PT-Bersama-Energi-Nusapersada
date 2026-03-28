import { ShieldCheck, Target, Eye, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BenLogo } from '../components/Logo';
import TrustSection from '../components/TrustSection';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">{t('about.heroTitle')} <span className="text-primary">BEN</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('about.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Watermark Logo removed to fix overlapping text */}

              <div className="relative z-10">
                <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('about.whoWeAre')}</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
                  {t('about.title')}
                </h3>
                <div className="w-20 h-1 bg-primary mb-8"></div>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    {t('about.desc1')}
                  </p>
                  <p>
                    {t('about.desc2')}
                  </p>
                  <p>
                    {t('about.desc3')}
                  </p>
                </div>

                {/* Logos in About Section */}
                <div className="pt-8 mt-8 border-t border-gray-200">
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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Industrial Operations" className="rounded-sm w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lubricants" className="rounded-sm w-full h-64 object-cover mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrated Premium Profile & Trust Section */}
      <TrustSection />

      {/* Mission & Vision */}
      <section className="py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-primary"
            >
              <Target className="text-primary mb-6" size={48} />
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">{t('about.mission')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.missionDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-dark-grey"
            >
              <Eye className="text-dark-grey mb-6" size={48} />
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">{t('about.vision')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.visionDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('about.principles')}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">{t('about.values')}</h3>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('about.val1Title'), desc: t('about.val1Desc') },
              { title: t('about.val2Title'), desc: t('about.val2Desc') },
              { title: t('about.val3Title'), desc: t('about.val3Desc') },
              { title: t('about.val4Title'), desc: t('about.val4Desc') },
              { title: t('about.val5Title'), desc: t('about.val5Desc') },
              { title: t('about.val6Title'), desc: t('about.val6Desc') }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-grey rounded-sm"
              >
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-heading font-bold text-secondary mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
