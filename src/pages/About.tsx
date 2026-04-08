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
  ];

  const missionPoints = Array.from({ length: 6 }, (_, i) => 
    t(`about.missionPoint${i + 1}`)
  );

  const businessFields = Array.from({ length: 7 }, (_, i) => 
    t(`about.businessField${i + 1}`)
  );

  const lubricants = Array.from({ length: 10 }, (_, i) => 
    t(`about.lubricant${i + 1}`)
  );

  const equipment = Array.from({ length: 7 }, (_, i) => 
    t(`about.equipment${i + 1}`)
  );

  const advantages = Array.from({ length: 9 }, (_, i) => 
    t(`about.advantage${i + 1}`)
  );

  const customers = Array.from({ length: 10 }, (_, i) => 
    t(`about.customer${i + 1}`)
  );

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col justify-end bg-secondary overflow-hidden">
        {/* Background - Clean Modern Industrial */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://www.shantui-global.com/upload/images/2025/04/17/aa91aa0c49964db986e7ef98b6f9ef83.jpg")' }}
        >
          <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
        </div>

        {/* Content anchored to bottom */}
        <div className="relative z-20 w-full pb-0 pt-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-20 bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">
                {t('about.whoWeAre')}
              </span>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-end gap-8 lg:gap-12">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-heading font-medium text-white leading-[0.9] tracking-tighter text-[clamp(2.5rem,8vw,7rem)] mb-0"
              >
                {t('about.heroSubtitle').split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-primary italic font-serif">{t('about.heroSubtitle').split(' ').slice(-1)}</span>.
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-2 lg:mb-4"
              >
                <BenLogo className="h-32 lg:h-48" light={true} />
              </motion.div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="border-t border-white/5 mt-20 bg-black/10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
              >
                <p className="text-gray-300 text-base leading-relaxed max-w-xl">
                  {t('about.heroDesc')}
                </p>
                <div className="flex items-center gap-6">
                   <div className="h-px w-8 bg-primary/30" />
                   <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-primary/80">
                    {t('about.heroVision')}
                   </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW — Architectural Split ──────────────────────────── */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px w-10 bg-primary/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">{t('about.subtitle')}</span>
              </div>

              <h2 className="font-heading font-medium text-secondary text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] tracking-tighter mb-10">
                {t('about.overviewTitle')}
              </h2>

              <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-16 max-w-2xl">
                <p>{t('about.desc1')}</p>
                <p>{t('about.desc2')}</p>
                <p className="text-secondary/60 italic font-serif">"{t('about.desc3')}"</p>
              </div>

              {/* Partner logos - Minimalist */}
              <div className="flex items-center gap-12 pt-12 border-t border-gray-100">
                <img src="/gulf.png" alt="Gulf Oil" className="h-10 grayscale hover:grayscale-0 transition-all duration-700 object-contain opacity-50 hover:opacity-100" />
                <img src="/shantui-logo.jpeg" alt="Shantui" className="h-6 grayscale hover:grayscale-0 transition-all duration-700 object-contain opacity-50 hover:opacity-100" />
              </div>
            </motion.div>

            {/* Right: Clean Factory Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-gray-100 shadow-2xl">
                <img src="https://www.garudasystrain.co.id/wp-content/uploads/2024/02/1-11.jpg" />
                <div className="absolute inset-0 bg-secondary/5" />
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-48 h-48 border-[12px] border-white shadow-xl overflow-hidden hidden xl:block"
              >
                <img src="https://img.lazcdn.com/g/p/25f44ca57946284eee07605f1ccfcf97.jpg_720x720q80.jpg" alt="Tech Precision" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION — Minimalist Floating Blocks ───────────────────── */}
      <section className="bg-gray-50/50 py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Eye className="text-primary" size={24} strokeWidth={1} />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">{t('about.vision')}</span>
              </div>
              <h3 className="text-3xl font-medium text-secondary tracking-tight">{t('about.visionTitle')}</h3>
              <p className="text-gray-500 leading-relaxed text-lg max-w-md">{t('about.visionDesc')}</p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Target className="text-secondary" size={24} strokeWidth={1} />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary/40">{t('about.mission')}</span>
              </div>
              <h3 className="text-3xl font-medium text-secondary tracking-tight">{t('about.missionTitle')}</h3>
              <ul className="space-y-4">
                {missionPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4 text-gray-500 leading-relaxed"
                  >
                    <span className="text-primary font-bold text-lg mt-1 flex-shrink-0">{i + 1}.</span>
                    <span className="text-lg">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES — Aesthetic Hairline Grid ─────────────────────────────── */}
      <section className="bg-secondary py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-24">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-primary/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">{t('about.principles')}</span>
              </div>
              <h2 className="font-heading font-medium text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tighter">
                {t('about.values')}
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-gray-400 text-sm italic font-serif">"{t('about.coreValuesIntro')}"</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-12 border-t border-white/5 relative group"
              >
                <div className="absolute top-12 left-12 text-[8px] font-black tracking-[0.4em] text-primary/30 group-hover:text-primary transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="pt-8">
                  <h4 className="font-heading font-medium text-white text-xl tracking-tight mb-6">
                    {v.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS FIELDS — Modern List ─────────────────────────────────────── */}
      <section className="bg-white py-32 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
             <div className="lg:col-span-4">
                <div className="sticky top-40">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="h-px w-10 bg-primary/40" />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">{t('about.businessFieldsTitle')}</span>
                  </div>
                  <h2 className="font-heading font-medium text-secondary text-4xl leading-[1.1] tracking-tighter mb-8">
                    {t('about.businessFieldsTitleLarge')}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">{t('about.businessFieldsDesc')}</p>
                </div>
             </div>
             
             <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {businessFields.map((field, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="p-8 border border-gray-50 hover:border-primary/20 hover:bg-primary/[0.02] transition-all flex items-center gap-6 group"
                  >
                    <div className="h-1 w-8 bg-gray-100 group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
                    <span className="text-secondary font-medium tracking-tight text-lg">{field}</span>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS AND SERVICES ─────────────────────────────────────────────– */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 border-b border-gray-100 pb-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-primary/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">{t('about.productsServicesTitle')}</span>
              </div>
              <h2 className="font-heading font-medium text-secondary text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tighter">
                {t('about.unifiedSolutionsTitle')}
              </h2>
            </div>
            <p className="text-gray-400 max-w-xs">{t('about.heavyEquipmentDesc')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Lubricants and Grease */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-heading font-medium text-secondary text-2xl mb-12 flex items-center gap-4">
                 <span className="w-12 h-px bg-primary/30" />
                 {t('about.lubricantsGreaseTitle')}
              </h3>
              <div className="mb-8 aspect-video overflow-hidden rounded-md border border-gray-100 relative group">
                <img src="/gulf_lubricants_aesthetic.png" alt="Gulf Lubricants" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                {lubricants.map((lubricant, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-500 hover:text-secondary group transition-colors">
                    <span className="text-[10px] font-bold text-gray-200 group-hover:text-primary transition-colors font-serif italic">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-medium tracking-tight">{lubricant}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Heavy Equipment */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-heading font-medium text-secondary text-2xl mb-12 flex items-center gap-4">
                 <span className="w-12 h-px bg-secondary/20" />
                 {t('about.heavyEquipmentTitle')}
              </h3>
              <div className="mb-8 aspect-video overflow-hidden rounded-md border border-gray-100 relative group">
                <img src="/shantui_heavy_equipment_aesthetic.png" alt="Shantui Heavy Equipment" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                {equipment.map((equip, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-500 hover:text-secondary group transition-colors">
                    <span className="text-[10px] font-bold text-gray-200 group-hover:text-secondary/40 transition-colors font-serif italic">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-medium tracking-tight">{equip}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPANY ADVANTAGES — Elegant Checkpoints ────────────────────────── */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-10 bg-primary/40" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">{t('about.advantagesTitle')}</span>
              </div>
              <h2 className="font-heading font-medium text-secondary text-4xl tracking-tighter mb-16">
                {t('about.advantagesTitleLarge')}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {advantages.map((advantage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group border-l border-gray-100 pl-8 py-2 hover:border-primary transition-all duration-500"
              >
                <div className="text-[10px] font-bold text-primary/40 group-hover:text-primary transition-colors mb-4 tracking-widest">ADV-0{i + 1}</div>
                <span className="text-secondary font-medium text-lg leading-tight block pr-8">{advantage}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMER SECTORS ──────────────────────────────────────────────────── */}
      <section className="bg-secondary py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-20 border-b border-white/5 pb-10">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary/60">{t('about.customersTitle')}</span>
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-gray-500 text-[10px] tracking-widest">{t('about.customersMarketReach')}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5">
            {customers.map((customer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-secondary p-10 flex flex-col justify-center items-center text-center group hover:bg-primary/5 transition-all"
              >
                <span className="text-gray-400 group-hover:text-white transition-colors tracking-tight font-medium">{customer}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <div className="bg-white py-32 px-6 lg:px-12 border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <DistributorCTA theme="primary" />
        </div>
      </div>

    </div>
  );
}
