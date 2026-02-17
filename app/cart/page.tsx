'use client';

import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const total = getTotalPrice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-32">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white shadow-xl">
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
              <h1 className="text-3xl font-bold">Keranjang Belanja</h1>
              <p className="text-white/80 text-sm">{items.length} item dalam keranjang</p>
            </div>
          </div>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mb-6 shadow-2xl"
          >
            <ShoppingBag className="w-16 h-16 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Keranjang Kosong</h2>
          <p className="text-gray-600 text-center mb-8 max-w-md">
            Belum ada produk di keranjang Anda. Yuk mulai belanja sekarang!
          </p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition"
            >
              Mulai Belanja
            </motion.button>
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-6 bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-32 h-32 relative rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                        {formatPrice(item.price)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-2">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 bg-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-500 hover:text-white rounded-lg transition-all shadow"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="w-12 text-center font-bold text-lg">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 bg-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-500 hover:text-white rounded-lg transition-all shadow"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                        
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeItem(item.id)}
                          className="p-3 bg-red-50 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white rounded-xl transition-all"
                        >
                          <Trash2 className="w-5 h-5 text-red-500 hover:text-white" />
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Subtotal</p>
                      <p className="text-xl font-bold text-gray-800">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 shadow-xl sticky top-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-800">Ringkasan</h2>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({items.length} items)</span>
                    <span className="font-semibold">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Ongkir</span>
                    <span className="font-semibold text-green-600">GRATIS</span>
                  </div>
                  <div className="border-t-2 border-dashed pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">Total</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </div>

                <Link href="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition mb-4"
                  >
                    Checkout Sekarang
                  </motion.button>
                </Link>

                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition"
                  >
                    Lanjut Belanja
                  </motion.button>
                </Link>

                {/* Promo Banner */}
                <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl">
                  <p className="text-sm text-gray-700">
                    🎉 <span className="font-semibold">Gratis ongkir</span> untuk pembelian di atas Rp 200.000
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
