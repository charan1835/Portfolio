'use client';

import { motion } from 'framer-motion';
import { X, Gamepad2, Code2, Camera, MapPin, Music, Trophy, Cpu, Lightbulb, Languages, Heart, Sparkles, Zap } from 'lucide-react';

export default function MoreAboutMe({ onClose }) {
  const hobbies = [
    { icon: Gamepad2, label: "Gaming", description: "Competitive and immersive experiences" },
    { icon: Code2, label: "Coding", description: "Building digital worlds and tools" },
    { icon: Camera, label: "Photography", description: "Capturing moments and perspectives" },
    { icon: MapPin, label: "Travel", description: "Exploring new cultures and places" },
    { icon: Music, label: "Music", description: "Finding rhythm in everything" },
    { icon: Trophy, label: "Basketball", description: "Teamwork and physical endurance" },
    { icon: Cpu, label: "Hardware", description: "Tinkering with electronics" },
    { icon: Lightbulb, label: "Creating", description: "Always starting something new" },
  ];

  const languages = [
    { name: "English", level: "Professional working proficiency", flag: "🇬🇧" },
    { name: "Telugu", level: "Native or bilingual proficiency", flag: "🇮🇳" },
    { name: "Hindi", level: "Limited working proficiency", flag: "🇮🇳" },
  ];

  const philosophies = [
    { 
      title: "Curiosity First", 
      icon: Sparkles,
      text: "The best way to predict the future is to create it. I stay curious and keep learning." 
    },
    { 
      title: "Simplicity in Complexity", 
      icon: Zap,
      text: "Complex problems don't need complex solutions. I strive for elegant, simple code." 
    },
    { 
      title: "Empathy Driven", 
      icon: Heart,
      text: "I build for people, not just for machines. User experience is at the heart of my work." 
    }
  ];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-2xl overflow-y-auto cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="min-h-screen w-full flex items-center justify-center p-6 cursor-default"
      >
        <div className="max-w-4xl w-full bg-card/50 backdrop-blur-3xl border border-border/50 rounded-[3rem] p-8 md:p-16 my-20 relative shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <button
            onClick={onClose}
            className="absolute top-8 right-8 p-3 bg-muted hover:bg-primary hover:text-white rounded-full transition-all group z-[110] shadow-lg"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
          </button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-cursive font-bold text-foreground mb-6">
              Everything about <span className="text-primary drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">Me.</span>
            </h2>
            <div className="h-2 w-24 bg-primary rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
          </motion.div>

          {/* Full Summary */}
          <section className="mb-24">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground">
              <span className="text-primary">01.</span> The Full Story
            </h3>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                My journey into technology started with a simple curiosity about how things work. What began as tinkering with hardware eventually evolved into a deep passion for software development and machine learning. 
              </p>
              <p>
                I believe that technology should be a tool that empowers people. Whether it's a simple web app or a complex AI model, my goal is always to create something that provides value and feels intuitive. I specialize in the modern web stack, but I'm constantly exploring new horizons like deep learning and cloud architecture.
              </p>
              <p>
                I thrive in environments that challenge me to think outside the box and collaborate with diverse teams. For me, every project is an opportunity to learn something new and refine my craft.
              </p>
            </div>
          </section>

          {/* Hobbies Grid */}
          <section className="mb-24">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-foreground">
              <span className="text-primary">02.</span> Hobbies & Interests
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {hobbies.map((hobby, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="p-6 bg-muted/40 border border-border rounded-3xl flex gap-5 hover:border-primary/50 transition-colors group/hobby"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary group-hover/hobby:scale-110 transition-transform">
                    <hobby.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover/hobby:text-primary transition-colors">{hobby.label}</h4>
                    <p className="text-sm text-muted-foreground">{hobby.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Languages & Philosophy */}
          <div className="grid md:grid-cols-2 gap-16">
            <section>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-foreground">
                <span className="text-primary">03.</span> Languages
              </h3>
              <div className="space-y-6">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-muted/40 p-4 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <span className="text-3xl drop-shadow-sm">{lang.flag}</span>
                    <div>
                      <h4 className="font-bold text-foreground">{lang.name}</h4>
                      <p className="text-sm text-muted-foreground">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-foreground">
                <span className="text-primary">04.</span> Philosophy
              </h3>
              <div className="space-y-8">
                {philosophies.map((philo, idx) => (
                  <div key={idx} className="relative pl-8 group/philo">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 rounded-full group-hover/philo:bg-primary/40 transition-colors" />
                    <div className="absolute left-[-4px] top-2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-foreground">
                      <philo.icon className="w-5 h-5 text-primary" />
                      {philo.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{philo.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer info */}
          <div className="mt-32 text-center text-muted-foreground">
            <p className="font-cursive italic opacity-50 text-xl">&quot;To build is to understand.&quot;</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
