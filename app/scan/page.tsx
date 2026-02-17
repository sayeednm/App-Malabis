'use client';

import { ArrowLeft, Image as ImageIcon, Zap, Camera, Upload } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ScanPage() {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </motion.button>
          </Link>
          <div className="text-center">
            <h1 className="text-white font-bold text-2xl">Visual Search</h1>
            <p className="text-white/70 text-sm">Temukan produk dengan foto</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl"
          >
            <Zap className="w-6 h-6 text-yellow-400" />
          </motion.button>
        </div>
      </div>

      {/* Camera View Simulation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: isScanning ? [1, 1.1, 1] : 1,
            opacity: isScanning ? [1, 0.5, 1] : 1 
          }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
            <Camera className="w-16 h-16 text-white" />
          </div>
          <p className="text-white/70 text-lg">Arahkan kamera ke produk fashion</p>
        </motion.div>
      </div>

      {/* Scanning Frame */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="relative w-80 h-96"
          animate={isScanning ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Corner Brackets with Gradient */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-emerald-400 rounded-tl-3xl shadow-lg shadow-emerald-500/50"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-green-400 rounded-tr-3xl shadow-lg shadow-green-500/50"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-teal-400 rounded-bl-3xl shadow-lg shadow-teal-500/50"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-lime-400 rounded-br-3xl shadow-lg shadow-lime-500/50"></div>
          
          {/* Scanning Line Animation */}
          {isScanning && (
            <motion.div
              initial={{ top: 0 }}
              animate={{ top: '100%' }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 shadow-lg shadow-green-500/50"
            />
          )}
        </motion.div>
      </div>

      {/* Instructions */}
      <div className="absolute top-1/4 left-0 right-0 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-md rounded-3xl p-6 max-w-md mx-auto border border-white/10"
        >
          <p className="text-white text-base leading-relaxed">
            📸 Arahkan kamera ke produk fashion muslim<br />
            🔍 Sistem akan mencari produk serupa<br />
            ✨ Temukan gaya yang Anda inginkan
          </p>
        </motion.div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-8 mb-6">
            {/* Gallery Button */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-5 bg-gradient-to-br from-teal-500 to-cyan-500 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:shadow-teal-500/50 transition"
            >
              <Upload className="w-7 h-7 text-white" />
            </motion.button>

            {/* Shutter Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScan}
              className="relative w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full border-4 border-white shadow-2xl hover:shadow-green-500/50 transition"
            >
              <div className="absolute inset-2 rounded-full border-2 border-white/50 flex items-center justify-center">
                {isScanning ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                ) : (
                  <Camera className="w-8 h-8 text-white" />
                )}
              </div>
            </motion.button>

            {/* Flash Button */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-5 bg-gradient-to-br from-lime-500 to-green-500 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:shadow-lime-500/50 transition"
            >
              <Zap className="w-7 h-7 text-white" />
            </motion.button>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white text-center text-base font-medium"
          >
            {isScanning ? '🔍 Mencari produk serupa...' : 'Ketuk untuk memindai atau upload dari galeri'}
          </motion.p>

          {/* Feature Pills */}
          <div className="flex justify-center gap-3 mt-6">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              ⚡ Cepat
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              🎯 Akurat
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              ✨ Mudah
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
