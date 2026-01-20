import ContactSection from "@/components/layout/contact";
import FaqSection from "@/components/layout/faq";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/layout/hero-section";
import HighlightSection from "@/components/layout/highlight-section";
import Navbar from "@/components/layout/navbar";
import ProjectsSection from "@/components/layout/projects-section";
import TechStackSection from "@/components/layout/tech-stack";
import Testimonials from "@/components/layout/testimonials";

export const sectionStyle = "max-w-7xl mx-auto w-full flex flex-col px-4";

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col" id="home">
        <div className="relative flex-1 flex flex-col overflow-hidden">
          <div className="absolute -inset-2 bg-grid-fade pointer-events-none" />
          <div
            className="absolute -top-20 -right-50 radial-glow animate-blob"
          />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[0.5px]" />
          <div className="relative z-20 flex flex-col flex-1">
            <Navbar />
            <div className="border-b pb-4"></div>
          </div>
          <HeroSection className="flex-1 z-10 items-center justify-center" />
        </div>
        <TechStackSection />
      </div>

      <HighlightSection />
      <ProjectsSection />
      <Testimonials />
      <FaqSection />
      <ContactSection />
      <div className="border-b"></div>
      <Footer />
    </>
  );
}
