import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function ClientLogos() {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{t('home.trustedBy') || 'Dipercaya Oleh Pemimpin Industri'}</p>
        </div>
        
        {/* Infinite scrolling logo track */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-white after:to-transparent">
          <motion.div 
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...Array(2)].map((_, j) => (
              <div key={j} className="flex items-center gap-16 px-8">
                {/* Simulated B2B Client Logos using text for premium generic look */}
                <div className="text-xl font-bold text-gray-400 font-heading">APEX MINING</div>
                <div className="text-xl font-bold text-gray-400 font-heading">NUSANTARA LOGISTICS</div>
                <div className="text-xl font-bold text-gray-400 font-heading">STEELWORKS INC.</div>
                <div className="text-xl font-bold text-gray-400 font-heading">GLOBAL TRANSPORT</div>
                <div className="text-xl font-bold text-gray-400 font-heading">AGRO TECHINDO</div>
                <div className="text-xl font-bold text-gray-400 font-heading">MEGA CONSTRUCTION</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
