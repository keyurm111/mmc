import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Search, Filter, Star, Download, Share2, ArrowLeft, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  code: string;
  category: string;
  description: string;
  image: string;
  base?: string;
  color?: string;
  ph?: string;
  surfaces?: string;
  features?: string[];
  specifications?: { [key: string]: string };
  applications?: string[];
  benefits?: string[];
}

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState('description');

  // Sample product data - in real app, this would come from API
  const product: Product = {
    id: 1,
    name: 'Magik Polish Powder',
    code: 'P444',
    category: 'Polishing Compound',
    description: 'High-performance calcium-based polish for marble, granite, and limestone. This premium polishing compound delivers exceptional results for both residential and commercial stone surfaces.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    base: 'Acid salt powder',
    color: 'Yellow / White',
    ph: '3–4',
    surfaces: 'Marble, Granite, Artificial Marble',
    features: [
      'High-performance calcium-based formula',
      'Suitable for marble, granite, and limestone',
      'Creates mirror-like finish',
      'Long-lasting results',
      'Easy to apply and buff'
    ],
    specifications: {
      'Base Material': 'Acid salt powder',
      'Color': 'Yellow / White',
      'pH Level': '3–4',
      'Coverage': '15-20 sq ft per kg',
      'Drying Time': '2-3 hours',
      'Shelf Life': '24 months'
    },
    applications: [
      'Marble floor polishing',
      'Granite countertop restoration',
      'Limestone surface enhancement',
      'Commercial stone maintenance',
      'Residential stone care'
    ],
    benefits: [
      'Restores natural stone shine',
      'Removes surface scratches',
      'Enhances stone color and pattern',
      'Provides long-lasting protection',
      'Easy to maintain'
    ]
  };

  // Related products data
  const relatedProducts = [
    {
      id: 2,
      name: 'Magik Polish Paste',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Magik Crystal',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Magik Stainoff',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      name: 'Magik Shine Enhancer',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleViewDetails = (productId: number) => {
    // Navigate to product details
    console.log('View details for product:', productId);
  };

  const handleInquiry = (productId: number) => {
    // Handle inquiry action
    console.log('Inquiry for product:', productId);
  };

  const handleDownloadTDS = () => {
    // Handle TDS download
    console.log('Downloading TDS for:', product.name);
  };

  const handleDownloadMSDS = () => {
    // Handle MSDS download
    console.log('Downloading MSDS for:', product.name);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navbar */}
      <nav className={`modern-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo and Brand */}
          <div className="navbar-brand">
            <Link to="/" onClick={closeMenu}>
              <img src="/mmc logo.png" alt="MMC Logo" className="navbar-logo-img" />
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
              <ChevronRight className="auth-icon" />
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

      {/* Breadcrumb */}
      <section className="pt-24 pb-6">
        <div className="container-max">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/categories/stone-care" className="hover:text-primary transition-colors">Stone Care</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                          {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {[product.image, product.image, product.image, product.image].map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">2-3 days</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Quality Assured</p>
                  <p className="text-xs text-muted-foreground">ISO Certified</p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">24/7 Support</p>
                  <p className="text-xs text-muted-foreground">Expert Help</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Product Header */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                  <span className="text-primary text-sm font-medium">{product.category}</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Code */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Product Code:</span>
                  <span className="text-lg font-bold text-foreground">{product.code}</span>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
                <div className="space-y-3">
                  {product.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Inquiry Now</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button className="flex-1 bg-secondary text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download TDS</span>
                </button>
              </div>

              {/* Additional Downloads */}
              <div className="flex gap-4">
                <button 
                  onClick={handleDownloadMSDS}
                  className="flex-1 bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span className="text-sm font-medium">MSDS</span>
                </button>
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container-max">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'description', label: 'Description' },
              { id: 'specifications', label: 'Specifications' },
              { id: 'applications', label: 'Applications' },
              { id: 'benefits', label: 'Benefits' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-muted-foreground hover:text-primary hover:bg-white/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {selectedTab === 'description' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.base && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Base Material</h4>
                      <p className="text-muted-foreground">{product.base}</p>
                    </div>
                  )}
                  {product.color && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Color</h4>
                      <p className="text-muted-foreground">{product.color}</p>
                    </div>
                  )}
                  {product.ph && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">pH Level</h4>
                      <p className="text-muted-foreground">{product.ph}</p>
                    </div>
                  )}
                  {product.surfaces && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Suitable Surfaces</h4>
                      <p className="text-muted-foreground">{product.surfaces}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-foreground">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'applications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.applications?.map((application, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'benefits' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Related Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover more products from our comprehensive range of stone care solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                id={relatedProduct.id}
                name={relatedProduct.name}
                image={relatedProduct.image}
                onViewDetails={handleViewDetails}
                onInquiry={handleInquiry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage; 