'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const result = await getProjects();
        setProjects(result.myprojects || []);
        setError(null);
      } catch (err) {
        setError('Failed to load projects');
        console.error('Error fetching projects:', err);
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

  if (error) {
    return (
      <section id="projects" className="py-20 px-4 bg-slate-800/30 dark:bg-slate-800/30 light:bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-8">
              My Projects
            </h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-red-400 text-lg">{error}</p>
              <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 mt-2">Please check your environment variables and try again.</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-20 px-4 bg-slate-800/30 dark:bg-slate-800/30 light:bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-8">
              My Projects
            </h2>
            <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 rounded-2xl p-8 backdrop-blur-sm">
              <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-lg">No projects available at the moment.</p>
              <p className="text-slate-500 dark:text-slate-500 light:text-slate-400 mt-2">Projects will appear here once they're added to the CMS.</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30 dark:bg-slate-800/30 light:bg-slate-50/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 rounded-2xl border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 overflow-hidden backdrop-blur-sm hover:border-purple-500/50 dark:hover:border-purple-500/50 light:hover:border-purple-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
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
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.projectLink && (
                      <motion.a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/80 rounded-full backdrop-blur-sm hover:bg-purple-500/80 transition-colors duration-300"
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
                        className="p-2 bg-slate-800/80 rounded-full backdrop-blur-sm hover:bg-slate-600/80 transition-colors duration-300"
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
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-3 group-hover:text-purple-300 dark:group-hover:text-purple-300 light:group-hover:text-purple-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
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
                        className="flex-1 flex items-center justify-center space-x-2 border-2 border-purple-400 dark:border-purple-400 light:border-purple-500 text-purple-300 dark:text-purple-300 light:text-purple-600 py-2 px-4 rounded-xl hover:bg-purple-400 dark:hover:bg-purple-400 light:hover:bg-purple-500 hover:text-white dark:hover:text-white light:hover:text-white transition-all duration-300 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
