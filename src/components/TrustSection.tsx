import { motion } from 'motion/react';
import { gulfTrustData } from '../data/gulfTrust';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, PhoneCall, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustSection() {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="w-full">

      {/* ── GULF IDENTITY — Dark asymmetric split ────────────────────────────── */}
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="py-24 pr-0 lg:pr-20 border-b lg:border-b-0 lg:border-r border-white/10"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('home.trust.globalSubtitle')}</span>
              </div>
              <h2 className="font-heading font-black text-white text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-10">
                {isEn ? gulfTrustData.about.titleEn : gulfTrustData.about.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light max-w-lg">
                {isEn ? gulfTrustData.about.contentEn : gulfTrustData.about.content}
              </p>

              {/* Gulf logo strip */}
              <div className="mt-12 pt-10 border-t border-white/10 flex items-center gap-6">
                <img src="/gulf.png" alt="Gulf Oil" className="h-14 bg-white rounded-full p-1" />
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-primary mb-1">Official Brand Partner</div>
                  <div className="text-white font-bold text-lg">Gulf Oil International</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Full-bleed image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative min-h-[400px] lg:min-h-0 overflow-hidden"
            >
              <img
                src="https://www.blackxperience.com/assets/content/blackauto/autonews/1a22bc249dbaa7c6ba3976cd2da8b9791a75e996-1169x1654.jpg"
                alt="Gulf Oil Global Heritage"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MOTORSPORT TRUST — Flat image strips ─────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('home.trust.motorsportSubtitle')}</span>
          </div>
          <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-16">
            {isEn ? gulfTrustData.motorsportSectionTitleEn : gulfTrustData.motorsportSectionTitle}
          </h2>

          {/* Motorsport items: full-width rows, not cards */}
          <div className="divide-y divide-gray-100 mb-20">
            {gulfTrustData.motorsport.map((item: any, index: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 group"
              >
                {/* Image — full height */}
                <div className={`relative h-72 lg:h-80 overflow-hidden bg-secondary ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.imageUrl}
                    alt={isEn ? item.titleEn : item.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-10">
                    <div className="h-px w-8 bg-primary mb-3 group-hover:w-16 transition-all duration-300" />
                    <div className="text-xs font-bold tracking-widest uppercase text-primary mb-2">{isEn ? item.subtitleEn : item.subtitle}</div>
                    <h3 className="font-heading font-black text-white text-3xl tracking-tight leading-none">{isEn ? item.titleEn : item.title}</h3>
                  </div>
                </div>

                {/* Text */}
                <div className={`py-12 lg:py-0 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1 lg:pr-16 lg:pl-0' : 'lg:pl-16'}`}>
                  <div className="space-y-4">
                    {(isEn ? item.contentEn : item.content).map((p: string, i: number) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-lg">{p}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Bottom CTA — horizontal split action bar ──────────────────────── */}
          <div className="border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
              {/* Headline */}
              <div className="p-10 col-span-1 flex flex-col justify-center">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">{t('home.trust.distributorBadge')}</div>
                <h4 className="font-heading font-black text-secondary text-2xl tracking-tight leading-[1.1]">
                  {t('home.trust.ctaTitle')}
                </h4>
              </div>

              {/* Description */}
              <div className="p-10 flex items-center col-span-1">
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t('home.trust.ctaDesc')}
                </p>
              </div>

              {/* Action buttons */}
              <div className="p-10 flex flex-col gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3.5 font-bold tracking-wide hover:bg-primary-hover transition-colors group"
                >
                  <MessageSquare size={16} /> {t('home.trust.ctaConsult')}
                  <ArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-gray-300 text-secondary px-6 py-3.5 font-bold tracking-wide hover:border-secondary transition-colors group"
                >
                  <PhoneCall size={16} /> {t('home.trust.ctaContact')}
                  <ArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-gray-300 text-secondary px-6 py-3.5 font-bold tracking-wide hover:border-secondary transition-colors group"
                >
                  <FileText size={16} /> {t('home.trust.ctaQuote')}
                  <ArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
