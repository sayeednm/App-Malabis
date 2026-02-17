'use client';

import { ArrowLeft, Heart, Share2, ShoppingCart, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { products, formatPrice } from '@/lib/data';
import { useCartStore } from '@/store/cartStore';
import { useParams, useRouter } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isFavorite, setIsFavorite] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Produk tidak ditemukan</h1>
          <Link href="/">
            <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-xl">
              Kembali ke Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    }
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-32">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition"
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.button>
            </Link>
            <h1 className="text-xl font-bold">Detail Produk</h1>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition"
            >
              <Share2 className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg z-10"
              >
                <Heart 
                  className={`w-6 h-6 transition-colors ${
                    isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
                  }`} 
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Title & Rating */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-lime-500 to-green-500 text-white text-xs font-bold rounded-full">
                  NEW
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                  Best Seller
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(4.9) • 127 Reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  {formatPrice(product.price)}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(product.price + 50000)}
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-bold rounded-full">
                  -15%
                </span>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Pilih Ukuran</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-500'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Jumlah</h3>
              <div className="flex items-center gap-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-white rounded-xl border-2 border-gray-200 hover:border-emerald-500 transition flex items-center justify-center font-bold text-xl"
                >
                  -
                </motion.button>
                <span className="text-2xl font-bold w-16 text-center">{quantity}</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-white rounded-xl border-2 border-gray-200 hover:border-emerald-500 transition flex items-center justify-center font-bold text-xl"
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow">
                <Truck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-xs text-gray-600">Gratis Ongkir</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow">
                <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-xs text-gray-600">Garansi 100%</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow">
                <RefreshCw className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <p className="text-xs text-gray-600">Bisa Retur</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-3">Deskripsi Produk</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.name} adalah produk fashion muslim berkualitas tinggi dengan bahan premium yang nyaman dipakai. 
                Cocok untuk berbagai acara, dari casual hingga formal. Desain modern dan elegan yang sesuai dengan syariat Islam.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-6 h-6" />
                Tambah ke Keranjang
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
