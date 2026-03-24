'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Github, ExternalLink, X, Calendar, Briefcase, Eye } from 'lucide-react';

const achievements = [
    {
        title: "Finalist - Fynd Engineering Internship",
        organization: "Fynd via Hacktimus",
        description: "Reached final consideration for Engineering Internship at Fynd via Hacktimus; demonstrated strong technical skills and project execution before opting out due to overlapping academic responsibilities.",
        icon: Trophy,
        date: "2025",
        image: "/FYND.jpeg"
    },
    {
        title: "Active Contributor",
        organization: "GitHub",
        description: "Maintained an active contribution streak with over 350 commits in the last 6 months, working on various freelance and personal projects.",
        icon: Github,
        date: "2025"
    },
    {
        title: "Build-a-Thon - LPU Campus Hackthon",
        organization: "LPU",
        description: "Participated in the Build-a-Thon - LPU Campus Hackthon and received a Certificate of Participation for demonstrating innovation and technical problem solving.",
        icon: Award,
        date: "2024"
    }
];

const AchievementCard = ({ achievement, idx }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className="perspective-1000 w-full aspect-square group cursor-pointer"
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
                className="w-full h-full relative shadow-xl rounded-[2.5rem]"
            >
                {/* Front Side */}
                <div 
                    className="absolute inset-0 bg-card/80 backdrop-blur-xl border border-border/50 rounded-[2.5rem] overflow-hidden group-hover:border-primary/50 transition-colors duration-500"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    {achievement.image ? (
                        <div className="w-full h-full relative">
                            <img 
                                src={achievement.image} 
                                alt={achievement.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
                                <div className="mb-4 inline-block p-4 bg-primary/20 backdrop-blur-xl rounded-2xl text-primary w-fit border border-primary/20">
                                    <achievement.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-cursive font-bold text-white mb-2 leading-tight">
                                    {achievement.title}
                                </h3>
                                <p className="text-white/60 font-mono text-xs uppercase tracking-[0.2em] font-bold">
                                    Tap to flip
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-background p-10 flex flex-col justify-between">
                            <div className="p-6 bg-primary/10 rounded-3xl text-primary w-fit border border-primary/10 group-hover:scale-110 transition-transform duration-500">
                                <achievement.icon className="w-12 h-12" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-cursive font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {achievement.title}
                                </h3>
                                <div className="flex items-center gap-3 text-primary font-mono font-bold tracking-wider text-sm uppercase">
                                    <span>Review Entry</span>
                                    <div className="h-0.5 w-8 bg-primary rounded-full transition-all group-hover:w-12" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Back Side */}
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
                            <achievement.icon className="w-8 h-8" />
                        </div>
                        <div className="flex gap-2">
                            {achievement.image && (
                                <a 
                                    href={achievement.image} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 hover:bg-primary/10 rounded-xl transition-colors text-primary border border-primary/10"
                                    onClick={(e) => e.stopPropagation()}
                                    title="View Original Image"
                                >
                                    <Eye className="w-6 h-6" />
                                </a>
                            )}
                            <button 
                                className="p-3 hover:bg-muted/50 rounded-xl transition-colors text-muted-foreground hover:text-foreground border border-border"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsFlipped(false);
                                }}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="grow overflow-y-auto no-scrollbar">
                        <h3 className="text-2xl md:text-3xl font-cursive font-bold text-foreground mb-4 leading-tight">
                            {achievement.title}
                        </h3>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <Briefcase className="w-5 h-5 text-primary" />
                                <span className="text-lg font-bold text-foreground/90">{achievement.organization}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground font-mono text-sm">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span>{achievement.date}</span>
                            </div>
                        </div>

                        <div className="h-px w-full bg-border/50 mb-6" />

                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-medium pr-4 italic border-l-2 border-primary/30 pl-4">
                            {achievement.description}
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2 text-primary font-mono font-bold uppercase text-[10px] tracking-[0.2em] opacity-40">
                        <span>Milestone Achieved</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};



export default function AchievementsSection() {
    return (
        <section id="achievements" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden flex flex-col items-center">
            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto relative z-10">
                <div className="mb-16 md:mb-24 text-center md:text-left">
                    <h2 className="text-5xl md:text-8xl font-cursive font-bold text-foreground mb-6 tracking-tighter uppercase leading-tight">
                        My <span className="text-outline">Achievements</span>
                    </h2>
                    <div className="h-2 w-32 bg-primary mb-6 rounded-full mx-auto md:mx-0" />
                    <p className="text-muted-foreground max-w-2xl text-lg font-medium">
                        Highlighting my career milestones, creative problem-solving, and continuous growth in the professional landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {achievements.map((achievement, idx) => (
                        <AchievementCard key={idx} achievement={achievement} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}


