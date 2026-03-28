import { motion } from 'motion/react';
import { Microscope, CheckCircle2, GraduationCap, PenTool } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TechnicalValue() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Value Proposition</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Lebih Dari Sekadar Transaksi Pelumas</h3>
          <p className="text-gray-600 text-lg">
            PT BEN menghadirkan <span className="font-bold text-primary">Technical Support Premium</span> untuk memastikan operasi alat berat dan mesin industri Anda berjalan efisien tanpa waktu henti tak terduga.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/30 transition-all group"
          >
            <div className="w-14 h-14 bg-secondary/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Microscope className="text-secondary" size={28} />
            </div>
            <h4 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">Oil Condition Monitoring</h4>
            <p className="text-gray-600 mb-6">
              Analisa laboratorium pelumas berkala untuk memantau kesehatan mesin, mendeteksi kontaminasi, dan mencegah kerusakan fatal sebelum terjadi.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-primary shrink-0" /> Deteksi keausan logam</li>
              <li className="flex gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-primary shrink-0" /> Analisa viskositas & kontaminasi</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/30 transition-all group"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PenTool className="text-primary" size={28} />
            </div>
            <h4 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">Rekomendasi Pelumasan</h4>
            <p className="text-gray-600 mb-6">
              Audit pabrik komprehensif oleh engineer kami untuk mencocokkan spesifikasi OEM dengan pelumas Gulf yang paling efisien secara biaya.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Penurunan biaya pemeliharaan</li>
              <li className="flex gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Rasionalisasi inventaris pelumas</li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/30 transition-all group"
          >
            <div className="w-14 h-14 bg-secondary/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="text-secondary" size={28} />
            </div>
            <h4 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">Edukasi Teknis (In-Plant)</h4>
            <p className="text-gray-600 mb-6">
              Pelatihan langsung di lokasi untuk mekanik dan operator Anda tentang praktik penyimpanan, penanganan, dan penyaringan oli standar internasional.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-primary shrink-0" /> Sertifikasi pemeliharaan dasar</li>
              <li className="flex gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-primary shrink-0" /> Peningkatan usia pakai komponen</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
