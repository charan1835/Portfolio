'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function HeroIntroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        y: [0, -10, 0] 
      }}
      whileHover={{ 
        scale: 1.02,
        rotateZ: 0.5,
      }}
      transition={{ 
        duration: 0.8, 
        delay: 0.2,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="relative bg-white/80 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden group max-w-2xl cursor-default mx-auto lg:mx-0"
    >
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors" />

      <div className="relative z-10 space-y-8 text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight transition-colors">
            Full Stack <span className="text-primary italic font-cursive">Developer</span> <br/>
            & ML Enthusiast
          </h2>
          <div className="h-1 w-16 bg-primary mt-4 rounded-full" />
        </div>

        <div className="flex flex-col gap-4 text-left">
          <a
            href="/charansaichimbili.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xl font-bold bg-primary text-white rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>

        <div className="relative pl-6 py-4 border-l-4 border-primary bg-primary/5 dark:bg-primary/10 rounded-r-3xl transition-colors">
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-medium italic leading-relaxed transition-colors">
            "Don&apos;t just aspire to make a living, aspire to make a <span className="text-primary font-bold">difference</span>."
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Add keyframes for the wave/bounce effect in global CSS if needed, 
// but animate-bounce is built into tailwind.
