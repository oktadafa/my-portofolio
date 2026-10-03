import { AboutSection } from "../organisms/AboutSection";
import { ContactSection } from "../organisms/ContactSection";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { HeroSection } from "../organisms/HeroSection";
import { ProjectsSection } from "../organisms/ProjectsSection";

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-geist">
      <Header />
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="max-w-[1440px] mx-auto px-margin py-5">
          {/* Ambient radial glow lights */}
          <div className="fixed top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none -z-10" />
          <div className="fixed top-[600px] right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="fixed top-[1800px] left-10 w-96 h-96 bg-primary-container/10 rounded-full blur-[130px] pointer-events-none -z-10" />

          <div className="flex flex-col w-full relative">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
