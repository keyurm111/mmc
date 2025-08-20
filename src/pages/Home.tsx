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

  // Magik Stories Data - Real Content
  const magikStoriesData = [
    {
      id: 'p1',
      title: 'Ram Mandir, Ayodhya',
      category: 'PROJECT',
      description: 'Prestigious stone cleaning for Shri Ram Janmbhoomi Teerth Kshetra Trust. Our team delivered exceptional results using Magik BSR Cleaner for removing algae, moss, and dirt particles from sacred stones.',
      image: '/ayodhya/1.jpg',
      type: 'project',
      size: 'large',
      route: '/projects/2'
    },
    {
      id: 'p2',
      title: 'Prodapt IT Park, Chennai',
      category: 'COMMERCIAL',
      description: 'Complete stone care and polishing delivering 5-star resort aesthetics. Covered 40,000 sq ft with specialized chemical formulations and professional transformation.',
      image: '/it park/1.png',
      type: 'project',
      size: 'medium',
      route: '/projects/1'
    },
    {
      id: 'e1',
      title: 'Annual Meet – 2022',
      category: 'EVENT',
      description: 'Celebrating 16 years of Spreading the Magik with awards and discussions. From rewarding distributors and employees to fruitful discussions about company growth.',
      image: '/event 2022/1.jpg',
      type: 'event',
      size: 'medium',
      route: '/events/1'
    },
    {
      id: 'ba1',
      title: 'Spreading the Magik Across the Nation',
      category: 'BRAND',
      description: 'Our journey of expanding brand presence and delivering quality solutions nationwide. From humble beginnings to becoming a trusted name in stone care and construction chemicals.',
      image: '/mmc logo.png',
      type: 'brand',
      size: 'large',
      route: '/about'
    },
    {
      id: 'p3',
      title: 'MMC Horse Project',
      category: 'LATEST',
      description: 'Latest stone care and maintenance project showcasing our expertise in preserving and enhancing equestrian facility surfaces with premium Magik products.',
      image: '/mmc horse/1.png',
      type: 'project',
      size: 'small',
      route: '/projects'
    },
    {
      id: 'e2',
      title: 'Stone Care Innovation',
      category: 'INNOVATION',
      description: 'Launch of revolutionary new Magik stone care products and technologies. Introducing advanced solutions for modern construction challenges.',
      image: '/it park/5.png',
      type: 'innovation',
      size: 'small',
      route: '/categories/stone-care'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" style={{ paddingTop: '2rem' }}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Stone Care */}
            <div 
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in-left border border-gray-100 category-card cursor-pointer"
              onClick={() => navigate('/categories/stone-care')}
            >
              {/* Image Layer */}
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <img
                  src="https://marblemagik.in/wp-content/uploads/2022/10/1-1.png"
                  alt="Stone Care"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 category-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                

                
                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">STONE CARE</h3>
                  <p className="text-white/90 text-sm">Premium Protection Solutions</p>
                </div>
              </div>
              
              {/* Details Layer - Hidden by default, shown on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center backdrop-blur-sm rounded-2xl">
                <h3 className="text-3xl font-bold mb-3 text-center">STONE CARE</h3>
                <p className="text-white/90 text-sm mb-4 leading-relaxed text-center">
                  Premium stone care solutions for maintaining beauty and longevity.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Premium Quality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Long Lasting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Professional Grade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stone Adhesive */}
            <div 
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in border border-gray-100 category-card cursor-pointer" 
              style={{ animationDelay: '0.1s' }}
              onClick={() => navigate('/categories/stone-adhesive')}
            >
              {/* Image Layer */}
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <img
                  src="https://marblemagik.in/wp-content/uploads/2022/10/2-1.png"
                  alt="Stone Adhesive"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 category-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                

                
                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">STONE ADHESIVE</h3>
                  <p className="text-white/90 text-sm">High-Performance Bonding</p>
                </div>
              </div>
              
              {/* Details Layer - Hidden by default, shown on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center backdrop-blur-sm rounded-2xl">
                <h3 className="text-3xl font-bold mb-3 text-center">STONE ADHESIVE</h3>
                <p className="text-white/90 text-sm mb-4 leading-relaxed text-center">
                  High-performance adhesives for stone and tile installations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Strong Bond</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Durable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Fast Setting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction Chemicals */}
            <div 
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in border border-gray-100 category-card cursor-pointer" 
              style={{ animationDelay: '0.2s' }}
              onClick={() => navigate('/categories/construction-chemical')}
            >
              {/* Image Layer */}
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <img
                  src="https://marblemagik.in/wp-content/uploads/2022/11/MMC-Category-1.png"
                  alt="Construction Chemicals"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 category-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                

                
                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">CONSTRUCTION CHEMICALS</h3>
                  <p className="text-white/90 text-sm">Advanced Protection Solutions</p>
                </div>
              </div>
              
               {/* Details Layer - Hidden by default, shown on hover */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center backdrop-blur-sm rounded-2xl">
                <h3 className="text-3xl font-bold mb-3 text-center">CONSTRUCTION CHEMICALS</h3>
                <p className="text-white/90 text-sm mb-4 leading-relaxed text-center">
                  Advanced waterproofing, sealants, and protective coatings.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Waterproof</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Protective</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Long-lasting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Diamond PADs */}
            <div 
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in border border-gray-100 category-card cursor-pointer" 
              style={{ animationDelay: '0.3s' }}
              onClick={() => navigate('/categories/diamond-pads')}
            >
              {/* Image Layer */}
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <img
                  src="https://concretecountertopsolutions.com/cdn/shop/products/diamond-polishing-pads-494751.jpg?v=1711630271"
                  alt="Diamond PADs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 category-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">DIAMOND PADS</h3>
                  <p className="text-white/90 text-sm">Professional Grinding & Polishing</p>
                </div>
              </div>
              
              {/* Details Layer - Hidden by default, shown on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center backdrop-blur-sm rounded-2xl">
                <h3 className="text-3xl font-bold mb-3 text-center">DIAMOND PADS</h3>
                <p className="text-white/90 text-sm mb-4 leading-relaxed text-center">
                  Professional diamond pads for grinding and polishing.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Multiple Grits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Long Lasting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium text-sm">Professional Grade</span>
                  </div>
                </div>
              </div>
            </div>


          </div>


        </div>
      </section>

      {/* Company Statistics Section */}
      <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden" style={{ paddingTop: '2rem' }}>
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Mobile: Section Header First, Desktop: Hidden */}
            <div className="lg:hidden space-y-8 mb-8">
              {/* Section Header */}
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-gray-100">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700 tracking-wide">COMPANY ACHIEVEMENTS</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Building Excellence
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  With decades of expertise and thousands of projects, Marble Magik is a trusted leader in stone care and construction solutions.
                </p>
              </div>
            </div>
            
            {/* Left Side - Visual Examples */}
            <div className="relative order-1 lg:order-1">
              <div className="relative z-10">
                {/* Kitchen Image - Top Left */}
                <div className="relative mb-6">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform rotate-1 hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                    <img
                      src="https://cdn.magicdecor.in/com/2023/09/29153843/White-Marble-Wallpaper-for-Walls.jpg"
                      alt="White Marble Wallpaper for Walls"
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                {/* Outdoor Patio Image - Bottom Right (Overlapping) */}
                <div className="relative -mt-6 ml-8">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform -rotate-1 hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                    <img
                      src="https://media.istockphoto.com/id/1387242475/photo/cleaning-the-floor-with-machine.jpg?s=612x612&w=0&k=20&c=Q7welGyGu-d8ZGRKDTdIIk5HPy3olVGKwPjRXEbNV9o="
                      alt="Floor Cleaning with Machine"
                      className="w-full h-52 object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              
              {/* Subtle Floating Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-secondary/10 rounded-full animate-float-delayed"></div>
            </div>

            {/* Right Side - Company Statistics */}
            <div className="space-y-8 order-2 lg:order-2">
              {/* Section Header - Desktop Only */}
              <div className="hidden lg:block mb-8">
                <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-gray-100">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700 tracking-wide">COMPANY ACHIEVEMENTS</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Building Excellence
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                  With decades of expertise and thousands of projects, Marble Magik is a trusted leader in stone care and construction solutions.
                </p>
              </div>

                              {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Stat 1: Years of Experience */}
                  <div className="group bg-white rounded-2xl p-4 shadow-lg border border-gray-100 stat-card hover:shadow-xl hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      {/* Icon - Hidden on mobile, shown on desktop */}
                      <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl stat-icon group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <div className="text-left lg:ml-0 ml-0">
                        <div className="text-3xl font-bold stat-number group-hover:text-primary transition-colors duration-300">20+</div>
                        <div className="text-sm font-semibold text-gray-600">Years Industry Experience</div>
                      </div>
                    </div>
                  </div>

                  {/* Stat 2: Products */}
                  <div className="group bg-white rounded-2xl p-4 shadow-lg border border-gray-100 stat-card hover:shadow-xl hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      {/* Icon - Hidden on mobile, shown on desktop */}
                      <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl stat-icon group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                      </div>
                      <div className="text-left lg:ml-0 ml-0">
                        <div className="text-3xl font-bold stat-number group-hover:text-primary transition-colors duration-300">100+</div>
                        <div className="text-sm font-semibold text-gray-600">Products</div>
                      </div>
                    </div>
                  </div>

                  {/* Stat 3: Counters */}
                  <div className="group bg-white rounded-2xl p-4 shadow-lg border border-gray-100 stat-card hover:shadow-xl hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      {/* Icon - Hidden on mobile, shown on desktop */}
                      <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl stat-icon group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                      <div className="text-left lg:ml-0 ml-0">
                        <div className="text-3xl font-bold stat-number group-hover:text-primary transition-colors duration-300">850+</div>
                        <div className="text-sm font-semibold text-gray-600">Counters</div>
                      </div>
                    </div>
                  </div>

                  {/* Stat 4: Countries */}
                  <div className="group bg-white rounded-2xl p-4 shadow-lg border border-gray-100 stat-card hover:shadow-xl hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      {/* Icon - Hidden on mobile, shown on desktop */}
                      <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl stat-icon group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <div className="text-left lg:ml-0 ml-0">
                        <div className="text-3xl font-bold stat-number group-hover:text-primary transition-colors duration-300">13</div>
                        <div className="text-sm font-semibold text-gray-600">Countries Spread Across</div>
                      </div>
                    </div>
                  </div>
                </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Magik Stories Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" style={{ paddingTop: '2rem' }}>
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container-max relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 shadow-lg border border-gray-100">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 tracking-wide">OUR STORIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Magik Stories
              </h2>
            </div>
            <div className="lg:w-2/3 lg:pl-8 lg:border-l-2 lg:border-primary/20">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                There is a lot happening around with us all round the clock. Hence, we thought of keeping you updated of everything latest. Magik Stories is that and beyond. Get to know more about our work, our events, our partner activities and more.
              </p>
            </div>
          </div>

          {/* Stories Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-4 auto-rows-[160px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
            {magikStoriesData.map((story) => (
              <Link 
                key={story.id}
                to={story.route}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-gray-100 category-card bento-card cursor-pointer hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 ${
                  story.size === 'large' 
                    ? 'sm:col-span-2 lg:col-span-4 lg:row-span-2' 
                    : 'sm:col-span-1 lg:col-span-2 lg:row-span-1'
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 category-image"
                  />
                  {/* Removed dark overlay - images now display clearly */}
                  
                  {/* Beautiful shimmer overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  {/* Story Badge */}
                  <div className={`absolute ${story.size === 'large' ? 'top-2 sm:top-3 lg:top-6 left-2 sm:left-3 lg:left-6' : 'top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4'}`}>
                    <span className={`${
                      story.category === 'PROJECT' || story.category === 'EVENT' || story.category === 'BRAND' || story.category === 'LATEST'
                        ? 'bg-primary text-white'
                        : 'bg-gray-800 text-white'
                    } ${
                      story.size === 'large' 
                        ? 'px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-xs sm:text-sm' 
                        : 'px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 lg:py-1 text-xs'
                    } rounded-full font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                      {story.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className={`absolute ${story.size === 'large' ? 'bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6' : 'bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 right-2 sm:right-3 lg:right-4'} bento-content`}>
                    <h3 className={`font-bold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-500 ${
                      story.size === 'large' 
                        ? 'text-base sm:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-2 lg:mb-3' 
                        : 'text-xs sm:text-sm lg:text-base xl:text-lg'
                    }`}>
                      {story.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="section-padding testimonials-bg bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" style={{ paddingTop: '2rem' }}>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              What Our <span className="text-primary">Client Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify mb-8">
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