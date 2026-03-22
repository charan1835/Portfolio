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
      className="relative bg-[#111827]/90 dark:bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 dark:border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group max-w-2xl cursor-default mx-auto lg:mx-0"
    >
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors" />

      <div className="relative z-10 space-y-8 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Hey, I&apos;m <span className="font-cursive italic">Charan Sai</span> <span className="inline-block animate-bounce-slow text-3xl">👋</span>
          </h1>
          <div className="h-1 w-16 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <p className="text-lg md:text-xl text-slate-200 font-medium max-w-lg mx-auto leading-relaxed">
          Full Stack Developer | <span className="text-primary font-bold">ML Enthusiast</span>
        </p>

        <div className="flex flex-col gap-4 items-center mb-8">
          <a
            href="/charansaichimbili.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-bold bg-primary text-white rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>

        <div className="relative pl-6 py-4 border-l-4 border-primary bg-black/40 rounded-r-xl text-left max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-base md:text-lg text-slate-100 font-medium italic leading-relaxed">
             &quot;Build <span className="text-primary font-bold">legacies</span>, not just resumes.&quot;
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Add keyframes for the wave/bounce effect in global CSS if needed, 
// but animate-bounce is built into tailwind.
