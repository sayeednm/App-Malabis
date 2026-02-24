'use client';

import { ArrowLeft, User, Mail, Phone, MapPin, ShoppingBag, Heart, Settings, LogOut, Edit } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        // Check if Supabase is configured
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        
        if (!supabaseUrl || !supabaseKey || 
            supabaseUrl.includes('your-project-id') || 
            supabaseKey.includes('your-anon-key')) {
          // Use dummy data if Supabase not configured
          setUser({
            email: 'user@example.com',
            created_at: new Date().toISOString(),
          });
          setProfile({
            full_name: 'User Demo',
            phone: '+62 812-3456-7890',
          });
          setLoading(false);
          return;
        }

        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser(user);
          
          // Fetch profile data
          const { data: profileData } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
          
          setProfile(profileData);
        } else {
          // No user logged in, use dummy data
          setUser({
            email: 'guest@example.com',
            created_at: new Date().toISOString(),
          });
        }
      } catch (error) {
        console.error('Error loading user:', error);
        // Fallback to dummy data on error
        setUser({
          email: 'user@example.com',
          created_at: new Date().toISOString(),
        });
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const stats = [
    { icon: ShoppingBag, label: 'Total Pesanan', value: '24', color: 'from-emerald-500 to-green-600' },
    { icon: Heart, label: 'Favorit', value: '12', color: 'from-green-500 to-emerald-600' },
    { icon: MapPin, label: 'Alamat', value: '3', color: 'from-teal-500 to-cyan-600' },
  ];

  const menuItems = [
    { icon: ShoppingBag, label: 'Pesanan Saya', href: '/orders', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: Heart, label: 'Favorit', href: '/favorite', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: MapPin, label: 'Alamat', href: '/address', color: 'text-teal-600', bg: 'bg-teal-50' },
    { icon: Settings, label: 'Pengaturan', href: '/settings', color: 'text-gray-600', bg: 'bg-gray-50' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Memuat profil...</p>
        </div>
      </div>
    );
  }

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
              <h1 className="text-3xl font-bold">Profil Saya</h1>
              <p className="text-white/80 text-sm">Kelola akun Anda</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl mb-8"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                {(profile?.full_name?.[0] || user?.email?.[0] || 'U').toUpperCase()}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border-2 border-emerald-500"
              >
                <Edit className="w-4 h-4 text-emerald-600" />
              </motion.button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {profile?.full_name || user?.email?.split('@')[0] || 'User'}
              </h2>
              <p className="text-gray-600 mb-3">
                Member sejak {user?.created_at ? new Date(user.created_at).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) : 'Baru bergabung'}
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                  ⭐ Gold Member
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-emerald-600" />
              <span>{user?.email || 'Belum diisi'}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="w-5 h-5 text-green-600" />
              <span>{profile?.phone || 'Belum diisi'}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-teal-600" />
              <span>Bandung, Jawa Barat</span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-lg`}
            >
              <stat.icon className="w-8 h-8 mb-3" />
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-xl mb-8"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Menu</h3>
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Link key={item.label} href={item.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition cursor-pointer"
                >
                  <div className={`p-3 ${item.bg} rounded-xl`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <span className="flex-1 font-semibold text-gray-800">{item.label}</span>
                  <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Logout Button */}
        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition flex items-center justify-center gap-3"
        >
          <LogOut className="w-6 h-6" />
          Keluar
        </motion.button>
      </div>
    </div>
  );
}
