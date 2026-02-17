'use client';

import { ArrowLeft, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data';

export default function FavoritePage() {
  // Simulasi favorite products (ambil 4 produk pertama)
  const favoriteProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-32">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition"
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Favorit Saya</h1>
              <p className="text-white/80 text-sm">{favoriteProducts.length} produk favorit</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {favoriteProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-2xl"
            >
              <Heart className="w-16 h-16 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Belum Ada Favorit</h2>
            <p className="text-gray-600 text-center mb-8 max-w-md">
              Tambahkan produk ke favorit untuk melihatnya di sini
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl"
              >
                Jelajahi Produk
              </motion.button>
            </Link>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-800">Produk yang Anda Sukai</h2>
              </div>
              <p className="text-gray-600">Koleksi produk pilihan Anda</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favoriteProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    marketplace={product.marketplace}
                    rating={product.rating}
                    sold={product.sold}
                    discount={product.discount}
                    badge={product.badge}
                    shopUrl={product.shopUrl}
                    shopName={product.shopName}
                  />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
