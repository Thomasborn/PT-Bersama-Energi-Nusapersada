import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight, Trophy } from 'lucide-react';
import { useState } from 'react';

const PARTNERSHIPS = [
  {
    id: 'williams',
    name: 'Williams Racing',
    subtitle: 'Atlassian Williams F1 Team',
    description:
      'Gulf dengan bangga melanjutkan kemitraannya dengan Atlassian Williams F1 Team untuk tahun 2026. Sejak awal kemitraan ini pada tahun 2023, kami berbagi visi bersama untuk mendekatkan para penggemar dengan olahraga yang mereka cintai.',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2026-03/desktop-banner-2500x685.webp?VersionId=fYo.iwNkZP_5KziExFik1zTH_8CC4JhK',
    logo: '/gulf.png',
    url: 'https://indonesia.gulfoilltd.com/partnerships/williams',
    category: 'Formula 1',
    color: '#005AFF',
  },
  {
    id: 'trackhouse',
    name: 'Trackhouse Racing',
    subtitle: 'MotoGP Partnership',
    description:
      'Gulf dengan bangga bermitra dengan Trackhouse Racing dalam perjalanan mereka ke dunia MotoGP. Berlandaskan ambisi dan inovasi, Trackhouse sedang mendefinisikan ulang dunia balap modern dengan pendekatan yang berani dan kreatif.',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2025-03/trackhouse_homepage_-_834x880.jpg?VersionId=YADtGuXs7NyFWPaQRJv5ROcnwK7aCJQU',
    logo: '/gulf.png',
    url: 'https://indonesia.gulfoilltd.com/partnerships/motogp',
    category: 'MotoGP',
    color: '#E10600',
  },
  {
    id: 'mclaren',
    name: 'McLaren Automotive',
    subtitle: 'Supercar Excellence',
    description:
      'Gulf dan McLaren sama-sama berambisi selalu memberikan yang terbaik. Pada Januari 2021, kami memasuki babak baru berkolaborasi dengan McLaren Automotive — pabrikan mobil super dari Inggris.',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    logo: '/gulf.png',
    url: 'https://indonesia.gulfoilltd.com/partnerships/mclaren-automotive',
    category: 'Automotive',
    color: '#FF8000',
  },
  {
    id: 'rofgo',
    name: 'ROFGO Collection',
    subtitle: 'Heritage Racing',
    description:
      'Koleksi ROFGO yang dikurasi oleh Roald Goethe, dengan sederet mobil balap bersejarah termasuk koleksi bertema Gulf, menjadi favorit para penggila olahraga motorsport di seluruh dunia.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    logo: '/gulf.png',
    url: 'https://indonesia.gulfoilltd.com/partnerships/gulf-rofgo',
    category: 'Motorsport Heritage',
    color: '#2D7D9A',
  },
  {
    id: 'tagheuer',
    name: 'TAG Heuer',
    subtitle: 'Precision & Legacy',
    description:
      'Tak lekang waktu, presisi, dan terbaik. Kerja sama ini menyatukan Gulf dan TAG Heuer — dua brand legendaris yang produknya selalu dibanggakan oleh konsumen.',
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    logo: '/gulf.png',
    url: 'https://indonesia.gulfoilltd.com/partnerships/gulf-tag-heuer',
    category: 'Lifestyle & Luxury',
    color: '#1A1A1A',
  },
];

export default function ProudPartnerships() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = PARTNERSHIPS[activeIdx];

  return (
    <section className="bg-white py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-[#ff6600]" />
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#ff6600]">
              Exclusive Alliance
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="font-heading font-black text-[#002b5b] text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-tighter mb-6">
                Bangga<br />
                <span className="text-[#ff6600]">Kemitraan Kami</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                Melampaui batas performa bersama partner legendaris dunia. Kami menghadirkan standar global ke setiap tetes pelumas BEN.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-full border border-gray-100 shadow-sm">
              <Trophy size={20} className="text-[#ff6600]" />
              <span className="text-[11px] font-black text-[#002b5b] uppercase tracking-[0.2em]">World-Class Excellence</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Featured Detail (Framer Motion Staggered) */}
          <div className="lg:col-span-12 xl:col-span-8">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,43,91,0.2)] aspect-[16/11] group bg-secondary">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                  />
                  {/* Improved Overlay: Softer to show more of the larger image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002b5b] via-[#002b5b]/40 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#002b5b]/40 via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>

              {/* Float Overlay Info - More compact and cleaner */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:max-w-xl overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id + '-content'}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-7 px-3 bg-[#ff6600] rounded-sm flex items-center shadow-lg">
                         <span className="text-white text-[9px] font-black uppercase tracking-widest">{active.category}</span>
                      </div>
                      <img src={active.logo} alt="Gulf" className="h-5 brightness-0 invert opacity-90" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-white tracking-tight mb-3">
                      {active.name}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm max-w-lg mb-6 leading-relaxed font-medium">
                      {active.description}
                    </p>
                    <a
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-[#002b5b] px-5 py-2.5 rounded-sm font-black text-[9px] uppercase tracking-[0.2em] hover:bg-[#ff6600] hover:text-white transition-all shadow-xl active:scale-95 group"
                    >
                      Pelajari Kolaborasi Ini 
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side: Tab Selection (Liquid Sidebar) */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-3">
            {PARTNERSHIPS.map((partner, idx) => (
              <button
                key={partner.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-500 overflow-hidden group ${
                  activeIdx === idx 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-[#002b5b] hover:bg-gray-50'
                }`}
              >
                {/* Background Active Indicator */}
                {activeIdx === idx && (
                  <motion.div
                    layoutId="partnership-pill"
                    className="absolute inset-0 bg-[#002b5b] shadow-xl shadow-[#002b5b]/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className={`text-4xl font-heading font-black tracking-tighter transition-all duration-500 ${
                      activeIdx === idx ? 'scale-110 opacity-20' : 'opacity-10 group-hover:opacity-20'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className={`font-heading font-black text-xl md:text-2xl tracking-tight transition-colors duration-500 ${
                        activeIdx === idx ? 'text-white' : 'text-[#002b5b]'
                      }`}>
                        {partner.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                         <div className={`w-3 h-[2px] transition-all duration-500 ${activeIdx === idx ? 'bg-[#ff6600] w-6' : 'bg-gray-200 group-hover:bg-[#ff6600]'}`} />
                         <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{partner.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`transition-all duration-500 ${activeIdx === idx ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0 group-hover:opacity-40 group-hover:rotate-0 translate-x-4 group-hover:translate-x-0'}`}>
                    <ArrowRight size={20} className={activeIdx === idx ? 'text-[#ff6600]' : 'text-gray-400'} />
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
