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
  },
  {
    title: "Soft Skills",
    skills: ["Teamwork", "Problem Solving", "Time Management", "Adaptability", "Communication"]
  }
];

import { BookOpen, Code, Coffee, Users, Lightbulb, Clock, Zap, MessageSquare, Terminal } from 'lucide-react';

// Skill Icon Mapping
const skillIconMap = {
  // Web (Images)
  "Next.js": { type: "image", icon: "nextjs" },
  "React": { type: "image", icon: "react" },
  "Node.js": { type: "image", icon: "nodejs" },
  "Tailwind CSS": { type: "image", icon: "tailwind" },
  "MongoDB": { type: "image", icon: "mongodb" },
  "GraphQL": { type: "image", icon: "graphql" },
  "Clerk": { type: "image", icon: "clerk" },

  // AI/ML (Images)
  "Python": { type: "image", icon: "py" },
  "PyTorch": { type: "image", icon: "pytorch" },
  "TensorFlow": { type: "image", icon: "tensorflow" },
  "Pandas": { type: "image", icon: "pandas" },
  "NumPy": { type: "image", icon: "numpy" },
  "Scikit-learn": { type: "image", icon: "sklearn" },
  "Streamlit": { type: "image", icon: "streamlit" },

  // Core (Images)
  "C++": { type: "image", icon: "cpp" },
  "Java": { type: "image", icon: "java" },
  "c": { type: "image", icon: "c" },
  "python": { type: "image", icon: "py" },
  "javascript": { type: "image", icon: "js" },

  // Tools (Images)
  "Git": { type: "image", icon: "git" },
  "VS Code": { type: "image", icon: "vscode" },
  "Vercel": { type: "image", icon: "vercel" },
  "Figma": { type: "image", icon: "figma" },
  "Postman": { type: "image", icon: "postman" },
  "Github": { type: "image", icon: "github" },

  // Soft Skills & Others (Lucide Icons)
  "Teamwork": { type: "lucide", icon: Users },
  "Problem Solving": { type: "lucide", icon: Lightbulb },
  "Time Management": { type: "lucide", icon: Clock },
  "Adaptability": { type: "lucide", icon: Zap },
  "Communication": { type: "lucide", icon: MessageSquare },
  "Boltic": { type: "lucide", icon: Terminal },
};

function SkillCard({ skill }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const iconData = skillIconMap[skill];

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
        {iconData?.type === "image" ? (
          <img 
            src={`https://skillicons.dev/icons?i=${iconData.icon}`} 
            alt={skill} 
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg rounded-md"
            loading="lazy"
          />
        ) : iconData?.type === "lucide" ? (
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
            <iconData.icon className="w-5 h-5 text-primary" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <span className="text-xs font-bold text-primary">{skill.charAt(0)}</span>
          </div>
        )}
        <span className="text-sm md:text-base text-muted-foreground font-medium group-hover:text-foreground transition-colors truncate">{skill}</span>
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
          <h2 className="text-4xl md:text-5xl font-cursive font-bold text-foreground mb-6">Skills of <span className="text-primary">Charan Sai</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolset developed through academic rigor and hands-on project experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-card rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-all duration-300 p-6 flex flex-col ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <h3 className="text-xl md:text-2xl font-cursive font-semibold text-foreground mb-4 border-b border-border/50 pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
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
