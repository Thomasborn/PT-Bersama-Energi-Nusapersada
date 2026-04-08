import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gulfCategories, gulfProducts } from '../data/gulfProducts';
import DistributorCTA from '../components/DistributorCTA';
import { ChevronDown, ChevronUp, DownloadCloud, Search, ExternalLink, ArrowRight, LayoutGrid, List, CheckCircle2, Zap, Package2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

// ─── Utility: Get fallback image based on category ─────────────────────────────
const getFallbackImage = (subcategoryId?: string): string => {
  if (!subcategoryId) return '/shantui/escavator/medium.png';

  const fallbackMap: { [key: string]: string } = {
    'mining-excavator': '/shantui/escavator/mining.png',
    'large-excavator': '/shantui/escavator/large.png',
    'medium-excavator': '/shantui/escavator/medium.png',
    'small-excavator': '/shantui/escavator/small.png',
    'mini-excavator': '/shantui/escavator/small.png',
    'wheel-excavator': '/shantui/escavator/wheel.png',
    'small-bulldozer': '/shantui/escavator/medium.png',
    'medium-bulldozer': '/shantui/escavator/large.png',
    'large-bulldozer': '/shantui/escavator/large.png',
    'wheel-loader': '/shantui/escavator/medium.png',
  };

  return fallbackMap[subcategoryId] || '/shantui/escavator/medium.png';
};

// ─── Flat product row / expandable ───────────────────────────────────────────
const ProductRow = ({ product, index }: { product: any; index: number }) => {
  const [open, setOpen] = useState(true);
  const [imageError, setImageError] = useState(false);
  const fallbackImage = getFallbackImage(product.subcategoryId);
  const displayImage = imageError ? fallbackImage : product.image;

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
        className="flex items-center gap-4 lg:gap-6 px-4 lg:px-8 py-5 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        {/* Row number */}
        <span className="hidden lg:block font-heading font-black text-2xl text-gray-200 group-hover:text-[#002b5b]/20 transition-colors tracking-tighter select-none w-10 flex-shrink-0 text-center">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Thumbnail */}
        {product.image || displayImage ? (
          <img
            src={displayImage || product.image}
            alt={product.name}
            className="w-12 h-12 rounded-lg object-contain bg-gray-50 p-1 flex-shrink-0 hidden sm:block"
            onError={(e) => {
              setImageError(true);
              if (!imageError) {
                (e.target as HTMLImageElement).src = fallbackImage;
              }
            }}
          />
        ) : null}

        {/* Name + subcategory — takes remaining space */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="font-heading font-bold text-[#002b5b] text-base md:text-lg tracking-tight leading-snug group-hover:text-[#ff6600] transition-colors whitespace-nowrap">
              {product.name}
            </h3>
            {product.subcategoryId && (
              <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#ff6600]/70 border border-[#ff6600]/20 px-2 py-0.5 rounded bg-[#ff6600]/5 flex-shrink-0 hidden md:inline-block">
                {product.subcategoryId.replace(/-/g, ' ')}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400 leading-snug line-clamp-1 hidden md:block max-w-md">{product.summary}</p>
        </div>

        {/* Viscosity grades */}
        <div className="hidden lg:flex flex-wrap gap-1 flex-shrink-0 max-w-[200px] justify-end">
          {product.viscosityGrades?.slice(0, 3).map((g: string) => (
            <span key={g} className="text-[11px] font-semibold border border-gray-200 px-2 py-0.5 text-gray-500 rounded">
              {g}
            </span>
          ))}
          {(product.viscosityGrades?.length ?? 0) > 3 && (
            <span className="text-[11px] font-semibold border border-gray-200 px-2 py-0.5 text-gray-300 rounded">
              +{product.viscosityGrades.length - 3}
            </span>
          )}
        </div>

        {/* Packs */}
        <div className="hidden lg:block text-[11px] text-gray-400 font-medium flex-shrink-0 w-[100px] text-right">
          {product.availablePacks?.join(' · ') || '—'}
        </div>

        {/* Expand / PDS */}
        <div className="flex items-center gap-2 justify-end flex-shrink-0">
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
                {product.image || displayImage ? (
                  <div className="w-full h-52 bg-white rounded-lg border border-gray-100 flex items-center justify-center p-4 mb-6 overflow-hidden">
                    <img
                      src={displayImage || product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        setImageError(true);
                        if (!imageError) {
                          (e.target as HTMLImageElement).src = fallbackImage;
                        }
                      }}
                    />
                  </div>
                ) : null}
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
const OfficialProductCard = ({ product, index, selectedBrand }: { product: any; index: number; selectedBrand: 'Gulf' | 'Shantui' | null }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [imageError, setImageError] = useState(false);
  const fallbackImage = getFallbackImage(product.subcategoryId);
  const displayImage = imageError ? fallbackImage : product.image;

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
        className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 cursor-pointer border-b border-gray-100 overflow-hidden"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div className="absolute inset-0 w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}>
          {product.image || displayImage ? (
            <img
              src={displayImage || product.image}
              alt={product.name}
              className="w-full h-full object-contain p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                setImageError(true);
                if (!imageError) {
                  (e.target as HTMLImageElement).src = fallbackImage;
                }
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50 flex items-center justify-center">
              <span className="text-xs text-gray-400 font-bold uppercase">No Image</span>
            </div>
          )}
        </motion.div>

        {/* Brand Logo & Pill */}
        <div className="absolute top-4 left-4 flex gap-2 items-center z-10">
          <div className="bg-white p-1.5 rounded-md shadow-md border border-gray-200 w-10 h-10 flex items-center justify-center backdrop-blur-sm">
            <img
              src={product.partnerBrand === 'Gulf' ? '/gulf.png' : '/shantui-logo.jpeg'}
              alt={product.partnerBrand}
              className="w-full h-full object-contain"
            />
          </div>
          {product.subcategoryId && (
            <span className="bg-[#002b5b] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">
              {product.subcategoryId.replace(/-/g, ' ')}
            </span>
          )}
        </div>

        {/* Download PDS or PDF Catalog */}
        {(product.pdsUrl || (selectedBrand === 'Shantui' && product.partnerBrand === 'Shantui')) && (
          <div className="absolute top-4 right-4 z-10">
            {product.pdsUrl && (
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
            )}
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
              {/* Quick Specs Strip - Only for Gulf Oil products */}
              {product.partnerBrand === 'Gulf' && (
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
              )}

              {/* Specifications Strip - For all products */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  {product.specifications.map((spec: string, i: number) => (
                    <div key={i}>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Spek {i + 1}</span>
                      <span className="text-sm font-medium text-[#002b5b]">{spec}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Deep Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {product.partnerBrand === 'Gulf' && product.approvals && product.approvals[0] !== '-' && (
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
                  <div className={product.partnerBrand === 'Gulf' ? '' : 'md:col-span-2'}>
                    <h6 className="text-xs text-[#002b5b] uppercase tracking-widest font-bold mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                      <Package2 size={16} className="text-[#ff6600]" /> Aplikasi Optimal
                    </h6>
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
  const { t } = useLanguage();
  const [selectedBrand, setSelectedBrand] = useState<'Gulf' | 'Shantui' | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSubcat, setActiveSubcat] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');

  // Filter categories based on selected brand
  const brandCategories = useMemo(() => {
    if (!selectedBrand) return [];
    const filtered = gulfCategories.filter(c => c.brand === selectedBrand);
    return filtered;
  }, [selectedBrand]);

  const activeCategory_ = gulfCategories.find((c) => c.id === activeCategory);

  const displayed = useMemo(() => {
    let list = gulfProducts;
    if (selectedBrand) {
      list = list.filter(p => p.partnerBrand === selectedBrand);
    }
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
  }, [selectedBrand, activeCategory, activeSubcat, query]);

  // Brand Chooser Component
  const BrandSelection = () => (
    <div className="min-h-[90vh] bg-white flex flex-col items-center justify-center px-6 lg:px-12 py-24">
      <div className="max-w-4xl w-full text-center mb-24">
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-px w-12 bg-gray-100" />
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">{t('products.choosePrincipal')}</span>
          <div className="h-px w-12 bg-gray-100" />
        </div>
        <h2 className="font-heading font-medium text-secondary text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tighter">
          {t('products.curatedSolutions')}
        </h2>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Brand: Gulf */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => {
            setSelectedBrand('Gulf');
            setActiveCategory('all');
          }}
          className="group cursor-pointer"
        >
          <div className="relative aspect-[16/10] overflow-hidden mb-10 grayscale hover:grayscale-0 transition-all duration-1000 border border-gray-100 bg-gray-50">
            <img
              src="https://images.topgear.com.ph/topgear/images/2024/09/13/gulf-powertrac-scooter-oil-10-1726215750.jpg"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-700" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img src="/gulf.png" alt="Gulf" className="max-h-24 object-contain shadow-2xl transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{t('products.gulfLubes')}</span>
            <div className="h-px w-8 bg-gray-100" />
          </div>
          <h3 className="font-heading font-medium text-secondary text-3xl mb-4 flex items-center justify-between">
            Gulf Oil
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-gray-200" />
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{t('products.gulfDesc')}</p>
        </motion.div>

        {/* Brand: Shantui */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => {
            setSelectedBrand('Shantui');
            setActiveCategory('shantui');
          }}
          className="group cursor-pointer"
        >
          <div className="relative aspect-[16/10] overflow-hidden mb-10 grayscale hover:grayscale-0 transition-all duration-1000 border border-gray-100 bg-gray-50">
            <img
              src="https://shantuiaustralia.com.au/wp-content/uploads/2024/01/Excavator-SE17.png"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-700" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img src="/shantui-logo.jpeg" alt="Shantui" className="max-h-16 object-contain bg-white/90 p-4 shadow-2xl transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{t('products.heavyEquipment')}</span>
            <div className="h-px w-8 bg-gray-100" />
          </div>
          <h3 className="font-heading font-medium text-secondary text-3xl mb-4 flex items-center justify-between">
            Shantui Machinery
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-gray-200" />
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{t('products.shantuiDesc')}</p>
        </motion.div>
      </div>
    </div>
  );

  if (!selectedBrand) {
    return <BrandSelection />;
  }

  return (
    <div className="w-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedBrand}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* ── HERO ─────────────────────────────────────────────────────────────── */}
          <section className="relative min-h-[50vh] flex flex-col justify-end bg-secondary overflow-hidden">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedBrand === 'Gulf' ? '/gulf/background.png' : 'https://www.shantui-global.com/upload/images/2024/07/05/9733632409d940508dbe56ba4dabfd21.jpg'})` }}
            >
              <div className="absolute inset-0 bg-secondary/85 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-20 w-full pb-0 pt-40">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-16 bg-primary" />
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
                      Katalog {selectedBrand}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-primary transition-colors flex items-center gap-3"
                  >
                    <span>/ {t('products.changeBrand')}</span>
                    <ArrowRight size={12} className="rotate-180" />
                  </button>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h1 className="font-heading font-medium text-white leading-[1] tracking-tighter text-[clamp(2.5rem,6vw,5rem)] mb-0">
                  {selectedBrand === 'Gulf' ? t('products.globalLubes') : t('products.heavyEquipment')}
                  <br />
                  <span className="text-primary italic font-serif">Tech Solutions</span>
                </h1>
              </div>

              <div className="border-t border-white/10 mt-12 bg-black/20">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                    {selectedBrand === 'Gulf'
                      ? t('products.gulfHeroSubtitle')
                      : t('products.shantuiHeroSubtitle')}
                  </p>
                  <a
                    href={selectedBrand === 'Gulf' ? 'https://indonesia.gulfoilltd.com/' : 'https://www.shantui-global.com/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    //buat bacgkround tombol putih
                    className="inline-flex items-center gap-2 bg-white border border-primary/30 text-primary px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all flex-shrink-0"
                  >
                    <ExternalLink size={12} /> {t('products.visitOfficialWebsite')} {selectedBrand}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Navigation - Brand Specific */}
          <div className="sticky top-[56px] md:top-[64px] z-40 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex overflow-x-auto no-scrollbar gap-8 lg:gap-12">
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveSubcat('all');
                  }}
                  className={`py-5 text-xs tracking-[0.2em] uppercase whitespace-nowrap border-b-2 transition-all ${activeCategory === 'all'
                    ? 'text-secondary font-bold border-primary'
                    : 'text-gray-400 font-medium border-transparent hover:text-secondary'
                    }`}
                >
                  {t('products.allCategories')}
                </button>
                {brandCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setActiveSubcat('all');
                    }}
                    className={`py-5 text-xs tracking-[0.2em] uppercase whitespace-nowrap border-b-2 transition-all ${activeCategory === cat.id
                      ? 'text-secondary font-bold border-primary'
                      : 'text-gray-400 font-medium border-transparent hover:text-secondary'
                      }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row gap-12 items-start relative pb-10">

              {/* Sidebar Filters */}
              <div className="w-full lg:w-1/4 lg:sticky lg:top-40">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-8 bg-primary/30" />
                  <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                    {t('products.filterByType')}
                  </h3>
                </div>

                {activeCategory_?.subcategories && activeCategory_.subcategories.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setActiveSubcat('all')}
                      className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest transition-all border rounded-md ${activeSubcat === 'all'
                        ? 'bg-secondary text-white border-secondary shadow-md'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-secondary/50 hover:bg-gray-50'
                        }`}
                    >
                      ✓ {t('products.allTypes')}
                    </button>
                    {activeCategory_.subcategories.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveSubcat(sub.id)}
                        className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest transition-all border rounded-md ${activeSubcat === sub.id
                          ? 'bg-secondary text-white border-secondary shadow-md'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-secondary/50 hover:bg-gray-50'
                          }`}
                      >
                        {activeSubcat === sub.id && '✓ '}{sub.name}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{t('products.standardProducts')}</p>
                  </div>
                )}

                <div className="hidden lg:block mt-24 border-l border-gray-100 pl-8 py-4">
                  <h4 className="text-[10px] font-black text-secondary tracking-[0.2em] uppercase mb-4">💡 {t('products.technicalConsultation')}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {t('products.technicalConsultationDesc')}
                  </p>
                </div>
              </div>

              {/* Product Area */}
              <div className="w-full lg:w-3/4">
                <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                  <div>
                    <h4 className="text-4xl font-medium text-secondary tracking-tighter mb-2">
                      {activeCategory === 'all' ? `Katalog ${selectedBrand}` : activeCategory_?.name}
                    </h4>
                    {displayed.length} {t('products.foundCount')}
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    {selectedBrand === 'Shantui' && (
                      <a
                        href="/shantui/shantui_excavator_catalog.pdf"
                        download="Shantui_Excavator_Catalog.pdf"
                        className="inline-flex items-center gap-2 bg-dark-brown text-white px-6 py-3 text-[11px] font-bold tracking-widest uppercase hover:bg-brown-black transition-all shadow-md hover:shadow-lg"
                        title="Download Shantui Excavator Catalog PDF"
                      >
                        <DownloadCloud size={14} /> {t('products.downloadCatalog')}
                      </a>
                    )}
                    <div className="relative">
                      <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={t('products.searchPlaceholder')}
                        className="bg-gray-50 border-none pl-11 pr-8 py-3 text-xs focus:ring-1 focus:ring-primary w-full sm:w-64 transition-all"
                      />
                    </div>

                    <div className="flex items-center border border-gray-100 p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-secondary bg-gray-50' : 'text-gray-300'}`}
                      >
                        <LayoutGrid size={16} />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 transition-colors ${viewMode === 'list' ? 'text-secondary bg-gray-50' : 'text-gray-300'}`}
                      >
                        <List size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <motion.div layout className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  <AnimatePresence mode="popLayout">
                    {displayed.map((product, index) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                      >
                        {viewMode === 'grid' ? (
                          <OfficialProductCard product={product} index={index} selectedBrand={selectedBrand} />
                        ) : (
                          <ProductRow product={product} index={index} />
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {displayed.length === 0 && (
                  <div className="py-32 text-center">
                    <Package2 size={40} className="mx-auto text-gray-100 mb-6" />
                    <p className="text-gray-400 text-sm italic">{t('products.noProductsFound')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white py-32 border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <DistributorCTA theme="primary" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
