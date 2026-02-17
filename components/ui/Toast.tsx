'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, AlertCircle, Info } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type = 'success', isVisible, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const config = {
    success: {
      icon: CheckCircle,
      bg: 'from-green-500 to-emerald-500',
      text: 'text-white'
    },
    error: {
      icon: AlertCircle,
      bg: 'from-red-500 to-pink-500',
      text: 'text-white'
    },
    info: {
      icon: Info,
      bg: 'from-blue-500 to-cyan-500',
      text: 'text-white'
    }
  };

  const { icon: Icon, bg, text } = config[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className={`bg-gradient-to-r ${bg} ${text} px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[300px]`}>
            <Icon className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold flex-1">{message}</p>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
