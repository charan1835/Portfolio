'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Skill = ({ icon, name, color }) => (
  <motion.div
    className="group relative"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="relative p-4 rounded-2xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 backdrop-blur-sm hover:border-purple-500/50 dark:hover:border-purple-500/50 light:hover:border-purple-400/50 transition-all duration-300 overflow-hidden">
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-white dark:text-white light:text-slate-900 font-semibold text-sm group-hover:text-purple-300 dark:group-hover:text-purple-300 light:group-hover:text-purple-600 transition-colors duration-300">
          {name}
        </h4>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 -top-2 -left-2 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
    </div>
  </motion.div>
);

const skillCategories = [
  {
    title: "Web Development",
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
    skills: [
      { name: 'Python', icon: '🐍', color: 'from-green-500 to-green-600' },
      { name: 'Java', icon: '☕', color: 'from-red-500 to-red-600' },
      { name: 'C++', icon: '⚡', color: 'from-blue-500 to-blue-600' },
      { name: 'C', icon: '🔧', color: 'from-slate-500 to-slate-600' },
      { name: 'JavaScript', icon: '🟨', color: 'from-yellow-500 to-yellow-600' },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: 'VSCode', icon: '💻', color: 'from-blue-500 to-blue-600' },
      { name: 'Windsurf', icon: '🌊', color: 'from-cyan-500 to-cyan-600' },
      { name: 'Cursor', icon: '🖱️', color: 'from-purple-500 to-purple-600' },
      { name: 'Git/GitHub', icon: '📚', color: 'from-slate-600 to-slate-700' },
      { name: 'Postman', icon: '📮', color: 'from-orange-500 to-orange-600' },
      { name: 'Figma', icon: '🎨', color: 'from-pink-500 to-pink-600' },
      { name: 'streamlit', icon: '', color: 'from-blue-600 to-blue-700' },
      { name: 'Vercel', icon: '🚀', color: 'from-black to-gray-800' },
      
    ]
  }
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-purple-300 dark:text-purple-300 light:text-purple-600 mb-8 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
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
