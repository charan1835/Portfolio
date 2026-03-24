'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, BadgeCheck, ArrowRight, X } from 'lucide-react';

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

const CertificationCard = ({ cert, idx }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="flex-shrink-0 w-[85vw] md:w-[450px] aspect-square perspective-1000 snap-center group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: idx * 0.1,
                    rotateY: { duration: 0.7, type: "spring", stiffness: 200, damping: 25 }
                }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2.5rem]"
            >
                {/* Front Side (Square Image) */}
                <div 
                    className="absolute inset-0 bg-white/5 backdrop-blur-md border border-border/50 rounded-[2.5rem] overflow-hidden"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    <div className="w-full h-full relative">
                        {cert.image && (
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                            <div className="mb-4 inline-block p-4 bg-primary/20 backdrop-blur-xl rounded-2xl text-primary w-fit border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <cert.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-cursive font-bold text-white mb-2 leading-tight">
                                {cert.title}
                            </h3>
                            <p className="text-white/60 font-mono text-xs uppercase tracking-[0.2em] font-bold">
                                Tap to flip
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back Side (Clean Details) */}
                <div 
                    className="absolute inset-0 bg-card border-2 border-primary/30 rounded-[2.5rem] p-10 flex flex-col shadow-2xl"
                    style={{ 
                        backfaceVisibility: "hidden", 
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)" 
                    }}
                >
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20">
                            <cert.icon className="w-8 h-8" />
                        </div>
                        <button
                            className="p-3 hover:bg-muted/50 rounded-xl transition-colors text-muted-foreground hover:text-foreground"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsFlipped(false);
                            }}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="grow overflow-y-auto no-scrollbar">
                        <h3 className="text-2xl md:text-3xl font-cursive font-bold text-foreground mb-4 leading-tight">
                            {cert.title}
                        </h3>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <Award className="w-5 h-5 text-primary" />
                                <span className="text-lg font-bold text-foreground/90">{cert.organization}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground font-mono text-sm">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <span>Issued: {cert.date}</span>
                            </div>
                        </div>

                        <div className="h-px w-full bg-border/50 mb-6" />

                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-medium pr-4">
                            Authorized professional certification from {cert.organization}. This credential verifies specialized knowledge and achievement in {cert.title.toLowerCase()}.
                        </p>
                    </div>

                    <div className="mt-8">
                        {cert.link && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn w-full py-5 bg-primary text-white rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/30"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span className="uppercase tracking-[0.1em] text-sm">Verify Credential</span>
                                <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};



export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden border-t border-border/50">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-cursive font-bold text-foreground mb-6 tracking-tighter uppercase leading-none">
                            My <span className="text-outline">Certifications</span>
                        </h2>
                        <div className="h-2 w-32 bg-primary mb-6 rounded-full" />
                        <p className="text-muted-foreground max-w-xl text-lg font-medium">
                            A curated collection of my professional achievements and academic validations in the realm of technology and computer science.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground font-mono text-sm md:text-base bg-card/30 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                        Explore Certifications
                    </div>
                </div>

                <div className="flex gap-8 overflow-x-auto pb-16 scrollbar-none snap-x snap-mandatory scroll-smooth p-4 -m-4">
                    {certifications.map((cert, idx) => (
                        <CertificationCard key={idx} cert={cert} idx={idx} />
                    ))}

                    {/* Spacer for scroll end visibility */}
                    <div className="flex-shrink-0 w-8 md:w-32 h-10" />
                </div>

                {/* Scroll Hint */}
                <div className="flex justify-between items-center mt-8">
                    <div className="flex gap-2">
                        {certifications.map((_, idx) => (
                            <div key={idx} className="h-1 w-6 bg-border rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="animate-pulse flex items-center gap-3 text-primary text-sm font-bold bg-primary/5 px-6 py-3 rounded-full border border-primary/20">
                        <span>Side scroll to explore more</span>
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </section>
    );
}

