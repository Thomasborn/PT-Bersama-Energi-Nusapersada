import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { customerTestimonialsData } from '../data/benPartnerships';

export default function CustomerTestimonials() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Testimoni Pelanggan</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-heading font-bold text-secondary text-[clamp(2.2rem,5vw,4rem)] leading-[1.15] tracking-tight mb-8">
            Kepercayaan dari Pemimpin <span className="text-primary">Industri Indonesia</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            Perusahaan-perusahaan terkemuka telah mempercayai produk Gulf Oil dan layanan BEN untuk mendukung operasional mereka
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerTestimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote size={32} className="text-primary/20 mb-4" />

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-8 flex-grow font-medium">
                "{testimonial.testimonial}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-6" />

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.contactPerson}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="font-bold text-secondary text-sm">{testimonial.contactPerson}</div>
                  <div className="text-[12px] text-gray-500 font-medium">{testimonial.position}</div>
                  <div className="text-[11px] text-primary font-bold uppercase tracking-wider">{testimonial.sector}</div>
                </div>
              </div>

              {/* Company */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Perusahaan</div>
                <div className="font-bold text-secondary">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 pt-20 border-t border-gray-200 text-center"
        >
          <p className="text-gray-600 text-lg mb-8 font-medium">
            Ingin bergabung dengan ribuan perusahaan yang telah mempercayai kami?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+622112345678"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg font-bold tracking-wide transition-all duration-300 hover:shadow-lg"
            >
              ☎️ Hubungi Sales Kami
            </a>
            <a
              href="mailto:sales@ben-energy.co.id"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 px-10 py-4 rounded-lg font-bold tracking-wide transition-all duration-300"
            >
              ✉️ Kirim Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
