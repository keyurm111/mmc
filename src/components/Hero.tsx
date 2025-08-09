import { ArrowRight, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  // Image carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of hero images
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern elegant living room with premium stone surfaces"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Luxury kitchen with marble countertops and stone care solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Elegant bathroom with premium stone tiles and construction chemicals"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern outdoor patio with stone adhesive applications"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Contemporary living space with advanced stone care products"
    }
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Primary decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-secondary/8 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left Column - Content */}
            <div className="animate-fade-in-left space-y-8 lg:space-y-10">
              
              {/* Pre-heading Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100/50">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">
                  PRECISION STONE CARE & CONSTRUCTION SOLUTIONS
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                  Come Help Us
                  <span className="block text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Improve
                  </span>
                  <span className="block">Your House</span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your living space with our expert stone care and construction solutions. 
                  We combine precision craftsmanship with premium Magik products to create 
                  stunning, durable surfaces that elevate your home.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  to="/about"
                  className="group bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-3"
                >
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/contact"
                  className="border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-3 hover:shadow-lg"
                >
                  <span>GET A QUOTE</span>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-primary/20 rounded-full border-2 border-white flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">500+ Happy Clients</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-600">15+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div className="animate-fade-in-right">
              <div className="relative">
                
                                            {/* Main Image Container */}
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                              <img
                                src={heroImages[currentImageIndex].src}
                                alt={heroImages[currentImageIndex].alt}
                                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                              />
                              
                              {/* Subtle overlay for better contrast */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                              
                              {/* Carousel Indicators */}
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {heroImages.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      index === currentImageIndex 
                                        ? 'bg-white scale-125' 
                                        : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                  />
                                ))}
                              </div>
                  
                  
                  
                  
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Decorative Corner Element */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-primary/30 rounded-tl-xl"></div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;