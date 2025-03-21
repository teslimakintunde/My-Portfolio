import BackTotopBtn from "@/components/BackTotopBtn";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import HireMeSection from "@/components/HireMeSection";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectSection />
      <ServiceSection />
      <HireMeSection />
      <FaqSection />
      <TestimonialSection />
      <ContactSection />
      <BackTotopBtn />
    </main>
  );
}
