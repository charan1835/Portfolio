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
            <h2 className="text-4xl md:text-5xl font-cursive font-bold text-foreground leading-tight">
              Driven by curiosity,<br />
              <span className="text-primary">Powered by code.</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi, I&rsquo;m <strong className="text-foreground">Charan</strong>, a Full-Stack Developer and Machine Learning enthusiast who enjoys building practical and user-focused applications. I like turning ideas into real products using modern web technologies and exploring how AI can enhance everyday tools.
              </p>
              <p>
                I mainly work with <strong className="text-foreground">Next.js, Tailwind CSS, MERN stack, and headless CMS platforms</strong>, focusing on creating clean interfaces and efficient backend functionality. Over time, I&rsquo;ve built multiple projects that combine good design with intelligent features.
              </p>
              <p>
                Outside of development, I enjoy <strong className="text-foreground">listening to music and playing basketball</strong>, along with solving DSA problems and exploring new technologies. I enjoy learning by building projects, tackling challenges, and continuously improving my problem-solving skills.
              </p>
              <p>
                I&rsquo;m always curious about new ideas, excited to collaborate with other developers, and motivated to create technology that solves real-world problems.
              </p>
            </div>

            <div className="flex gap-4 pt-4 flex-wrap">
              <div className="flex items-center gap-2 text-lg text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border">
                <Code className="w-5 h-5 text-primary" /> Full Stack
              </div>
              <div className="flex items-center gap-2 text-lg text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border">
                <BookOpen className="w-5 h-5 text-primary" /> Architecture
              </div>
              <div className="flex items-center gap-2 text-lg text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border">
                <Coffee className="w-5 h-5 text-primary" /> Problem Solving
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

            <div className="relative bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-muted/50 rounded-2xl border border-border">
                  <div className="text-5xl font-bold text-foreground mb-2">2+</div>
                  <div className="text-lg text-gray-400 capitalize">Years Coding</div>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-2xl border border-border">
                  <div className="text-5xl font-bold text-foreground mb-2">10+</div>
                  <div className="text-lg text-gray-400 capitalize">Projects</div>
                </div>
                <div className="col-span-2 text-center p-6 bg-primary/10 rounded-2xl border border-primary/20">
                  <div className="text-2xl font-bold text-foreground mb-1">Open To Work</div>
                  <div className="text-lg text-primary/80 capitalize">Available for hire</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
