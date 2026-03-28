import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gulfCategories, gulfProducts } from '../data/gulfProducts';
import DistributorCTA from '../components/DistributorCTA';
import { CheckCircle2, ChevronDown, ChevronUp, Package2, Zap, DownloadCloud, Search, ExternalLink } from 'lucide-react';

// Official Gulf Light-Mode Corporate Product Card
const OfficialProductCard = ({ product, index }: { product: any, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group"
    >
      {/* Product Image Area - Clean & Light */}
      <div 
        className="relative h-64 bg-gray-50 flex items-center justify-center p-6 cursor-pointer border-b border-gray-100 overflow-hidden" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div 
          className="absolute inset-0 w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        >
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"></div>
          )}
        </motion.div>

        {/* Brand Logo & Pill */}
        <div className="absolute top-4 left-4 flex gap-2 items-center z-10">
          <div className="bg-white p-1 rounded-md shadow-sm border border-gray-100 w-10 h-10 flex items-center justify-center">
            <img 
              src={product.partnerBrand === 'Gulf' ? '/gulf.png' : '/shantui-logo.jpeg'} 
              alt={product.partnerBrand}
              className="w-full h-full object-contain"
            />
          </div>
          {product.subcategoryId && (
            <span className="bg-[#012169] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
              {product.subcategoryId.replace(/-/g, ' ')}
            </span>
          )}
        </div>

        {/* Download PDS / Action Overlay on desktop hover */}
        {product.pdsUrl && (
          <div className="absolute top-4 right-4 z-10">
            <a 
              href={product.pdsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-white text-[#F26522] rounded-full shadow-md border border-gray-200 hover:bg-[#F26522] hover:text-white hover:border-[#F26522] transition-colors"
              title="Unduh PDS (Product Data Sheet)"
              onClick={(e) => e.stopPropagation()}
            >
              <DownloadCloud size={18} />
            </a>
          </div>
        )}
      </div>

      {/* Main Info Block */}
      <div className="p-6 md:p-8 bg-white relative z-20">
        <h3 className="text-2xl font-bold text-[#012169] mb-3 group-hover:text-[#F26522] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
          {product.summary}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-5">
           <button 
             onClick={() => setIsExpanded(!isExpanded)}
             className="text-[#012169] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-[#F26522] transition-colors"
           >
             {isExpanded ? 'Tutup Detail' : 'Lihat Spesifikasi'}
             {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
           </button>
           
           {/* Direct CTA per product */}
           <a href="#hubungi-kami" className="bg-[#F26522] text-white font-bold text-xs uppercase px-4 py-2 rounded-md hover:bg-orange-600 transition-colors shadow-sm">
             Pesan
           </a>
        </div>
      </div>

      {/* Accordion Details - Clean Corporate Grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[#F8F9FA] border-t border-gray-200"
          >
            <div className="p-6 md:p-8">
              {/* Quick Specs Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Viskositas</span>
                  <span className="text-sm font-bold text-[#012169]">{product.viscosityGrade || 'Beragam'}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Standar Tipe</span>
                  <span className="text-sm font-bold text-[#012169]">{product.baseType || 'Premium'}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Kemasan</span>
                  <span className="text-sm font-bold text-[#012169]">{product.packaging || 'Drum 200L'}</span>
                </div>
                <div className="flex flex-col justify-end items-start mt-2 md:mt-0">
                  {product.pdsUrl && (
                    <a href={product.pdsUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#F26522] flex items-center gap-1 hover:underline">
                      <DownloadCloud size={14} /> Global PDS
                    </a>
                  )}
                </div>
              </div>

              {/* Deep Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {product.approvals && product.approvals[0] !== '-' && (
                  <div>
                    <h6 className="text-xs text-[#012169] uppercase tracking-widest font-bold mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                      <CheckCircle2 size={16} className="text-[#F26522]" /> OEM Approvals
                    </h6>
                    <ul className="space-y-2 pl-1">
                      {product.approvals.map((app: string, i: number) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-[#F26522] mt-0.5">•</span> 
                          <span className="leading-snug">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.keyBenefits && (
                  <div>
                    <h6 className="text-xs text-[#012169] uppercase tracking-widest font-bold mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                      <Zap size={16} className="text-[#F26522]" /> Keunggulan Utama
                    </h6>
                    <ul className="space-y-2 pl-1">
                      {product.keyBenefits.map((benefit: string, i: number) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-[#F26522] mt-0.5">•</span> 
                          <span className="leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.applications && (
                  <div className="md:col-span-2 mt-2">
                    <h6 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Aplikasi Optimal</h6>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app: string, i: number) => (
                        <span key={i} className="bg-white border border-gray-200 text-[#012169] font-medium text-xs px-3 py-1.5 rounded-sm shadow-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(gulfCategories[0].id);
  const [activeSubcategory, setActiveSubcategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute subcategories
  const currentCategoryObj = gulfCategories.find(c => c.id === activeCategory);
  const subcategories = currentCategoryObj?.subcategories || [];

  // Filter products
  const displayedProducts = useMemo(() => {
    let fromCategory = gulfProducts.filter(p => p.categoryId === activeCategory);
    
    if (activeSubcategory !== 'all') {
      fromCategory = fromCategory.filter(p => p.subcategoryId === activeSubcategory);
    }
    
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      fromCategory = fromCategory.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.summary.toLowerCase().includes(q) ||
        (p.viscosityGrades && p.viscosityGrades.some(v => v.toLowerCase().includes(q))) ||
        (p.keyBenefits && p.keyBenefits.some(b => b.toLowerCase().includes(q)))
      );
    }
    
    return fromCategory;
  }, [activeCategory, activeSubcategory, searchQuery]);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
      
      {/* Official Gulf Style Hero Section - Light & Crisp */}
      <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Text Area */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 z-10"
              >
                 <div className="mb-6 inline-block bg-[#012169] text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-sm shadow-sm">
                    Katalog Distributor Resmi
                 </div>
                 
                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#012169] tracking-tight leading-[1.15] mb-6">
                    Mutu Terbaik <br/>
                    <span className="text-[#F26522] inline-block mt-2">Daya Tahan Global.</span>
                 </h1>
                 
                 <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed font-medium">
                    Jelajahi lini pelumas lengkap Gulf. Diformulasikan khusus untuk menjaga reliabilitas dan performa maksimal kendaraan otomotif hingga unit industri terberat Anda.
                 </p>
                 
                 <div className="flex items-center gap-4">
                    <img src="/gulf.png" alt="Gulf Logo" className="h-10 object-contain drop-shadow-sm" />
                    <div className="h-8 w-[1px] bg-gray-300"></div>
                    <span className="text-sm font-bold text-[#012169] tracking-wide">PT. Bersama Energi Nusapersada</span>
                 </div>
              </motion.div>

              {/* Image Area */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 relative hidden md:block"
              >
                 <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Gulf Official Industrial Profile" className="w-full h-full object-cover" />
                    {/* Subtle orange tint overlay for branding */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#012169]/30 via-transparent to-[#F26522]/20 mix-blend-multiply"></div>
                 </div>
                 
                 {/* Floating badge */}
                 <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
                    <h4 className="text-4xl font-extrabold text-[#F26522]">100+</h4>
                    <p className="text-xs font-bold text-[#012169] uppercase tracking-wider leading-snug w-24">Varian<br/>Pelumas</p>
                 </div>
              </motion.div>
              
           </div>
        </div>
      </section>

      {/* Official Principal Highlight Strip */}
      <div className="bg-[#012169] py-3 text-center border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-white text-sm font-medium tracking-wide">Jelajahi portofolio global dan teknologi pelumas terkini dari Principal Kami:</span>
          <a 
            href="https://indonesia.gulfoilltd.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-sm transition-colors"
          >
            Situs Web Resmi Gulf <ExternalLink size={14} />
          </a>
        </div>
      </div>
      
      {/* Corporate Tab Navigation */}
      <div className="sticky top-[56px] md:top-[64px] z-40 bg-white shadow-sm ring-1 ring-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex overflow-x-auto no-scrollbar gap-8 lg:gap-12">
             {gulfCategories.map(cat => (
               <button
                 key={cat.id}
                 onClick={() => {
                   setActiveCategory(cat.id);
                   setActiveSubcategory('all');
                   setSearchQuery('');
                 }}
                 className={`py-5 text-sm font-extrabold tracking-widest uppercase whitespace-nowrap border-b-[3px] transition-colors relative ${
                   activeCategory === cat.id 
                     ? 'text-[#012169] border-[#F26522]' 
                     : 'text-gray-400 border-transparent hover:text-[#012169]'
                 }`}
               >
                 {cat.name}
               </button>
             ))}
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative pb-10">
          
          {/* Subcategory Sidebar Filters - Crisp Corporate Style */}
          <div className="w-full lg:w-1/4 lg:sticky lg:top-40 overflow-hidden">
            <h3 className="text-xl font-bold text-[#012169] mb-6 flex items-center gap-2">
              <Package2 size={24} className="text-[#F26522]" /> 
              Saring Kategori
            </h3>

            {subcategories.length > 0 ? (
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
                <button
                  onClick={() => setActiveSubcategory('all')}
                  className={`flex-shrink-0 text-left px-5 py-3 rounded-md text-[13px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeSubcategory === 'all'
                      ? 'bg-[#012169] text-white border-[#012169] shadow-md'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#F26522] hover:text-[#012169]'
                  }`}
                >
                  Lihat Semua
                </button>
                {subcategories.map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubcategory(sub.id)}
                    className={`flex-shrink-0 text-left px-5 py-3 rounded-md text-[13px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                      activeSubcategory === sub.id
                        ? 'bg-[#012169] text-white border-[#012169] shadow-md'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#F26522] hover:text-[#012169]'
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">Sub-kategori tidak tersedia untuk layanan ini.</p>
            )}

            {/* Information Card */}
            <div className="hidden lg:block mt-8 bg-blue-50 border border-blue-100 p-6 rounded-xl">
              <h4 className="font-bold text-[#012169] mb-2 flex items-center gap-2">
                <DownloadCloud size={18} /> Informasi Teknis
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Detail teknis, PDS, serta rekomendasi level aplikasi ditujukan khusus pada mesin industri berat dan unit alat berat partner Shantui resmi.
              </p>
            </div>
          </div>

          {/* Product Grid Area - Expanded Light Mode Grid */}
          <div className="w-full lg:w-3/4">
            
            {/* Search Bar & Header */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
              <div>
                <h4 className="text-2xl font-extrabold text-[#012169] tracking-tight">{currentCategoryObj?.name}</h4>
                <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">Menampilkan {displayedProducts.length} Varian Pelumas</p>
              </div>
              
              <div className="relative w-full sm:w-72">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari produk atau viskositas..."
                  className="w-full bg-white border border-gray-300 pl-10 pr-4 py-2.5 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent transition-all shadow-sm block"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    Tutup
                  </button>
                )}
              </div>
            </div>

            {/* Staggered Grid for Products */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {displayedProducts.map((product, index) => (
                  <motion.div 
                    key={product.id} 
                    layout 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5 }}
                  >
                    <OfficialProductCard product={product} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {displayedProducts.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="col-span-full py-24 text-center bg-white border border-dashed border-gray-300 rounded-2xl"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 shadow-sm">
                     <Package2 size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[#012169] mb-2">Katalog Sedang Diperbarui</h3>
                  <p className="text-gray-500 font-medium max-w-sm mx-auto">Varian digital untuk lini spesifik ini masih dikurasi dari Gulf Global. Hubungi tim teknis kami.</p>
                </motion.div>
              )}
            </motion.div>

          </div>
        </div>

      </div>

      <div id="hubungi-kami">
        <DistributorCTA />
      </div>

    </div>
  );
};

export default Products;
