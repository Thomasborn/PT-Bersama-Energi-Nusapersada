import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Clock, Anchor, Fuel, CircleDot, Briefcase, ArrowRight, History } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HERITAGE_MILESTONES = [
  {
    year: '1901',
    title: 'Didirikan',
    description: 'Didirikan di Texas, Amerika Serikat — menjual bahan bakar dalam kontainer. Awal dari perjalanan lebih dari satu abad.',
    icon: <Clock size={22} />,
    accent: 'from-amber-500 to-orange-600',
  },
  {
    year: '1910',
    title: 'Menyelam Lebih Dalam',
    description: 'Gulf meluncurkan pengeboran dalam laut pertama di dunia, menjadi pionir eksplorasi energi global.',
    icon: <Anchor size={22} />,
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    year: '1913',
    title: 'Rambah Bahan Bakar Ritel',
    description: 'Gulf memperkenalkan stasiun pengisian bahan bakar lantatur (drive-through) pertama di dunia.',
    icon: <Fuel size={22} />,
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    year: '1920',
    title: 'Halo Gulf!',
    description: 'Logo diska oranye ikonik Gulf pertama kali muncul — identitas brand yang dikenal di seluruh dunia hingga hari ini.',
    icon: <CircleDot size={22} />,
    accent: 'from-orange-500 to-red-500',
  },
  {
    year: '1926',
    title: 'Ekspansi Bisnis',
    description: 'Gulf mengambil alih konsesi minyak Barco, memperluas kehadirannya ke pasar internasional.',
    icon: <Briefcase size={22} />,
    accent: 'from-violet-500 to-purple-600',
  },
];

export default function GulfHeritage() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative bg-[#000a1a] overflow-hidden py-28 md:py-40">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#003366,transparent)] opacity-40" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 contrast-150 brightness-150 mix-blend-overlay" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-[#ff6600]/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -70, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-8 bg-[#ff6600]" />
            <span className="text-xs font-black tracking-[0.4em] uppercase text-[#ff6600]">
              {t('heritage.subtitle')}
            </span>
            <div className="h-[2px] w-8 bg-[#ff6600]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-black text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-tighter mb-8"
          >
            {t('heritage.title1')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6600] via-orange-400 to-amber-500">{t('heritage.title2')}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
          >
            {t('heritage.desc')}
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-[#ff6600] to-orange-400 shadow-[0_0_15px_rgba(255,102,0,0.5)]" 
            />
          </div>

          <div className="space-y-24 md:space-y-40">
            {HERITAGE_MILESTONES.map((milestone, index) => (
              <div key={milestone.year} className={`relative flex flex-col items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-0`}>
                
                {/* Year Marker */}
                <div className="absolute left-[-2px] md:left-1/2 md:-translate-x-1/2 top-0 z-20">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-14 h-14 rounded-full bg-[#001a3d] border-4 border-[#ff6600] flex items-center justify-center shadow-[0_0_20px_rgba(255,102,0,0.3)] group-hover:scale-110 transition-transform"
                  >
                    <span className="text-[#ff6600] font-black text-xs">{milestone.year}</span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[42%] ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-16 text-left' : 'md:text-left md:pl-16 text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${milestone.accent} opacity-20 mb-6`} />
                    <div className="relative">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className="text-[#ff6600] bg-white/5 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                          {milestone.icon}
                        </div>
                        <h3 className="font-heading font-black text-white text-2xl md:text-3xl tracking-tight">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Year Badge (Desktop Right/Left Spacer) */}
                <div className="hidden md:block w-[42%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6600] to-orange-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <a
              href="https://indonesia.gulfoilltd.com/about-us/gulf-history"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-4 bg-black border border-white/20 px-10 py-5 rounded-lg text-white font-black tracking-widest uppercase text-sm hover:border-[#ff6600] transition-all"
            >
              <History size={20} className="text-[#ff6600]" />
              {t('heritage.viewHistory')}
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          
          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-10 opacity-40">
            <img src="/gulf.png" alt="Gulf Oil" className="h-14 brightness-200" />
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-white font-bold tracking-[0.2em] text-xs uppercase">{t('heritage.established')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

