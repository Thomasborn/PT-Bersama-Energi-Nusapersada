import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">{t('news.heroTitle')} <span className="text-primary">{t('news.heroTitleHighlight')}</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('news.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('news.latestUpdates')}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">{t('news.corporateNews')}</h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider shadow-md">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {item.author}</span>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{item.excerpt}</p>
                  <Link to="#" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-hover transition-colors mt-auto uppercase text-sm tracking-wider">
                    {t('news.readArticle')} <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-4">{t('news.subscribeTitle')}</h2>
          <p className="text-gray-600 mb-8 text-lg">{t('news.subscribeDesc')}</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder={t('news.emailPlaceholder')} 
              className="flex-1 px-6 py-4 rounded-sm border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-lg"
              required
            />
            <button type="submit" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-sm font-bold transition-colors text-lg whitespace-nowrap">
              {t('news.subscribeBtn')}
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">{t('news.subscribeDisclaimer')}</p>
        </div>
      </section>
    </div>
  );
}
