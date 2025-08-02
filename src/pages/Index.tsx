import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { HomePage } from "../components/ui/home-screen/HomePage";
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
import WhyBmd from "@/components/WhyBmd";
import AnnualTurnover from "@/components/AnnualTurnover";
import OurClintele from "@/components/OurClintele";
import OurFinancePartners from "@/components/OurFinancePartners";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HomePage />
      <AboutSection />
      <VisionMissionSection />
      <ValuesSection />
      <TeamSection />
      <DirectorMessageSection />
      <WhyBmd />
      <AnnualTurnover />
      <OurClintele />
      <OurFinancePartners />
      <FooterSection />
    </div>
  );
};

export default Index;
