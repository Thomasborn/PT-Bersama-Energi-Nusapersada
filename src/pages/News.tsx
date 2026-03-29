import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function News() {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: t('news.items.item1Title'),
      category: t('news.items.item1Category'),
      date: t('news.items.item1Date'),
      author: t('news.items.item1Author'),
      img: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: t('news.items.item1Excerpt')
    },
    {
      id: 2,
      title: t('news.items.item2Title'),
      category: t('news.items.item2Category'),
      date: t('news.items.item2Date'),
      author: t('news.items.item2Author'),
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: t('news.items.item2Excerpt')
    },
    {
      id: 3,
      title: t('news.items.item3Title'),
      category: t('news.items.item3Category'),
      date: t('news.items.item3Date'),
      author: t('news.items.item3Author'),
      img: 'https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: t('news.items.item3Excerpt')
    },
    {
      id: 4,
      title: t('news.items.item4Title'),
      category: t('news.items.item4Category'),
      date: t('news.items.item4Date'),
      author: t('news.items.item4Author'),
      img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: t('news.items.item4Excerpt')
    },
    {
      id: 5,
      title: t('news.items.item5Title'),
      category: t('news.items.item5Category'),
      date: t('news.items.item5Date'),
      author: t('news.items.item5Author'),
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: t('news.items.item5Excerpt')
    },
    {
      id: 6,
      title: t('news.items.item6Title'),
      category: t('news.items.item6Category'),
      date: t('news.items.item6Date'),
      author: t('news.items.item6Author'),
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: t('news.items.item6Excerpt')
    }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white mt-[112px]">

      {/* ── HERO BANNER (Official Layout) ────────────────────────────────────── */}
      <section className="relative h-[60vh] md:h-[50vh] w-full overflow-hidden bg-[#002b5b] flex items-center">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        ></div>

        {/* Diagonal Graphic Overlays */}
        <div 
          className="absolute top-0 right-0 h-[100%] w-[60%] md:w-[45%] bg-[#ff6600] z-10 opacity-90"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 h-[70%] w-[50%] md:w-[35%] bg-[#81d4fa]/30 z-[11] mix-blend-screen"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        ></div>

        <div className="relative z-20 w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#ff6600]" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#ff6600]">
                  Pusat Informasi
                </span>
              </div>
              <h1 className="font-heading font-black text-white leading-[0.9] tracking-tighter text-[clamp(2.5rem,6vw,5rem)] mb-6">
                {t('news.heroTitle')}{' '}
                <span className="text-[#ff6600]">{t('news.heroTitleHighlight')}</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed hidden md:block">
                {t('news.heroDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED NEWS — Clean Corporate Grid ──────────────────────────────── */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#ff6600]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff6600]">
              {t('news.latestUpdates')}
            </span>
          </div>
          <h2 className="font-heading font-black text-[#002b5b] text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-16">
            {t('news.corporateNews')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border border-transparent">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#f8f9fa] flex flex-col h-full border border-gray-200 hover:border-[#ff6600] transition-colors duration-300 overflow-hidden shadow-sm hover:shadow-xl"
              >
                {/* Image block */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-[#ff6600] text-white px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase shadow-md">
                    {item.category}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-8 lg:p-10 flex flex-col flex-grow bg-white group-hover:bg-[#fcfdfd] transition-colors">
                  {/* Meta strip */}
                  <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-4 transition-colors">
                    <span className="flex items-center gap-1.5 whitespace-nowrap"><Calendar size={14} className="text-[#002b5b]" /> {item.date}</span>
                    <div className="w-px h-3 bg-gray-200" />
                    <span className="flex items-center gap-1.5 whitespace-nowrap"><User size={14} className="text-[#002b5b]" /> {item.author}</span>
                  </div>

                  <h4 className="text-2xl font-heading font-bold text-[#002b5b] mb-4 group-hover:text-[#ff6600] transition-colors leading-tight tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                    {item.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#ff6600] border-b-2 border-transparent group-hover:border-[#ff6600] pb-1 transition-all mt-auto w-max">
                    {t('news.readArticle')} <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SIGNUP — Deep Blue Monolith ───────────────────────────── */}
      <section className="bg-[#002b5b] text-white py-0 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1548658169-34dc3d3b7625?ixlib=rb-4.0.3")'}}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1400px] mx-auto divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">
          
          <div className="p-16 lg:p-24 flex flex-col justify-center bg-[#002b5b]/90 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tight leading-tight">
              {t('news.subscribeTitle')}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              {t('news.subscribeDesc')}
            </p>
          </div>

          <div className="p-16 lg:p-24 flex flex-col justify-center bg-[#001f42]/90 backdrop-blur-sm">
            <form className="flex flex-col gap-6">
              <input
                type="email"
                placeholder={t('news.emailPlaceholder')}
                className="w-full bg-transparent border-b-2 border-gray-600 px-0 py-4 text-white focus:outline-none focus:border-[#ff6600] transition-colors text-lg placeholder-gray-400"
                required
              />
              <button type="submit" className="inline-flex items-center justify-center w-full lg:w-max gap-4 bg-[#ff6600] text-white px-10 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-[#002b5b] shadow-md transition-colors mt-4 group">
                {t('news.subscribeBtn')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="text-[11px] text-gray-400 mt-8 mt-auto font-medium tracking-wide">
              {t('news.subscribeDisclaimer')}
            </p>
          </div>
          
        </div>
      </section>

    </div>
  );
}
