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
    <section id="contact" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden border-t border-border/50">
      {/* Background Glows */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Giant Call to Action */}
          <div>
            <h2 className="text-7xl md:text-9xl font-cursive font-bold text-foreground mb-8 leading-[0.8]">
              LET&rsquo;S <br />
              <span className="text-outline">TALK.</span>
            </h2>
            <div className="text-2xl text-muted-foreground max-w-md">
              <p className="mb-4">Ready to build something dashing?</p>
              <a href="mailto:chimbilicharan@gmail.com" className="text-primary hover:text-foreground transition-all duration-300 inline-block font-medium border-b-2 border-primary hover:border-foreground pb-1">
                chimbilicharan@gmail.com
              </a>
            </div>
          </div>

          {/* Minimal Form */}
          <form onSubmit={handleSubmit} className="space-y-8 bg-card/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-border/50 shadow-2xl">
            <div className="space-y-1">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border/50 py-4 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                placeholder="Name"
              />
            </div>
            <div className="space-y-1">
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border/50 py-4 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                placeholder="Email"
              />
            </div>

            <div className="space-y-1">
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border/50 py-4 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 resize-none"
                placeholder="Message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center justify-between w-full h-16 md:h-20 px-8 bg-primary/10 active:bg-primary/20 rounded-2xl hover:bg-primary transition-all duration-500 overflow-hidden relative"
            >
              <span className="text-xl font-bold text-foreground group-hover:text-white z-10">Send Message</span>
              {isSubmitting ? (
                <Loader2 className="w-8 h-8 animate-spin text-foreground group-hover:text-white z-10" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center transform group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-500 z-10">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
