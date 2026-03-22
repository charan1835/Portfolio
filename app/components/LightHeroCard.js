'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function LightHeroCard({ avatarUrl, name, title, handle, onContactClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-5xl w-full mx-auto p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(37,99,235,0.05)] overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-medium text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Crafting <span className="text-primary italic font-cursive h-16 inline-block align-middle mt-2">seamless</span> digital experiences.
            </h1>

            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Transforming innovative ideas into high-performance digital solutions.
              Let&apos;s build something extraordinary together.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={onContactClick}
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/charansaichimbili.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/charan1835" },
                { icon: Linkedin, href: "https://linkedin.com/in/chimbili-charan-sai-a9a623291/" },
                { icon: Mail, href: "mailto:chimbilicharan@gmail.com" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-slate-200 text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4 text-slate-400 font-medium">
            <span className="text-sm uppercase tracking-widest px-3 py-1 rounded bg-slate-100 border border-slate-200">Tech Stack</span>
            <div className="flex gap-4 grayscale opacity-60">
              <span className="text-lg">•</span>
              <span className="text-lg">MERN</span>
              <span className="text-lg">•</span>
              <span className="text-lg">ML</span>
              <span className="text-lg">•</span>
              <span className="text-lg">Automations</span>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[40px] group-hover:blur-[60px] transition-all opacity-0 group-hover:opacity-100" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden border-[8px] border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
            />
          </div>

          {/* Floating Element */}
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce transition-all">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">2+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Years Exp</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
