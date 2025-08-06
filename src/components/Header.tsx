import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';

// Actual product data for category previews
const categoryProducts = {
  'stone-care': [
    {
      id: 'sc1',
      name: 'Magik Polish Powder',
      code: 'P444',
      description: 'High-performance calcium-based polish for marble, granite, and limestone.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'sc2',
      name: 'Magik Stainoff',
      code: 'MS001',
      description: 'Stain remover for organic and inorganic stains.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'sc3',
      name: 'Magik Sealer',
      code: 'MSL001',
      description: 'Penetrating sealer for stone protection.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ],
  'stone-adhesive': [
    {
      id: 'sa1',
      name: 'Magik Bond',
      code: 'MB001',
      description: 'Cement-based tile adhesive for stone and ceramic tile.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'sa2',
      name: 'Magik Fix 200',
      code: 'MF200',
      description: 'High strength, flexible adhesive for external/internal surfaces.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'sa3',
      name: 'Magik Fix 500',
      code: 'MF500',
      description: 'High polymer modified, for vertical and underwater applications.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ],
  'construction-chemical': [
    {
      id: 'cc1',
      name: 'Magik SBR 30',
      code: 'MSBR30',
      description: 'Waterproofing and bonding agent.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'cc2',
      name: 'Magik Concrete Densifier',
      code: 'MCD001',
      description: 'Penetrating concrete densifier for surface hardening.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'cc3',
      name: 'Magik Integral Waterproofing',
      code: 'MIW001',
      description: 'For durable waterproof concrete/mortar.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]
};

// Magik Stories preview data
const magikStoriesData = {
  'projects': [
    {
      id: 'p1',
      name: 'Luxury Villa Project',
      code: 'VIP-001',
      description: 'Complete marble installation and finishing for luxury villa.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'p2',
      name: 'Commercial Complex',
      code: 'CC-002',
      description: 'Large-scale stone flooring and wall cladding project.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'p3',
      name: 'Hotel Renovation',
      code: 'HR-003',
      description: 'Premium stone restoration and enhancement project.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ],
  'events': [
    {
      id: 'e1',
      name: 'Stone Care Workshop',
      code: 'SCW-001',
      description: 'Professional training on stone care and maintenance.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'e2',
      name: 'Product Launch Event',
      code: 'PLE-002',
      description: 'Launch of new Magik stone care products.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'e3',
      name: 'Industry Exhibition',
      code: 'IE-003',
      description: 'Showcasing latest innovations in stone care technology.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ],
  'brand-awareness': [
    {
      id: 'ba1',
      name: 'Magik Brand Campaign',
      code: 'MBC-001',
      description: 'Comprehensive brand awareness and marketing campaign.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'ba2',
      name: 'Digital Marketing',
      code: 'DM-002',
      description: 'Online presence and digital marketing initiatives.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'ba3',
      name: 'Trade Shows',
      code: 'TS-003',
      description: 'Participation in major industry trade shows and exhibitions.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
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
        { name: 'Stone Care', href: '/categories/stone-care', category: 'stone-care' },
        { name: 'Stone Adhesive', href: '/categories/stone-adhesive', category: 'stone-adhesive' },
        { name: 'Construction Chemical', href: '/categories/construction-chemical', category: 'construction-chemical' }
      ]
    },
    { 
      name: 'MAGIK STORIES', 
      href: '#',
      dropdown: [
        { name: 'Projects', href: '/projects', category: 'projects' },
        { name: 'Events', href: '/events', category: 'events' },
        { name: 'Brand Awareness', href: '/magik-stories/brand-awareness', category: 'brand-awareness' }
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
    setHoveredCategory(null);
    setIsDropdownHovered(false);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleCategoryHover = (category: string | null) => {
    setHoveredCategory(category);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false);
    setHoveredCategory(null);
  };

  return (
    <>
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
                        <div 
                          className="dropdown-menu-container"
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <ul className="dropdown-menu">
                            {item.dropdown.map((dropdownItem) => (
                              <li 
                                key={dropdownItem.name}
                                className="dropdown-item"
                                onMouseEnter={() => {
                                  if (dropdownItem.category) {
                                    handleCategoryHover(dropdownItem.category);
                                  }
                                }}
                              >
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
                          
                          {/* Product Preview Panel */}
                          {hoveredCategory && (
                            <div className="product-preview-panel">
                              {/* Invisible bridge to prevent hover gap */}
                              <div className="hover-bridge"></div>
                              <div className="preview-header">
                                <h3 className="preview-title">
                                  {categoryProducts[hoveredCategory as keyof typeof categoryProducts] ? 'Top Products' : 'Featured Items'}
                                </h3>
                                <p className="preview-subtitle">
                                  {categoryProducts[hoveredCategory as keyof typeof categoryProducts] 
                                    ? 'Most popular in this category' 
                                    : 'Latest updates and highlights'
                                  }
                                </p>
                              </div>
                              <div className="preview-products">
                                {(categoryProducts[hoveredCategory as keyof typeof categoryProducts] || 
                                  magikStoriesData[hoveredCategory as keyof typeof magikStoriesData])?.map((item) => (
                                  <div key={item.id} className="preview-product-card">
                                    <div className="preview-product-image">
                                      <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="preview-product-info">
                                      <h4 className="preview-product-name">{item.name}</h4>
                                      <p className="preview-product-code">{item.code}</p>
                                      <p className="preview-product-description">{item.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="preview-footer">
                                <Link 
                                  to={hoveredCategory === 'projects' ? '/projects' : 
                                      hoveredCategory === 'events' ? '/events' : 
                                      hoveredCategory === 'brand-awareness' ? '/magik-stories/brand-awareness' :
                                      `/categories/${hoveredCategory}`} 
                                  className="preview-view-all"
                                  onClick={closeMenu}
                                >
                                  {categoryProducts[hoveredCategory as keyof typeof categoryProducts] 
                                    ? 'View All Products' : 'View All Items'}
                                  <ChevronRight className="h-4 w-4" />
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
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

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}

      {/* Mobile Sidebar */}
      <div 
        className={`mobile-sidebar ${isMenuOpen ? 'mobile-sidebar-open' : ''}`}
      >
        {/* Mobile Sidebar Header */}
        <div className="mobile-sidebar-header">
          <div className="mobile-sidebar-brand">
            <img src="/mmc logo.png" alt="MMC Logo" className="mobile-sidebar-logo" />
            <div className="mobile-sidebar-slogan">
              A STONE CARE SOLUTION
            </div>
          </div>
          <button onClick={closeMenu} className="mobile-sidebar-close">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Sidebar Navigation */}
        <div className="mobile-sidebar-nav">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link 
                to="/" 
                onClick={closeMenu}
                className={`mobile-nav-link ${location.pathname === '/' ? 'mobile-nav-link-active' : ''}`}
              >
                Home
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                {item.dropdown ? (
                  <div className={`mobile-dropdown-container ${activeDropdown === item.name ? 'active' : ''}`}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`mobile-dropdown-trigger ${location.pathname.startsWith(item.href) ? 'mobile-nav-link-active' : ''}`}
                    >
                      {item.name}
                      <span className="mobile-dropdown-triangle">▼</span>
                    </button>
                    {activeDropdown === item.name && (
                      <ul className="mobile-dropdown-menu">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <Link
                              to={dropdownItem.href}
                              onClick={closeMenu}
                              className={location.pathname === dropdownItem.href ? 'mobile-nav-link-active' : ''}
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
                    className={`mobile-nav-link ${location.pathname === item.href ? 'mobile-nav-link-active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;