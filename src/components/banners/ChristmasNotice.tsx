import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChristmasNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-red-600 via-green-600 to-gold-primary text-white relative overflow-hidden"
      >
        {/* Snowflake decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-10 text-2xl">❄️</div>
          <div className="absolute top-4 right-20 text-xl">⭐</div>
          <div className="absolute bottom-2 left-1/4 text-xl">🎄</div>
          <div className="absolute top-3 right-1/3 text-2xl">❄️</div>
        </div>

        <div className="container-fof relative z-10 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <span className="text-2xl sm:text-3xl hidden sm:block">🎄</span>
              <div className="flex-1">
                <p className="text-xs sm:text-sm md:text-base font-medium">
                  <span className="font-bold">🎅 Christmas Special:</span> Orders received will be processed after 24 hours.
                  <span className="hidden sm:inline"> Deliveries: <strong>Dec 23-24 & Dec 26-Jan 2</strong>.</span>
                  <span className="text-red-100 font-bold"> NO deliveries on Dec 25th 2025</span>
                </p>
                <p className="text-xs mt-1 text-white/90 hidden md:block">
                  🎁 Free gift wrapping on all orders | 10% off combo drinks
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-red-100 transition-colors p-2"
              aria-label="Dismiss notice"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChristmasNotice;
