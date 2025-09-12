'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Zap, Lightbulb } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "6+", label: "Months Coding", color: "from-purple-500/20 to-pink-500/20" },
    { number: "10+", label: "Projects Built", color: "from-blue-500/20 to-cyan-500/20" },
    { number: "3+", label: "Tech Stacks", color: "from-green-500/20 to-emerald-500/20" },
    { number: "100%", label: "Self-Taught", color: "from-yellow-500/20 to-orange-500/20" }
  ];

  const traits = [
    { icon: Target, text: "Problem Solver", color: "text-purple-400" },
    { icon: Zap, text: "Self-Taught", color: "text-blue-400" },
    { icon: Lightbulb, text: "ML Enthusiast", color: "text-yellow-400" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  Hey, I'm Charan — a self-taught full-stack developer and ML student. I went from zero coding background to building production-ready apps in under 6 months. I love solving problems with Next.js, Tailwind, Clerk, and Hygraph while also exploring how AI can make apps smarter.
                </p>
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  My goal? To ship meaningful projects that merge clean design with powerful tech. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Traits */}
              <div className="flex flex-wrap gap-4">
                {traits.map((trait, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-slate-700/50 dark:bg-slate-700/50 light:bg-white/80 px-4 py-2 rounded-2xl border border-slate-600/50 dark:border-slate-600/50 light:border-slate-200/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <trait.icon className={`w-4 h-4 ${trait.color}`} />
                    <span className={`text-sm font-medium ${trait.color}`}>
                      {trait.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl border border-slate-600/30 dark:border-slate-600/30 light:border-slate-200/30 backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
