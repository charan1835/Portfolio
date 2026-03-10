'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2025",
    role: "Freelance Developer",
    company: "Projects",
    desc: "Developing websites for local clients and personal projects. Learning how to deliver clean, production-ready code."
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-cursive font-bold text-foreground mb-20 tracking-tighter">
          CAREER <span className="text-outline">TIMELINE</span>
        </h2>

        <div className="space-y-24">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-12 gap-8 items-start group"
            >
              {/* Massive Year */}
              <div className="md:col-span-4">
                <span className="text-8xl md:text-9xl font-black text-outline opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  {exp.year}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-8 pt-4 md:pt-8 border-t border-border group-hover:border-primary/50 transition-colors">
                <h3 className="text-3xl font-cursive font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                <div className="text-xl text-muted-foreground mb-6">{exp.company}</div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
