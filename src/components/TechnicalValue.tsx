import { motion } from 'motion/react';
import { Microscope, GraduationCap, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    num: '01',
    icon: <Microscope size={32} strokeWidth={1.5} />,
    title: 'Oil Condition Monitoring',
    desc: 'Analisa laboratorium pelumas berkala untuk memantau kesehatan mesin, mendeteksi kontaminasi dini, dan mencegah kerusakan fatal sebelum terjadi.',
    bullets: ['Deteksi keausan logam', 'Analisa viskositas & kontaminasi'],
    accent: 'text-secondary',
  },
  {
    num: '02',
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: 'Rekomendasi Pelumasan',
    desc: 'Audit pabrik komprehensif oleh engineer kami untuk mencocokkan spesifikasi OEM dengan pelumas Gulf yang paling efisien secara biaya.',
    bullets: ['Penurunan biaya pemeliharaan', 'Rasionalisasi inventaris pelumas'],
    accent: 'text-primary',
  },
  {
    num: '03',
    icon: <GraduationCap size={32} strokeWidth={1.5} />,
    title: 'Edukasi Teknis (In-Plant)',
    desc: 'Pelatihan langsung di lokasi untuk mekanik dan operator Anda tentang praktik penyimpanan, penanganan, dan penyaringan oli standar internasional.',
    bullets: ['Sertifikasi pemeliharaan dasar', 'Peningkatan usia pakai komponen'],
    accent: 'text-secondary',
  },
];

export default function TechnicalValue() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header — strictly left-anchored */}
        <div className="py-16 border-b border-gray-100 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Value Proposition</span>
            </div>
            <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter">
              Lebih Dari Sekadar<br />Transaksi Pelumas
            </h2>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md lg:text-right">
            PT BEN menghadirkan <span className="font-bold text-primary">Technical Support Premium</span> untuk memastikan operasi alat berat dan mesin industri Anda berjalan efisien tanpa waktu henti.
          </p>
        </div>

        {/* Services — flat horizontal rows */}
        <div className="divide-y divide-gray-100">
          {SERVICES.map((s, i) => (
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
                {s.num}
              </div>

              {/* Title + Icon */}
              <div>
                <div className={`${s.accent} mb-5`}>{s.icon}</div>
                <h3 className="font-heading font-bold text-secondary text-2xl tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Bullet points */}
              <div className="flex flex-col gap-3 justify-start pt-1 md:pt-10">
                {s.bullets.map((b, j) => (
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
          <p className="text-gray-400 text-sm">Siap memulai audit pelumasan gratis bersama tim teknis BEN?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-secondary text-white px-7 py-3.5 font-bold tracking-wide hover:bg-primary transition-colors group flex-shrink-0"
          >
            Konsultasi Gratis <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
