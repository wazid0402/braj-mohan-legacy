import bridgeImage from "@/assets/bridge-construction.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">About BMD</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Braj Mohan Developers Pvt. Ltd. founded in 1999 in Patna, Bihar, is a multidisciplinary 
              infrastructure and development firm with more than 25 years of experience. The organization 
              is renowned for producing top-notch civil projects, such as bridges, roads, and real estate 
              developments, all over India.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Its services include manpower, security, interior and exterior, constructions, and power sector.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={bridgeImage} 
              alt="BMD Infrastructure Projects" 
              className="rounded-lg shadow-corporate w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;