import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Careers() {
  const { t } = useLanguage();

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
              Hubungi Kami <br />
              <span className="text-primary">Untuk Karir</span>
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
                Bergabunglah dengan tim kami yang dinamis dan berdedikasi untuk memajukan masa depan industri Indonesia.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMAIL CONTACT SECTION ─────────────────────────────────────────────── */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                Hubungi Kami
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-heading font-black text-secondary text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-tighter mb-6">
              Kirim Email untuk Kesempatan Karir
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Kami selalu mencari individu berbakat untuk bergabung dengan tim kami. Silakan hubungi kami melalui email berikut untuk informasi lebih lanjut tentang peluang karir.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-gray-50 border border-gray-100 rounded-lg p-12 text-center"
          >
            <div className="flex justify-center mb-8">
              <Mail className="text-primary" size={48} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-bold text-secondary mb-4">Email HR kami</h3>
            
            <a 
              href="mailto:hr@ben-energy.co.id"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold tracking-wide transition-colors text-lg"
            >
              <Mail size={20} />
              hr@ben-energy.co.id
            </a>

            <p className="text-gray-500 mt-8 text-sm">
              Atau hubungi departemen HR kami melalui nomor kontak di halaman <a href="/contact" className="text-primary font-bold hover:underline">Hubungi Kami</a>
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
