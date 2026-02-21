"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MinimalLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#09090b] flex flex-col items-center justify-center"
        >
          {/* Central Identity */}
          <div className="flex flex-col items-center gap-6">
            
            {/* Minimal Logo - Just the 'K' in a clean box */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-lg"
            >
              <span className="text-white font-light text-xl tracking-tighter">K</span>
            </motion.div>

            {/* Name and Designation */}
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center space-y-1"
            >
              <h1 className="text-white text-sm font-medium tracking-[0.3em] uppercase">
                Kosala Dananjaya
              </h1>
              <p className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase">
                Meta Ads Strategist
              </p>
            </motion.div>

            {/* Ultra-thin Minimal Progress Line */}
            <div className="w-32 h-[1px] bg-zinc-900 mt-2 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
              />
            </div>
          </div>

          {/* Bottom Region Info */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.4 }}
             transition={{ delay: 0.5 }}
             className="absolute bottom-10 text-[9px] text-zinc-500 tracking-[0.4em] uppercase"
          >
            SL &middot; UAE
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}