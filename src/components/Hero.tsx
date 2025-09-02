import { ArrowRight, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  // Image carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Word carousel state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isWordTransitioning, setIsWordTransitioning] = useState(false);
  
  // Array of hero images with corresponding words
  const heroImages = [
    {
      src: "https://marblemagik.in/wp-content/uploads/2023/07/MMC-Banners-updated-1.jpg",
      alt: "MMC Banners updated - Premium stone care solutions",
      word: "Beauty"
    },
    {
      src: "https://marblemagik.in/wp-content/uploads/2022/11/MMC-Banners_1.jpg",
      alt: "MMC Banners - Professional stone care and construction solutions",
      word: "Elegance"
    },
    {
      src: "https://marblemagik.in/wp-content/uploads/2022/11/MMC-Banners_2.jpg",
      alt: "MMC Banners - Expert stone care and construction chemicals",
      word: "Durability"
    },
    {
      src: "https://marblemagik.in/wp-content/uploads/2023/07/MMC-Banners-updated-Map.jpg",
      alt: "MMC Banners updated with map - Nationwide stone care services",
      word: "Perfection"
    },
    {
      src: "https://marblemagik.in/wp-content/uploads/2023/07/MMC-Banners-updated-1.jpg",
      alt: "MMC Banners updated - Premium stone care solutions",
      word: "Luxury"
    },
    {
      src: "https://marblemagik.in/wp-content/uploads/2022/11/MMC-Banners_1.jpg",
      alt: "MMC Banners - Professional stone care and construction solutions",
      word: "Strength"
    }
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsWordTransitioning(true);
      
      // After fade out, change word and image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
        setCurrentWordIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
        
        // Start fade in
        setIsWordTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* Main Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 lg:pt-24 pb-8 lg:pb-20 xl:pb-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left Column - Content */}
            <div className="animate-fade-in-left space-y-8 lg:space-y-10">
              

              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                  Elevate Your <span className={`text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent transition-all duration-700 ease-in-out ${
                    isWordTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}>Stone's {heroImages[currentWordIndex].word}</span> with Magik
                </h1>
                
                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-justify max-w-lg">
                  Transforming spaces with expert stone care. Crafted to last, designed to shine.
                </p>
              </div>
              
              {/* Trust Indicators - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex items-center space-x-6 pt-4">
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
              
              {/* CTA Buttons - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6">
                <Link
                  to="/magik-stories"
                  className="group bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-3"
                >
                  <span>DISCOVER MAGIK</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/contact"
                  className="border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-3 hover:shadow-xl hover:-translate-y-1"
                >
                  <span>GET IN TOUCH</span>
                </Link>
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
                                    className={`w-2 h-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                                      index === currentImageIndex 
                                        ? 'bg-white scale-125' 
                                        : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            
                            {/* Mobile Trust Indicators and CTA Buttons - Shown below image on mobile */}
                            <div className="lg:hidden space-y-6 mt-8">
                              {/* Trust Indicators */}
                              <div className="flex items-center justify-center space-x-6 pt-4">
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
                              
                              {/* CTA Buttons */}
                              <div className="flex flex-col gap-4 pt-6">
                                <Link
                                  to="/magik-stories"
                                  className="group bg-primary text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-3"
                                >
                                  <span>DISCOVER MAGIK</span>
                                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                
                                <Link
                                  to="/contact"
                                  className="border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-3 hover:shadow-xl hover:-translate-y-1"
                                >
                                  <span>GET IN TOUCH</span>
                                </Link>
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