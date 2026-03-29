import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      className="border-b border-gray-100 group"
    >
      {/* Main row — clickable header */}
      <div
        onClick={() => setOpen(!open)}
        className="grid grid-cols-[1fr_auto] lg:grid-cols-[60px_1fr_220px_120px_80px] items-center gap-4 px-4 lg:px-6 py-5 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        {/* Row number */}
        <span className="hidden lg:block font-heading font-black text-2xl text-gray-100 group-hover:text-primary/20 transition-colors tracking-tighter select-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Name + brand */}
        <div className="flex items-center gap-4 min-w-0">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-14 h-14 object-cover flex-shrink-0 hidden sm:block"
            />
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <img
                src={product.partnerBrand === 'Gulf' ? '/gulf.png' : '/shantui-logo.jpeg'}
                alt={product.partnerBrand}
                className="h-5 object-contain"
              />
              {product.subcategoryId && (
                <span className="text-[9px] font-black tracking-[0.15em] uppercase text-primary border border-primary/30 px-2 py-0.5">
                  {product.subcategoryId.replace(/-/g, ' ')}
                </span>
              )}
            </div>
            <h3 className="font-heading font-bold text-secondary text-lg tracking-tight leading-tight truncate group-hover:text-primary transition-colors">
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
                  <img src={product.image} alt={product.name} className="w-full h-52 object-cover mb-6" />
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

      {/* ── FILTER + SEARCH BAR ──────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">

            {/* Category tabs */}
            <div className="flex flex-wrap gap-0 py-2 lg:py-0">
              <button
                onClick={() => { setActiveCategory('all'); setActiveSubcat('all'); }}
                className={`px-5 py-4 text-xs font-bold tracking-widest uppercase transition-colors border-b-2 ${activeCategory === 'all' ? 'text-primary border-primary' : 'text-gray-400 border-transparent hover:text-secondary'}`}
              >
                Semua
              </button>
              {gulfCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setActiveSubcat('all'); }}
                  className={`px-5 py-4 text-xs font-bold tracking-widest uppercase transition-colors border-b-2 ${activeCategory === cat.id ? 'text-primary border-primary' : 'text-gray-400 border-transparent hover:text-secondary'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex-1 flex items-center gap-3 py-3 lg:py-0 lg:px-6">
              <Search size={15} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Cari produk, viskositas, aplikasi..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600 text-xs font-bold">✕</button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-category pills (only when a category with subcategories is selected) */}
      {activeCategory_ && activeCategory_?.subcategories && activeCategory_?.subcategories?.length > 0 && (
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSubcat('all')}
              className={`text-xs font-bold tracking-widest uppercase px-4 py-2 border transition-colors ${activeSubcat === 'all' ? 'bg-secondary text-white border-secondary' : 'border-gray-200 text-gray-500 hover:border-secondary hover:text-secondary'}`}
            >
              Semua
            </button>
            {activeCategory_.subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubcat(sub.id)}
                className={`text-xs font-bold tracking-widest uppercase px-4 py-2 border transition-colors ${activeSubcat === sub.id ? 'bg-secondary text-white border-secondary' : 'border-gray-200 text-gray-500 hover:border-secondary hover:text-secondary'}`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── PRODUCT LISTING ──────────────────────────────────────────────────── */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Category header */}
          <div className="py-10 border-b border-gray-100 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading font-black text-secondary text-3xl md:text-4xl tracking-tighter">
                {activeCategory === 'all' ? 'Semua Produk' : activeCategory_?.name}
              </h2>
              {activeCategory_ && (
                <p className="text-gray-400 text-sm mt-2 max-w-xl">{activeCategory_?.description}</p>
              )}
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
              {displayed.length} produk
            </span>
          </div>

          {/* Table header row */}
          <div className="hidden lg:grid grid-cols-[60px_1fr_220px_120px_80px] gap-4 px-6 py-3 border-b border-gray-100">
            <div className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-300">#</div>
            <div className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-300">Produk</div>
            <div className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-300">Viskositas</div>
            <div className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-300">Kemasan</div>
            <div />
          </div>

          {/* Product rows */}
          <AnimatePresence mode="popLayout">
            {displayed.length > 0 ? (
              displayed.map((p, i) => <ProductRow key={p.id} product={p} index={i} />)
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 text-center"
              >
                <p className="font-heading font-black text-5xl text-gray-100 tracking-tighter mb-4">0</p>
                <p className="text-gray-400 text-sm">Tidak ada produk yang cocok dengan filter.</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActiveSubcat('all'); setQuery(''); }}
                  className="mt-6 text-xs font-bold tracking-widest uppercase border border-gray-200 px-5 py-2.5 text-gray-500 hover:border-primary hover:text-primary transition-colors"
                >
                  Reset Filter
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CATEGORY OVERVIEW GRID ───────────────────────────────────────────── */}
      {activeCategory === 'all' && !query && (
        <section className="bg-gray-50 border-y border-gray-100 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Kategori Utama</span>
            </div>
            <h2 className="font-heading font-black text-secondary text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] tracking-tighter mb-16">
              Rangkaian Produk Gulf
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
              {gulfCategories.map((cat, idx) => (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => { setActiveCategory(cat.id); setActiveSubcat('all'); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                  className="relative group text-left overflow-hidden border-b border-r border-gray-200 last:border-b-0 [&:nth-last-child(2)]:border-b-0"
                >
                  <img src={cat.imageUrl} alt={cat.name} className="w-full h-56 object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-secondary/60 group-hover:bg-secondary/80 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
                    <div className="h-px w-8 bg-primary mb-3 group-hover:w-16 transition-all duration-300" />
                    <h3 className="font-heading font-black text-white text-2xl md:text-3xl tracking-tight mb-2">{cat.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4 max-w-sm">{cat.description}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary">
                      Lihat Produk <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <div className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <DistributorCTA theme="primary" />
        </div>
      </div>

    </div>
  );
}
