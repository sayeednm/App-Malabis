'use client';

import { ArrowLeft, MapPin, Edit2, Tag, CreditCard, Truck, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { formatPrice } from '@/lib/data';
import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const [paymentMethod, setPaymentMethod] = useState('transfer');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = 0; // Free shipping
  const promoDiscount = 0;
  const total = subtotal + shippingFee - promoDiscount;

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setTimeout(() => {
        clearCart();
        window.location.href = '/';
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-32">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition"
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Checkout</h1>
              <p className="text-white/80 text-sm">Selesaikan pesanan Anda</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Items */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Produk Pesanan</h2>
              </div>
              
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl"
                  >
                    <div className="w-24 h-24 relative rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-emerald-600 font-semibold text-sm mb-2">{formatPrice(item.price)}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                        <span className="text-sm font-bold text-gray-800">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Shipping Address */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Alamat Pengiriman</h2>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-gray-800 mb-2">Alamat Rumah</p>
                      <p className="text-gray-700 leading-relaxed">
                        Jl. Merdeka No. 123, Kelurahan Sukamaju,<br />
                        Kecamatan Bandung Tengah, Bandung 40132<br />
                        Jawa Barat, Indonesia
                      </p>
                      <p className="text-gray-600 mt-2">📱 +62 812-3456-7890</p>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white hover:bg-teal-100 rounded-xl transition shadow"
                  >
                    <Edit2 className="w-5 h-5 text-teal-600" />
                  </motion.button>
                </div>
              </div>
            </motion.section>

            {/* Payment Method */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-lime-500 to-green-500 rounded-xl">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Metode Pembayaran</h2>
              </div>
              
              <div className="space-y-3">
                {[
                  { id: 'transfer', name: 'Transfer Bank', icon: '🏦' },
                  { id: 'ewallet', name: 'E-Wallet (GoPay, OVO, Dana)', icon: '💳' },
                  { id: 'cod', name: 'Bayar di Tempat (COD)', icon: '💵' },
                ].map((method) => (
                  <motion.button
                    key={method.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                      paymentMethod === method.id
                        ? 'border-emerald-500 bg-gradient-to-r from-green-50 to-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{method.icon}</span>
                        <span className="font-semibold text-gray-800">{method.name}</span>
                      </div>
                      {paymentMethod === method.id && (
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-xl sticky top-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Ringkasan Pembayaran</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Ongkos Kirim</span>
                  <span className="font-semibold text-green-600">GRATIS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-orange-600" />
                    <span className="text-sm text-gray-700">Kode Promo</span>
                  </div>
                  <button className="text-sm font-semibold text-orange-600">Gunakan</button>
                </div>
                <div className="border-t-2 border-dashed pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total Bayar</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePayment}
                disabled={isProcessing || items.length === 0}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Memproses...' : 'Bayar Sekarang'}
              </motion.button>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-100 text-green-700 rounded-xl text-center font-semibold"
                >
                  ✅ Pembayaran Berhasil!
                </motion.div>
              )}

              {/* Security Badge */}
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                <div className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-semibold">Pembayaran Aman & Terpercaya</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
