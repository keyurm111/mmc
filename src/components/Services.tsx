import { 
  Hammer, 
  Home, 
  Palette, 
  Shield, 
  Wrench, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Tile Installation',
      description: 'Professional ceramic, porcelain, and natural stone tile installation for floors, walls, and backsplashes with precision and attention to detail.',
      features: ['Ceramic & Porcelain', 'Natural Stone', 'Mosaic Patterns']
    },
    {
      icon: Home,
      title: 'Hardwood Flooring',
      description: 'Premium hardwood floor installation, refinishing, and restoration services that bring warmth and elegance to any space.',
      features: ['Solid Hardwood', 'Engineered Wood', 'Floor Refinishing']
    },
    {
      icon: Palette,
      title: 'Laminate Flooring',
      description: 'Cost-effective laminate flooring solutions that mimic the look of hardwood or tile while providing excellent durability.',
      features: ['Wood-Look Laminate', 'Tile-Look Laminate', 'Waterproof Options']
    },
    {
      icon: Wrench,
      title: 'Grout Repair',
      description: 'Expert grout cleaning, repair, and replacement services to restore the beauty and integrity of your tile installations.',
      features: ['Grout Cleaning', 'Color Matching', 'Sealing Services']
    },
    {
      icon: Sparkles,
      title: 'Floor Polishing',
      description: 'Professional floor polishing and maintenance services to keep your surfaces looking pristine and extend their lifespan.',
      features: ['Marble Polishing', 'Terrazzo Restoration', 'Maintenance Plans']
    },
    {
      icon: Shield,
      title: 'Custom Designs',
      description: 'Bespoke flooring and tiling solutions tailored to your unique vision, including intricate patterns and artistic installations.',
      features: ['Pattern Design', 'Artistic Layouts', 'Luxury Materials']
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <span className="text-primary">⚡</span>
            <span className="text-sm font-medium text-primary">OUR COMPREHENSIVE SERVICES</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Expert Services for
            <span className="text-primary"> Every Need</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From residential homes to commercial spaces, we offer a complete range of flooring and tiling services 
            backed by years of experience and a commitment to excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl p-8 card-elegant hover:border-primary/20 border border-transparent transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <service.icon className="h-8 w-8 text-primary group-hover:text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="flex items-center space-x-2 text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every project is unique. Let us create a tailored solution that perfectly matches your vision, 
              budget, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Custom Quote
              </button>
              <button className="btn-outline">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;