'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';

// Skill Data
const skillCategories = [
  {
    title: "Full Stack Web",
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS", "MongoDB", "Clerk", "GraphQL"]
  },
  {
    title: "Machine Learning & AI",
    skills: ["Python", "PyTorch", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "Streamlit"]
  },
  {
    title: "Core",
    skills: ["C++", "Java", "c", "python", "javascript"]
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Vercel", "Figma", "Boltic", "Postman"]
  }
];

function SkillCard({ skill }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-border bg-card/50 px-4 py-3 rounded-xl overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              var(--primary),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative flex items-center gap-3">
        {/* Simple dot for now, or icon if we mapped them */}
        <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
        <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">{skill}</span>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Technical <span className="text-primary">Mastery</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolset developed through academic rigor and hands-on project experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-foreground pl-1">{category.title}</h3>
              <div className="grid gap-3">
                {category.skills.map((skill, sIdx) => (
                  <SkillCard key={sIdx} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
