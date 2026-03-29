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
                Berita & Pembaruan
              </span>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading font-black text-white leading-[0.9] tracking-tighter text-[clamp(2.5rem,6vw,6rem)] mb-0"
            >
              {t('news.heroTitle')}{' '}
              <span className="text-primary">{t('news.heroTitleHighlight')}</span>
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
                {t('news.heroDesc')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED NEWS — Flat architectural grid ───────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
              {t('news.latestUpdates')}
            </span>
          </div>
          <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.8rem)] leading-[1] tracking-tighter mb-16">
            {t('news.corporateNews')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white flex flex-col h-full border-b border-r border-gray-200 last:border-b-0 [&:nth-last-child(2)]:border-b-0 hover:bg-secondary transition-colors duration-500 overflow-hidden"
              >
                {/* Image block */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 text-[10px] font-black tracking-widest uppercase">
                    {item.category}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  {/* Meta strip */}
                  <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 mb-6 uppercase tracking-[0.15em] border-b border-gray-100 pb-4 group-hover:border-white/10 group-hover:text-gray-400 transition-colors">
                    <span className="flex items-center gap-1.5 whitespace-nowrap"><Calendar size={12} className="text-primary" /> {item.date}</span>
                    <div className="w-px h-3 bg-gray-200 group-hover:bg-white/10" />
                    <span className="flex items-center gap-1.5 whitespace-nowrap"><User size={12} className="text-secondary group-hover:text-gray-300" /> {item.author}</span>
                  </div>

                  <h4 className="text-2xl font-heading font-bold text-secondary mb-4 group-hover:text-white transition-colors leading-[1.2] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                    {item.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary group-hover:text-primary transition-colors mt-auto">
                    {t('news.readArticle')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SIGNUP — Flat Geometric ───────────────────────────────── */}
      <section className="bg-secondary text-white py-0 border-t border-white/10 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="p-16 lg:p-24 flex flex-col justify-center">
            <h2 className="text-3xl font-heading font-black mb-4 tracking-tight leading-[1.1]">
              {t('news.subscribeTitle')}
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              {t('news.subscribeDesc')}
            </p>
          </div>

          <div className="p-16 lg:p-24 flex flex-col justify-center">
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder={t('news.emailPlaceholder')}
                className="w-full bg-transparent border-b border-gray-500 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors text-lg placeholder-gray-500"
                required
              />
              <button type="submit" className="inline-flex items-center justify-between w-full lg:w-max gap-8 bg-primary text-white px-8 py-4 font-bold tracking-wide hover:bg-primary-hover transition-colors mt-4 group">
                {t('news.subscribeBtn')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-6 mt-auto">
              {t('news.subscribeDisclaimer')}
            </p>
          </div>
          
        </div>
      </section>

    </div>
  );
}
