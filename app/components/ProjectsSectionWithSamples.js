'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Rocket } from 'lucide-react';
import { getProjects } from '../_utils/GlobalApi';

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

// Sample projects for testing
const sampleProjects = [
  {
    name: "E-Commerce Platform",
    about: "A full-stack e-commerce application built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    image: { url: null }
  },
  {
    name: "Task Management App",
    about: "A collaborative task management application with real-time updates, built using React, Node.js, and Socket.io.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    image: { url: null }
  },
  {
    name: "Portfolio Website",
    about: "This responsive portfolio website showcasing my skills and projects, built with Next.js, Tailwind CSS, and Framer Motion.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    image: { url: null }
  }
];

export default function ProjectsSectionWithSamples() {
  const [projects, setProjects] = useState(sampleProjects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [useSampleData, setUseSampleData] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const result = await getProjects();
        if (result.myprojects && result.myprojects.length > 0) {
          setProjects(result.myprojects);
          setUseSampleData(false);
        } else {
          // No projects from CMS, use sample data
          setProjects(sampleProjects);
          setUseSampleData(true);
        }
        setError(null);
      } catch (err) {
        console.log('CMS not configured, using sample projects');
        setProjects(sampleProjects);
        setUseSampleData(true);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 bg-slate-800/30 dark:bg-slate-800/30 light:bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 rounded-2xl border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 p-6 animate-pulse">
                <div className="w-full h-48 bg-slate-700 dark:bg-slate-700 light:bg-slate-200 rounded-xl mb-4"></div>
                <div className="h-6 bg-slate-700 dark:bg-slate-700 light:bg-slate-200 rounded-xl mb-3"></div>
                <div className="h-4 bg-slate-700 dark:bg-slate-700 light:bg-slate-200 rounded-lg mb-2"></div>
                <div className="h-4 bg-slate-700 dark:bg-slate-700 light:bg-slate-200 rounded-lg w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-4" />
            {useSampleData && (
              <p className="text-slate-400 text-sm">
                Sample projects - Connect your Hygraph CMS to show real projects
              </p>
            )}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  {project.image?.url ? (
                    <img 
                      src={project.image.url} 
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <Rocket className="w-16 h-16 text-purple-400" />
                    </div>
                  )}
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.projectLink && (
                      <motion.a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 rounded-full hover:bg-purple-500 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {project.sourcecode && (
                      <motion.a
                        href={project.sourcecode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 rounded-full hover:bg-slate-600 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.about}
                  </p>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    {project.projectLink && (
                      <motion.a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {project.sourcecode && (
                      <motion.a
                        href={project.sourcecode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 border-2 border-purple-400 text-purple-300 py-2 px-4 rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/charan1835"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
