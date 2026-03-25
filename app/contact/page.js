import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import Footer from '../Footer';

export const metadata = {
  title: "Contact Charan Sai | Get in touch",
  description: "Have a project in mind? Contact Charan Sai for collaborations and opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
