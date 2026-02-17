'use client';

import { ArrowLeft, MapPin, Plus, Edit2, Trash2, Home, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AddressPage() {
  const [addresses, setAddresses] = useState([
    {
      id: '1',
      label: 'Rumah',
      name: 'Ahmad Rizki',
      phone: '+62 812-3456-7890',
      address: 'Jl. Merdeka No. 123, Kelurahan Sukamaju, Kecamatan Bandung Tengah',
      city: 'Bandung',
      province: 'Jawa Barat',
      zipCode: '40132',
      isDefault: true,
      icon: Home
    },
    {
      id: '2',
      label: 'Kantor',
      name: 'Ahmad Rizki',
      phone: '+62 812-3456-7890',
      address: 'Jl. Asia Afrika No. 8, Kecamatan Sumur Bandung',
      city: 'Bandung',
      province: 'Jawa Barat',
      zipCode: '40111',
      isDefault: false,
      icon: Briefcase
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-32">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
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
                <h1 className="text-3xl font-bold">Alamat Saya</h1>
                <p className="text-white/80 text-sm">{addresses.length} alamat tersimpan</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition"
            >
              <Plus className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {addresses.map((address, index) => {
            const Icon = address.icon;
            
            return (
              <motion.div
                key={address.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 rounded-xl">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-800">{address.label}</h3>
                        {address.isDefault && (
                          <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold rounded-full">
                            Utama
                          </span>
                        )}
                      </div>
                      <p className="font-semibold text-gray-700 mb-1">{address.name}</p>
                      <p className="text-gray-600 text-sm mb-1">{address.phone}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {address.address}<br />
                        {address.city}, {address.province} {address.zipCode}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </motion.button>
                  {!address.isDefault && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Add New Address Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 p-6 border-2 border-dashed border-emerald-300 rounded-3xl hover:border-emerald-500 hover:bg-emerald-50 transition flex items-center justify-center gap-3 text-emerald-600 font-semibold"
        >
          <Plus className="w-6 h-6" />
          Tambah Alamat Baru
        </motion.button>
      </div>
    </div>
  );
}
