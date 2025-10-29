'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Code, Database, Zap } from 'lucide-react';

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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const experience = {
  title: "Full Stack Development Freelance",
  duration: "Aug 2025 – Present",
  location: "Guntakal",
  achievements: [
    {
      icon: Code,
      title: "Responsive UI Design",
      description: "Designed responsive UIs with Next.js + Tailwind CSS"
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Integrated Hygraph APIs & Clerk Auth for secure data handling"
    },
    {
      icon: Zap,
      title: "Serverless Optimization",
      description: "Optimized serverless workflows for smooth deployments"
    }
  ]
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400" />
              
              {/* Experience Card */}
              <motion.div
                variants={itemVariants}
                className="relative bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 rounded-2xl border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 backdrop-blur-sm p-8 hover:border-purple-500/50 dark:hover:border-purple-500/50 light:hover:border-purple-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-8 top-8 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-slate-800 dark:bg-slate-800 light:bg-white rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2 md:mb-0">
                    {experience.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2 text-purple-300 dark:text-purple-300 light:text-purple-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-400 light:text-slate-500">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-xl bg-slate-700/30 dark:bg-slate-700/30 light:bg-slate-100/50 border border-slate-600/30 dark:border-slate-600/30 light:border-slate-200/30 hover:border-purple-500/30 dark:hover:border-purple-500/30 light:hover:border-purple-400/30 transition-all duration-300 group"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                          <achievement.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <h4 className="font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900">
                          {achievement.title}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
