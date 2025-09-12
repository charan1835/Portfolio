import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSectionWithSamples from './components/ProjectsSectionWithSamples';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 dark:bg-slate-900 light:bg-slate-50 transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSectionWithSamples />
      <ContactSection />
    </main>
  );
}