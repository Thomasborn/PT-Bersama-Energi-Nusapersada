import React from 'react';
import { motion } from 'motion/react';
import { ProductCategory } from '../data/gulfProducts';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GulfProductCardProps {
  category: ProductCategory;
  index: number;
}

export default function GulfProductCard({ category, index }: GulfProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm shadow-md">
          <img 
            src={category.brand === 'Gulf' ? '/gulf.png' : '/shantui-logo.jpeg'} 
            alt={category.brand} 
            className="h-6 object-contain" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
          <Link 
            to={`/products/${category.slug}`}
            className="text-white font-bold tracking-wider uppercase text-sm flex items-center gap-2"
          >
            Lihat Detail <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h4 className="text-2xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
          {category.name}
        </h4>
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
          {category.description}
        </p>
        
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="pt-4 border-t border-gray-100 mt-auto">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Subkategori:</span>
            <div className="flex flex-wrap gap-2">
              {category.subcategories.map((sub, i) => (
                <Link
                  key={sub.id}
                  to={`/products/${category.slug}/${sub.slug}`}
                  className="text-xs bg-gray-50 text-gray-700 hover:bg-primary hover:text-white px-3 py-1.5 rounded-sm transition-colors border border-gray-200 hover:border-primary"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
