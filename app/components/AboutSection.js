'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Code, Coffee, Gamepad2, Code2, Camera, MapPin, Music, Trophy, Cpu, Lightbulb } from 'lucide-react';
import MoreAboutMe from './MoreAboutMe';

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">About Charan Sai</span>
              <h2 className="text-4xl md:text-5xl font-cursive font-bold text-foreground leading-tight">
                Driven by curiosity,<br />
                <span className="text-primary">Powered by code.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi, I&rsquo;m <strong className="text-foreground">Charan Sai</strong>, a Full-Stack Developer and Machine Learning enthusiast who enjoys building practical and user-focused applications. I like turning ideas into real products using modern web technologies and exploring how AI can enhance everyday tools.
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="mt-8 px-8 py-3 bg-primary text-white rounded-full font-cursive font-bold shadow-lg hover:shadow-primary/30 transition-shadow flex items-center gap-2"
            >
              Know More About Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right: Hobbies Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform rotate-12" />

            <div className="relative bg-card/60 backdrop-blur-2xl border border-border rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden group">
               {/* Hobbies Badge */}
               <div className="absolute top-0 left-0 bg-primary text-white px-8 py-3 rounded-br-3xl font-cursive font-bold text-xl shadow-lg z-20">
                Hobbies
              </div>

              {/* Left Accent Border */}
              <div className="absolute left-0 top-16 bottom-0 w-1.5 bg-primary/30 rounded-full group-hover:bg-primary transition-colors" />

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12">
                {[
                  { icon: Gamepad2, label: "Gaming" },
                  { icon: Code2, label: "Coding" },
                  { icon: Camera, label: "Photography" },
                  { icon: MapPin, label: "Travel" },
                  { icon: Music, label: "Music" },
                  { icon: Trophy, label: "Basketball" },
                  { icon: Cpu, label: "Hardware" },
                  { icon: Lightbulb, label: "Creating" },
                ].map((hobby, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="flex flex-col items-center justify-center p-6 bg-muted/20 rounded-3xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group/item relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <hobby.icon className="w-10 h-10 text-muted-foreground group-hover/item:text-primary transition-all duration-300 transform group-hover/item:scale-110" />
                    <span className="text-sm font-cursive font-semibold mt-3 text-muted-foreground group-hover/item:text-foreground transition-colors">
                      {hobby.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <AnimatePresence>
        {isOpen && <MoreAboutMe onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
