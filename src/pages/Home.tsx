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
      <section className="relative min-h-[95vh] flex flex-col justify-center bg-white overflow-hidden pb-20 pt-24 lg:pt-32">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[50%] h-[60%] rounded-full mix-blend-multiply filter blur-[120px] bg-primary/10 opacity-70"
          />
          <motion.div 
            animate={{ 
              x: [0, -40, 0], 
              y: [0, -50, 0],
              scale: [1, 1.2, 1] 
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[0%] -left-[10%] w-[40%] h-[50%] rounded-full mix-blend-multiply filter blur-[100px] bg-secondary/5 opacity-50"
          />
        </div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-12 xl:col-span-7 relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                {/* Premium Overline with staggered glow */}
                <div className="flex items-center gap-4 mb-10 overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: 48 }}
                     transition={{ duration: 1, delay: 0.5, ease: 'circOut' }}
                     className="h-px bg-primary" 
                   />
                   <motion.span 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.8, duration: 0.6 }}
                     className="text-[11px] font-bold uppercase tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                   >
                     Distributor Resmi
                   </motion.span>
                </div>

                <h1 className="font-heading font-medium text-secondary text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] mb-8 tracking-tighter">
                  <motion.span 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    Solusi Pelumas &
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="block mt-2"
                  >
                    Alat Berat <span className="font-serif italic text-primary pr-2">Premium</span>
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="block mt-2 text-gray-800"
                  >
                    untuk Indonesia.
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-lg text-gray-500 leading-relaxed max-w-xl mb-12 font-medium"
                >
                  PT BEN menghadirkan teknologi pelumasan <strong className="font-bold text-gray-800">Gulf Oil</strong> dan ekosistem alat berat <strong className="font-bold text-gray-800">Shantui</strong>. Dedikasi tanpa henti untuk menunjang performa industri Anda di seluruh negeri.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
                >
                  <Link
                    to="/products"
                    className="group relative inline-flex items-center justify-center bg-secondary text-white px-10 py-5 font-bold tracking-widest text-[10px] uppercase transition-all hover:bg-black overflow-hidden shadow-2xl shadow-secondary/20"
                  >
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                    <span className="relative z-10 flex items-center gap-4">
                      Eksplorasi Katalog
                      <div className="w-6 h-px bg-white/50 group-hover:bg-white group-hover:w-10 transition-all duration-300" />
                    </span>
                  </Link>

                  <Link
                    to="/about"
                    className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary/30 transition-colors bg-white shadow-sm">
                      <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    Tentang BEN
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Visual Presentation */}
            <div className="lg:col-span-12 xl:col-span-5 relative mt-16 xl:mt-0 xl:min-h-[600px] flex items-center justify-center">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                 className="relative z-10 aspect-[4/5] w-full max-w-[450px] bg-gray-100 rounded-sm overflow-hidden shadow-2xl shadow-secondary/10 group cursor-pointer"
               >
                 <img 
                   src="https://kobexindo.com/wp-content/uploads/se75-shantui.jpg" 
                   alt="Industrial Precision" 
                   className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                 
                 {/* Floating badge */}
                 {/* <motion.div 
                   animate={{ y: [-5, 5, -5] }}
                   transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                   className="absolute top-8 -left-8 bg-white p-5 shadow-xl items-center gap-4 hidden sm:flex border border-gray-50 z-30"
                 >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Jaminan</p>
                      <p className="text-secondary font-medium text-sm">100% Produk Asli</p>
                    </div>
                 </motion.div> */}
               </motion.div>

               {/* Modern Logo Showcase on the side */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute right-0 bottom-10 lg:bottom-20 bg-white/80 backdrop-blur-md p-6 lg:p-8 shadow-2xl border border-white/50 flex flex-col gap-8 z-20 translate-x-4 lg:translate-x-12 cursor-pointer hover:bg-white transition-colors duration-500"
               >
                 <img src="/gulf.png" alt="Gulf Oil" className="w-16 lg:w-20 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                 <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                 <img src="/shantui-logo.jpeg" alt="Shantui" className="w-20 lg:w-24 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT BEN — Aesthetic Precision Narrative ───────────────────────── */}
      <section className="bg-gradient-to-b from-white to-gray-50/50 py-32 lg:py-48 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-28 items-center">
            {/* Narrative Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <motion.div className="flex items-center gap-6 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{t('about.subtitle')}</span>
                <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-heading font-bold text-secondary text-[clamp(2.2rem,5vw,4rem)] leading-[1.15] tracking-tight mb-10"
              >
                Kualitas & <span className="text-primary">Kepercayaan</span> Sejak Awal
              </motion.h2>

              <div className="max-w-2xl space-y-8">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-700 leading-relaxed text-lg font-medium border-l-4 border-primary/40 pl-6 hover:border-primary/80 transition-colors duration-300"
                >
                  {t('about.desc1')}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 leading-relaxed text-base pl-6"
                >
                  {t('about.desc2')}
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-10 mt-14 pt-8 border-t border-gray-200"
              >
                {STATS.slice(1, 3).map((s, i) => (
                  <div key={i} className="group">
                    <div className="text-4xl md:text-5xl font-heading font-black text-primary tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-primary transition-colors">{s.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary hover:text-primary group transition-all duration-300 border-b-2 border-primary/20 hover:border-primary pb-2"
                >
                  {t('about.readFullStory')}
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Visual Anchor Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                <img src="https://image.made-in-china.com/202f0j00WgPbDfLRIUzN/Ultra-Cheap-37-Tons-Shantui-Heavy-Crawler-Excavator-for-Sale.webp" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Architectural Frame Offset with gradient */}
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full -z-10" />
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
              <h2 className="font-heading font-bold text-secondary text-[clamp(2.2rem,5vw,4rem)] leading-[1.15] tracking-tight mb-10">
                Layanan Untuk <span className="text-primary">Berbagai Industri</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-14 font-medium">
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
