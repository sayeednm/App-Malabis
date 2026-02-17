'use client';

import { ArrowLeft, Image as ImageIcon, Zap, Camera, Upload, X, RotateCw } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function ScanPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  const [stream, setStream] = useState<MediaStream | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Start Camera
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: facingMode,
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Tidak dapat mengakses kamera. Pastikan izin kamera sudah diberikan.');
    }
  };

  // Stop Camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setIsCameraActive(false);
    }
  };

  // Toggle Flash
  const toggleFlash = async () => {
    if (stream) {
      const track = stream.getVideoTracks()[0];
      const capabilities = track.getCapabilities() as any;
      
      if (capabilities.torch) {
        try {
          await track.applyConstraints({
            advanced: [{ torch: !flashEnabled } as any]
          });
          setFlashEnabled(!flashEnabled);
        } catch (error) {
          console.error('Flash not supported:', error);
          alert('Flash tidak didukung pada perangkat ini');
        }
      } else {
        alert('Flash tidak tersedia pada kamera ini');
      }
    }
  };

  // Switch Camera
  const switchCamera = () => {
    stopCamera();
    setFacingMode(prev => prev === 'user' ? 'environment' : 'user');
  };

  // Capture Photo
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg', 0.9);
        setCapturedImage(imageData);
        setIsScanning(true);
        
        // Simulate processing
        setTimeout(() => {
          setIsScanning(false);
          stopCamera();
        }, 2000);
      }
    }
  };

  // Upload from Gallery
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target?.result as string);
        setIsScanning(true);
        stopCamera();
        
        setTimeout(() => {
          setIsScanning(false);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset
  const resetScan = () => {
    setCapturedImage(null);
    setIsScanning(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // Restart camera when facingMode changes
  useEffect(() => {
    if (isCameraActive) {
      startCamera();
    }
  }, [facingMode]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      {/* Hidden Canvas for Capture */}
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6 bg-gradient-to-b from-black/50 to-transparent">
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
          {isCameraActive && (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={switchCamera}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl"
            >
              <RotateCw className="w-6 h-6 text-white" />
            </motion.button>
          )}
          {!isCameraActive && (
            <div className="w-12 h-12"></div>
          )}
        </div>
      </div>

      {/* Camera View or Captured Image */}
      <AnimatePresence mode="wait">
        {capturedImage ? (
          // Show Captured Image
          <motion.div
            key="captured"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 flex items-center justify-center bg-black"
          >
            <img 
              src={capturedImage} 
              alt="Captured" 
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={resetScan}
              className="absolute top-24 right-6 p-3 bg-red-500 rounded-full shadow-lg z-30"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Processing Overlay */}
            {isScanning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/70 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 mx-auto mb-4 border-4 border-emerald-500 border-t-transparent rounded-full"
                  />
                  <p className="text-white text-xl font-semibold">Mencari produk serupa...</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : isCameraActive ? (
          // Show Live Camera
          <motion.div
            key="camera"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            
            {/* Scanning Frame */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                className="relative w-80 h-96"
                animate={isScanning ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-emerald-400 rounded-tl-3xl shadow-lg shadow-emerald-500/50"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-green-400 rounded-tr-3xl shadow-lg shadow-green-500/50"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-teal-400 rounded-bl-3xl shadow-lg shadow-teal-500/50"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-lime-400 rounded-br-3xl shadow-lg shadow-lime-500/50"></div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          // Show Initial State
          <motion.div
            key="initial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
                <Camera className="w-16 h-16 text-white" />
              </div>
              <p className="text-white/70 text-lg mb-6">Arahkan kamera ke produk fashion</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startCamera}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl font-semibold shadow-xl"
              >
                Aktifkan Kamera
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      {!capturedImage && !isCameraActive && (
        <div className="absolute top-1/4 left-0 right-0 text-center px-6 z-10">
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
      )}

      {/* Bottom Controls */}
      {isCameraActive && !capturedImage && (
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-8 mb-6">
              {/* Gallery Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => fileInputRef.current?.click()}
                className="p-5 bg-gradient-to-br from-teal-500 to-cyan-500 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:shadow-teal-500/50 transition"
              >
                <Upload className="w-7 h-7 text-white" />
              </motion.button>

              {/* Shutter Button */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={capturePhoto}
                disabled={isScanning}
                className="relative w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full border-4 border-white shadow-2xl hover:shadow-green-500/50 transition disabled:opacity-50"
              >
                <div className="absolute inset-2 rounded-full border-2 border-white/50 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </motion.button>

              {/* Flash Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleFlash}
                className={`p-5 backdrop-blur-sm rounded-2xl hover:shadow-2xl transition ${
                  flashEnabled 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-yellow-500/50' 
                    : 'bg-gradient-to-br from-lime-500 to-green-500 hover:shadow-lime-500/50'
                }`}
              >
                <Zap className={`w-7 h-7 ${flashEnabled ? 'text-white fill-white' : 'text-white'}`} />
              </motion.button>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white text-center text-base font-medium"
            >
              Ketuk untuk memindai atau upload dari galeri
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
      )}

      {/* Upload Button when camera not active */}
      {!isCameraActive && !capturedImage && (
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => fileInputRef.current?.click()}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl font-semibold shadow-xl inline-flex items-center gap-3"
            >
              <Upload className="w-6 h-6" />
              Upload dari Galeri
            </motion.button>
            
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
      )}
    </div>
  );
}
