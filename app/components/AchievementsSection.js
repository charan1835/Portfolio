'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Github } from 'lucide-react';

const achievements = [
    {
        title: "Finalist - Fynd Engineering Internship",
        organization: "Fynd via Hacktimus",
        description: "Reached final consideration for Engineering Internship at Fynd via Hacktimus; demonstrated strong technical skills and project execution before opting out due to overlapping academic responsibilities.",
        icon: Trophy,
        date: "2025"
    },

    {
        title: "Active Contributor",
        organization: "GitHub",
        description: "Maintained an active contribution streak with over 250 commits in the last 6 months, working on various freelance and personal projects.",
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

export default function AchievementsSection() {
    return (
        <section id="achievements" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-7xl font-cursive font-bold text-foreground mb-6 tracking-tighter">
                        MY <span className="text-outline">ACHIEVEMENTS</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-primary mb-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors group"
                        >
                            <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                <achievement.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <h3 className="text-2xl font-cursive font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {achievement.title}
                            </h3>

                            <div className="text-sm text-primary mb-4 font-mono">
                                {achievement.organization} • {achievement.date}
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
