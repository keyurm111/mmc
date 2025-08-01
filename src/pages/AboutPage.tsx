import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  CheckCircle, 
  Award, 
  Users, 
  Calendar, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight as ChevronRightIcon,
  Facebook, 
  Twitter, 
  Linkedin,
  Video
} from 'lucide-react';
import Team from '../components/Team';

const AboutPage = () => {
  // Header state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ABOUT US', href: '/about' },
    { 
      name: 'CATEGORIES', 
      href: '#',
      dropdown: [
        { name: 'Stone Care', href: '/categories/stone-care' },
        { name: 'Stone Adhesive', href: '/categories/stone-adhesive' },
        { name: 'Construction Chemical', href: '/categories/construction-chemical' }
      ]
    },
    { 
      name: 'MAGIK STORIES', 
      href: '#',
      dropdown: [
        { name: 'Projects', href: '/magik-stories/projects' },
        { name: 'Events', href: '/magik-stories/events' },
        { name: 'Brand Awareness', href: '/magik-stories/brand-awareness' }
      ]
    },
    { 
      name: 'TOOLS', 
      href: '#',
      dropdown: [
        { name: 'Coverage Calculator', href: '/tools/coverage-calculator' },
        { name: 'Download TDS', href: '/tools/download-tds' },
        { name: 'Download MSDS', href: '/tools/download-msds' },
        { name: 'Download Catalogue', href: '/tools/download-catalogue' },
        { name: 'Download Shade Kit', href: '/tools/download-shade-kit' }
      ]
    },
    { name: 'CONTACT US', href: '/contact' },
    { name: 'BLOGS', href: '/blog' }
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

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
      {/* Header/Navbar */}
      <nav className={`modern-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo and Brand */}
          <div className="navbar-brand">
            <Link to="/" onClick={closeMenu}>
              <img src="/mmc%20logo.png" alt="MMC Logo" className="navbar-logo-img" />
            </Link>
          </div>

          {/* Navigation Links Container */}
          <div className="navbar-links-container">
            <ul className={`navbar-links ${isMenuOpen ? 'navbar-links-open' : ''}`}>
              {navItems.map((item) => (
                <li key={item.name} className="nav-item">
                  {item.dropdown ? (
                    <div className="dropdown-container">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`dropdown-trigger ${location.pathname.startsWith(item.href) ? 'active' : ''}`}
                      >
                        {item.name}
                        <ChevronDown className={`dropdown-icon ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <ul className="dropdown-menu">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.name}>
                              <Link
                                to={dropdownItem.href}
                                onClick={closeMenu}
                                className={location.pathname === dropdownItem.href ? 'active' : ''}
                              >
                                {dropdownItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className={location.pathname === item.href ? 'active' : ''}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Download Button */}
          <div className="navbar-auth">
            <Link to="/download-brochure" className="signup-button" onClick={closeMenu}>
              <ChevronRightIcon className="auth-icon" />
              Download Brochure
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="section-padding warm-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
                <span className="text-primary">👋</span>
                <span className="text-sm font-medium text-primary">WELCOME TO FLOREM</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Welcome to Florem - 
                <span className="text-primary"> Your Trusted Partner</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Florem, we believe that exceptional flooring and tiling can transform any space into something extraordinary. 
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
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional team working on flooring installation"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl card-elegant">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat, index) => (
                      <div key={index} className="text-center">
                        <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="absolute -top-8 -right-8 bg-primary rounded-2xl p-6 text-white shadow-2xl">
                  <div className="text-center">
                    <Award className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-sm opacity-90">Projects</div>
                  </div>
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
      <footer className="bg-white">
        {/* Top Banner */}
        <div className="bg-gray-100 rounded-lg mx-4 mt-8 mb-6 p-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-700 font-medium text-sm">
              EXCITED? US TOO. LET'S GET MOVING.
            </div>
            <button className="bg-[#5BA142] hover:bg-[#4a8a35] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>SCHEDULE A CALL</span>
              <Video className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="px-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Block - Branding/Logo */}
            <div className="bg-[#5BA142] rounded-lg p-8 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-2">MMC</h2>
                <p className="text-lg font-medium">Marketing & Media Company</p>
              </div>
            </div>

            {/* Right Block - Navigation/Information */}
            <div className="bg-gray-100 rounded-lg p-8">
              {/* Navigation Links */}
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Link to="/services" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                      SERVICES
                    </Link>
                    <Link to="/projects" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                      PROJECTS
                    </Link>
                    <Link to="/blog" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                      BLOG
                    </Link>
                    <Link to="/contact" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                      CONTACT
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <Link to="/about" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                      ABOUT
                    </Link>
                    <Link to="/testimonials" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                      TESTIMONIALS
                    </Link>
                    <Link to="/docs" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                      DOCS
                    </Link>
                    <Link to="/tutorials" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                      TUTORIALS
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Legal Links */}
              <div className="flex justify-between items-center text-xs text-gray-600">
                <div>© {currentYear} MMC Marketing & Media Company. All rights reserved.</div>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-[#5BA142] transition-colors">TERMS</a>
                  <a href="#" className="hover:text-[#5BA142] transition-colors">PRIVACY</a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <a href="#" className="text-[#5BA142] hover:text-[#4a8a35] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <a href="#" className="text-[#5BA142] hover:text-[#4a8a35] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <a href="#" className="text-[#5BA142] hover:text-[#4a8a35] transition-colors">
                {/* Dribbble-like basketball icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <a href="#" className="text-[#5BA142] hover:text-[#4a8a35] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;