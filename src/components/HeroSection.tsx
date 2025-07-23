import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-infrastructure.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            BRAJ MOHAN DEVELOPERS
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95">
            A multidisciplinary infrastructure and development firm with more than 25 years of experience, 
            renowned for bridges, roads, and real estate projects across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6"
            >
              Learn More
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;