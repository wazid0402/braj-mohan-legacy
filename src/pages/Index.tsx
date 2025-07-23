import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ValuesSection from "@/components/ValuesSection";
import DirectorMessageSection from "@/components/DirectorMessageSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ClienteleSection from "@/components/ClienteleSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <ValuesSection />
      <DirectorMessageSection />
      <TeamSection />
      <ServicesSection />
      <StatsSection />
      <ClienteleSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
