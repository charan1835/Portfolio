'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Eye, Rocket, Plus, X, Save, Lock, LogIn, Trash2 } from 'lucide-react';
import { getProjects } from '../_utils/GlobalApi';
import toast, { Toaster } from 'react-hot-toast';

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
    image: { url: "https://picsum.photos/800/600?random=1" }
  },
  {
    name: "Task Management App",
    about: "A collaborative task management application with real-time updates, built using React, Node.js, and Socket.io.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    // Using placeholder image URLs that will work with our getImageUrl function
    image: { url: "https://picsum.photos/800/600?random=2" }
  },
  {
    name: "Portfolio Website",
    about: "This responsive portfolio website showcasing my skills and projects, built with Next.js, Tailwind CSS, and Framer Motion.",
    projectLink: "https://github.com/charan1835",
    sourcecode: "https://github.com/charan1835",
    // Using placeholder image URLs that will work with our getImageUrl function
    image: { url: "https://picsum.photos/800/600?random=3" }
  }
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useSampleData, setUseSampleData] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginData, setLoginData] = useState({
    id: '',
    password: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    projectLink: '',
    sourcecode: '',
    imageUrl: ''
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

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
        setError("Failed to load projects. Using sample data instead.");
        setProjects(sampleProjects);
        setUseSampleData(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check credentials
    if (loginData.id === '8688605760' && loginData.password === '183500') {
      setIsAuthenticated(true);
      setShowLoginForm(false);
      toast.success('Login successful! You can now add projects.');
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast.error('You must be logged in to add projects.');
      setShowLoginForm(true);
      return;
    }
    
    // Here you would typically submit the form data to your CMS
    // For now, we'll just add it to the local projects array
    const newProject = {
      name: formData.name,
      about: formData.about,
      projectLink: formData.projectLink,
      sourcecode: formData.sourcecode,
      image: { url: formData.imageUrl || 'https://picsum.photos/800/600?random=4' }
    };

    toast.success('Project added successfully!');
    setProjects(prev => [newProject, ...prev]);
    setFormData({
      name: '',
      about: '',
      projectLink: '',
      sourcecode: '',
      imageUrl: ''
    });
    setShowForm(false);
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

          {/* Add Project Button */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8 gap-3">
            {!isAuthenticated && (
              <button
                onClick={() => {
                  setShowLoginForm(!showLoginForm);
                  if (showForm) setShowForm(false);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
              >
                {showLoginForm ? (
                  <>
                    <X size={18} />
                    Cancel
                  </>
                ) : (
                  <>
                    <LogIn size={18} />
                    Login
                  </>
                )}
              </button>
            )}
            <button
              onClick={() => {
                if (!isAuthenticated) {
                  toast.error('Please login first to add projects');
                  setShowLoginForm(true);
                  return;
                }
                setShowForm(!showForm);
                if (showLoginForm) setShowLoginForm(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${isAuthenticated ? 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : 'from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'} rounded-full text-white font-medium transition-all duration-300`}
            >
              {showForm ? (
                <>
                  <X size={18} />
                  Cancel
                </>
              ) : (
                <>
                  <Plus size={18} />
                  Add Project
                </>
              )}
            </button>
            {isAuthenticated && (
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  toast.success('Logged out successfully');
                  if (showForm) setShowForm(false);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-medium hover:from-red-600 hover:to-orange-600 transition-all duration-300"
              >
                <Lock size={18} />
                Logout
              </button>
            )}
          </motion.div>

          {/* Login Form */}
          {showLoginForm && !isAuthenticated && (
            <motion.div 
              variants={itemVariants}
              className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 rounded-2xl border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 p-6 mb-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Login to Add Projects</h3>
              <p className="text-slate-400 mb-4">Please enter your credentials to add projects.</p>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="id" className="block text-sm font-medium text-slate-300 mb-1">ID</label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    value={loginData.id}
                    onChange={handleLoginInputChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="Enter your ID"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginInputChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                  >
                    <LogIn size={18} />
                    Login
                  </button>
                </div>
              </form>
            </motion.div>
          )}
          
          {/* Project Form */}
          {showForm && isAuthenticated && (
            <motion.div 
              variants={itemVariants}
              className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 rounded-2xl border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 p-6 mb-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Add New Project</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Project Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="E.g., E-Commerce Platform"
                  />
                </div>
                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-slate-300 mb-1">Description</label>
                  <textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="Describe your project..."
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="projectLink" className="block text-sm font-medium text-slate-300 mb-1">Live Demo URL</label>
                    <input
                      type="url"
                      id="projectLink"
                      name="projectLink"
                      value={formData.projectLink}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      placeholder="https://example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="sourcecode" className="block text-sm font-medium text-slate-300 mb-1">Source Code URL</label>
                    <input
                      type="url"
                      id="sourcecode"
                      name="sourcecode"
                      value={formData.sourcecode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-slate-300 mb-1">Image URL</label>
                  <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    <Save size={18} />
                    Save Project
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Projects Grid */}
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
                    {isAuthenticated && (
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setProjectToDelete(index);
                          setShowDeleteConfirm(true);
                        }}
                        className="p-2 bg-red-500/80 rounded-full backdrop-blur-sm hover:bg-red-600/80 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="w-4 h-4 text-white" />
                      </motion.button>
                    )}
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
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-800 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mb-4">
                    {project.about}
                  </p>
                  
                  {/* Project Links */}
                  <div className="flex space-x-3">
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
              </motion.div>
            ))}
          </div>
          
          {/* Delete Confirmation Dialog */}
          {showDeleteConfirm && projectToDelete !== null && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-md w-full mx-4"
              >
                <h3 className="text-xl font-bold text-white mb-4">Confirm Deletion</h3>
                <p className="text-slate-300 mb-6">Are you sure you want to delete this project? This action cannot be undone.</p>
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={() => {
                      setShowDeleteConfirm(false);
                      setProjectToDelete(null);
                    }}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => {
                      if (projectToDelete !== null) {
                        // Remove the project from the array
                        const updatedProjects = [...projects];
                        updatedProjects.splice(projectToDelete, 1);
                        setProjects(updatedProjects);
                        toast.success('Project deleted successfully!');
                      }
                      setShowDeleteConfirm(false);
                      setProjectToDelete(null);
                    }}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}