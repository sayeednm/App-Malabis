'use client';

import { Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Debounce search untuk performa lebih baik
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  const clearSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuery('');
  };

  const quickSearchKeywords = ['Gamis', 'Hijab', 'Koko', 'Tunik', 'Kaftan', 'Mukena'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="relative max-w-2xl"
    >
      <Search className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors pointer-events-none z-10 ${
        isFocused ? 'text-emerald-600' : 'text-gray-400'
      }`} />
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        placeholder="Cari gamis, hijab, koko, tunik..."
        className={`w-full pl-14 pr-14 py-4 bg-white/95 backdrop-blur-sm rounded-2xl text-gray-800 text-base focus:outline-none shadow-xl transition-all ${
          isFocused ? 'ring-4 ring-emerald-500/30' : 'ring-0'
        }`}
      />
      <AnimatePresence>
        {query && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={clearSearch}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              clearSearch(e);
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              e.stopPropagation();
              clearSearch(e as any);
            }}
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 hover:bg-red-100 rounded-full transition-all z-30 cursor-pointer touch-manipulation flex items-center justify-center"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <X className="w-4.5 h-4.5 text-gray-600 hover:text-red-600 transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Search suggestions hint */}
      {isFocused && !query && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl p-4 z-10"
        >
          <p className="text-sm text-gray-500 mb-2">Coba cari:</p>
          <div className="flex flex-wrap gap-2">
            {quickSearchKeywords.map((keyword) => (
              <button
                key={keyword}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSearch(keyword);
                }}
                className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm hover:bg-emerald-100 transition"
              >
                {keyword}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
