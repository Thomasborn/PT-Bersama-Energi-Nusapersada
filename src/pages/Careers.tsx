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
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex flex-col justify-end bg-secondary overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
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
                Karir di PT BEN
              </span>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading font-black text-white leading-[0.9] tracking-tighter text-[clamp(2.5rem,6.5vw,6rem)] mb-0"
            >
              {t('careers.heroTitle')}{' '}
              <span className="text-primary">{t('careers.heroTitleHighlight')}</span>{' '}<br className="hidden md:block"/>
              {t('careers.heroTitleEnd')}
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
                {t('careers.heroDesc')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY JOIN US — Flat Grid ──────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                  {t('careers.lifeAtBen')}
                </span>
              </div>
              <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter">
                {t('careers.whyJoin')}
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md lg:text-right">
              {t('careers.whyJoinDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200">
            {[
              { icon: <Briefcase size={28} strokeWidth={1.5} />, title: t('careers.benefit1Title'), desc: t('careers.benefit1Desc') },
              { icon: <Users size={28} strokeWidth={1.5} />, title: t('careers.benefit2Title'), desc: t('careers.benefit2Desc') },
              { icon: <Zap size={28} strokeWidth={1.5} />, title: t('careers.benefit3Title'), desc: t('careers.benefit3Desc') },
              { icon: <Award size={28} strokeWidth={1.5} />, title: t('careers.benefit4Title'), desc: t('careers.benefit4Desc') }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border-b lg:border-b-0 lg:border-r border-gray-200 p-10 group hover:bg-secondary transition-colors duration-300 last:border-r-0 last:border-b-0"
              >
                <div className="text-primary mb-8 group-hover:text-primary transition-colors">
                  {benefit.icon}
                </div>
                <h4 className="font-heading font-bold text-secondary text-xl tracking-tight mb-4 group-hover:text-white transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS — List format, no cards ───────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
              {t('careers.currentOpenings')}
            </span>
          </div>
          <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-16">
            {t('careers.joinGrowingTeam')}
          </h2>

          <div className="border-t border-gray-200 divide-y divide-gray-200">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="py-12 group hover:bg-gray-50 transition-colors px-2 lg:px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center"
              >
                <div>
                  {/* Meta tags */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-[10px] font-black tracking-[0.15em] uppercase text-primary border border-primary/30 px-3 py-1">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 text-xs font-bold uppercase tracking-widest">
                      <MapPin size={12} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 text-xs font-bold uppercase tracking-widest">
                      <Clock size={12} /> {job.type}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-heading font-black text-secondary mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {job.title}
                  </h4>
                  <p className="text-gray-500 text-base leading-relaxed max-w-3xl">
                    {job.desc}
                  </p>
                </div>

                <div className="pt-4 lg:pt-0">
                  <button className="inline-flex items-center gap-3 bg-secondary text-white px-7 py-3.5 font-bold tracking-wide hover:bg-primary transition-colors w-full lg:w-auto justify-center group/btn">
                    {t('careers.applyNow')} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERAL APPLICATION CTA — Dark Monolith ──────────────────────────── */}
      <section className="bg-secondary py-0 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          <div className="p-16 lg:p-24 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 tracking-tighter leading-[1.1]">
              {t('careers.noPerfectFit')}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              {t('careers.generalAppDesc')}
            </p>
          </div>

          <div className="p-16 lg:p-24 flex items-center justify-start lg:justify-center bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer" onClick={() => window.location.href = 'mailto:hr@ben-oil.com'}>
            <div className="flex items-center gap-6">
              <span className="text-2xl md:text-3xl font-heading font-black text-white tracking-tighter uppercase">
                {t('careers.submitGeneralApp')}
              </span>
              <ArrowRight size={32} className="text-primary group-hover:translate-x-4 transition-transform duration-300" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
