'use client';

import { motion } from 'framer-motion';

export default function FixedSignature() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
      animate={{ opacity: 1, scale: 1, rotate: -12 }}
      whileHover={{ scale: 1.1, rotate: -8 }}
      transition={{
        opacity: { duration: 1, delay: 2 },
        scale: { duration: 0.8, delay: 2 },
        rotate: { duration: 0.8, delay: 2 }
      }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] select-none cursor-default group"
    >
      <div className="relative">
        <p className="font-cursive text-4xl md:text-5xl text-slate-900/60 dark:text-white/60 italic tracking-tighter drop-shadow-lg transition-all group-hover:text-slate-900 group-hover:dark:text-white">
          Charan
        </p>

        {/* Animated Ink Scribble Underline */}
        <motion.svg
          width="120"
          height="12"
          viewBox="0 0 120 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-2 -left-2 opacity-60"
        >
          <motion.path
            d="M5 7C25 5 45 6 65 7C85 8 105 4 115 2"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 2.5, ease: "easeInOut" }}
            className="text-primary/40"
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}
