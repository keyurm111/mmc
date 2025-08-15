import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Award, 
  Users, 
  Calendar, 
  Facebook, 
  Twitter, 
  Linkedin,
  Video
} from 'lucide-react';
import Team from '../components/Team';
import Footer from '../components/Footer';

const AboutPage = () => {

  const stats = [
    { icon: Calendar, number: '15+', label: 'Years Experience' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '200+', label: 'Projects Completed' },
    { icon: CheckCircle, number: '100%', label: 'Satisfaction Rate' },
  ];

  const features = [
    'Premium Quality Materials',
    'Expert Installation Team',
    'Lifetime Warranty',
    'Free Consultation & Quote',
    '24/7 Customer Support',
    'Eco-Friendly Solutions',
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      {/* About Section */}
      <section id="about" className="section-padding warm-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
                <span className="text-primary">👋</span>
                <span className="text-sm font-medium text-primary">WELCOME TO MMC</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Welcome to MMC - 
                <span className="text-primary"> Your Trusted Partner</span>
              </h2>
              
                              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At MMC (Marble Magik Corporation), we believe that exceptional stone care and construction solutions can transform any space into something extraordinary. 
                With over 15 years of dedicated service, our team of skilled craftsmen has been helping homeowners and businesses 
                create beautiful, durable, and functional spaces.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From luxury marble installations to cozy hardwood floors, we combine traditional craftsmanship with modern 
                techniques to deliver results that exceed expectations. Every project is a testament to our commitment to 
                quality, precision, and customer satisfaction.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary">
                Learn More About Us
              </button>
            </div>

            {/* Right Content - Image & Stats */}
            <div className="animate-fade-in-right">
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://marblemagik.in/wp-content/uploads/2022/09/Group-917.png"
                    alt="Marble Magik Corporation Team"
                    className="w-full h-full object-contain"
                  />
                </div>


              </div>
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;