import { Target, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { BenLogo } from '../components/Logo';
import TrustSection from '../components/TrustSection';
import DistributorCTA from '../components/DistributorCTA';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { title: t('about.val1Title'), desc: t('about.val1Desc') },
    { title: t('about.val2Title'), desc: t('about.val2Desc') },
    { title: t('about.val3Title'), desc: t('about.val3Desc') },
    { title: t('about.val4Title'), desc: t('about.val4Desc') },
    { title: t('about.val5Title'), desc: t('about.val5Desc') },
    { title: t('about.val6Title'), desc: t('about.val6Desc') },
  ];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex flex-col justify-end bg-secondary overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
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
                {t('about.whoWeAre')}
              </span>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading font-black text-white leading-[0.9] tracking-tighter text-[clamp(3rem,7vw,6.5rem)] mb-0"
            >
              {t('about.heroTitle')}{' '}
              <span className="text-primary">BEN</span>
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
                {t('about.heroDesc')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW — Asymmetric split ─────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
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
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('about.subtitle')}</span>
              </div>

              <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-10">
                {t('about.title')}
              </h2>

              <div className="space-y-5 text-gray-500 leading-relaxed text-lg mb-12">
                <p>{t('about.desc1')}</p>
                <p>{t('about.desc2')}</p>
                <p>{t('about.desc3')}</p>
              </div>

              {/* Partner logos */}
              <div className="pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <BenLogo className="h-12" light={false} />
                <div className="h-10 w-px bg-gray-200 hidden sm:block" />
                <div className="flex items-center gap-8">
                  <img src="/gulf.png" alt="Gulf Oil" className="h-14 object-contain" />
                  <img src="/shantui-logo.jpeg" alt="Shantui" className="h-9 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* Right: Staggered images */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-px bg-gray-100"
            >
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Industrial" className="w-full h-72 object-cover" />
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lubricants" className="w-full h-72 object-cover mt-16" />
              <img src="https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Machinery" className="w-full h-72 object-cover col-span-2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION — Side-by-side flat blocks ─────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="py-16 pr-0 md:pr-16 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('about.mission')}</span>
              </div>
              <Target className="text-primary mb-8" size={40} strokeWidth={1.5} />
              <p className="text-gray-600 leading-relaxed text-lg">{t('about.missionDesc')}</p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="py-16 pl-0 md:pl-16 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-secondary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary/60">{t('about.vision')}</span>
              </div>
              <Eye className="text-secondary mb-8" size={40} strokeWidth={1.5} />
              <p className="text-gray-600 leading-relaxed text-lg">{t('about.visionDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES — Numbered flat list ─────────────────────────────────── */}
      <section className="bg-secondary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('about.principles')}</span>
          </div>
          <h2 className="font-heading font-black text-white text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-16">
            {t('about.values')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="border-b border-r border-white/10 p-10 group hover:bg-primary/10 transition-colors duration-300"
              >
                <div className="text-xs font-black tracking-[0.2em] text-primary/50 mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="font-heading font-bold text-white text-xl tracking-tight mb-4">
                  {v.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GULF TRUST SECTION ───────────────────────────────────────────────── */}
      <TrustSection />

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <div className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <DistributorCTA theme="primary" />
        </div>
      </div>

    </div>
  );
}
