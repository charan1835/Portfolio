'use client';

import ProfileCard from './ProfileCard';

export default function HeroSection() {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      <ProfileCard
        avatarUrl="/pic.png"
        name="Charan Sai"
        title="Full Stack Developer | ML Enthusiast"
        handle="charan1835"
        status="Open to work"
        contactText="View My Work"
        onContactClick={scrollToProjects}
      />
    </section>
  );
}
