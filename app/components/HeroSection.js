'use client';

import { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import LightHeroCard from './LightHeroCard';
import HeroIntroCard from './HeroIntroCard';

export default function HeroSection() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    // Initial check
    setIsLightTheme(document.documentElement.classList.contains('light'));

    // Observe changes to the html class
    const observer = new MutationObserver(() => {
      setIsLightTheme(document.documentElement.classList.contains('light'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-6 pt-24 md:pt-32 pb-20">
       {/* Background Decoration */}
       <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
       <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className={`max-w-7xl mx-auto w-full relative z-10 flex flex-col ${!isLightTheme ? 'lg:flex-row' : 'items-center'} justify-center gap-16 lg:gap-32`}>
        {/* Intro Text Card (Dark Mode Only) */}
        {!isLightTheme && (
          <div className="flex-1 order-2 lg:order-1 w-full max-w-2xl">
            <HeroIntroCard />
          </div>
        )}

        {/* Profile Card */}
        <div className={`flex-shrink-0 ${!isLightTheme ? 'order-1 lg:order-2' : ''}`}>
          {isLightTheme ? (
            <LightHeroCard
              avatarUrl="/PR.jpg"
              name="Charan Sai"
              title="Full Stack Developer"
              handle="charan1835"
              onContactClick={scrollToProjects}
            />
          ) : (
            <ProfileCard
              avatarUrl="/PR.jpg"
              name="Charan Sai"
              title="Full Stack Developer | ML Enthusiast"
              handle="charan1835"
              status="Open to work"
              contactText="View My Work"
              onContactClick={scrollToProjects}
            />
          )}
        </div>
      </div>
    </section>
  );
}


