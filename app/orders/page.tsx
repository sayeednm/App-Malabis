'use client';

import { ArrowLeft, Package, Clock, CheckCircle, Truck, MapPin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatPrice } from '@/lib/data';

export default function OrdersPage() {
  const orders = [
    {
      id: 'ORD-001',
      date: '12 Feb 2024',
      status: 'delivered',
      items: 2,
      total: 350000,
      products: ['Tunik Premium Cotton', 'Hijab Segi Empat']
    },
    {
      id: 'ORD-002',
      date: '10 Feb 2024',
      status: 'shipping',
      items: 1,
      total: 450000,
      products: ['Gamis Syari Elegant']
    },
    {
      id: 'ORD-003',
      date: '8 Feb 2024',
      status: 'processing',
      items: 3,
      total: 485000,
      products: ['Kemeja Koko Pria', 'Sarung Premium', 'Hijab Segi Empat']
    },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'delivered':
        return { icon: CheckCircle, label: 'Terkirim', color: 'from-green-500 to-emerald-500', bg: 'bg-green-50', text: 'text-green-700' };
      case 'shipping':
        return { icon: Truck, label: 'Dalam Pengiriman', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-700' };
      case 'processing':
        return { icon: Clock, label: 'Diproses', color: 'from-orange-500 to-yellow-500', bg: 'bg-orange-50', text: 'text-orange-700' };
      default:
        return { icon: Package, label: 'Pending', color: 'from-gray-500 to-gray-600', bg: 'bg-gray-50', text: 'text-gray-700' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-32">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/profile">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition"
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Pesanan Saya</h1>
              <p className="text-white/80 text-sm">{orders.length} pesanan</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {orders.map((order, index) => {
            const statusConfig = getStatusConfig(order.status);
            const StatusIcon = statusConfig.icon;

            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{order.id}</h3>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 ${statusConfig.bg} rounded-full`}>
                    <StatusIcon className={`w-4 h-4 ${statusConfig.text}`} />
                    <span className={`text-sm font-semibold ${statusConfig.text}`}>
                      {statusConfig.label}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {order.products.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600">
                      <Package className="w-4 h-4" />
                      <span className="text-sm">{product}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Total Pembayaran</p>
                    <p className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      {formatPrice(order.total)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {order.status === 'delivered' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold text-sm"
                      >
                        Beli Lagi
                      </motion.button>
                    )}
                    {order.status === 'shipping' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-sm flex items-center gap-2"
                      >
                        <MapPin className="w-4 h-4" />
                        Lacak Paket
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold text-sm"
                    >
                      Detail
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
