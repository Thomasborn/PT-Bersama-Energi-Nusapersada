import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Partnership() {
  const { t } = useLanguage();

  const partnerships = [
    {
      id: 1,
      title: t('partnership.partner1Title'),
      desc: t('partnership.partner1Desc'),
      img: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
      link: "#"
    },
    {
      id: 2,
      title: t('partnership.partner2Title'),
      desc: t('partnership.partner2Desc'),
      img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 3,
      title: t('partnership.partner3Title'),
      desc: t('partnership.partner3Desc'),
      img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // mclaren placeholder
      link: "#"
    },
    {
      id: 4,
      title: t('partnership.partner4Title'),
      desc: t('partnership.partner4Desc'),
      img: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // classic cars
      link: "#"
    },
    {
      id: 5,
      title: t('partnership.partner5Title'),
      desc: t('partnership.partner5Desc'),
      img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // watch
      link: "#"
    }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white mt-[112px]">

      {/* ── HERO BANNER (An Unstoppable Team) ────────────────────────────────── */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#002b5b] flex items-center">
        {/* Abstract Background Elements */}
        <div
          className="absolute top-0 right-0 h-[100%] w-[60%] md:w-[45%] bg-[#ff6600] z-10 opacity-90"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        ></div>
        <div
          className="absolute bottom-0 right-0 h-[70%] w-[50%] md:w-[35%] bg-[#81d4fa]/30 z-[11] mix-blend-screen"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        ></div>
        
        {/* Dimmed background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469037803607-b6f75dc8eeb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        ></div>

        <div className="relative z-20 w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl border-l-[6px] border-[#ff6600] pl-8 md:pl-12 py-4"
            >
              <h1 className="font-heading font-black text-white leading-tight tracking-[0.02em] text-[clamp(2.5rem,6.5vw,5rem)] mb-6 uppercase">
                {t('partnership.heroStart')} <span className="text-[#ff6600]">{t('partnership.heroHighlight')}</span>
              </h1>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
                {t('partnership.heroDesc1')}
              </p>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light mt-4">
                {t('partnership.heroDesc2')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BANGGA KEMITRAAN (Proud Partnerships) ──────────────────────────── */}
      {/* Loop through partnerships in alternating row blocks */}
      <section className="bg-white">
        {partnerships.map((partner, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={partner.id} className="w-full relative overflow-hidden flex flex-col lg:flex-row group">
              {/* Image Side */}
              <div 
                className={`w-full lg:w-1/2 relative h-[450px] lg:h-auto overflow-hidden ${
                  !isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <motion.div
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={partner.img}
                    alt={partner.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[20s] ease-linear"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                </motion.div>
                
                {/* Decorative clip-path element appearing over image */}
                <div 
                  className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} h-[120px] w-[120px] bg-[#ff6600] z-10 hidden lg:block`}
                  style={{ clipPath: isEven ? 'polygon(100% 0, 0 0, 100% 100%)' : 'polygon(0 0, 100% 0, 0 100%)' }}
                ></div>
              </div>

              {/* Text Side */}
              <div 
                className={`w-full lg:w-1/2 p-12 lg:p-24 xl:p-32 flex flex-col justify-center ${
                  !isEven ? 'lg:order-1 bg-[#f8f9fa]' : 'lg:order-2 bg-white'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-10 bg-[#ff6600]" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff6600]">
                      {t('partnership.proudPartnership')}
                    </span>
                  </div>
                  
                  <h2 className="font-heading font-black text-[#002b5b] text-[clamp(2.5rem,3.5vw,3rem)] leading-[1.05] tracking-tight mb-8">
                    {partner.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-12">
                    {partner.desc}
                  </p>
                  
                  <a 
                    href={partner.link} 
                    className={`inline-flex items-center gap-4 font-bold tracking-widest uppercase transition-colors group/btn pb-1 ${
                      isEven ? 'text-[#ff6600]' : 'text-[#002b5b] hover:text-[#ff6600]'
                    }`}
                  >
                    <span className="border-b-2 border-transparent group-hover/btn:border-current pb-1 transition-all">
                      {t('partnership.learnMore')}
                    </span>
                    <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── GULF FOOTER CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#002b5b] text-white py-24 relative overflow-hidden border-t-8 border-[#ff6600]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="font-heading font-black text-[clamp(2.5rem,4vw,3.5rem)] mb-6 tracking-tight">
            {t('partnership.footerTitle')}
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            {t('partnership.footerDesc')}
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 bg-[#ff6600] text-white px-10 py-5 font-bold tracking-widest uppercase hover:bg-white hover:text-[#002b5b] transition-all duration-300 shadow-xl hover:-translate-y-1">
            {t('partnership.contactTeam')} <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
}
