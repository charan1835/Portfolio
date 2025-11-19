'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Skill = ({ icon, name, color }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative"
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative h-full p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl overflow-hidden hover:border-slate-700/60 transition-colors duration-300">

        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
          <div className="text-4xl p-2 rounded-lg bg-slate-800/50 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
            {icon}
          </div>
          <h4 className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors duration-300">
            {name}
          </h4>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-colors duration-300" />
      </div>
    </motion.div>
  );
};

const skillCategories = [
  {
    title: "Web Development",
    description: "Building modern, scalable applications",
    skills: [
      { name: 'Next.js', icon: '▲', color: 'from-slate-600 to-slate-700' },
      { name: 'React', icon: '⚛️', color: 'from-blue-500 to-blue-600' },
      { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-600' },
      { name: 'GraphQL', icon: '🔮', color: 'from-pink-500 to-pink-600' },
      { name: 'REST APIs', icon: '🌐', color: 'from-purple-500 to-purple-600' },
      { name: 'Serverless', icon: '☁️', color: 'from-cyan-500 to-cyan-600' },
      { name: 'Tailwind CSS', icon: '🎨', color: 'from-teal-500 to-teal-600' },
      { name: 'ShadCN', icon: '🧩', color: 'from-indigo-500 to-indigo-600' },
      { name: 'HTML/CSS', icon: '🌐', color: 'from-orange-500 to-orange-600' },
      { name: 'JavaScript', icon: '🟨', color: 'from-yellow-500 to-yellow-600' },
      { name: 'Clerk', icon: '🔐', color: 'from-red-500 to-red-600' },
      { name: 'Hygraph', icon: '🎯', color: 'from-violet-500 to-violet-600' },
      { name: 'Firebase', icon: '🔥', color: 'from-amber-500 to-amber-600' },
    ]
  },
  {
    title: "Programming Languages",
    description: "Core languages for robust solutions",
    skills: [
      { name: 'Python', icon: '🐍', color: 'from-green-500 to-green-600' },
      { name: 'Java', icon: '☕', color: 'from-red-500 to-red-600' },
      { name: 'C++', icon: '⚡', color: 'from-blue-500 to-blue-600' },
      { name: 'C', icon: '🔧', color: 'from-slate-500 to-slate-600' },
      { name: 'JavaScript', icon: '🟨', color: 'from-yellow-500 to-yellow-600' },
    ]
  },
  {
    title: "Tools & Workflow",
    description: "Essential tools for productivity",
    skills: [
      { name: 'VSCode', icon: '💻', color: 'from-blue-500 to-blue-600' },
      { name: 'Windsurf', icon: '🌊', color: 'from-cyan-500 to-cyan-600' },
      { name: 'Cursor', icon: '🖱️', color: 'from-purple-500 to-purple-600' },
      { name: 'Git/GitHub', icon: '📚', color: 'from-slate-600 to-slate-700' },
      { name: 'Postman', icon: '📮', color: 'from-orange-500 to-orange-600' },
      { name: 'Figma', icon: '🎨', color: 'from-pink-500 to-pink-600' },
      { name: 'Streamlit', icon: '📊', color: 'from-blue-600 to-blue-700' },
      { name: 'Vercel', icon: '🚀', color: 'from-black to-gray-800' },
    ]
  }
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="text-center mb-20">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-500 mb-6"
            >
              Skills & Technologies
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
            />
          </div>

          <div className="space-y-24">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={containerVariants}>
                <div className="flex flex-col items-center mb-10">
                  <h3 className="text-2xl font-semibold text-slate-200 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5">
                  {category.skills.map((skill, index) => (
                    <Skill key={index} {...skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
