import { ArrowRight, ChevronRight, ShieldCheck, Globe, Wrench, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BenLogo } from '../components/Logo';
import { useLanguage } from '../context/LanguageContext';
import GulfProductCard from '../components/GulfProductCard';
import { gulfCategories } from '../data/gulfProducts';
import TrustSection from '../components/TrustSection';
import TechnicalValue from '../components/TechnicalValue';
import DistributorCTA from '../components/DistributorCTA';
import GulfHeritage from '../components/GulfHeritage';
import ProudPartnerships from '../components/ProudPartnerships';

// ─── Stats bar data ───────────────────────────────────────────────────────────
const STATS = [
  { value: '15+', label: 'Tahun Beroperasi' },
  { value: '100+', label: 'Varian Produk Gulf' },
  { value: '4', label: 'Kategori Utama' },
  { value: '24/7', label: 'Dukungan Teknis' },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end bg-secondary overflow-hidden">
        {/* Full-bleed background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        >
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        {/* Hairline vertical accent */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 z-10 hidden lg:block" />

        {/* Content area: pushed to bottom third */}
        <div className="relative z-20 w-full pb-0 pt-40">
          {/* Overline */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-16 bg-primary" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
                Distributor Resmi Gulf Oil & Shantui — Indonesia
              </span>
            </motion.div>
          </div>

          {/* Monumental headline */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading font-black text-white leading-[0.9] tracking-tighter text-[clamp(3rem,8vw,7.5rem)] mb-12"
            >
              Solusi Energi<br />
              <span className="text-primary">& Industri</span><br />
              Indonesia.
            </motion.h1>
          </div>

          {/* Bottom strip: description + CTAs */}
          <div className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-gray-300 text-base leading-relaxed col-span-1 lg:col-span-2 max-w-2xl"
              >
                PT. Bersama Energi Nusapersada (BEN) menghadirkan pelumas Gulf Oil dan solusi alat berat Shantui untuk kebutuhan industrial, komersial, dan operasional di seluruh Indonesia.
                <span className="block mt-4 text-xs font-bold tracking-[0.3em] uppercase text-primary/80">
                  towards a cleaner future
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-start lg:justify-end"
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-7 py-4 font-bold tracking-wide transition-colors group"
                >
                  Lihat Produk
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-white/30 hover:border-primary text-white px-7 py-4 font-bold tracking-wide transition-colors hover:text-primary"
                >
                  Hubungi BEN
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-10 px-8 flex flex-col gap-1"
              >
                <span className="font-heading font-black text-5xl tracking-tighter text-secondary leading-none">{s.value}</span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mt-2">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT BEN — Asymmetric Split ─────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left text block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="py-24 pr-0 lg:pr-20 border-b lg:border-b-0 lg:border-r border-gray-100"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('about.subtitle')}</span>
              </div>

              <h2 className="font-heading font-black text-secondary text-[clamp(2.2rem,5vw,4rem)] leading-[1] tracking-tighter mb-10">
                {t('about.title')}
              </h2>

              <p className="text-gray-500 leading-relaxed text-lg mb-6">
                {t('about.desc1')}
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                {t('about.desc2')}
              </p>

              {/* Sector pills */}
              <div className="flex flex-wrap gap-2 mb-12">
                {['Mining', 'Construction', 'Manufacturing', 'Transportation', 'Energy & Power'].map((s) => (
                  <span key={s} className="text-xs font-bold uppercase tracking-widest border border-gray-200 px-4 py-2 text-gray-600 hover:border-primary hover:text-primary transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-secondary font-bold tracking-wide group hover:text-primary transition-colors"
              >
                {t('about.readFullStory')}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right image block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[400px] lg:min-h-0"
            >
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Industrial Operations"
                className="w-full h-full object-cover"
              />
              {/* Float card */}
              <div className="absolute bottom-0 left-0 bg-primary text-white p-8">
                <div className="text-5xl font-heading font-black tracking-tighter leading-none mb-1">15+</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em]">{t('about.yearsExcellence')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PARTNER BRANDS ───────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-10">Merek Andalan Kami</p>
          <div className="flex flex-wrap items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <BenLogo className="h-12 md:h-14" light={false} />
            <img src="/gulf.png" alt="Gulf Oil" className="h-16 md:h-20 object-contain" />
            <img src="/shantui-logo.jpeg" alt="Shantui" className="h-10 md:h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* ── PRODUCTS HUB ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header — left-anchored, not centered */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Pusat Produk Gulf</span>
              </div>
              <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter">
                Solusi Pelumasan<br />Premium
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 border border-secondary text-secondary px-7 py-4 font-bold tracking-wide hover:bg-secondary hover:text-white transition-colors flex-shrink-0 self-start md:self-end group"
            >
              Semua Produk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            {gulfCategories.map((category, index) => (
              <GulfProductCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES — Dark architectural block ────────────────────────────── */}
      <section className="bg-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('home.sectorsSubtitle')}</span>
          </div>
          <h2 className="font-heading font-black text-white text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-16">
            {t('home.sectorsTitle')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {[
              { name: t('home.mining'), img: 'https://protect.cermati.com/wp-content/uploads/2024/01/Shutterstock_2139159003-634x540.jpg' },
              { name: t('home.construction'), img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: t('home.transportation'), img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: t('home.manufacturing'), img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: t('home.agriculture'), img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: t('home.energySector'), img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="relative group overflow-hidden aspect-square md:aspect-[4/3] bg-secondary"
              >
                <img src={industry.img} alt={industry.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-30" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8">
                  <div className="h-px w-8 bg-primary mb-3 group-hover:w-16 transition-all duration-300" />
                  <h4 className="font-heading font-black text-white text-xl md:text-2xl tracking-tight">{industry.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GULF HERITAGE TIMELINE ───────────────────────────────────────────── */}
      <GulfHeritage />

      {/* ── PROUD PARTNERSHIPS ───────────────────────────────────────────────── */}
      <ProudPartnerships />

      {/* ── WHY BEN — Flat monolith cards ────────────────────────────────────── */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('home.strengthsSubtitle')}</span>
          </div>
          <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-16">
            {t('home.strengthsTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200">
            {[
              { icon: <Globe size={28} />, title: t('home.strength1Title'), desc: t('home.strength1Desc') },
              { icon: <ShieldCheck size={28} />, title: t('home.strength2Title'), desc: t('home.strength2Desc') },
              { icon: <Wrench size={28} />, title: t('home.strength3Title'), desc: t('home.strength3Desc') },
              { icon: <MapPin size={28} />, title: t('home.strength4Title'), desc: t('home.strength4Desc') },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white border-r border-gray-200 last:border-r-0 p-10 group hover:bg-secondary transition-colors duration-300"
              >
                <div className="text-primary mb-8 group-hover:text-primary transition-colors">
                  {feature.icon}
                </div>
                <h4 className="font-heading font-bold text-secondary text-xl tracking-tight mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL VALUE ───────────────────────────────────────────────────── */}
      <TechnicalValue />

      {/* ── DISTRIBUTOR CTA ───────────────────────────────────────────────────── */}
      <DistributorCTA />

      {/* ── TRUST SECTION ─────────────────────────────────────────────────────── */}
      <TrustSection />

    </div>
  );
}
