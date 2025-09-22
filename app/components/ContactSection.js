'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { createContact } from '../_utils/GlobalApi';
import { Mail, Linkedin, Github, Instagram, Send, CheckCircle } from 'lucide-react';

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

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:chimbilicharan@gmail.com',
    icon: Mail,
    color: 'hover:text-purple-400',
    bgColor: 'hover:bg-purple-500/10'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chimbili-charan-sai-a9a623291/',
    icon: Linkedin,
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/charan1835',
    icon: Github,
    color: 'hover:text-gray-300',
    bgColor: 'hover:bg-gray-500/10'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/c.charan.19/',
    icon: Instagram,
    color: 'hover:text-pink-400',
    bgColor: 'hover:bg-pink-500/10'
  }
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await createContact(formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate with fellow developers. 
              Whether you have a project idea or just want to chat about tech, feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6">
                  Let&apos;s build something amazing together!
                </h3>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-8">
                  Ready to bring your ideas to life? I&apos;m here to help you create stunning web applications 
                  that make a difference. Drop me a message and let&apos;s discuss your next project!
                </p>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 rounded-2xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 backdrop-blur-sm text-slate-300 dark:text-slate-300 light:text-slate-600 transition-all duration-300 ${social.color} ${social.bgColor}`}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 rounded-2xl border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 backdrop-blur-sm p-8 shadow-xl">
                <h4 className="text-xl font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6">
                  Send me a message
                </h4>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-700/50 dark:bg-slate-700/50 light:bg-slate-100/50 border border-slate-600/50 dark:border-slate-600/50 light:border-slate-200/50 text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-400 dark:placeholder-slate-400 light:placeholder-slate-500 focus:border-purple-400 dark:focus:border-purple-400 light:focus:border-purple-500 focus:ring-2 focus:ring-purple-400/20 dark:focus:ring-purple-400/20 light:focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-700/50 dark:bg-slate-700/50 light:bg-slate-100/50 border border-slate-600/50 dark:border-slate-600/50 light:border-slate-200/50 text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-400 dark:placeholder-slate-400 light:placeholder-slate-500 focus:border-purple-400 dark:focus:border-purple-400 light:focus:border-purple-500 focus:ring-2 focus:ring-purple-400/20 dark:focus:ring-purple-400/20 light:focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-slate-700/50 dark:bg-slate-700/50 light:bg-slate-100/50 border border-slate-600/50 dark:border-slate-600/50 light:border-slate-200/50 text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-400 dark:placeholder-slate-400 light:placeholder-slate-500 focus:border-purple-400 dark:focus:border-purple-400 light:focus:border-purple-500 focus:ring-2 focus:ring-purple-400/20 dark:focus:ring-purple-400/20 light:focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 disabled:opacity-70 ${
                      isSubmitting
                        ? 'bg-gray-500'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    } shadow-lg hover:shadow-xl hover:shadow-purple-500/25`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
