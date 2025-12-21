'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { getProjects } from '../_utils/GlobalApi';

const sampleProjects = [
  {
    name: "E-Commerce Suite",
    about: "A complete scaleable e-commerce solution features payment processing, inventory management, and a dashboard for analytics. Built with performance in mind using Next.js caching strategies and optimized database queries.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: { url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80" } // Modern UI abstract
  },
  {
    name: "Task Sync",
    about: "Real-time collaboration tool for remote teams. Syncs tasks, chats, and files instantly using WebSockets. Handles conflict resolution using operational transformation to ensure data consistency across clients.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    tags: ["React", "Socket.io", "Node.js"],
    image: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" } // Dashboard abstract
  },
  {
    name: "Portfolio V1",
    about: "The first iteration of my personal portfolio. Showcasing early experiments with 3D web graphics, shaders, and complex animations using Three.js. A playground for learning WebGL concepts.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    tags: ["Three.js", "GSAP"],
    image: { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" } // Abstract 3D
  },
  {
    name: "AI Writer",
    about: "Generative AI tool for blog posts. Uses OpenAI API to generate content based on prompts, with a focus on SEO optimization and readability. Includes features for tone adjustment and formatting.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    tags: ["OpenAI", "Python"],
    image: { url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" } // AI/Network abstract
  }
];

function ProjectCard({ project, idx }) {
  // isLarge logic: 1st and 4th items span 2 cols for variety
  const isLarge = idx === 0 || idx === 3;

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className={`group relative bg-card border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500
      ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
      `}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 h-full w-full">
        {project.image?.url && (
          <Image
            src={project.image.url}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
          />
        )}
        {/* Cinematic Gradient Overlay (Top to Bottom) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
      </div>

      {/* Content Layer - Floating Glass Card */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">

        {/* Top Actions (Hidden by default, reveal on hover) */}
        <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {project.projectLink && (
            <a href={project.projectLink} target="_blank" rel="noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-white transition-colors border border-white/10">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.sourcecode && (
            <a href={project.sourcecode} target="_blank" rel="noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors border border-white/10">
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Text Content */}
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
            {project.name}
          </h3>

          <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out">
            <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
              {project.about}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {(project.skill || project.tags || []).slice(0, 4).map((tag, tIdx) => (
              <span key={tIdx} className="text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                {tag}
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

  return (
    <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tighter">
            FEATURED <span className="text-outline">WORK</span>
          </h2>
          <div className="h-1 w-20 bg-primary mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of projects exploring the boundaries of design and technology.
          </p>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[450px]">
          {loading ? (
            <div className="text-foreground col-span-4">Loading...</div>
          ) : (
            projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} idx={idx} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}