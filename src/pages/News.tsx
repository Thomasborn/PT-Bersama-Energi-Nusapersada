import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function News() {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end bg-secondary overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
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
                Berita & Media
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
              Berita & <br />
              <span className="text-primary">Media</span>
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
                Tetap terhubung dengan kami untuk informasi dan perkembangan terbaru.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION ─────────────────────────────────────────────────── */}
      <section className="bg-white py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading font-black text-secondary text-[clamp(1.5rem,4vw,3rem)] leading-[1.1] tracking-tighter mb-6">
                Hubungi Kami untuk Informasi Terbaru
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Untuk berita dan informasi terbaru tentang perusahaan, produk, dan perkembangan industri, silakan hubungi kami melalui saluran kontak berikut.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-lg p-12 mt-12">
              <h3 className="text-xl font-bold text-secondary mb-8">Hubungi Departemen Komunikasi Kami</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 font-bold mb-2">Email:</p>
                  <a href="mailto:info@ben-energy.co.id" className="text-primary text-lg font-bold hover:underline">
                    info@ben-energy.co.id
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 font-bold mb-2">Kontak Kami:</p>
                  <p className="text-primary text-lg font-bold">
                    Hubungi Admin via WhatsApp
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate('/contact')}
                className="mt-10 inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold tracking-wide transition-colors"
              >
                Pergi ke Halaman Hubungi Kami
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
