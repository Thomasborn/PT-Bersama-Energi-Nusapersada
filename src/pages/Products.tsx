import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gulfCategories, gulfProducts } from '../data/gulfProducts';
import DistributorCTA from '../components/DistributorCTA';
import { ChevronDown, ChevronUp, DownloadCloud, Search, ExternalLink, ArrowRight } from 'lucide-react';
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
      className="border-b border-gray-100 group bg-white"
    >
      {/* Main row — clickable header */}
      <div
        onClick={() => setOpen(!open)}
        className="grid grid-cols-[1fr_auto] lg:grid-cols-[60px_1fr_220px_120px_80px] items-center gap-4 px-4 lg:px-8 py-6 cursor-pointer hover:bg-[#f8f9fa] transition-colors border-l-4 border-transparent hover:border-[#ff6600]"
      >
        {/* Row number */}
        <span className="hidden lg:block font-heading font-black text-2xl text-gray-200 group-hover:text-[#ff6600]/40 transition-colors tracking-tighter select-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Name + brand */}
        <div className="flex items-center gap-4 min-w-0">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover flex-shrink-0 hidden sm:block border border-gray-100 shadow-sm"
            />
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <img
                src={product.partnerBrand === 'Gulf' ? '/gulf.png' : '/shantui-logo.jpeg'}
                alt={product.partnerBrand}
                className="h-5 object-contain"
              />
              {product.subcategoryId && (
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#ff6600] border border-[#ff6600]/20 px-2 py-0.5 rounded-sm bg-[#ff6600]/5">
                  {product.subcategoryId.replace(/-/g, ' ')}
                </span>
              )}
            </div>
            <h3 className="font-heading font-bold text-[#002b5b] text-xl tracking-tight leading-tight truncate group-hover:text-[#ff6600] transition-colors">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Viscosity grades */}
        <div className="hidden lg:flex flex-wrap gap-1.5">
          {product.viscosityGrades?.slice(0, 3).map((g: string) => (
            <span key={g} className="text-xs font-bold border border-gray-200 px-2 py-1 text-gray-600 bg-white">
              {g}
            </span>
          ))}
          {(product.viscosityGrades?.length ?? 0) > 3 && (
            <span className="text-xs font-bold border border-gray-200 px-2 py-1 text-gray-400 bg-gray-50">
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
              className="text-gray-400 hover:text-[#ff6600] transition-colors p-1"
              title="Product Data Sheet"
            >
              <DownloadCloud size={18} />
            </a>
          )}
          {open
            ? <ChevronUp size={20} className="text-[#ff6600] flex-shrink-0" />
            : <ChevronDown size={20} className="text-gray-400 flex-shrink-0 group-hover:text-[#ff6600]" />
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
            <div className="bg-[#f8f9fa] border-t border-gray-100 px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* Summary + image */}
              <div className="md:col-span-2">
                {product.image && (
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-6 border border-gray-200 shadow-sm" />
                )}
                <p className="text-gray-600 text-[15px] leading-relaxed mb-8">{product.summary}</p>

                {/* Applications */}
                {product.applications?.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs font-bold tracking-widest uppercase text-[#002b5b] mb-3 border-b border-gray-200 pb-2">Aplikasi Terdaftar</div>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((a: string, i: number) => (
                        <span key={i} className="text-[13px] border border-gray-200 bg-white px-3 py-1.5 text-gray-600 font-medium">{a}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right: specs + benefits */}
              <div className="space-y-8">
                {/* Specs */}
                {product.specifications?.length > 0 && (
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-[#002b5b] mb-3 border-b border-gray-200 pb-2">Spesifikasi OEM</div>
                    <ul className="space-y-2">
                      {product.specifications.map((s: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#ff6600] flex-shrink-0 mt-1.5" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key benefits */}
                {product.keyBenefits?.length > 0 && (
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-[#002b5b] mb-3 border-b border-gray-200 pb-2">Keunggulan Utama</div>
                    <ul className="space-y-2">
                      {product.keyBenefits.map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#002b5b] flex-shrink-0 mt-1.5" /> {b}
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
                    className="inline-flex items-center justify-center w-full gap-2 bg-white border-2 border-[#002b5b] text-[#002b5b] px-4 py-3 font-bold text-xs tracking-widest uppercase hover:bg-[#002b5b] hover:text-white transition-colors"
                  >
                    <DownloadCloud size={16} /> Unduh Dokumen PDS
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

// ─── Main Products Page ───────────────────────────────────────────────────────
export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSubcat, setActiveSubcat] = useState<string>('all');
  const [query, setQuery] = useState('');

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
    <div className="w-full overflow-x-hidden bg-[#f8f9fa] mt-[112px]">

      {/* ── HERO BANNER (Official Layout) ────────────────────────────────────── */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-[#002b5b] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        >
          <div className="absolute inset-0 bg-[#002b5b]/70 mix-blend-multiply" />
        </div>

        {/* Diagonal Graphic Overlays */}
        <div 
          className="absolute top-0 right-0 h-[100%] w-[50%] md:w-[35%] bg-[#ff6600] z-10 opacity-90"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 h-[70%] w-[60%] md:w-[45%] bg-[#81d4fa]/30 z-[11] mix-blend-screen"
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
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff6600]">
                  Katalog Resmi
                </span>
              </div>
              <h1 className="font-heading font-black text-white leading-[0.9] tracking-tighter text-[clamp(3rem,6vw,5.5rem)] mb-6">
                Pelumas & Solusi<br />
                <span className="text-[#ff6600]">Kinerja Tinggi</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed hidden md:block">
                Menyediakan rangkaian pelumas kelas dunia untuk memenuhi standar spesifikasi OEM operasional mesin modern dan alat berat industri secara presisi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FILTER + SEARCH BAR ──────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 sticky top-[112px] z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">

            {/* Category tabs */}
            <div className="flex flex-wrap gap-0 py-1 lg:py-0 w-full lg:w-auto">
              <button
                onClick={() => { setActiveCategory('all'); setActiveSubcat('all'); }}
                className={`px-6 py-5 text-[13px] font-bold tracking-widest uppercase transition-colors border-b-4 ${activeCategory === 'all' ? 'text-[#ff6600] border-[#ff6600] bg-orange-50/50' : 'text-[#002b5b] border-transparent hover:text-[#ff6600] hover:bg-gray-50'}`}
              >
                Semua Filter
              </button>
              {gulfCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setActiveSubcat('all'); }}
                  className={`px-6 py-5 text-[13px] font-bold tracking-widest uppercase transition-colors border-b-4 ${activeCategory === cat.id ? 'text-[#ff6600] border-[#ff6600] bg-orange-50/50' : 'text-[#002b5b] border-transparent hover:text-[#ff6600] hover:bg-gray-50'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex-1 flex items-center gap-3 py-4 lg:py-0 lg:px-8 bg-gray-50/50 mx-4 lg:mx-0 my-2 lg:my-0 rounded-md border lg:border-none border-gray-200 lg:bg-transparent">
              <Search size={18} className="text-[#002b5b] flex-shrink-0" />
              <input
                type="text"
                placeholder="Cari kode produk, viskositas, fungsi..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent text-[15px] font-medium text-[#002b5b] placeholder-gray-400 outline-none w-full"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-[#ff6600] hover:text-[#e65a00] p-1 font-bold">✕</button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-category pills */}
      {activeCategory_ && activeCategory_?.subcategories && activeCategory_?.subcategories?.length > 0 && (
        <div className="bg-[#f8f9fa] border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveSubcat('all')}
              className={`text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all ${activeSubcat === 'all' ? 'bg-[#ff6600] text-white border-[#ff6600] shadow-md' : 'border-gray-300 text-gray-600 bg-white hover:border-[#002b5b] hover:text-[#002b5b]'}`}
            >
              Semua Tipe
            </button>
            {activeCategory_.subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubcat(sub.id)}
                className={`text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all ${activeSubcat === sub.id ? 'bg-[#ff6600] text-white border-[#ff6600] shadow-md' : 'border-gray-300 text-gray-600 bg-white hover:border-[#002b5b] hover:text-[#002b5b]'}`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── PRODUCT LISTING ──────────────────────────────────────────────────── */}
      <section className="bg-white py-12 min-h-[50vh]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          {/* Category header */}
          <div className="py-6 mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading font-black text-[#002b5b] text-3xl md:text-5xl tracking-tight mb-2">
                {activeCategory === 'all' ? 'Seluruh Produk' : activeCategory_?.name}
              </h2>
              {activeCategory_ && (
                <p className="text-gray-500 text-[15px] mt-2 max-w-2xl">{activeCategory_?.description}</p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-widest uppercase text-white bg-[#002b5b] px-4 py-2 rounded-full shadow-sm">
                {displayed.length} Tersedia
              </span>
            </div>
          </div>

          {/* Table header row */}
          <div className="hidden lg:grid grid-cols-[60px_1fr_220px_120px_80px] gap-4 px-8 py-4 bg-[#f8f9fa] border-y border-gray-200">
            <div className="text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">No</div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">Informasi Produk</div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">Viskositas SAE</div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">Kemasan</div>
            <div className="text-right text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">Aksi</div>
          </div>

          {/* Product rows */}
          <div className="bg-white border-b border-gray-100">
            <AnimatePresence mode="popLayout">
              {displayed.length > 0 ? (
                displayed.map((p, i) => <ProductRow key={p.id} product={p} index={i} />)
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-32 text-center bg-[#f8f9fa] my-8 border border-dashed border-gray-300"
                >
                  <p className="font-heading font-black text-6xl text-gray-200 tracking-tighter mb-4">0</p>
                  <p className="text-[#002b5b] font-medium text-lg">Tidak ada spesifikasi yang cocok dengan filter.</p>
                  <button
                    onClick={() => { setActiveCategory('all'); setActiveSubcat('all'); setQuery(''); }}
                    className="mt-6 text-[13px] font-bold tracking-widest uppercase border-2 border-[#002b5b] px-8 py-3 text-[#002b5b] hover:bg-[#002b5b] hover:text-white transition-colors"
                  >
                    Reset Filter Pencarian
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── CATEGORY OVERVIEW GRID ───────────────────────────────────────────── */}
      {activeCategory === 'all' && !query && (
        <section className="bg-[#f8f9fa] py-24 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#ff6600]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff6600]">Kategori Utama</span>
            </div>
            <h2 className="font-heading font-black text-[#002b5b] text-[clamp(2.5rem,4.5vw,4rem)] leading-[1] tracking-tighter mb-16">
              Sektor Industri & Konsumer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gulfCategories.map((cat, idx) => (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => { setActiveCategory(cat.id); setActiveSubcat('all'); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                  className="group block bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden text-left"
                >
                  <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                    <img 
                      src={cat.imageUrl} 
                      alt={cat.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#002b5b]/30 group-hover:bg-[#002b5b]/10 transition-colors" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading font-black text-3xl text-[#002b5b] group-hover:text-[#ff6600] transition-colors mb-3">
                      {cat.name}
                    </h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#ff6600] border-b-2 border-transparent group-hover:border-[#ff6600] pb-1 transition-all">
                      Jelajahi Seri Ini <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <DistributorCTA theme="primary" />
        </div>
      </div>

    </div>
  );
}
