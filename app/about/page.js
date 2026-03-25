import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import Footer from '../Footer';

export const metadata = {
  title: "About Charan Sai | Full-Stack Developer",
  description: "Learn more about Charan Sai, a full-stack developer specializing in AI and web technologies.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
