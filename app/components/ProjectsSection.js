'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Eye, Rocket } from 'lucide-react';
import { getProjects } from '../_utils/GlobalApi';
import ElectricBorder from './ElectricBorder';
import useIsMobile from './useIsMobile';

// Helper function to handle different image URL formats
const getImageUrl = (url) => {
  if (!url) return '/project1.png'; // Fallback image
  
  // If it's already a full URL, return it
  if (url.startsWith('http')) {
    // Check if it's a Next.js image URL and return it as is
    if (url.includes('/_next/image?url=')) {
      return url;
    }
    return url;
  }
  
  // If it's a relative path starting with /, it's from the public folder
  if (url.startsWith('/')) return url;
  
  // For Hygraph CDN URLs
  if (url.includes('hygraph') || url.includes('graphassets')) {
    // If it's already a full Hygraph URL, return it
    return url;
  }
  
  // For South Asia GraphAssets URLs (ap-south-1)
  if (url.includes('ap-south-1.graphassets.com')) {
    return url;
  }
  
  // For partial Hygraph asset IDs, construct the full URL
  return `https://media.graphassets.com/${url.split('/').pop()}`;
};

// Helper function to format skill names from API IDs
const formatSkillName = (apiId) => {
  if (typeof apiId !== 'string') return '';
  return apiId.replace(/_/g, ' ');
};

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

// Sample projects for fallback
const sampleProjects = [
  {
    name: "E-Commerce Platform",
    about: "A full-stack e-commerce application built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    // Using placeholder image URLs that will work with our getImageUrl function
    image: { url: "https://picsum.photos/800/600?random=1" },
    skill: ["Next.js", "Stripe", "Admin UI"]
  },
  {
    name: "Task Management App",
    about: "A collaborative task management application with real-time updates, built using React, Node.js, and Socket.io.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    // Using placeholder image URLs that will work with our getImageUrl function
    image: { url: "https://picsum.photos/800/600?random=2" },
    skill: ["React", "Socket.io", "Node.js"]
  },
  {
    name: "Portfolio Website",
    about: "This responsive portfolio website showcasing my skills and projects, built with Next.js, Tailwind CSS, and Framer Motion.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    // Using placeholder image URLs that will work with our getImageUrl function
    image: { url: "https://picsum.photos/800/600?random=3" },
    skill: ["Next.js", "Tailwind CSS", "Framer Motion"]
  }
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [useSampleData, setUseSampleData] = useState(false);
  const [expanded, setExpanded] = useState({});
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const result = await getProjects();
        if (result.myprojects && result.myprojects.length > 0) {
          setProjects(result.myprojects);
          setUseSampleData(false);
        } else {
          setProjects(sampleProjects);
          setUseSampleData(true);
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setProjects(sampleProjects);
        setUseSampleData(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const toggleExpanded = (index, type) => {
    setExpanded(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [type]: !prev[index]?.[type]
      }
    }));
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900 relative z-10">
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
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-4" />
            {useSampleData && (
              <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm">
                Sample projects - Connect your Hygraph CMS to show real projects
              </p>
            )}
          </motion.div>

          {/* Projects Grid */}
          {loading ? (
            <div className="text-center py-10">
              <div className="relative w-full max-w-md mx-auto h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 loading-bar"></div>
              </div>
              <p className="text-slate-300 mt-4 text-lg font-semibold tracking-wider">
                UI is heavy, please wait...
              </p>
              <p className="text-slate-400 text-sm">
                Fetching projects from the digital cosmos...
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const DESCRIPTION_CHAR_LIMIT = 100;
                const SKILL_LIMIT = 3;

                const isLongDescription = project.about.length > DESCRIPTION_CHAR_LIMIT;
                const isDescriptionExpanded = expanded[index]?.description;

                const hasManySkills = project.skill && project.skill.length > SKILL_LIMIT;
                const areSkillsExpanded = expanded[index]?.skills;
                const displayedSkills = hasManySkills && !areSkillsExpanded
                  ? project.skill.slice(0, SKILL_LIMIT)
                  : project.skill;

                const cardContent = (
                  <div className="group relative bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative overflow-hidden h-48">
                      {project.image?.url ? (
                        <div className="relative h-full w-full">
                          <Image 
                            src={getImageUrl(project.image.url)} 
                            alt={project.name}
                            fill={true}
                            sizes="100vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                          <Rocket className="w-16 h-16 text-purple-400" />
                        </div>
                      )}
                      
                      {/* Overlay - Reduced opacity and changed gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Quick Actions - Moved to bottom right for better visibility */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-800 mb-2">
                        {project.name}
                      </h3>
                      <div className="flex-grow">
                        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mb-2">
                          {isLongDescription && !isDescriptionExpanded
                            ? `${project.about.substring(0, DESCRIPTION_CHAR_LIMIT)}...`
                            : project.about}
                        </p>
                        {isLongDescription && (
                          <button
                            onClick={() => toggleExpanded(index, 'description')}
                            className="text-cyan-400 text-xs font-semibold hover:underline mb-4"
                          >
                            {isDescriptionExpanded ? 'See less' : 'See more'}
                          </button>
                        )}
                      </div>
                      
                      {/* Skills/Tech Stack */}
                      {project.skill && project.skill.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {displayedSkills.map((s, i) => (
                            <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-700/50 text-cyan-300 capitalize">
                              {s}
                            </span>
                          ))}
                          {hasManySkills && (
                            <button onClick={() => toggleExpanded(index, 'skills')} className="text-cyan-400 text-xs font-semibold hover:underline">
                              {areSkillsExpanded ? 'See less' : `+${project.skill.length - SKILL_LIMIT} more`}
                            </button>
                          )}
                        </div>
                      )}

                      {/* Project Links */}
                      <div className="flex space-x-3 mt-auto pt-4">
                        {project.projectLink && (
                          <a
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Live Demo
                          </a>
                        )}
                        {project.sourcecode && (
                          <a
                            href={project.sourcecode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-slate-500/10 to-slate-600/10 text-slate-400 hover:from-slate-500/20 hover:to-slate-600/20 transition-all duration-300"
                          >
                            <Github className="w-3 h-3" />
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={!isMobile ? { y: -5 } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobile ? (
                      cardContent
                    ) : (
                      <ElectricBorder
                        color="#7df9ff"
                        speed={1}
                        chaos={0.5}
                        thickness={2}
                        style={{ borderRadius: 16 }}
                      >
                        {cardContent}
                      </ElectricBorder>
                    )}
                  </motion.div>
                )
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}