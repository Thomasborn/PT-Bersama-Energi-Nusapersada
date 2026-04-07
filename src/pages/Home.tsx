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
      <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden border-b border-gray-50">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.05]"
          style={{ backgroundImage: 'url("https://euassets.gulfoilltd.com/gulfoilltd.com/files/Products%20cutout_0.webp?VersionId=gaKgIiklQIA_P0FUhT0dlQ4u0ZsFtDb_")' }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Architectural Vertical Line */}
            <div className="hidden md:block col-span-1 h-32 w-px bg-gray-100 self-center" />

            <div className="md:col-start-2 md:col-span-11 lg:col-start-3 lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Minimalist Overline */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Authorized Distributor</span>
                  <div className="h-px w-10 bg-gray-100" />
                </div>

                <h1 className="font-heading font-medium text-secondary text-2xl lg:text-[2.1rem] leading-[1.65] max-w-4xl mb-14 tracking-tight">
                  PT. Bersama Energi Nusapersada (BEN) menghadirkan pelumas premium dan solusi alat berat dengan standar global untuk menunjang operasional bisnis Anda di seluruh Indonesia.
                </h1>

                <div className="flex flex-col sm:flex-row items-center gap-10">
                  <Link
                    to="/products"
                    className="group relative inline-flex items-center justify-center bg-secondary text-white px-12 py-4 font-bold tracking-widest text-xs uppercase transition-all hover:bg-black overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Lihat Produk
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-secondary transition-colors underline underline-offset-8 decoration-gray-200 hover:decoration-secondary"
                  >
                    Hubungi BEN
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT BEN — Aesthetic Precision Narrative ───────────────────────── */}
      <section className="bg-white py-32 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            {/* Narrative Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">{t('about.subtitle')}</span>
                <div className="h-px w-12 bg-gray-100" />
              </div>

              <h2 className="font-heading font-medium text-secondary text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.2] tracking-tighter mb-12">
                {t('about.title')}
              </h2>

              <div className="max-w-2xl">
                <p className="text-gray-500 leading-relaxed text-xl mb-10 font-medium border-l-2 border-primary/20 pl-8">
                  {t('about.desc1')}
                </p>
                <p className="text-gray-400 leading-relaxed mb-16 pl-8">
                  {t('about.desc2')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 mb-16 pl-8">
                {STATS.slice(1, 3).map((s, i) => (
                  <div key={i} className="group">
                    <div className="text-5xl font-heading font-light text-secondary tracking-tighter mb-2 group-hover:text-primary transition-colors duration-500">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-300">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] text-secondary group hover:text-primary transition-all ml-8"
              >
                {t('about.readFullStory')}
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Visual Anchor Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img src="https://image.made-in-china.com/202f0j00WgPbDfLRIUzN/Ultra-Cheap-37-Tons-Shantui-Heavy-Crawler-Excavator-for-Sale.webp" className="w-full h-full object-cover" />
              </div>
              {/* Architectural Frame Offset */}
              <div className="absolute -top-12 -right-12 w-full h-full border border-gray-100 -z-10" />
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

      {/* ── TWO MAIN PILLARS — Architectural Showcase ──────────────────────── */}
      <section className="bg-white py-32 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-24">
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Solusi Utama BEN</span>
              <div className="h-px w-12 bg-gray-100" />
            </div>
            <h2 className="font-heading font-medium text-secondary text-[clamp(2.5rem,4.5vw,4.2rem)] leading-[1.2] tracking-tighter">
              Dua Pilar Energi <br />& Infrastruktur.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Pillar 1: Gulf Oil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/products" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden mb-12 grayscale hover:grayscale-0 transition-all duration-1000 bg-gray-50 border border-gray-100">
                  <img
                    src="https://euassets.gulfoilltd.com/gulfoilltd.com/files/Products%20cutout_0.webp?VersionId=gaKgIiklQIA_P0FUhT0dlQ4u0ZsFtDb_"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Pelumas Premium</span>
                  <div className="h-px w-10 bg-gray-100" />
                </div>
                <h3 className="font-heading font-medium text-secondary text-3xl lg:text-4xl mb-8 flex items-center justify-between">
                  Gulf Oil
                  <ArrowRight size={24} className="group-hover:translate-x-4 transition-transform text-gray-200" />
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md text-base">
                  Authorized Distributor pelumas Gulf kelas dunia. Menghadirkan efisiensi dan perlindungan mesin jangka panjang sejak 1901.
                </p>
              </Link>
            </motion.div>

            {/* Pillar 2: Shantui Heavy Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link to="/products" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden mb-12 grayscale hover:grayscale-0 transition-all duration-1000 bg-gray-50 border border-gray-100">
                  <img
                    src="https://www.shantui-global.com/upload/images/2024/07/05/9733632409d940508dbe56ba4dabfd21.jpg"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Alat Berat</span>
                  <div className="h-px w-10 bg-gray-100" />
                </div>
                <h3 className="font-heading font-medium text-secondary text-3xl lg:text-4xl mb-8 flex items-center justify-between">
                  Shantui Machinery
                  <ArrowRight size={24} className="group-hover:translate-x-4 transition-transform text-gray-200" />
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md text-base">
                  Unit alat berat berkualitas global untuk pertambangan dan konstruksi. Tangguh, efisien, dan didesain untuk medan operasional ekstrem.
                </p>
              </Link>
            </motion.div>
          </div>

          <div className="mt-32 pt-24 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300">Jelajahi Katalog Lengkap</p>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-14">
              {['Passenger Car', 'Motorcycle', 'Commercial', 'Industrial', 'Marine'].map((cat, i) => (
                <Link
                  key={i}
                  to="/products"
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-secondary transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES — Aesthetic Grid Layout ─────────────────────────────── */}
      <section className="bg-white py-32 lg:py-48 overflow-hidden border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">{t('home.sectorsSubtitle')}</span>
                <div className="h-px w-12 bg-gray-100" />
              </div>
              <h2 className="font-heading font-medium text-secondary text-[clamp(2.5rem,5vw,4rem)] leading-[1.2] tracking-tighter mb-12">
                Melayani Berbagai <br />Sektor Industri.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-16">
                Kami menyediakan solusi pelumasan dan alat berat terintegrasi untuk mendukung pertumbuhan sektor-sektor vital di Indonesia.
              </p>
              <Link to="/contact" className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary flex items-center gap-4 group">
                Konsultasi Sektor <div className="w-12 h-px bg-gray-200 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-50 border border-gray-50">
                {[
                  { name: t('home.mining'), desc: 'Optimasi performa alat berat di medan ekstrim.' },
                  { name: t('home.construction'), desc: 'Dukungan penuh untuk infrastruktur berkelanjutan.' },
                  { name: t('home.transportation'), desc: 'Efisiensi armada dan logistik terdepan.' },
                  { name: t('home.manufacturing'), desc: 'Presisi pelumasan untuk mesin industrial.' },
                ].map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-14 group hover:bg-secondary transition-all duration-700"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-10 group-hover:text-white transition-colors">0{index + 1}</div>
                    <h4 className="font-heading font-medium text-secondary text-2xl tracking-tight mb-6 group-hover:text-white transition-colors">{industry.name}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{industry.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GULF HERITAGE TIMELINE ───────────────────────────────────────────── */}
      <GulfHeritage />

      {/* ── PROUD PARTNERSHIPS ───────────────────────────────────────────────── */}
      <ProudPartnerships />

      {/* ── WHY BEN — Aesthetic Strengths ───────────────────────────────────── */}
      <section className="bg-white py-32 lg:py-48 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-24">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">{t('home.strengthsSubtitle')}</span>
                <div className="h-px w-12 bg-gray-100" />
              </div>
              <h2 className="font-heading font-medium text-secondary text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.2] tracking-tighter">
                {t('home.strengthsTitle')}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-50 border border-gray-50">
            {[
              { icon: <Globe size={24} />, title: t('home.strength1Title'), desc: t('home.strength1Desc') },
              { icon: <ShieldCheck size={24} />, title: t('home.strength2Title'), desc: t('home.strength2Desc') },
              { icon: <Wrench size={24} />, title: t('home.strength3Title'), desc: t('home.strength3Desc') },
              { icon: <MapPin size={24} />, title: t('home.strength4Title'), desc: t('home.strength4Desc') },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-14 group hover:bg-secondary transition-all duration-700"
              >
                <div className="text-primary mb-12 group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
                <h4 className="font-heading font-medium text-secondary text-xl tracking-tight mb-6 group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">{feature.desc}</p>
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
