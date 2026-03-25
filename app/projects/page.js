import Navigation from '../components/Navigation';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../Footer';

export const metadata = {
  title: "Projects by Charan Sai | Portfolio",
  description: "Explore the latest web and AI projects built by Charan Sai.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
