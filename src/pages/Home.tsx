import { ArrowRight, ChevronRight, ChevronDown, MapPin, ArrowDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { BenLogo } from '../components/Logo';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full overflow-x-hidden bg-white">

      {/* ── HERO SLIDER (Official Layout) ────────────────────────────────────── */}
      <section className="relative h-[90vh] md:h-[80vh] w-full overflow-hidden bg-gray-900 mt-[112px]">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        ></motion.div>

        {/* Diagonal Graphic Overlays (Official Gulf Motifs) */}
        {/* Orange Wedge */}
        <div 
          className="absolute top-0 left-0 h-[60%] w-[80%] md:w-[45%] bg-[#ff6600] z-10 opacity-90"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        ></div>
        {/* Light Blue Wedge */}
        <div 
          className="absolute top-0 left-0 h-[100%] w-[90%] md:w-[60%] bg-[#81d4fa]/80 z-[11] mix-blend-multiply"
          style={{ clipPath: 'polygon(0 0, 100% 0, 20% 100%, 0 100%)' }}
        ></div>
        {/* Dark Blue Wedge */}
        <div 
          className="absolute bottom-0 left-0 h-[80%] w-[50%] md:w-[35%] bg-[#002b5b] z-20"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-30 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl md:max-w-2xl mt-10 md:mt-0"
          >
            <h1 className="font-heading font-black leading-[1.05] tracking-tight text-[clamp(2.5rem,5vw,4.5rem)] mb-6 drop-shadow-lg">
              <span className="text-[#ff6600] block mb-2">Performa Tanpa Kompromi, Teruji Waktu.</span>
              <span className="text-white block">Solusi Pelumas Industri & Otomotif Global.</span>
            </h1>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-6 lg:left-12 z-30 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#ff6600] cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-white cursor-pointer hover:bg-gray-200 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-white cursor-pointer hover:bg-gray-200 transition-colors"></div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:flex"
        >
          <div className="w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 cursor-pointer hover:bg-black/60 transition-colors">
            <ArrowDown size={24} className="text-white" />
          </div>
        </motion.div>
      </section>

      {/* ── PRINCIPAL PARTNERS (BEN / GULF / SHANTUI) ──────────────────────── */}
      <section className="bg-white py-16 border-b border-gray-100 relative z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">{t('home.strategicAlliance')}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* 1. BEN */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center px-6"
            >
              <div className="h-24 flex items-center justify-center mb-4">
                <BenLogo className="h-10 md:h-12 w-auto object-contain" />
              </div>
              <h4 className="font-heading font-black text-[#002b5b] text-xl mb-2">PT. BEN</h4>
              <p className="text-xs font-bold tracking-widest uppercase text-[#ff6600]">{t('home.distributor')}</p>
            </motion.div>

            {/* 2. Gulf Oil */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center px-6 pt-12 md:pt-0"
            >
              <div className="h-24 flex items-center justify-center mb-4">
                <img src="/gulf.png" alt="Gulf Oil" className="h-[70px] md:h-[85px] w-auto object-contain" />
              </div>
              <h4 className="font-heading font-black text-[#002b5b] text-xl mb-2">Gulf Oil</h4>
              <p className="text-xs font-bold tracking-widest uppercase text-[#ff6600] mb-4">{t('home.lubricantsPartner')}</p>
              
              <a 
                href="https://indonesia.gulfoilltd.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#002b5b] border border-[#002b5b]/20 px-4 py-2 hover:bg-[#ff6600] hover:border-transparent hover:text-white transition-all duration-300 group rounded-sm"
              >
                <span>{t('home.visitOfficialSite')}</span>
                <ExternalLink size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* 3. Shantui */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center px-6 pt-12 md:pt-0"
            >
              <div className="h-24 flex items-center justify-center mb-4">
                <img src="/shantui-logo.jpeg" alt="Shantui" className="h-6 md:h-[28px] w-auto opacity-90 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
              <h4 className="font-heading font-black text-[#002b5b] text-xl mb-2">Shantui</h4>
              <p className="text-xs font-bold tracking-widest uppercase text-[#ff6600]">{t('home.heavyEquipPartner')}</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES (Grey block width diagonal) ─────────────────── */}
      <section className="relative py-24 bg-[#f8f9fa] overflow-hidden">
        
        {/* Abstract Background Elements */}
        {/* Massive Orange/Blue Right Side Graphic */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 left-0 h-[120%] w-[40%] bg-[#ff6600] z-0 opacity-10 blur-xl"
        ></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-heading font-black text-[#002b5b] text-4xl md:text-5xl tracking-tight">
              Eksplorasi Produk
            </h2>
            <div className="hidden md:flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 cursor-not-allowed">
                <ChevronRight size={24} className="rotate-180" />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#ff6600] flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-[#e65a00] transition-colors">
                <ChevronRight size={24} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Consumer Category */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/products" className="group block bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Gulf Motor" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-black text-[2rem] text-[#002b5b] group-hover:text-[#ff6600] transition-colors mb-2">Motor</h3>
                  <p className="text-gray-500 font-medium">Performa maksimal untuk roda dua Anda.</p>
                </div>
              </Link>
            </motion.div>

            {/* Automobile Category */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/products" className="group block bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Gulf Mobil" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-black text-[2rem] text-[#002b5b] group-hover:text-[#ff6600] transition-colors mb-2">Mobil</h3>
                  <p className="text-gray-500 font-medium">Perlindungan mesin kendaraan penumpang.</p>
                </div>
              </Link>
            </motion.div>

            {/* Industrial Category */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Link to="/products" className="group block bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Gulf Industrial" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-black text-[2rem] text-[#002b5b] group-hover:text-[#ff6600] transition-colors mb-2">Industrial</h3>
                  <p className="text-gray-500 font-medium">Solusi pelumasan manufaktur & armada berat.</p>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── UNSTOPPABLE TEAM (Deep Blue Impact Section) ────────────────────── */}
      <section className="relative pt-24 pb-0 bg-[#002b5b] overflow-hidden">
        
        {/* Right side diagonal graphics */}
        <div 
          className="absolute bottom-0 right-0 h-[70%] w-[30%] bg-[#ff6600] z-10"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        ></div>
        <div 
          className="absolute bottom-0 right-[10%] h-[50%] w-[30%] bg-[#81d4fa]/30 z-[11] mix-blend-screen"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        ></div>

        <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
          
          {/* Centered Massive Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center w-full mb-16"
          >
            <h2 className="font-heading font-black tracking-tighter text-[clamp(3.5rem,8vw,8rem)] leading-[0.9]">
              <span className="text-white block md:inline">An </span>
              <span className="text-[#ff6600] block md:inline">unstoppable team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full mb-20 lg:mb-0 pb-16">
            <div className="hidden lg:block"></div>
            <div className="text-white space-y-6 max-w-xl">
              <p className="text-lg leading-relaxed text-gray-200">
                Tumbuh lebih dari 100 tahun memberikan kami kesempatan untuk melayani lebih dari ratusan negara di seluruh dunia. Di Gulf, kami menghadirkan dukungan dan solusi terbaik untuk membantu Anda memenuhi kebutuhan akan efisiensi yang optimal. 
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                Semua yang kami lakukan, mulai dari pelumas hingga stasiun pengisian bahan bakar, dilatarbelakangi dengan satu tujuan, yakni: meningkatkan performa setiap saat. Kami akan selalu hadir di sisi Anda untuk senantiasa mendukung dan menemani Anda menuju kesuksesan. Tanpa batas, bersama kita tak terhentikan.
              </p>
            </div>
          </div>

          {/* Bottom Bleed Image */}
          <div className="relative w-full h-[400px] md:h-[600px] -mt-10 lg:-mt-40 z-20">
            <div 
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548658169-34dc3d3b7625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', clipPath: 'polygon(10% 20%, 90% 0, 100% 100%, 0 100%)' }}
            >
              {/* Overlay blue wash */}
              <div className="absolute inset-0 bg-[#002b5b]/40 mix-blend-multiply"></div>
            </div>
          </div>

        </div>
      </section>

      {/* ── B2B CTA FOOTER BLOCK ───────────────────────────────────────────── */}
      <section className="bg-white py-24 border-t border-gray-100 relative overflow-hidden">
        {/* Subtle orange line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#ff6600]"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-[#002b5b] mb-6 tracking-tight">Kemitraan PT. BEN</h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Jadilah bagian dari jaringan distribusi global. Tingkatkan efisiensi armada dan pabrik Anda dengan dukungan teknis eksklusif dari tenaga ahli kami.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ff6600] hover:bg-[#e65a00] text-white px-8 py-4 font-bold tracking-wide uppercase transition-colors">
              Hubungi Kami <ArrowRight size={18} />
            </Link>
            <Link to="/products" className="inline-flex items-center justify-center gap-3 bg-white border-2 border-[#002b5b] text-[#002b5b] hover:bg-[#002b5b] hover:text-white px-8 py-4 font-bold tracking-wide uppercase transition-colors">
              Katalog Perusahaan
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
