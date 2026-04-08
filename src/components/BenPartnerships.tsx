import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { benPartnershipsData } from '../data/benPartnerships';

export default function BenPartnerships() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-32 lg:py-48 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Kemitraan Strategi</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-heading font-bold text-secondary text-[clamp(2.2rem,5vw,4rem)] leading-[1.15] tracking-tight mb-8">
            Mitra Terpercaya <span className="text-primary">Industri Indonesia</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            BEN bekerja sama dengan perusahaan-perusahaan terkemuka untuk memberikan solusi lubrikasi dan logistik terbaik
          </p>
        </motion.div>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benPartnershipsData.partnerships.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Sector Badge */}
                <div className="inline-block mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                    {partner.sector}
                  </span>
                </div>

                {/* Company Name */}
                <h3 className="font-bold text-secondary text-xl mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                  {partner.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                    Kerjasama sejak {partner.partnershipYear}
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-primary group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-20 border-t border-gray-200"
        >
          {[
            { number: '50+', label: 'Tahun Pengalaman' },
            { number: '6', label: 'Partner Utama' },
            { number: '100+', label: 'Solusi Lubrikasi' },
            { number: '24/7', label: 'Dukungan Pelanggan' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="font-heading font-bold text-primary text-[clamp(2rem,5vw,3rem)] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-20 border-t border-gray-200 text-center"
        >
          <p className="text-gray-600 text-lg mb-8 font-medium">
            Tertarik untuk menjadi partner BEN dan Gulf Oil?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/partnership"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg font-bold tracking-wide transition-all duration-300 hover:shadow-lg"
            >
              Pelajari Program Kemitraan
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:info@bersamaenergi.co.id"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 px-10 py-4 rounded-lg font-bold tracking-wide transition-all duration-300"
            >
              Hubungi Tim Partnership
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
