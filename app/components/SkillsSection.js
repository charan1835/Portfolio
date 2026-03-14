'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';

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
  },
  {
    title: "Soft Skills",
    skills: ["Teamwork", "Problem Solving", "Time Management", "Adaptability", "Communication"]
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
      className="group relative border border-border bg-card/90 dark:bg-card/50 px-4 py-3 rounded-xl overflow-hidden"
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
        <span className="text-sm md:text-base text-muted-foreground font-medium group-hover:text-foreground transition-colors">{skill}</span>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 bg-background relative overflow-hidden">
      {/* Background Decoration only vivid in dark mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-transparent dark:bg-primary/5 blur-[100px] rounded-full pointer-events-none transition-colors duration-500" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-cursive font-bold text-foreground mb-6">Technical <span className="text-primary">Mastery</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolset developed through academic rigor and hands-on project experience.
          </p>
        </div>

        <div className="h-[80vh] md:h-[75vh] w-full max-w-4xl mx-auto border border-border/50 rounded-2xl md:rounded-3xl overflow-hidden bg-muted/30 dark:bg-muted/10 relative">
          <div className="absolute top-4 right-4 z-10 animate-bounce text-muted-foreground flex items-center gap-2 text-xs md:text-sm font-sans bg-background/80 dark:bg-background/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-border">
            <span>Scroll inside</span> ↓
          </div>
          <ScrollStack>
            {skillCategories.map((category, idx) => (
              <ScrollStackItem key={idx} itemClassName="bg-card w-full rounded-2xl md:rounded-3xl border border-border shadow-sm dark:shadow-2xl p-4 md:p-8 !h-auto min-h-[300px] md:min-h-[400px]">
                <h3 className="text-2xl md:text-3xl font-cursive font-semibold text-foreground mb-4 md:mb-6 text-center border-b border-border/50 pb-3 md:pb-4">{category.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <SkillCard key={sIdx} skill={skill} />
                  ))}
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
