import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const CUSTOMERS = [
  { name: 'PT Freeport Indonesia', icon: '⛏️' },
  { name: 'PT Adaro Energy', icon: '⚡' },
  { name: 'PT Semen Indonesia', icon: '🏭' },
  { name: 'PT Transex Indonesia', icon: '🚚' },
  { name: 'PT Sinarmasindo', icon: '🌴' },
  { name: 'PT Waskita Karya', icon: '🏗️' },
  { name: 'PT Indo Fuels', icon: '⛽' },
  { name: 'PT Hartono Isteel', icon: '🔩' },
];

export default function ClientLogos() {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">{t('home.trustedBy') || 'Dipercaya Oleh'}</p>
          <h3 className="font-heading font-bold text-secondary text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
            Perusahaan & Industri Terkemuka Indonesia
          </h3>
        </motion.div>
        
        {/* Infinite scrolling logo track */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white/95 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white/95 after:to-transparent">
          <motion.div 
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...Array(2)].map((_, j) => (
              <div key={j} className="flex items-center gap-8 px-4">
                {CUSTOMERS.map((customer) => (
                  <motion.div 
                    key={`${j}-${customer.name}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all group"
                  >
                    <span className="text-2xl">{customer.icon}</span>
                    <div className="font-semibold text-gray-700 group-hover:text-primary transition-colors text-sm md:text-base">{customer.name}</div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

