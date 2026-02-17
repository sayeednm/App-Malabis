'use client';

import { Home, Heart, Camera, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';

export default function BottomNav() {
  const pathname = usePathname();
  const totalItems = useCartStore((state) => state.getTotalItems());

  const navItems = [
    { icon: Home, label: 'Home', href: '/', color: 'from-emerald-500 to-green-600' },
    { icon: Heart, label: 'Favorite', href: '/favorite', color: 'from-green-500 to-emerald-600' },
    { icon: Camera, label: 'Scan', href: '/scan', special: true, color: 'from-lime-500 to-green-500' },
    { icon: ShoppingCart, label: 'Cart', href: '/cart', badge: totalItems, color: 'from-teal-500 to-emerald-500' },
    { icon: User, label: 'Profile', href: '/profile', color: 'from-green-600 to-emerald-700' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-green-100 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            if (item.special) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-center -mt-8"
                >
                  <motion.div 
                    className={`bg-gradient-to-br ${item.color} rounded-2xl p-4 shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </motion.div>
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 flex items-center justify-center"
              >
                <motion.div
                  className="flex flex-col items-center justify-center gap-1 py-2 relative"
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="relative">
                    <motion.div
                      className={`p-2 rounded-xl ${
                        isActive ? `bg-gradient-to-br ${item.color}` : 'bg-transparent'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon 
                        className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} 
                        strokeWidth={isActive ? 2.5 : 2} 
                      />
                    </motion.div>
                    
                    {/* Badge - hanya muncul jika ada items */}
                    <AnimatePresence>
                      {item.badge && item.badge > 0 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold shadow-lg px-1.5"
                        >
                          {item.badge > 9 ? '9+' : item.badge}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <span className={`text-[10px] font-medium ${
                    isActive ? 'text-gray-800' : 'text-gray-400'
                  }`}>
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
