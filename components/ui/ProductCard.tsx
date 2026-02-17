'use client';

import { ShoppingCart, Check, Heart } from 'lucide-react';
import { formatPrice } from '@/lib/data';
import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Toast from './Toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
    setIsAdded(true);
    setShowToast(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Toast 
        message="Produk ditambahkan ke keranjang!"
        type="success"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      
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
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleFavorite}
            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg z-10"
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`} 
            />
          </motion.button>

          <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-lime-500 to-green-500 text-white text-xs font-bold rounded-full shadow-lg">
            NEW
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-base mb-2 text-gray-800 line-clamp-2 min-h-[3rem]">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              {formatPrice(price)}
            </span>
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(price + 50000)}
            </span>
          </div>

          <div className="flex gap-2">
            <Link href={`/product/${id}`} className="flex-1">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-4 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition"
              >
                Beli Sekarang
              </motion.button>
            </Link>
            
            <motion.button 
              onClick={handleAddToCart}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl transition-all shadow-lg ${
                isAdded 
                  ? 'bg-gradient-to-r from-lime-500 to-green-500' 
                  : 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:shadow-xl'
              }`}
            >
              {isAdded ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <ShoppingCart className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>

          <div className="flex items-center gap-1 mt-3 text-yellow-500">
            <span className="text-sm">⭐⭐⭐⭐⭐</span>
            <span className="text-xs text-gray-500">(4.9)</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
