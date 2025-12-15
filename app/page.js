import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
//import SplashCursor from './components/SplashCursor';

// import GrainOverlay from './components/GrainOverlay';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 dark:bg-slate-900 light:bg-slate-50 transition-colors duration-300">
      {/* GrainOverlay removed for clarity */}
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}