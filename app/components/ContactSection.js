'use client';

import { useState } from 'react';
import { createContact } from '../_utils/GlobalApi';
import { toast } from 'react-hot-toast';
import { Loader2, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createContact(formData);
      toast.success('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Error sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-32 pb-12 px-6 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-end">

          {/* Giant Call to Action */}
          <div>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground mb-8 leading-[0.8]">
              LET&rsquo;S <br />
              <span className="text-outline">TALK.</span>
            </h2>
            <div className="text-2xl text-muted-foreground max-w-md">
              <p>Ready to build something dashing?</p>
              <a href="mailto:chimbilicharan@gmail.com" className="text-primary hover:text-foreground transition-colors mt-4 inline-block font-medium border-b border-primary">
                chimbilicharan@gmail.com
              </a>
            </div>
          </div>

          {/* Minimal Form */}
          <form onSubmit={handleSubmit} className="space-y-8 bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border">
            <div className="space-y-1">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                placeholder="Name"
              />
            </div>
            <div className="space-y-1">
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                placeholder="Email"
              />
            </div>

            <div className="space-y-1">
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
                placeholder="Message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center justify-between w-full p-4 bg-primary/10 active:bg-primary/20 rounded-xl hover:bg-primary transition-all duration-300"
            >
              <span className="text-lg font-medium text-foreground group-hover:text-white">Send Message</span>
              {isSubmitting ? (
                <Loader2 className="w-6 h-6 animate-spin text-foreground group-hover:text-white" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center transform group-hover:rotate-45 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Charan Sai.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
