import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const StoneAdhesivePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = ['All'];

  const products = [
    {
      id: 1,
      name: 'Magik Bond',
      code: 'MB001',
      category: 'Adhesive',
      description: 'Cement-based tile adhesive for stone and ceramic tile.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Magik Bond White',
      code: 'MBW001',
      category: 'White Adhesive',
      description: 'White cement-based tile adhesive.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Magik Fix 200',
      code: 'MF200',
      category: 'Adhesive',
      description: 'High strength, flexible adhesive for external/internal surfaces.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Magik Fix 500',
      code: 'MF500',
      category: 'Premium Adhesive',
      description: 'High polymer modified, for vertical and underwater applications.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (product.code && product.code.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleViewDetails = (productId: number) => {
    // Handle view details action
    // console.log('View details for product:', productId);
  };

  const handleInquiry = (productId: number) => {
    // Handle inquiry action
    // console.log('Inquiry for product:', productId);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container-max">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <span className="text-primary">🔗</span>
              <span className="text-sm font-medium text-primary">STONE ADHESIVE PRODUCTS</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Premium Stone Adhesive
              <span className="text-primary"> Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              High-performance adhesive solutions designed for secure and durable stone installations 
              in both residential and commercial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pt-0 pb-16">
        <div className="container-max">
          {/* Search and Filter */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1 overflow-x-auto lg:flex hidden">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-md'
                        : 'text-muted-foreground hover:text-primary hover:bg-white hover:-translate-y-1 hover:shadow-lg'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Mobile Category Filter Dropdown */}
              <div className="lg:hidden flex-1 relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-sm font-medium flex items-center justify-between hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <span>{selectedCategory}</span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`w-full px-4 py-3 text-left text-sm font-medium flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 ${
                          selectedCategory === category ? 'bg-primary text-white hover:bg-primary/90' : 'text-gray-700'
                        } ${category === categories[0] ? 'rounded-t-xl' : ''} ${category === categories[categories.length - 1] ? 'rounded-b-xl' : ''}`}
                      >
                        <span>{category}</span>
                        {selectedCategory === category && (
                          <Check className="h-4 w-4" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                onViewDetails={handleViewDetails}
                onInquiry={handleInquiry}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StoneAdhesivePage; 