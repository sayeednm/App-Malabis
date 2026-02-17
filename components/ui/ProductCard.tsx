'use client';

import { ExternalLink, Star, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  marketplace: 'shopee' | 'tokopedia';
  rating: number;
  sold: number;
  discount?: number;
  badge?: 'Best Deal' | 'Top Rated' | 'Best Seller' | 'Recommended';
  shopUrl: string;
  shopName: string;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice,
  image, 
  marketplace,
  rating,
  sold,
  discount,
  badge,
  shopUrl,
  shopName
}: ProductCardProps) {

  const badgeColors = {
    'Best Deal': 'bg-gradient-to-r from-orange-500 to-red-500',
    'Top Rated': 'bg-gradient-to-r from-purple-500 to-pink-500',
    'Best Seller': 'bg-gradient-to-r from-blue-500 to-cyan-500',
    'Recommended': 'bg-gradient-to-r from-emerald-500 to-green-500',
  };

  const marketplaceColors = {
    'shopee': 'bg-gradient-to-r from-orange-500 to-red-500',
    'tokopedia': 'bg-gradient-to-r from-green-500 to-emerald-600',
  };

  const marketplaceNames = {
    'shopee': 'Shopee',
    'tokopedia': 'Tokopedia',
  };

  return (
    <motion.div 
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 ${badgeColors[badge]} text-white text-xs font-bold rounded-full shadow-lg`}>
            {badge}
          </div>
        )}

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
            -{discount}%
          </div>
        )}

        {/* Marketplace Badge */}
        <div className={`absolute bottom-3 left-3 px-3 py-1 ${marketplaceColors[marketplace]} text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1`}>
          <ShoppingBag className="w-3 h-3" />
          {marketplaceNames[marketplace]}
        </div>
      </div>
      
      <div className="p-5">
        {/* Shop Name */}
        <p className="text-xs text-gray-500 mb-1">{shopName}</p>
        
        {/* Product Name */}
        <h3 className="font-bold text-base mb-2 text-gray-800 line-clamp-2 min-h-[3rem]">
          {name}
        </h3>
        
        {/* Rating & Sold */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">{rating}</span>
          </div>
          <span className="text-xs text-gray-400">|</span>
          <span className="text-xs text-gray-500">{sold.toLocaleString('id-ID')} terjual</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <a 
          href={shopUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-4 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
          >
            <span>Lihat di {marketplaceNames[marketplace]}</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
}
