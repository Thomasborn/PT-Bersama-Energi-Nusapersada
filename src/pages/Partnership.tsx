import { motion } from 'motion/react';
import { Handshake, Store, Factory, Truck, HardHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Partnership() {
  const { t } = useLanguage();

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ─────────ss────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex flex-col justify-end bg-secondary overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://www.shantui-global.com/upload/images/2023/06/15/11b95e6840244b219a30b6201e5c1ded.jpg")' }}
        >
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        {/* Content anchored to bottom */}
        <div className="relative z-20 w-full pb-0 pt-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-16 bg-primary" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
                Program Kemitraan BEN
              </span>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading font-black text-white leading-[0.9] tracking-tighter text-[clamp(2.5rem,6.5vw,6rem)] mb-0"
            >
              {t('partnership.heroTitle')}{' '}
              <span className="text-primary">{t('partnership.heroTitleHighlight')}</span>
            </motion.h1>
          </div>

          {/* Bottom strip */}
          <div className="border-t border-white/10 mt-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-gray-300 text-base leading-relaxed max-w-2xl"
              >
                {t('partnership.heroDesc')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP OPPORTUNITIES — Strict Grid ──────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                  {t('partnership.opportunitiesSubtitle')}
                </span>
              </div>
              <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter">
                {t('partnership.opportunitiesTitle')}
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md lg:text-right">
              {t('partnership.opportunitiesDesc')}
            </p>
          </div>

          {/* strict flat grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200">
            {[
              { icon: <Handshake size={28} strokeWidth={1.5} />, title: t('partnership.dealers'), desc: t('partnership.dealersDesc') },
              { icon: <Store size={28} strokeWidth={1.5} />, title: t('partnership.retailers'), desc: t('partnership.retailersDesc') },
              { icon: <Factory size={28} strokeWidth={1.5} />, title: t('partnership.industrial'), desc: t('partnership.industrialDesc') },
              { icon: <Truck size={28} strokeWidth={1.5} />, title: t('partnership.fleet'), desc: t('partnership.fleetDesc') },
              { icon: <HardHat size={28} strokeWidth={1.5} />, title: t('partnership.contractors'), desc: t('partnership.contractorsDesc') },
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border-b border-r border-gray-200 p-10 group hover:bg-secondary transition-colors duration-300"
              >
                <div className="text-primary mb-8 group-hover:text-primary transition-colors">
                  {partner.icon}
                </div>
                <h4 className="font-heading font-bold text-secondary text-xl tracking-tight mb-4 group-hover:text-white transition-colors">
                  {partner.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {partner.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS — Asymmetric Split ──────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="py-24 pr-0 lg:pr-20 border-b lg:border-b-0 lg:border-r border-gray-100"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                  {t('partnership.benefitsSubtitle')}
                </span>
              </div>

              <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-10">
                {t('partnership.benefitsTitle')}
              </h2>

              <div className="space-y-8 mt-12">
                {[
                  { title: t('partnership.benefit1Title'), desc: t('partnership.benefit1Desc') },
                  { title: t('partnership.benefit2Title'), desc: t('partnership.benefit2Desc') },
                  { title: t('partnership.benefit3Title'), desc: t('partnership.benefit3Desc') },
                  { title: t('partnership.benefit4Title'), desc: t('partnership.benefit4Desc') },
                  { title: t('partnership.benefit5Title'), desc: t('partnership.benefit5Desc') }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="font-heading font-black text-primary/20 text-3xl tracking-tighter leading-none pt-1">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-secondary mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Absolute bleed image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[500px] lg:min-h-0 bg-secondary"
            >
              <img
                src="https://www.shantui-global.com/upload/images/2024/10/09/0bf38e21db3a4f9591d87f9879844dec.png"
                alt="Business Partnership"
                className="w-full h-full object-cover opacity-50"
              />
              {/* Structural overlay badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-secondary/80 hover:bg-transparent transition-colors duration-500">
                <div className="bg-white/10 backdrop-blur-md p-10 border border-white/20">
                  <h4 className="text-2xl font-heading font-black text-white tracking-tight mb-2 uppercase">{t('partnership.joinNetwork')}</h4>
                  <p className="text-sm font-medium text-gray-300">{t('partnership.joinNetworkDesc')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM CTA — Flat Structural ───────────────────────────── */}
      <section className="bg-white py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('partnership.ourPartnersSubtitle')}</span>
            </div>
            <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-12">
              {t('partnership.ourPartnersTitle')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-16">
              {t('partnership.ourPartnersDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center group hover:bg-gradient-to-br hover:from-primary hover:to-primary/90 transition-all duration-500 hover:shadow-lg"
            >
              <img src="/gulf.png" alt="Gulf Oil" className="h-16 object-contain mx-auto mb-6 group-hover:brightness-0 group-hover:invert" />
              <h4 className="font-heading font-bold text-secondary text-xl tracking-tight mb-3 group-hover:text-white transition-colors">{t('partnership.gulfTitle')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {t('partnership.gulfDescBrief')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center group hover:bg-gradient-to-br hover:from-primary hover:to-primary/90 transition-all duration-500 hover:shadow-lg"
            >
              <img src="/shantui-logo.jpeg" alt="Shantui" className="h-14 object-contain mx-auto mb-6 group-hover:brightness-0 group-hover:invert" />
              <h4 className="font-heading font-bold text-secondary text-xl tracking-tight mb-3 group-hover:text-white transition-colors">{t('partnership.shantuiTitle')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {t('partnership.shantuiDescBrief')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center group hover:bg-gradient-to-br hover:from-primary hover:to-primary/90 transition-all duration-500 hover:shadow-lg"
            >
              <img src="/ben_exact.png" alt="PT Bersama Energi Nusapersada" className="h-16 object-contain mx-auto mb-6 group-hover:brightness-0 group-hover:invert" />
              <h4 className="font-heading font-bold text-secondary text-xl tracking-tight mb-3 group-hover:text-white transition-colors">{t('partnership.benTitle')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {t('partnership.benDescBrief')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CUSTOMERS / SECTORS SERVED ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('partnership.sectorsSubtitle')}</span>
            </div>
            <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-8">
              {t('partnership.sectorsTitle')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              {t('partnership.sectorsDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {(Array.isArray(t('partnership.sectors', { returnObjects: true })) 
              ? (t('partnership.sectors', { returnObjects: true }) as any[]) 
              : []
            ).map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg p-6 group hover:bg-gradient-to-br hover:from-secondary hover:to-secondary/95 transition-all duration-500 hover:shadow-lg hover:border-secondary"
              >
                <div className="flex items-start gap-3">
                  <div className="text-primary group-hover:text-white transition-colors mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm font-medium group-hover:text-white transition-colors">{sector}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 p-8 bg-white border border-gray-200 rounded-lg"
          >
            <p className="text-gray-700 text-center font-medium">
              {t('partnership.experienceDesc')}
              <Link to="/contact" className="text-primary hover:text-primary/80 font-bold ml-1">{t('partnership.contactConsultation')}</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── APPLICATION FORM CTA — Flat Structural ───────────────────────────── */}      <section className="bg-secondary py-0 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          <div className="p-16 lg:p-24 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 tracking-tighter leading-[1.1]">
              {t('partnership.readyToStart')}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              {t('partnership.readyToStartDesc')}
            </p>
          </div>

          <div className="p-16 lg:p-24 flex items-center justify-start lg:justify-center bg-primary hover:bg-primary-hover transition-colors group cursor-pointer" onClick={() => window.location.href = '/contact'}>
            <div className="flex items-center gap-6">
              <span className="text-3xl md:text-4xl font-heading font-black text-white tracking-tighter uppercase">
                {t('partnership.applyNow')}
              </span>
              <ArrowRight size={40} className="text-white group-hover:translate-x-4 transition-transform duration-300" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
