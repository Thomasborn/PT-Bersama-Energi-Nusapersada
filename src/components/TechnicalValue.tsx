import { motion } from 'motion/react';
import { Microscope, GraduationCap, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function TechnicalValue() {
  const { t } = useLanguage();

  const ICONS = [
    <Microscope size={32} strokeWidth={1.5} />,
    <PenTool size={32} strokeWidth={1.5} />,
    <GraduationCap size={32} strokeWidth={1.5} />,
  ];

  const ACCENTS = ['text-secondary', 'text-primary', 'text-secondary'];

  const rawServices = t('home.technicalValue.services', { returnObjects: true });
  const services = Array.isArray(rawServices) ? rawServices : [];

  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header — strictly left-anchored */}
        <div className="py-16 border-b border-gray-100 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('home.technicalValue.subtitle')}</span>
            </div>
            <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter">
              {t('home.technicalValue.title')}
            </h2>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md lg:text-right">
            {t('home.technicalValue.desc')}
          </p>
        </div>

        {/* Services — flat horizontal rows */}
        <div className="divide-y divide-gray-100">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-8 py-12 group hover:bg-gray-50 transition-colors px-2"
            >
              {/* Number */}
              <div className="font-heading font-black text-5xl text-gray-100 group-hover:text-primary/20 transition-colors tracking-tighter leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Title + Icon */}
              <div>
                <div className={`${ACCENTS[i]} mb-5`}>{ICONS[i]}</div>
                <h3 className="font-heading font-bold text-secondary text-2xl tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Bullet points */}
              <div className="flex flex-col gap-3 justify-start pt-1 md:pt-10">
                {s.bullets.map((b: string, j: number) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="h-px w-6 bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-600">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="border-t border-gray-100 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">{t('home.technicalValue.ctaText')}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-secondary text-white px-7 py-3.5 font-bold tracking-wide hover:bg-primary transition-colors group flex-shrink-0"
          >
            {t('home.technicalValue.ctaButton')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
