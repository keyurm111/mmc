import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';

const Header: React.FC = () => {
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

  return (
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
  );
};

export default Header;