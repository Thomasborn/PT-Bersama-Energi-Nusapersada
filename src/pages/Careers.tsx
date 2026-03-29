import { motion } from 'motion/react';
import { Briefcase, Users, Zap, Award, ArrowRight, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Careers() {
  const { t } = useLanguage();

  const jobs = [
    {
      id: 1,
      title: t('careers.jobs.job1Title'),
      department: t('careers.jobs.job1Dept'),
      location: t('careers.jobs.job1Loc'),
      type: t('careers.jobs.job1Type'),
      desc: t('careers.jobs.job1Desc')
    },
    {
      id: 2,
      title: t('careers.jobs.job2Title'),
      department: t('careers.jobs.job2Dept'),
      location: t('careers.jobs.job2Loc'),
      type: t('careers.jobs.job2Type'),
      desc: t('careers.jobs.job2Desc')
    },
    {
      id: 3,
      title: t('careers.jobs.job3Title'),
      department: t('careers.jobs.job3Dept'),
      location: t('careers.jobs.job3Loc'),
      type: t('careers.jobs.job3Type'),
      desc: t('careers.jobs.job3Desc')
    },
    {
      id: 4,
      title: t('careers.jobs.job4Title'),
      department: t('careers.jobs.job4Dept'),
      location: t('careers.jobs.job4Loc'),
      type: t('careers.jobs.job4Type'),
      desc: t('careers.jobs.job4Desc')
    }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white mt-[112px]">

      {/* ── HERO BANNER (Official Layout) ────────────────────────────────────── */}
      <section className="relative h-[60vh] md:h-[50vh] w-full overflow-hidden bg-[#002b5b] flex items-center">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
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

        <div className="relative z-20 w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#ff6600]" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#ff6600]">
                  Karir Bersama PT. BEN
                </span>
              </div>
              <h1 className="font-heading font-black text-white leading-tight tracking-tight text-[clamp(2.5rem,5.5vw,5rem)] mb-6">
                {t('careers.heroTitle')}{' '}
                <span className="text-[#ff6600] block">{t('careers.heroTitleHighlight')}</span> 
                {t('careers.heroTitleEnd')}
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed hidden md:block">
                {t('careers.heroDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY JOIN US — Flat Corporate Grid ─────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#ff6600]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff6600]">
                  {t('careers.lifeAtBen')}
                </span>
              </div>
              <h2 className="font-heading font-black text-[#002b5b] text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter">
                {t('careers.whyJoin')}
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md lg:text-right border-l-4 border-[#ff6600] pl-6 lg:border-l-0 lg:pl-0 lg:border-r-4 lg:pr-6">
              {t('careers.whyJoinDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Briefcase size={32} strokeWidth={1.5} />, title: t('careers.benefit1Title'), desc: t('careers.benefit1Desc') },
              { icon: <Users size={32} strokeWidth={1.5} />, title: t('careers.benefit2Title'), desc: t('careers.benefit2Desc') },
              { icon: <Zap size={32} strokeWidth={1.5} />, title: t('careers.benefit3Title'), desc: t('careers.benefit3Desc') },
              { icon: <Award size={32} strokeWidth={1.5} />, title: t('careers.benefit4Title'), desc: t('careers.benefit4Desc') }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f8f9fa] border-t-4 border-[#002b5b] p-10 group hover:border-[#ff6600] transition-colors duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="text-[#002b5b] mb-8 group-hover:text-[#ff6600] transition-colors">
                  {benefit.icon}
                </div>
                <h4 className="font-heading font-black text-[#002b5b] text-xl tracking-tight mb-4 group-hover:text-[#ff6600] transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-gray-500 text-[15px] leading-relaxed group-hover:text-gray-700 transition-colors">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ─────────────────────────────────────────────────── */}
      <section className="bg-[#f8f9fa] py-24 relative overflow-hidden">
        {/* Decorative background slice */}
        <div 
          className="absolute top-0 right-0 h-full w-[15%] bg-white z-0 opacity-50"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        ></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#ff6600]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff6600]">
              {t('careers.currentOpenings')}
            </span>
          </div>
          <h2 className="font-heading font-black text-[#002b5b] text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-16">
            {t('careers.joinGrowingTeam')}
          </h2>

          <div className="bg-white border text-left border-gray-200 shadow-sm divide-y divide-gray-100">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 lg:p-10 group hover:bg-[#fff9f5] transition-colors grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center border-l-4 border-transparent hover:border-[#ff6600]"
              >
                <div>
                  {/* Meta tags */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-white bg-[#002b5b] px-4 py-1.5 shadow-sm">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 text-[11px] font-bold uppercase tracking-widest bg-gray-100 px-3 py-1.5 border border-gray-200">
                      <MapPin size={14} className="text-[#ff6600]" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 text-[11px] font-bold uppercase tracking-widest bg-gray-100 px-3 py-1.5 border border-gray-200">
                      <Clock size={14} className="text-[#ff6600]" /> {job.type}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-heading font-black text-[#002b5b] mb-4 tracking-tight group-hover:text-[#ff6600] transition-colors">
                    {job.title}
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed max-w-3xl">
                    {job.desc}
                  </p>
                </div>

                <div className="pt-4 lg:pt-0">
                  <button className="inline-flex items-center gap-3 bg-white border-2 border-[#002b5b] text-[#002b5b] px-8 py-4 font-bold tracking-wide uppercase group-hover:bg-[#002b5b] group-hover:text-white transition-colors w-full lg:w-auto justify-center group/btn">
                    {t('careers.applyNow')} <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERAL APPLICATION CTA — Deep Blue Monolith ─────────────────────── */}
      <section className="bg-[#002b5b] py-0 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 relative z-10">
          
          <div className="p-16 lg:p-24 flex flex-col justify-center bg-[#002b5b]">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-black text-white mb-6 tracking-tight leading-tight">
              {t('careers.noPerfectFit')}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              {t('careers.generalAppDesc')}
            </p>
          </div>

          <div 
            className="p-16 lg:p-24 flex items-center justify-start lg:justify-center bg-[#001f42] hover:bg-[#ff6600] transition-colors duration-500 group cursor-pointer" 
            onClick={() => window.location.href = 'mailto:hr@ben-oil.com'}
          >
            <div className="flex items-center gap-6">
              <span className="text-[clamp(1.5rem,3vw,2.5rem)] font-heading font-black text-white tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-300">
                {t('careers.submitGeneralApp')}
              </span>
              <ArrowRight size={40} className="text-[#ff6600] bg-white rounded-full p-2 group-hover:bg-transparent group-hover:text-white group-hover:translate-x-6 transition-all duration-300" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
