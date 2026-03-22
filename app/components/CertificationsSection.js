'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, BadgeCheck, ArrowRight } from 'lucide-react';

const certifications = [
    {
        title: "Full Stack Development In React and Node",
        organization: "LPU",
        date: "Jul 2025",
        image: "/certifications/fullstack-lpu.png",
        link: "/certifications/fullstack-lpu.png",
        icon: BadgeCheck
    },
    {
        title: "Computational Theory: Language Principle & Finite Automata Theory",
        organization: "Infosys Springboard",
        date: "Aug 2025",
        image: "/certifications/computational-theory.png",
        link: "https://verify.onwingspan.com",
        icon: ShieldCheck
    },
    {
        title: "Build Generative AI Apps and Solutions with No-Code Tools",
        organization: "Infosys Springboard",
        date: "Aug 2025",
        image: "/certifications/gen-ai-nocode.png",
        link: "https://verify.onwingspan.com",
        icon: ShieldCheck
    },
    {
        title: "Artificial Intelligence For Beginners",
        organization: "Mind Luster",
        date: "Mar 2024",
        image: "/certifications/ai-beginners.jpg",
        link: "#",
        icon: BadgeCheck
    },
    {
        title: "Python programming language",
        organization: "Mind Luster",
        date: "Feb 2024",
        image: "/certifications/python-mindluster.png",
        link: "#",
        icon: Award
    }
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-cursive font-bold text-foreground mb-6 tracking-tighter uppercase">
                        My <span className="text-outline">Certifications</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mb-6" />
                </div>

                <div className="flex gap-6 overflow-x-auto pb-12 scrollbar-none snap-x snap-mandatory scroll-smooth p-2 -m-2">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex-shrink-0 w-[85vw] md:w-[calc(33.333%-1rem)] snap-center bg-card/60 backdrop-blur-xl border border-border rounded-[2.5rem] p-8 hover:border-primary/50 transition-all group relative hover:-translate-y-2 duration-300 shadow-xl"
                        >
                            <div className="mb-6 inline-block p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                                <cert.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            </div>

                            {cert.image && (
                                <div className="mb-6 relative h-48 w-full overflow-hidden rounded-[2rem] border border-border group-hover:border-primary/50 transition-colors bg-muted/10">
                                    <img 
                                        src={cert.image} 
                                        alt={cert.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-2 gap-4">
                                <h3 className="text-xl md:text-2xl font-cursive font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2" title={cert.title}>
                                    {cert.title}
                                </h3>
                                {cert.link && (
                                    <a 
                                        href={cert.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors mt-1 flex-shrink-0"
                                        title="View Certificate"
                                    >
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                )}
                            </div>

                            <div className="text-sm text-primary mb-4 font-mono font-bold tracking-tight">
                                {cert.organization} • {cert.date}
                            </div>
                            
                            <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                                Professional certification demonstrating proficiency and commitment to continuous learning in {cert.title.split(' ').slice(0, 3).join(' ')}.
                            </p>

                        </motion.div>
                    ))}
                </div>

                {/* Scroll Hint */}
                <div className="flex justify-center mt-4 md:hidden">
                    <div className="animate-pulse flex items-center gap-2 text-muted-foreground text-sm font-medium bg-muted/30 px-4 py-2 rounded-full border border-border">
                        <span>Scroll to explore</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </section>
    );
}
