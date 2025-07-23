import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-corporate' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">BMD</span>
            </div>
            <div className="text-primary-foreground">
              <div className="font-bold text-lg">BRAJ MOHAN DEVELOPERS</div>
              <div className="text-sm opacity-90">Pvt. Ltd.</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Team
            </button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="border-accent text-accent hover:bg-accent hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;