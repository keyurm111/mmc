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
  ],
  'diamond-pads': [
    {
      id: 'dp1',
      name: 'Magik Diamond Pad 50',
      code: 'MDP50',
      description: '50 grit diamond pad for aggressive grinding and leveling.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'dp2',
      name: 'Magik Diamond Pad 200',
      code: 'MDP200',
      description: '200 grit diamond pad for medium grinding and smoothing.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'dp3',
      name: 'Magik Diamond Pad 3000',
      code: 'MDP3000',
      description: '3000 grit diamond pad for final polishing and finishing.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]
};

// Magik Stories preview data (real projects and events)
const magikStoriesData = {
  'projects': [
    {
      id: 'p1',
      name: 'Prodapt IT Park, Chennai',
      code: 'Commercial · 40,000 sq ft',
      description: 'Complete stone care and polishing delivering 5-star resort aesthetics.',
      image: '/it park/1.png'
    },
    {
      id: 'p2',
      name: 'Ram Mandir, Ayodhya',
      code: 'Religious · Completed',
      description: 'Prestigious stone cleaning for Shri Ram Janmbhoomi Teerth Kshetra Trust.',
      image: '/ayodhya/1.jpg'
    }
  ],
  'events': [
    {
      id: 'e1',
      name: 'Annual Meet – 2022',
      code: 'Completed',
      description: 'Celebrating 16 years of Spreading the Magik with awards and discussions.',
      image: '/event 2022/1.jpg'
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
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
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
        { name: 'Construction Chemical', href: '/categories/construction-chemical', category: 'construction-chemical' },
        { name: 'Diamond PADs', href: '/categories/diamond-pads', category: 'diamond-pads' }
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
    setHoveredDropdown(null);
    setIsHoveringDropdown(false);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleDropdownMouseEnter = (itemName: string) => {
    setHoveredDropdown(itemName);
    setActiveDropdown(itemName);
    setIsHoveringDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsHoveringDropdown(false);
    // Add a longer delay to prevent accidental closing when moving between trigger and dropdown
    setTimeout(() => {
      if (!isHoveringDropdown) {
        setHoveredDropdown(null);
        setActiveDropdown(null);
        setHoveredCategory(null);
      }
    }, 300);
  };

  const handleCategoryHover = (category: string | null) => {
    setHoveredCategory(category);
  };

  const handleDropdownContentMouseEnter = () => {
    setIsDropdownHovered(true);
    setIsHoveringDropdown(true);
  };

  const handleDropdownContentMouseLeave = () => {
    setIsDropdownHovered(false);
    setIsHoveringDropdown(false);
    setHoveredCategory(null);
    // Add a longer delay to prevent accidental closing when moving between dropdown and trigger
    setTimeout(() => {
      if (!isHoveringDropdown) {
        setActiveDropdown(null);
      }
    }, 300);
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
                    <div 
                      className="dropdown-container"
                      onMouseEnter={() => handleDropdownMouseEnter(item.name)}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <button
                        className={`dropdown-trigger ${location.pathname.startsWith(item.href) ? 'active' : ''}`}
                      >
                        {item.name}
                        <ChevronDown className={`dropdown-icon ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div 
                          className={`dropdown-menu-container ${hoveredCategory ? 'with-preview' : ''}`}
                          onMouseEnter={handleDropdownContentMouseEnter}
                          onMouseLeave={handleDropdownContentMouseLeave}
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
                                  <div key={item.id} className="preview-product-card" style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '80px', padding: '16px' }}>
                                    <div className="preview-product-image" style={{ flexShrink: 0, width: '70px', height: '70px' }}>
                                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                    <div className="preview-product-info" style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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