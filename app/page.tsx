import ContactSection from "@/components/layout/contact";
import FaqSection from "@/components/layout/faq";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/layout/hero-section";
import HighlightSection from "@/components/layout/highlight-section";
import Navbar from "@/components/layout/navbar";
import ProjectsSection from "@/components/layout/projects-section";
import Testimonials from "@/components/layout/testimonials";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const sectionStyle = "max-w-7xl mx-auto w-full flex flex-col px-4";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <div className="border-b pb-4"></div>

        <HeroSection />
      </div>

      <HighlightSection />
      <ProjectsSection />
      <Testimonials />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
