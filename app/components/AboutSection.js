'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Zap, Lightbulb, Code2, Rocket } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const stats = [
  { number: "12+", label: "Months Coding", color: "from-purple-500 to-pink-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { number: "10+", label: "Projects Built", color: "from-blue-500 to-cyan-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { number: "4+", label: "Tech Stacks", color: "from-emerald-500 to-green-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { number: "100%", label: "Self-Taught", color: "from-orange-500 to-yellow-500", bg: "bg-orange-500/10", border: "border-orange-500/20" }
];

const traits = [
  { icon: Target, text: "Problem Solver", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
  { icon: Code2, text: "Clean Code", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
  { icon: Rocket, text: "Fast Learner", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
  { icon: Lightbulb, text: "ML Enthusiast", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" }
];

function Trait({ icon: Icon, text, color, bg, border }) {
  return (
    <motion.div
      className={`flex items-center space-x-2 ${bg} px-4 py-2 rounded-full border ${border} backdrop-blur-sm`}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className={`w-4 h-4 ${color}`} />
      <span className={`text-sm font-medium ${color}`}>
        {text}
      </span>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-500 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl">
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Hey, I&apos;m <span className="text-slate-100 font-semibold">Charan</span> — a full-stack developer and ML student.
                    I went from <span className="text-purple-400 font-medium">zero coding background</span> to building production-ready apps in under 9 months.
                  </p>
                  <p>
                    My goal? To ship meaningful projects that merge <span className="text-slate-100 font-medium">clean design</span> with <span className="text-slate-100 font-medium">powerful tech</span>.
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 -mr-2 -mt-2 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent blur-xl rounded-full" />
              </div>

              {/* Traits */}
              <div className="flex flex-wrap gap-3">
                {traits.map((trait, index) => (
                  <Trait key={index} {...trait} />
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`relative group p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl overflow-hidden hover:border-slate-700/60 transition-all duration-300`}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <h3 className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2`}>
                      {stat.number}
                    </h3>
                    <p className="text-slate-400 font-medium text-sm uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative Circle */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-500`} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
