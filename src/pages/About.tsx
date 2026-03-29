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
    <div className="w-full overflow-x-hidden bg-white mt-[112px]">

      {/* ── HERO BANNER (Official Layout) ────────────────────────────────────── */}
      <section className="relative h-[60vh] md:h-[50vh] w-full overflow-hidden bg-[#002b5b]">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        ></div>

        {/* Diagonal Graphic Overlays */}
        <div 
          className="absolute top-0 right-0 h-[100%] w-[60%] md:w-[40%] bg-[#ff6600] z-10 opacity-90"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 h-[80%] w-[50%] md:w-[30%] bg-[#81d4fa]/30 z-[11] mix-blend-screen"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        ></div>

        {/* Content */}
        <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#ff6600]" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#ff6600]">
                {t('about.whoWeAre')}
              </span>
            </div>
            <h1 className="font-heading font-black text-white leading-tight tracking-tight text-[clamp(2.5rem,5vw,4.5rem)]">
              {t('about.heroTitle')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading font-black text-[#002b5b] text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight mb-8">
                {t('about.title')}
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-12">
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

            {/* Right: Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
               {/* Decorative Orange Block */}
               <div className="absolute -top-6 -right-6 w-3/4 h-3/4 bg-[#eceff1] z-0"></div>
               <img 
                 src="https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Machinery" 
                 className="relative z-10 w-full object-cover shadow-2xl h-[500px]" 
               />
               {/* Bottom Left Overlapping Image */}
               <img 
                 src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="Industrial" 
                 className="absolute -bottom-16 -left-12 z-20 w-3/5 object-cover shadow-xl border-4 border-white h-[300px] hidden md:block bg-white" 
               />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        
        {/* Left diagonal wedge */}
        <div 
          className="absolute top-0 left-0 h-full w-[20%] bg-[#ff6600] z-0 opacity-10"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        ></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#ff6600]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff6600]">{t('about.mission')}</span>
            </div>
            <Target className="text-[#002b5b] mb-8" size={48} strokeWidth={1.5} />
            <p className="text-gray-600 leading-relaxed text-lg">{t('about.missionDesc')}</p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#002b5b] p-12 shadow-xl hover:-translate-y-2 transition-transform"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#ff6600]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff6600]">{t('about.vision')}</span>
            </div>
            <Eye className="text-white mb-8" size={48} strokeWidth={1.5} />
            <p className="text-gray-200 leading-relaxed text-lg">{t('about.visionDesc')}</p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-[#002b5b] text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight mb-4">
              {t('about.values')}
            </h2>
            <div className="h-1 w-24 bg-[#ff6600] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#f8f9fa] p-10 border-l-4 border-[#002b5b] hover:border-[#ff6600] transition-colors duration-300"
              >
                <div className="text-4xl font-heading font-black text-gray-200 mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="font-heading font-bold text-[#002b5b] text-xl tracking-tight mb-4">
                  {v.title}
                </h4>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GULF TRUST SECTION ───────────────────────────────────────────────── */}
      <TrustSection />

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <div className="bg-[#f8f9fa] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <DistributorCTA theme="primary" />
        </div>
      </div>

    </div>
  );
}
