import { motion } from 'motion/react';
import { ArrowRight, Filter, Search } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Products() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      category: t('products.automotiveLubes'),
      categoryId: 'Automotive Lubricants',
      title: 'Gulf Formula G',
      desc: t('products.automotiveLubesDesc'),
      img: 'https://images.unsplash.com/photo-1620055898380-032900c14c5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      brand: 'Gulf'
    },
    {
      id: 2,
      category: t('products.industrialLubes'),
      categoryId: 'Industrial Lubricants',
      title: 'Gulf Harmony AW',
      desc: t('products.industrialLubesDesc'),
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      brand: 'Gulf'
    },
    {
      id: 3,
      category: t('products.heavyEquipLubes'),
      categoryId: 'Heavy Equipment Lubricants',
      title: 'Gulf Super Duty LE',
      desc: t('products.heavyEquipLubesDesc'),
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      brand: 'Gulf'
    },
    {
      id: 4,
      category: t('products.constructionEquip'),
      categoryId: 'Construction Equipment',
      title: 'Shantui SD16 Bulldozer',
      desc: t('products.constructionEquipDesc'),
      img: 'https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      brand: 'Shantui'
    },
    {
      id: 5,
      category: t('products.constructionEquip'),
      categoryId: 'Construction Equipment',
      title: 'Shantui SE210 Excavator',
      desc: t('products.excavatorDesc'),
      img: 'https://images.unsplash.com/photo-1586191552066-e52fdc0f9d98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      brand: 'Shantui'
    },
    {
      id: 6,
      category: t('products.filtersParts'),
      categoryId: 'Filters and Spare Parts',
      title: 'Genuine Shantui Parts',
      desc: t('products.filtersPartsDesc'),
      img: 'https://images.unsplash.com/photo-1565439390118-bbf11d0510fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      brand: 'Shantui'
    }
  ];

  const categories = [
    { id: 'All', label: t('products.all') },
    { id: 'Automotive Lubricants', label: t('products.automotiveLubes') },
    { id: 'Industrial Lubricants', label: t('products.industrialLubes') },
    { id: 'Heavy Equipment Lubricants', label: t('products.heavyEquipLubes') },
    { id: 'Construction Equipment', label: t('products.constructionEquip') },
    { id: 'Filters and Spare Parts', label: t('products.filtersParts') }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.categoryId === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-dark-grey text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              {t('products.heroTitle')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('products.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 bg-white p-6 rounded-sm shadow-sm">
            <div className="flex-1 w-full overflow-x-auto pb-2 lg:pb-0">
              <div className="flex gap-2 min-w-max">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-sm text-sm font-semibold transition-colors whitespace-nowrap ${
                      activeCategory === cat.id 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative w-full lg:w-72 flex-shrink-0">
              <input 
                type="text" 
                placeholder={t('products.searchPlaceholder')} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group flex flex-col h-full cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider shadow-md">
                      {product.brand}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-heading font-bold text-black mb-3 group-hover:text-primary transition-colors">{product.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{product.desc}</p>
                    <button className="text-primary font-semibold flex items-center gap-2 hover:text-primary-hover transition-colors mt-auto uppercase text-sm tracking-wider">
                      {t('products.requestQuote')} <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 text-lg">{t('products.noProductsFound')}</p>
                <button 
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  {t('products.clearFilters')}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Catalog Download CTA */}
      <section className="py-20 bg-dark-grey text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-6">{t('products.needMoreSpecs')}</h2>
          <p className="text-gray-400 mb-8 text-lg">{t('products.downloadCatalogDesc')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-sm font-semibold transition-colors flex items-center gap-2">
              {t('products.downloadGulf')}
            </button>
            <button className="bg-white text-dark-grey hover:bg-gray-100 px-8 py-3 rounded-sm font-semibold transition-colors flex items-center gap-2">
              {t('products.downloadShantui')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
