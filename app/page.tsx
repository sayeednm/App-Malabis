'use client';

import { Settings, TrendingUp, Sparkles, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import SearchBar from '@/components/ui/SearchBar';
import { outfitIdeas } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Category = 'all' | 'man' | 'women' | 'kids';
type Marketplace = 'all' | 'shopee' | 'tokopedia';
type SortBy = 'recommended' | 'price-low' | 'price-high' | 'rating' | 'sold';

interface Product {
  id: string;
  name: string;
  price: number;
  original_price?: number;
  image: string;
  category: 'man' | 'women' | 'kids';
  marketplace: 'shopee' | 'tokopedia';
  rating: number;
  sold: number;
  discount?: number;
  badge?: 'Best Deal' | 'Top Rated' | 'Best Seller' | 'Recommended';
  shop_url: string;
  shop_name: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedMarketplace, setSelectedMarketplace] = useState<Marketplace>('all');
  const [sortBy, setSortBy] = useState<SortBy>('recommended');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch products from Supabase
  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to local data if Supabase fails
        const { products: localProducts } = await import('@/lib/data');
        setProducts(localProducts.map(p => ({
          ...p,
          original_price: p.originalPrice,
          shop_url: p.shopUrl,
          shop_name: p.shopName,
        })));
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  let filteredProducts = products.filter(p => {
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchMarketplace = selectedMarketplace === 'all' || p.marketplace === selectedMarketplace;
    const matchSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchMarketplace && matchSearch;
  });

  // Sorting
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'sold') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.sold - a.sold);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-24">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-yellow-300" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Malabis</h1>
                <p className="text-green-50 text-sm">Fashion Muslim Modern</p>
              </div>
            </motion.div>
            
            <div className="flex items-center gap-4">
              <Link href="/settings">
                <motion.button 
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition"
                >
                  <Settings className="w-6 h-6" />
                </motion.button>
              </Link>
              <Link href="/profile">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg cursor-pointer"
                >
                  A
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-6 text-white shadow-xl">
            <TrendingUp className="w-8 h-8 mb-3" />
            <h3 className="text-3xl font-bold mb-1">500+</h3>
            <p className="text-green-50">Produk Tersedia</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-xl">
            <Heart className="w-8 h-8 mb-3" />
            <h3 className="text-3xl font-bold mb-1">10K+</h3>
            <p className="text-green-50">Pelanggan Puas</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-6 text-white shadow-xl">
            <Sparkles className="w-8 h-8 mb-3" />
            <h3 className="text-3xl font-bold mb-1">4.9★</h3>
            <p className="text-teal-50">Rating Terbaik</p>
          </div>
        </motion.div>

        {/* Outfit Ideas Section */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Inspirasi Outfit</h2>
              <p className="text-gray-600">Temukan gaya terbaikmu</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
            >
              Lihat Semua
            </motion.button>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {outfitIdeas.map((outfit, index) => (
              <motion.div
                key={outfit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl cursor-pointer"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={outfit.image}
                    alt={outfit.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{outfit.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Kategori</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {(['all', 'women', 'man', 'kids'] as Category[]).map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-2xl text-base font-semibold whitespace-nowrap transition-all shadow-lg ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-green-300'
                    : 'bg-white text-gray-700 hover:shadow-xl'
                }`}
              >
                {category === 'all' ? '🌟 Semua' : 
                 category === 'women' ? '👗 Wanita' :
                 category === 'man' ? '👔 Pria' : '👶 Anak-anak'}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Marketplace & Sort Filter */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Marketplace Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Marketplace</h3>
              <div className="flex gap-3">
                {(['all', 'shopee', 'tokopedia'] as Marketplace[]).map((mp) => (
                  <motion.button
                    key={mp}
                    onClick={() => setSelectedMarketplace(mp)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all shadow ${
                      selectedMarketplace === mp
                        ? mp === 'shopee' 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                          : mp === 'tokopedia'
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                          : 'bg-gradient-to-r from-emerald-600 to-green-600 text-white'
                        : 'bg-white text-gray-700 hover:shadow-lg'
                    }`}
                  >
                    {mp === 'all' ? 'Semua' : mp === 'shopee' ? '🛍️ Shopee' : '🛒 Tokopedia'}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Urutkan</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-sm font-semibold text-gray-700 bg-white shadow"
              >
                <option value="recommended">⭐ Rekomendasi</option>
                <option value="price-low">💰 Harga Terendah</option>
                <option value="price-high">💎 Harga Tertinggi</option>
                <option value="rating">⭐ Rating Tertinggi</option>
                <option value="sold">🔥 Terlaris</option>
              </select>
            </div>
          </div>
        </motion.section>

        {/* Product Feed */}
        <section>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Produk Pilihan</h2>
            <p className="text-gray-600">
              {searchQuery 
                ? `Hasil pencarian "${searchQuery}" (${filteredProducts.length} produk)`
                : `Koleksi terbaik untuk Anda (${filteredProducts.length} produk)`
              }
            </p>
          </motion.div>
          
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg animate-pulse">
                  <div className="aspect-[3/4] bg-gray-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-6 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Produk tidak ditemukan</h3>
              <p className="text-gray-600 mb-6">
                Coba kata kunci lain atau lihat semua produk
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-2xl font-semibold"
              >
                Lihat Semua Produk
              </motion.button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.original_price}
                    image={product.image}
                    marketplace={product.marketplace}
                    rating={product.rating}
                    sold={product.sold}
                    discount={product.discount}
                    badge={product.badge}
                    shopUrl={product.shop_url}
                    shopName={product.shop_name}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
