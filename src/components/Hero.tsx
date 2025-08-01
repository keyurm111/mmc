import { ArrowRight, Play, ChevronUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle curved shapes for depth */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text */}
            <div className="animate-fade-in-left">
              {/* Pre-heading Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-gray-100">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">PRECISION TILE & FLOORING SOLUTIONS</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-gray-900">
                Come Help Us
                <span className="block text-primary"> Improve</span>
                <span className="block">Your House</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Transform your living space with our expert tiling and flooring services. 
                We combine precision craftsmanship with premium materials to create 
                stunning, durable surfaces that elevate your home.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/about"
                  className="group bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-3"
                >
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/contact"
                  className="border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-3"
                >
                  <span>GET A QUOTE</span>
                </Link>
              </div>
            </div>

            {/* Right Content - Image/Video */}
            <div className="animate-fade-in-right">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Modern elegant living room with premium flooring"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="group cursor-pointer">
                      <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all duration-300 group-hover:scale-110">
                        <Play className="h-10 w-10 text-primary ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
                    <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group">
                      <ChevronUp className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </button>
                    <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group">
                      <ChevronDown className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Decorative Corner Element */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary/30 rounded-tl-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium text-gray-600">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;