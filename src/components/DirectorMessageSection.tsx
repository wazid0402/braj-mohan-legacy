import directorImage from "@/assets/director-portrait.jpg";

const DirectorMessageSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Director's Message</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 text-center">
              <img 
                src={directorImage} 
                alt="Banty Kumar - Director" 
                className="w-64 h-64 mx-auto rounded-full object-cover shadow-corporate mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-2">Banty Kumar</h3>
              <p className="text-accent font-semibold text-lg">Director</p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-lg shadow-corporate border-l-4 border-accent">
                <div className="text-accent text-6xl font-serif mb-4">"</div>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Infrastructure, in our opinion at Braj Mohan Developers, is more than just steel and concrete; 
                    it is the cornerstone upon which economies and communities are built. Passion for innovation, 
                    dedication to quality, and a strong sense of duty to the areas we serve have all influenced 
                    our path over the last 25+ years.
                  </p>
                  
                  <p>
                    BMD is pleased to take the lead in fusing clean energy, advanced technology, inclusive development, 
                    and smart infrastructure as India makes significant progress toward a sustainable future. Every 
                    project we work on, from solar power, EV infrastructure, and security services to real estate 
                    and civil construction, embodies our core values of impact, excellence, and integrity.
                  </p>
                  
                  <p>
                    Our growing presence in the renewable energy space, where our solar solutions are empowering 
                    households and advancing India's green energy revolution, is something we are particularly proud of. 
                    Our dedication to Bihar is unwavering, and we keep funding initiatives that improve communities, 
                    create jobs, and improve connectivity.
                  </p>
                  
                  <p>
                    We are creating more than just structures with the help of our clients, partners, and committed 
                    staff; we are creating a legacy of advancement. As we continue to build a more resilient, 
                    intelligent, and sustainable India, I extend an invitation to you to join us in our mission.
                  </p>
                </div>
                <div className="mt-6 text-right">
                  <p className="text-accent font-semibold">– Banty Kumar, Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessageSection;