import React from 'react';
import { motion } from 'motion/react';
import { gulfTrustData } from '../data/gulfTrust';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, PhoneCall, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustSection() {
  const { t } = useLanguage();
  
  return (
    <div className="w-full">
      {/* Tentang Gulf Section */}
      <section className="py-24 bg-secondary text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
                Identitas Global
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                {gulfTrustData.about.title}
              </h3>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                {gulfTrustData.about.content}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Gulf Oil Global Heritage" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-grey via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                <img src="/gulf.png" alt="Gulf Logo" className="h-12 bg-white rounded-full p-1" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Motorsport Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
              Warisan Motorsport Global
            </h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-6">
              {gulfTrustData.motorsportSectionTitle}
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-20">
            {gulfTrustData.motorsport.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-grey rounded-sm overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-64 relative bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent z-10"></div>
                  
                  <h4 className="relative z-20 text-3xl md:text-4xl font-heading font-bold text-white text-center mt-auto p-8 pb-6">
                    {item.title}
                  </h4>
                </div>

                <div className="p-10 flex-grow flex flex-col bg-white border-x border-b border-gray-100">
                  <div className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
                    {item.subtitle}
                  </div>
                  <div className="space-y-4">
                    {item.content.map((paragraph, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dedicated Call to Action for Gulf Distributor */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-sm p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-heading font-bold mb-4">Dapatkan Pelumas Gulf Asli Melalui BEN</h4>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Sebagai distributor resmi, PT. Bersama Energi Nusapersada siap membantu memenuhi kebutuhan pelumasan industri dan komersial Anda dengan jaminan kualitas dari Gulf.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-sm font-bold transition-colors flex items-center gap-2">
                  <MessageSquare size={18} /> Konsultasi Produk Gulf
                </Link>
                <Link to="/contact" className="bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-sm font-bold transition-colors flex items-center gap-2">
                  <PhoneCall size={18} /> Hubungi Tim BEN
                </Link>
                <Link to="/contact" className="bg-white text-dark-grey hover:bg-gray-100 px-8 py-4 rounded-sm font-bold transition-colors flex items-center gap-2">
                  <FileText size={18} /> Minta Penawaran
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
