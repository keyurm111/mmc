import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  ChevronUp, 
  ChevronDown, 
  ChevronRight,
  Facebook, 
  Twitter, 
  Linkedin,
  Video,
  CheckCircle
} from 'lucide-react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


const Home = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Magik Stories Data
  const magikStoriesData = [
    {
      id: 'p1',
      title: 'Ram Mandir, Ayodhya',
      category: 'PROJECT',
      description: 'A monumental project showcasing our expertise in stone care and construction solutions for one of India\'s most sacred sites.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'project',
      size: 'large'
    },
    {
      id: 'p2',
      title: 'Luxury Villa Project',
      category: 'CORPORATE',
      description: 'Complete marble installation and finishing for premium residential development.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'project',
      size: 'medium'
    },
    {
      id: 'e1',
      title: 'Stone Care Workshop 2024',
      category: 'EVENT',
      description: 'Professional training on advanced stone care and maintenance techniques.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'event',
      size: 'medium'
    },
    {
      id: 'ba1',
      title: 'Spreading the Magik Across the Nation',
      category: 'BRAND',
      description: 'Our journey of expanding our brand presence and delivering quality solutions nationwide.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'brand',
      size: 'large'
    },
    {
      id: 'p3',
      title: 'Commercial Complex',
      category: 'LATEST',
      description: 'Large-scale stone flooring and wall cladding project for modern office complex.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'project',
      size: 'small'
    },
    {
      id: 'e2',
      title: 'Product Launch Event',
      category: 'INNOVATION',
      description: 'Launch of revolutionary new Magik stone care products and technologies.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'event',
      size: 'small'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-40 left-10 w-8 h-8 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute top-60 right-32 w-6 h-6 bg-secondary/10 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-40 right-10 w-10 h-10 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute bottom-60 left-32 w-4 h-4 bg-secondary/10 rounded-full animate-float-delayed"></div>
        </div>

        <div className="container-max relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-8 shadow-lg border border-gray-100">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700 tracking-wide">PREMIUM SOLUTIONS</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Transform Your Space with
              <span className="block text-primary">Expert Solutions</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium products designed to enhance, protect, and beautify your surfaces with professional-grade quality.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Stone Care */}
            <div 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in-left border border-gray-100 category-card cursor-pointer"
              onClick={() => navigate('/categories/stone-care')}
            >
              {/* Image Layer */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Stone Care"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 category-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg category-badge">
                    PREMIUM
                  </span>
                </div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">STONE CARE</h3>
                  <p className="text-white/90 text-sm">Premium Protection Solutions</p>
                </div>
              </div>
              
              {/* Details Layer - Hidden by default, shown on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 p-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-center">STONE CARE</h3>
                <p className="text-white/90 text-base mb-6 leading-relaxed text-center">
                  Premium stone care solutions for maintaining the beauty and longevity of your stone surfaces. From cleaning to sealing.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Premium Quality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Long Lasting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Professional Grade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stone Adhesive */}
            <div 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in border border-gray-100 category-card cursor-pointer" 
              style={{ animationDelay: '0.1s' }}
              onClick={() => navigate('/categories/stone-adhesive')}
            >
              {/* Image Layer */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Stone Adhesive"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 category-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg category-badge">
                    PROFESSIONAL
                  </span>
                </div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">STONE ADHESIVE</h3>
                  <p className="text-white/90 text-sm">High-Performance Bonding</p>
                </div>
              </div>
              
              {/* Details Layer - Hidden by default, shown on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 p-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-center">STONE ADHESIVE</h3>
                <p className="text-white/90 text-base mb-6 leading-relaxed text-center">
                  High-performance adhesives and mortars designed specifically for stone and tile installations. Ensure secure bonds.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Strong Bond</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Durable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Fast Setting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction Chemicals */}
            <div 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in border border-gray-100 category-card cursor-pointer" 
              style={{ animationDelay: '0.2s' }}
              onClick={() => navigate('/categories/construction-chemical')}
            >
              {/* Image Layer */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction Chemicals"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 category-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg category-badge">
                    ADVANCED
                  </span>
                </div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">CONSTRUCTION CHEMICALS</h3>
                  <p className="text-white/90 text-sm">Advanced Protection Solutions</p>
                </div>
              </div>
              
               {/* Details Layer - Hidden by default, shown on hover */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 p-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-center">CONSTRUCTION CHEMICALS</h3>
                <p className="text-white/90 text-base mb-6 leading-relaxed text-center">
                  Advanced construction chemicals including waterproofing, sealants, and protective coatings for enhanced durability.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Waterproof</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Protective</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Long-lasting</span>
                  </div>
                </div>
              </div>
            </div>


          </div>


        </div>
      </section>

      {/* Company Statistics Section */}
      <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Visual Examples */}
            <div className="relative">
              <div className="relative z-10">
                {/* Kitchen Image - Top Left */}
                <div className="relative mb-6">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 image-rotate-left">
                    <img
                      src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Modern Kitchen with Marble Countertops"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Modern Kitchen Design</h3>
                      <p className="text-gray-600 text-sm">Premium marble countertops with advanced stone care solutions</p>
                    </div>
                  </div>
                </div>
                
                {/* Outdoor Patio Image - Bottom Right (Overlapping) */}
                <div className="relative -mt-8 ml-8">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-2 image-rotate-right">
                    <img
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Outdoor Patio with Pergola"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-900 mb-1">Outdoor Living Space</h3>
                      <p className="text-gray-600 text-xs">Durable construction with weather-resistant materials</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
            </div>

            {/* Right Side - Company Statistics */}
            <div className="space-y-8">
              {/* Section Header */}
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-gray-100">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700 tracking-wide">COMPANY ACHIEVEMENTS</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Building Excellence
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With decades of experience and thousands of successful projects, we've established ourselves as the leading provider of construction and stone care solutions.
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Stat 1: Years of Experience */}
                <div className="group bg-white rounded-2xl p-6 shadow-xl border border-gray-100 stat-card">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 stat-icon">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 stat-number">20+</div>
                    <div className="text-sm font-semibold text-gray-600">Years Industry Experience</div>
                  </div>
                </div>

                {/* Stat 2: Products */}
                <div className="group bg-white rounded-2xl p-6 shadow-xl border border-gray-100 stat-card">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 stat-icon">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 stat-number">100+</div>
                    <div className="text-sm font-semibold text-gray-600">Products</div>
                  </div>
                </div>

                {/* Stat 3: Counters */}
                <div className="group bg-white rounded-2xl p-6 shadow-xl border border-gray-100 stat-card">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 stat-icon">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 stat-number">850+</div>
                    <div className="text-sm font-semibold text-gray-600">Counters</div>
                  </div>
                </div>

                {/* Stat 4: Countries */}
                <div className="group bg-white rounded-2xl p-6 shadow-xl border border-gray-100 stat-card">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 stat-icon">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 stat-number">13</div>
                    <div className="text-sm font-semibold text-gray-600">Countries Spread Across</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary/90 rounded-2xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ready to Transform Your Space?</h3>
                    <p className="text-white/90">Join thousands of satisfied customers worldwide</p>
                  </div>
                  <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2">
                    <span>Get Started</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magik Stories Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container-max relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-16">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-gray-100">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">OUR STORIES</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Magik Stories
              </h2>
            </div>
            <div className="lg:w-2/3 lg:pl-8 lg:border-l-2 lg:border-primary/20">
              <p className="text-lg text-gray-600 leading-relaxed">
                There is a lot happening around with us all round the clock. Hence, we thought of keeping you updated of everything latest. Magik Stories is that and beyond. Get to know more about our work, our events, our partner activities and more.
              </p>
            </div>
          </div>

          {/* Stories Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[200px]">
            {magikStoriesData.map((story) => (
              <div 
                key={story.id}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-gray-100 category-card bento-card ${
                  story.size === 'large' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 category-image"
                  />
                  <div className={`absolute inset-0 ${
                    story.size === 'large' 
                      ? 'bg-gradient-to-t from-black/80 via-black/30 to-transparent' 
                      : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'
                  }`}></div>
                  
                  {/* Story Badge */}
                  <div className={`absolute ${story.size === 'large' ? 'top-6 left-6' : 'top-4 left-4'}`}>
                    <span className={`${
                      story.category === 'PROJECT' || story.category === 'EVENT' || story.category === 'BRAND' || story.category === 'LATEST'
                        ? 'bg-primary text-white'
                        : 'bg-gray-800 text-white'
                    } ${
                      story.size === 'large' ? 'px-4 py-2 text-sm' : 'px-3 py-1 text-xs'
                    } rounded-full font-bold shadow-lg`}>
                      {story.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className={`absolute ${story.size === 'large' ? 'bottom-6 left-6 right-6' : 'bottom-4 left-4 right-4'} bento-content`}>
                    <h3 className={`font-bold text-white mb-2 ${
                      story.size === 'large' ? 'text-2xl mb-3' : 'text-lg'
                    }`}>
                      {story.title}
                    </h3>
                    {story.description && story.size === 'large' && (
                      <p className="text-white/90 text-sm mb-4 line-clamp-2">
                        {story.description}
                      </p>
                    )}
                    <Link 
                      to={story.type === 'project' ? `/projects/${story.id}` : 
                          story.type === 'event' ? `/events/${story.id}` : 
                          `/magik-stories/${story.id}`}
                      className={`bg-white/20 backdrop-blur-sm text-white font-semibold transition-all duration-300 hover:bg-white hover:text-primary ${
                        story.size === 'large' 
                          ? 'px-6 py-3 rounded-xl group-hover:shadow-lg' 
                          : 'px-4 py-2 rounded-lg text-sm'
                      } bento-button inline-block`}
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="section-padding testimonials-bg bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container-max relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-8 shadow-xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-gray-100">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-700 tracking-wider">CLIENT SUCCESS STORIES</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Join thousands of satisfied customers who have transformed their projects with our innovative solutions
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden">
            <div className="testimonials-track">
              {/* Original 5 cards */}
              {/* Testimonial Card 1 */}
              <div className="testimonial-card rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 avatar shadow-lg">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-600 font-medium">Project Manager, ABC Construction</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-primary font-semibold">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-2">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 quote-text text-lg">
                  "MMC's stone care solutions have transformed our projects. The quality and durability are exceptional. Highly recommended for any construction project."
                </p>
                <div className="flex items-center text-sm verified-badge">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-primary">Verified Customer</span>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="testimonial-card rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 avatar shadow-lg">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600 font-medium">Architect, Design Studio</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-primary font-semibold">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-2">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 quote-text text-lg">
                  "The adhesive products from MMC are game-changers. They provide the perfect bond for our stone installations. Professional quality every time."
                </p>
                <div className="flex items-center text-sm verified-badge">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-primary">Verified Customer</span>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="testimonial-card rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 avatar shadow-lg">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Michael Chen</h4>
                    <p className="text-sm text-gray-600 font-medium">Contractor, Elite Builders</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-primary font-semibold">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-2">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 quote-text text-lg">
                  "Outstanding customer service and technical support. MMC's construction chemicals have exceeded our expectations in every project."
                </p>
                <div className="flex items-center text-sm verified-badge">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-primary">Verified Customer</span>
                </div>
              </div>

              {/* Testimonial Card 4 */}
              <div className="testimonial-card rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 avatar shadow-lg">
                    P
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Priya Sharma</h4>
                    <p className="text-sm text-gray-600 font-medium">Interior Designer</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-primary font-semibold">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-2">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 quote-text text-lg">
                  "The quality and finish achieved with MMC products are unmatched. My clients are always impressed with the results. Truly professional grade."
                </p>
                <div className="flex items-center text-sm verified-badge">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-primary">Verified Customer</span>
                </div>
              </div>

              {/* Testimonial Card 5 */}
              <div className="testimonial-card rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 avatar shadow-lg">
                    D
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">David Wilson</h4>
                    <p className="text-sm text-gray-600 font-medium">Property Developer</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-primary font-semibold">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-2">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 quote-text text-lg">
                  "MMC has been our trusted partner for years. Their products deliver consistent quality and their team provides excellent support."
                </p>
                <div className="flex items-center text-sm verified-badge">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-primary">Verified Customer</span>
                </div>
              </div>

              {/* Duplicate cards for seamless loop */}
              {/* Testimonial Card 1 (Duplicate) */}
              <div className="testimonial-card rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 avatar shadow-lg">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-600 font-medium">Project Manager, ABC Construction</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-primary font-semibold">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-2">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 quote-text text-lg">
                  "MMC's stone care solutions have transformed our projects. The quality and durability are exceptional. Highly recommended for any construction project."
                </p>
                <div className="flex items-center text-sm verified-badge">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-primary">Verified Customer</span>
                </div>
              </div>

              {/* Testimonial Card 2 (Duplicate) */}
              <div className="testimonial-card rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 avatar shadow-lg">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600 font-medium">Architect, Design Studio</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-primary font-semibold">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-2">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 quote-text text-lg">
                  "The adhesive products from MMC are game-changers. They provide the perfect bond for our stone installations. Professional quality every time."
                </p>
                <div className="flex items-center text-sm verified-badge">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-primary">Verified Customer</span>
                </div>
              </div>

              {/* Testimonial Card 3 (Duplicate) */}
              <div className="testimonial-card rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 avatar shadow-lg">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Michael Chen</h4>
                    <p className="text-sm text-gray-600 font-medium">Contractor, Elite Builders</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-primary font-semibold">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-2">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 quote-text text-lg">
                  "Outstanding customer service and technical support. MMC's construction chemicals have exceeded our expectations in every project."
                </p>
                <div className="flex items-center text-sm verified-badge">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-primary">Verified Customer</span>
                </div>
              </div>

              {/* Testimonial Card 4 (Duplicate) */}
              <div className="testimonial-card rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 avatar shadow-lg">
                    P
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Priya Sharma</h4>
                    <p className="text-sm text-gray-600 font-medium">Interior Designer</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-primary font-semibold">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-2">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 quote-text text-lg">
                  "The quality and finish achieved with MMC products are unmatched. My clients are always impressed with the results. Truly professional grade."
                </p>
                <div className="flex items-center text-sm verified-badge">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-primary">Verified Customer</span>
                </div>
              </div>

              {/* Testimonial Card 5 (Duplicate) */}
              <div className="testimonial-card rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 avatar shadow-lg">
                    D
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">David Wilson</h4>
                    <p className="text-sm text-gray-600 font-medium">Property Developer</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-primary font-semibold">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-2">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 quote-text text-lg">
                  "MMC has been our trusted partner for years. Their products deliver consistent quality and their team provides excellent support."
                </p>
                <div className="flex items-center text-sm verified-badge">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-primary">Verified Customer</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;