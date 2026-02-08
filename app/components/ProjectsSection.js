'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Sparkles, FolderGit2, Code2 } from 'lucide-react';
import Image from 'next/image';
import { getProjects } from '../_utils/GlobalApi';

const sampleProjects = [
  {
    name: "E-Commerce Suite",
    about: "A complete scaleable e-commerce solution features payment processing, inventory management, and a dashboard for analytics. Built with performance in mind using Next.js caching strategies and optimized database queries.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    category: "Web App",
    image: { url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80" }
  },
  {
    name: "Task Sync",
    about: "Real-time collaboration tool for remote teams. Syncs tasks, chats, and files instantly using WebSockets. Handles conflict resolution using operational transformation to ensure data consistency.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    tags: ["React", "Socket.io", "Node.js"],
    category: "Web App",
    image: { url: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80" }
  },
  {
    name: "Portfolio V1",
    about: "The first iteration of my personal portfolio. Showcasing early experiments with 3D web graphics, shaders, and complex animations using Three.js. A playground for learning WebGL concepts.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    tags: ["Three.js", "GSAP"],
    category: "Creative",
    image: { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" }
  },
  {
    name: "AI Writer",
    about: "Generative AI tool for blog posts. Uses OpenAI API to generate content based on prompts, with a focus on SEO optimization and readability. Includes features for tone adjustment and formatting.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    tags: ["OpenAI", "Python"],
    category: "AI/ML",
    image: { url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" }
  }
];

function ProjectCard({ project, idx }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        {project.image?.url ? (
          <Image
            src={project.image.url}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <Code2 className="w-12 h-12 text-gray-700" />
          </div>
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />

        {/* Links overlay - visible on hover/tap */}
        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-3">
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-background/80 backdrop-blur-md rounded-full text-foreground hover:text-primary hover:scale-110 transition-all border border-border shadow-lg"
                aria-label="View Project"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.sourcecode && (
              <a
                href={project.sourcecode}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-background/80 backdrop-blur-md rounded-full text-foreground hover:text-primary hover:scale-110 transition-all border border-border shadow-lg"
                aria-label="View Source Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          {project.category && (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full shadow-lg">
              <Sparkles className="w-3 h-3 text-primary" />
              {project.category}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 md:p-8 pt-2">
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
          {project.name}
          <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
          {project.about}
        </p>

        <div className="mt-auto pt-4 border-t border-border/50">
          <div className="flex flex-wrap gap-2">
            {(project.skill || project.tags || []).slice(0, 4).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await getProjects();
        if (result.myprojects && result.myprojects.length > 0) {
          setProjects(result.myprojects);
        } else {
          setProjects(sampleProjects);
        }
      } catch (err) {
        setProjects(sampleProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categories = ['All', ...new Set(projects.map(p => p.category || 'Other'))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => (p.category || 'Other') === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 md:px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              My <span className="text-primary">projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A collection of projects that define my journey as a developer.
              From conceptual experiments to production-ready applications.
            </p>
          </div>

          <a
            href="https://github.com/charan1835"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
          >
            <FolderGit2 className="w-5 h-5 text-primary" />
            View GitHub Profile
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-12 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {loading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="h-[400px] bg-card/50 rounded-3xl animate-pulse border border-border" />
              ))
            ) : (
              filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id || idx} project={project} idx={idx} />
              ))
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 md:hidden text-center">
          <a
            href="https://github.com/charan1835"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <FolderGit2 className="w-5 h-5 text-primary" />
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}