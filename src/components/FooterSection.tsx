const FooterSection = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">BMD</span>
              </div>
              <div className="text-primary-foreground">
                <div className="font-bold">BRAJ MOHAN DEVELOPERS</div>
                <div className="text-sm opacity-90">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Building India's infrastructure for over 25 years with excellence, innovation, and integrity.
            </p>
          </div>
          
          <div>
            <h3 className="text-accent font-semibold mb-4">Technical Stack</h3>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <p>Back-end: Node.js</p>
              <p>Front-end: React.js + TailwindCSS</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-accent font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <p>About BMD</p>
              <p>Our Services</p>
              <p>Contact Us</p>
              <p>Career Opportunities</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Braj Mohan Developers Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;