import { motion } from 'motion/react';
import { Briefcase, Users, Zap, Award, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">{t('careers.heroTitle')} <span className="text-primary">{t('careers.heroTitleHighlight')}</span> {t('careers.heroTitleEnd')}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('careers.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('careers.lifeAtBen')}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">{t('careers.whyJoin')}</h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('careers.whyJoinDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Briefcase size={32} />, title: t('careers.benefit1Title'), desc: t('careers.benefit1Desc') },
              { icon: <Users size={32} />, title: t('careers.benefit2Title'), desc: t('careers.benefit2Desc') },
              { icon: <Zap size={32} />, title: t('careers.benefit3Title'), desc: t('careers.benefit3Desc') },
              { icon: <Award size={32} />, title: t('careers.benefit4Title'), desc: t('careers.benefit4Desc') }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-grey p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-primary group text-center"
              >
                <div className="text-primary mb-6 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-heading font-bold text-secondary mb-3">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('careers.currentOpenings')}</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">{t('careers.joinGrowingTeam')}</h3>
              <p className="text-gray-600">{t('careers.exploreOpportunities')}</p>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                      <Clock size={14} /> {job.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{job.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">{job.desc}</p>
                </div>
                <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-sm font-semibold transition-colors flex items-center gap-2 flex-shrink-0 whitespace-nowrap mt-4 md:mt-0">
                  {t('careers.applyNow')} <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-heading font-bold mb-6">{t('careers.noPerfectFit')}</h2>
          <p className="text-white/90 mb-8 text-lg">{t('careers.generalAppDesc')}</p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-sm font-bold transition-colors text-lg inline-flex items-center gap-2">
            {t('careers.submitGeneralApp')} <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
