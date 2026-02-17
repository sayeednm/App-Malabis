'use client';

import { ArrowLeft, Bell, Lock, Globe, Moon, CreditCard, HelpCircle, Info } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsSections = [
    {
      title: 'Akun',
      items: [
        { icon: Lock, label: 'Ubah Password', href: '#' },
        { icon: CreditCard, label: 'Metode Pembayaran', href: '#' },
        { icon: Globe, label: 'Bahasa', value: 'Indonesia', href: '#' },
      ]
    },
    {
      title: 'Preferensi',
      items: [
        { icon: Bell, label: 'Notifikasi', toggle: true, value: notifications, onChange: setNotifications },
        { icon: Moon, label: 'Mode Gelap', toggle: true, value: darkMode, onChange: setDarkMode },
      ]
    },
    {
      title: 'Bantuan',
      items: [
        { icon: HelpCircle, label: 'Pusat Bantuan', href: '#' },
        { icon: Info, label: 'Tentang Malabis', href: '#' },
      ]
    },
  ];

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
              <h1 className="text-3xl font-bold">Pengaturan</h1>
              <p className="text-white/80 text-sm">Kelola preferensi Anda</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h2>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  
                  if (item.toggle) {
                    return (
                      <div key={itemIndex} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-emerald-50 rounded-xl">
                            <Icon className="w-6 h-6 text-emerald-600" />
                          </div>
                          <span className="font-semibold text-gray-800">{item.label}</span>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => item.onChange?.(!item.value)}
                          className={`relative w-14 h-8 rounded-full transition-colors ${
                            item.value ? 'bg-gradient-to-r from-emerald-500 to-green-500' : 'bg-gray-300'
                          }`}
                        >
                          <motion.div
                            animate={{ x: item.value ? 24 : 2 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                          />
                        </motion.button>
                      </div>
                    );
                  }

                  return (
                    <Link key={itemIndex} href={item.href || '#'}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-emerald-50 rounded-xl">
                            <Icon className="w-6 h-6 text-emerald-600" />
                          </div>
                          <span className="font-semibold text-gray-800">{item.label}</span>
                        </div>
                        {item.value && (
                          <span className="text-gray-500">{item.value}</span>
                        )}
                        <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* App Version */}
          <div className="text-center text-gray-500 text-sm">
            <p>Malabis v1.0.0</p>
            <p className="mt-1">© 2024 Malabis. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
