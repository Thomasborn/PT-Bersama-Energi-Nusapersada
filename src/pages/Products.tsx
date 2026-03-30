import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gulfCategories, gulfProducts } from '../data/gulfProducts';
import DistributorCTA from '../components/DistributorCTA';
import { ChevronDown, ChevronUp, DownloadCloud, Search, ExternalLink, ArrowRight, LayoutGrid, List, CheckCircle2, Zap, Package2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Flat product row / expandable ───────────────────────────────────────────
const ProductRow = ({ product, index }: { product: any; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="border-b border-gray-100 group"
    >
      {/* Main row — clickable header */}
      <div
        onClick={() => setOpen(!open)}
        className="grid grid-cols-[1fr_auto] lg:grid-cols-[80px_1fr_250px_150px_80px] items-center gap-6 px-4 lg:px-8 py-7 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        {/* Row number */}
        <span className="hidden lg:block font-heading font-black text-3xl text-gray-100 group-hover:text-[#002b5b]/20 transition-colors tracking-tighter select-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Name + brand */}
        <div className="flex items-center gap-5 min-w-0">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 rounded-md object-contain bg-gray-50 p-1 flex-shrink-0 hidden sm:block shadow-sm"
            />
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-1.5 flex-wrap">
              <img
                src={product.partnerBrand === 'Gulf' ? '/gulf.png' : '/shantui-logo.jpeg'}
                alt={product.partnerBrand}
                className="h-6 object-contain"
              />
              {product.subcategoryId && (
                <span className="text-[10px] font-black tracking-[0.15em] uppercase text-[#ff6600] border border-[#ff6600]/30 px-2.5 py-0.5 rounded-sm bg-[#ff6600]/5">
                  {product.subcategoryId.replace(/-/g, ' ')}
                </span>
              )}
            </div>
            <h3 className="font-heading font-bold text-[#002b5b] text-lg md:text-xl tracking-tight leading-tight truncate group-hover:text-[#ff6600] transition-colors">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Viscosity grades */}
        <div className="hidden lg:flex flex-wrap gap-1.5">
          {product.viscosityGrades?.slice(0, 3).map((g: string) => (
            <span key={g} className="text-xs font-bold border border-gray-200 px-2 py-1 text-gray-600">
              {g}
            </span>
          ))}
          {(product.viscosityGrades?.length ?? 0) > 3 && (
            <span className="text-xs font-bold border border-gray-200 px-2 py-1 text-gray-400">
              +{product.viscosityGrades.length - 3}
            </span>
          )}
        </div>

        {/* Packs */}
        <div className="hidden lg:block text-xs text-gray-400 font-medium">
          {product.availablePacks?.join(' · ') || '—'}
        </div>

        {/* Expand / PDS */}
        <div className="flex items-center gap-2 justify-end">
          {product.pdsUrl && (
            <a
              href={product.pdsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-primary transition-colors p-1"
              title="Product Data Sheet"
            >
              <DownloadCloud size={16} />
            </a>
          )}
          {open
            ? <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
            : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
          }
        </div>
      </div>

      {/* Expanded detail panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50 border-t border-gray-100 px-6 lg:px-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Summary + image */}
              <div className="md:col-span-2">
                {product.image && (
                  <div className="w-full h-52 bg-white rounded-lg border border-gray-100 flex items-center justify-center p-4 mb-6 overflow-hidden">
                    <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                  </div>
                )}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.summary}</p>

                {/* Applications */}
                {product.applications?.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs font-black tracking-[0.15em] uppercase text-secondary mb-3">Aplikasi</div>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((a: string, i: number) => (
                        <span key={i} className="text-xs border border-gray-200 px-3 py-1.5 text-gray-600 font-medium">{a}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right: specs + benefits */}
              <div className="space-y-6">
                {/* Specs */}
                {product.specifications?.length > 0 && (
                  <div>
                    <div className="text-xs font-black tracking-[0.15em] uppercase text-secondary mb-3">Spesifikasi</div>
                    <ul className="space-y-1.5">
                      {product.specifications.map((s: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="h-px w-4 bg-primary flex-shrink-0" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key benefits */}
                {product.keyBenefits?.length > 0 && (
                  <div>
                    <div className="text-xs font-black tracking-[0.15em] uppercase text-secondary mb-3">Keunggulan</div>
                    <ul className="space-y-1.5">
                      {product.keyBenefits.map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="h-px w-4 bg-primary flex-shrink-0 mt-2.5" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* PDS Link */}
                {product.pdsUrl && (
                  <a
                    href={product.pdsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-secondary text-secondary px-4 py-2.5 font-bold text-xs tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors"
                  >
                    <DownloadCloud size={14} /> Unduh PDS
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Card-style product display (dev-branch layout) ──────────────────────────
const OfficialProductCard = ({ product, index }: { product: any; index: number }) => {
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
      {/* Product Image Area */}
      <div
        className="relative h-64 bg-gray-50 flex items-center justify-center p-6 cursor-pointer border-b border-gray-100 overflow-hidden"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div className="absolute inset-0 w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}>
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-contain p-6 opacity-90 group-hover:opacity-100 transition-opacity" />
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
            <span className="bg-[#002b5b] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
              {product.subcategoryId.replace(/-/g, ' ')}
            </span>
          )}
        </div>

        {/* Download PDS */}
        {product.pdsUrl && (
          <div className="absolute top-4 right-4 z-10">
            <a
              href={product.pdsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-white text-[#ff6600] rounded-full shadow-md border border-gray-200 hover:bg-[#ff6600] hover:text-white hover:border-[#ff6600] transition-colors"
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
        <h3 className="text-2xl font-bold text-[#002b5b] mb-3 group-hover:text-[#ff6600] transition-colors">{product.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium line-clamp-3">{product.summary}</p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-5">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#002b5b] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-[#ff6600] transition-colors"
          >
            {isExpanded ? 'Tutup Detail' : 'Lihat Spesifikasi'}
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          <a href="/contact" className="bg-[#ff6600] text-white font-bold text-xs uppercase px-4 py-2 rounded-md hover:bg-orange-600 transition-colors shadow-sm">
            Pesan
          </a>
        </div>
      </div>

      {/* Accordion Details */}
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Viskositas</span>
                  <span className="text-sm font-bold text-[#002b5b]">{product.viscosityGrades?.join(', ') || 'Beragam'}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Standar</span>
                  <span className="text-sm font-bold text-[#002b5b]">{product.specifications?.[0] || 'Premium'}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Kemasan</span>
                  <span className="text-sm font-bold text-[#002b5b]">{product.availablePacks?.join(', ') || 'Drum 200L'}</span>
                </div>
              </div>

              {/* Deep Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {product.approvals && product.approvals[0] !== '-' && (
                  <div>
                    <h6 className="text-xs text-[#002b5b] uppercase tracking-widest font-bold mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                      <CheckCircle2 size={16} className="text-[#ff6600]" /> OEM Approvals
                    </h6>
                    <ul className="space-y-2 pl-1">
                      {product.approvals.map((app: string, i: number) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-[#ff6600] mt-0.5">•</span>
                          <span className="leading-snug">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.keyBenefits && (
                  <div>
                    <h6 className="text-xs text-[#002b5b] uppercase tracking-widest font-bold mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                      <Zap size={16} className="text-[#ff6600]" /> Keunggulan Utama
                    </h6>
                    <ul className="space-y-2 pl-1">
                      {product.keyBenefits.map((benefit: string, i: number) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-[#ff6600] mt-0.5">•</span>
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
                        <span key={i} className="bg-white border border-gray-200 text-[#002b5b] font-medium text-xs px-3 py-1.5 rounded-sm shadow-sm">
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

// ─── Main Products Page ───────────────────────────────────────────────────────
export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSubcat, setActiveSubcat] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const activeCategory_ = gulfCategories.find((c) => c.id === activeCategory);

  const displayed = useMemo(() => {
    let list = gulfProducts;
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.categoryId === activeCategory);
    }
    if (activeSubcat !== 'all') {
      list = list.filter((p) => p.subcategoryId === activeSubcat);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.viscosityGrades?.some((v) => v.toLowerCase().includes(q)) ||
          p.applications?.some((a) => a.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeCategory, activeSubcat, query]);

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex flex-col justify-end bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        >
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        <div className="relative z-20 w-full pb-0 pt-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-primary" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
                Katalog Produk Gulf Oil & Shantui
              </span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h1 className="font-heading font-black text-white leading-[0.9] tracking-tighter text-[clamp(3rem,7vw,6rem)] mb-0">
              Produk &<br />
              <span className="text-primary">Solusi Teknis</span>
            </h1>
          </div>

          <div className="border-t border-white/10 mt-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                Rangkaian produk Gulf Oil mencakup pelumas otomotif, komersial, industri, dan alat berat — semuanya tersedia melalui PT. Bersama Energi Nusapersada.
              </p>
              <a
                href="https://indonesia.gulfoilltd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-colors flex-shrink-0"
              >
                <ExternalLink size={12} /> Gulf Oil Indonesia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Official Principal Highlight Strip */}
      <div className="bg-[#002b5b] py-3 text-center border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-white text-sm font-medium tracking-wide">Jelajahi portofolio global dan teknologi pelumas terkini dari Principal Kami:</span>
          <a 
            href="https://indonesia.gulfoilltd.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-[#ff6600] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-sm transition-colors"
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
                   setActiveSubcat('all');
                   setQuery('');
                 }}
                 className={`py-5 text-sm font-extrabold tracking-widest uppercase whitespace-nowrap border-b-[3px] transition-colors relative ${
                   activeCategory === cat.id 
                     ? 'text-[#002b5b] border-[#ff6600]' 
                     : 'text-gray-400 border-transparent hover:text-[#002b5b]'
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
            <h3 className="text-xl font-bold text-[#002b5b] mb-6 flex items-center gap-2">
              <Package2 size={24} className="text-[#ff6600]" /> 
              Saring Kategori
            </h3>

            {activeCategory_?.subcategories && activeCategory_.subcategories.length > 0 ? (
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
                <button
                  onClick={() => setActiveSubcat('all')}
                  className={`flex-shrink-0 text-left px-5 py-3 rounded-md text-[13px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeSubcat === 'all'
                      ? 'bg-[#002b5b] text-white border-[#002b5b] shadow-md'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#ff6600] hover:text-[#002b5b]'
                  }`}
                >
                  Lihat Semua
                </button>
                {activeCategory_.subcategories.map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubcat(sub.id)}
                    className={`flex-shrink-0 text-left px-5 py-3 rounded-md text-[13px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                      activeSubcat === sub.id
                        ? 'bg-[#002b5b] text-white border-[#002b5b] shadow-md'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#ff6600] hover:text-[#002b5b]'
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
              <h4 className="font-bold text-[#002b5b] mb-2 flex items-center gap-2">
                <DownloadCloud size={18} /> Informasi Teknis
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Detail teknis, PDS, serta rekomendasi level aplikasi ditujukan khusus pada mesin industri berat dan unit alat berat partner Shantui resmi.
              </p>
            </div>
          </div>

          {/* Product Area */}
          <div className="w-full lg:w-3/4">
            
            {/* Search Bar & Header */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
              <div>
                <h4 className="text-2xl font-extrabold text-[#002b5b] tracking-tight">{activeCategory_?.name}</h4>
                <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">Menampilkan {displayed.length} Varian Pelumas</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative w-full sm:w-72">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cari produk atau viskositas..."
                    className="w-full bg-white border border-gray-300 pl-10 pr-4 py-2.5 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:border-transparent transition-all shadow-sm block"
                  />
                  {query && (
                    <button 
                      onClick={() => setQuery('')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 text-xs font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 border border-gray-200 rounded-md p-1 bg-gray-50">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-[#002b5b]' : 'text-gray-400 hover:text-gray-600'}`}
                    title="Tampilan Daftar"
                  >
                    <List size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#002b5b]' : 'text-gray-400 hover:text-gray-600'}`}
                    title="Tampilan Kartu"
                  >
                    <LayoutGrid size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* LIST VIEW */}
            {viewMode === 'list' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="hidden lg:grid grid-cols-[80px_1fr_250px_150px_80px] gap-6 px-8 py-4 border-b border-gray-100 bg-gray-50/50">
                  <div className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400">#</div>
                  <div className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400">Produk</div>
                  <div className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400">Viskositas</div>
                  <div className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400">Kemasan</div>
                  <div />
                </div>

                <AnimatePresence mode="popLayout">
                  {displayed.length > 0 ? (
                    displayed.map((p, i) => <ProductRow key={p.id} product={p} index={i} />)
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-24 text-center"
                    >
                      <Package2 size={32} className="text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 text-sm font-medium">Tidak ada produk yang cocok dengan pencarian.</p>
                      <button
                        onClick={() => setQuery('')}
                        className="mt-6 text-xs font-bold tracking-widest uppercase border border-gray-200 px-5 py-2.5 text-[#002b5b] hover:border-[#ff6600] transition-colors rounded-md"
                      >
                        Reset Pencarian
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* GRID VIEW */}
            {viewMode === 'grid' && (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {displayed.length > 0 ? (
                    displayed.map((product, index) => (
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
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-2 py-24 text-center border-2 border-dashed border-gray-200 rounded-xl"
                    >
                      <Package2 size={32} className="text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 text-sm font-medium">Tidak ada produk yang cocok dengan pencarian.</p>
                      <button
                        onClick={() => setQuery('')}
                        className="mt-6 text-xs font-bold tracking-widest uppercase border border-gray-200 px-5 py-2.5 text-[#002b5b] hover:border-[#ff6600] transition-colors rounded-md"
                      >
                        Reset Pencarian
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>

      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <div className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <DistributorCTA theme="primary" />
        </div>
      </div>

    </div>
  );
}
