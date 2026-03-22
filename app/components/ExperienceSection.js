'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2023-Present",
    role: "B.Tech CSE (AI & ML)",
    company: "Lovely Professional University",
    desc: "Currently pursuing Bachelor of Technology in Computer Science and Engineering with a specialization in AI and ML. Maintaining a CGPA of 7.45. Gained hands-on experience in full-stack development and machine learning fundamentals.",
    location: "Punjab, India"
  },
  {
    year: "2023-2021",
    role: "Intermediate (Telangana Board)",
    company: "Resonance Hyderabad",
    desc: "Completed intermediate education with a percentage of 90%. Strong foundation in Mathematics, Physics, and Chemistry.",
    location: "Hyderabad, India"
  },
  {
    year: "2021-2016",
    role: "CBSE High School",
    company: "Ridge School Kurnool",
    desc: "Successfully completed high school education with 85% score in the CBSE board examinations.",
    location: "Kurnool, India"
  },
  {
    year: "2025",
    role: "Freelance Developer",
    company: "Development Projects",
    desc: "Developing websites for local clients and personal projects. Delivering clean, production-ready code with a focus on user experience and performance.",
    location: "Remote"
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-cursive font-bold text-foreground mb-6 tracking-tighter uppercase leading-none">
            Career <span className="text-outline">Timeline</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="relative space-y-16">
          {/* Vertical Timeline Line (Desktop Only) */}
          <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative grid md:grid-cols-12 gap-8 items-start group"
            >
              {/* Timeline Indicator (Desktop Only) */}
              <div className="absolute left-[3.5rem] top-10 -translate-x-1/2 w-3 h-3 rounded-full bg-border group-hover:bg-primary group-hover:scale-150 transition-all duration-500 hidden md:flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-background scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>

              {/* Year Column */}
              <div className="md:col-span-3 lg:col-span-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-black text-outline opacity-40 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap inline-block p-2">
                  {exp.year.split('-')[0]}
                </span>
                {exp.year.includes('-') && (
                  <div className="text-sm font-mono text-primary font-bold md:mt-2 md:pl-2">
                    {exp.year.split('-')[1]}
                  </div>
                )}
              </div>

              {/* Content Card */}
              <div className="md:col-span-9 lg:col-span-10 pt-4 md:pt-6 md:pl-12 border-t md:border-t-0 border-border group-hover:md:border-l-primary transition-all duration-500">
                <div className="relative bg-card/40 backdrop-blur-sm p-8 rounded-[2rem] border border-border group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-cursive font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-lg md:text-xl text-muted-foreground mb-4 font-mono font-medium flex flex-wrap items-center gap-2">
                    {exp.company}
                    <span className="text-primary/40">•</span>
                    <span className="text-sm opacity-60 tracking-wider uppercase">{exp.location}</span>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
