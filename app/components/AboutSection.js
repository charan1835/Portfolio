'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code, Coffee } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Driven by curiosity,<br />
              <span className="text-primary">Powered by code.</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&rsquo;m <strong className="text-foreground">Charan Sai</strong>, a computer science student and developer.
                My passion lies in understanding how complex systems work and rebuilding them to be better, faster, and more intuitive.
              </p>
              <p>
                While I&rsquo;m constantly learning new technologies, my core philosophy stays the same:
                <span className="text-foreground"> simplicity is the ultimate sophistication</span>. I strive to write code that human beings can understand and computers can execute efficiently.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Code className="w-4 h-4 text-primary" /> Full Stack
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <BookOpen className="w-4 h-4 text-primary" /> Architecture
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Coffee className="w-4 h-4 text-primary" /> Problem Solving
              </div>
            </div>
          </motion.div>

          {/* Right: Glass Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform rotate-12" />

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-black/20 rounded-2xl border border-white/5">
                  <div className="text-4xl font-bold text-white mb-2">2+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Years Coding</div>
                </div>
                <div className="text-center p-6 bg-black/20 rounded-2xl border border-white/5">
                  <div className="text-4xl font-bold text-white mb-2">10+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Projects</div>
                </div>
                <div className="col-span-2 text-center p-6 bg-primary/10 rounded-2xl border border-primary/20">
                  <div className="text-xl font-bold text-white mb-1">Open To Work</div>
                  <div className="text-xs text-primary/80 uppercase tracking-widest">Available for hire</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
