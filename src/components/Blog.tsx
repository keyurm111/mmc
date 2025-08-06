import { Calendar, User, ArrowRight, Clock, Search, Filter, Tag, BookOpen, Quote, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Trends', 'Guide', 'Maintenance', 'Tips', 'News'];

  const blogPosts = [
    {
      id: 1,
      title: '2024 Flooring Trends: What\'s Hot This Year',
      excerpt: 'Discover the latest trends in flooring design, from sustainable materials to bold patterns that are transforming modern spaces. Learn what\'s driving the industry forward.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Sarah Mitchell',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Trends',
      featured: true
    },
    {
      id: 2,
      title: 'Choosing the Right Tile for Your Bathroom Renovation',
      excerpt: 'A comprehensive guide to selecting bathroom tiles that combine style, durability, and functionality for your renovation project. Expert tips and recommendations.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: 'March 12, 2024',
      readTime: '7 min read',
      category: 'Guide',
      featured: false
    },
    {
      id: 3,
      title: 'Maintenance Tips for Hardwood Floors',
      excerpt: 'Learn how to keep your hardwood floors looking pristine for years to come with these expert maintenance tips and tricks. Protect your investment.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Emily Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: 'March 8, 2024',
      readTime: '4 min read',
      category: 'Maintenance',
      featured: false
    },
    {
      id: 4,
      title: 'Sustainable Flooring Options for Eco-Conscious Homes',
      excerpt: 'Explore environmentally friendly flooring materials that don\'t compromise on style or durability. Make a green choice for your home.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'David Thompson',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Tips',
      featured: false
    },
    {
      id: 5,
      title: 'The Complete Guide to Marble Flooring Installation',
      excerpt: 'Everything you need to know about installing marble floors, from preparation to finishing touches. Professional insights and best practices.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Lisa Park',
      authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: 'March 1, 2024',
      readTime: '8 min read',
      category: 'Guide',
      featured: false
    },
    {
      id: 6,
      title: 'Latest Innovations in Flooring Technology',
      excerpt: 'Discover cutting-edge flooring technologies that are revolutionizing the industry. Smart floors, new materials, and innovative installation methods.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: 'Alex Johnson',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: 'February 28, 2024',
      readTime: '5 min read',
      category: 'News',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 pt-24 pb-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full translate-y-32"></div>
        
        <div className="container-max relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">EXPERT INSIGHTS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our
              <span className="text-primary"> Blog</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Discover expert tips, industry trends, and professional insights to help you make 
              informed decisions about your flooring and tiling projects.
            </p>

            {/* Search and Filter Bar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <div className="flex flex-col gap-4">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary bg-gray-50/50 text-base transition-all duration-300"
                  />
                </div>

                {/* Mobile Filter Dropdown */}
                <div className="block sm:hidden">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="w-full flex items-center justify-between px-4 py-4 rounded-xl border-2 border-gray-200 bg-gray-50/50 text-base font-medium text-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  >
                    <span>Category: {selectedCategory}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isFilterOpen && (
                    <div className="mt-2 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl shadow-xl overflow-hidden">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-base font-medium transition-all duration-300 ${
                            selectedCategory === category
                              ? 'bg-primary text-white'
                              : 'text-foreground hover:bg-gray-50'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Desktop Category Filter */}
                <div className="hidden sm:flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm rounded-xl p-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap hover:scale-105 ${
                        selectedCategory === category
                          ? 'bg-primary text-white shadow-lg'
                          : 'text-muted-foreground hover:text-primary hover:bg-white hover:shadow-md'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Featured Image */}
                <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <span className="bg-primary text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                      FEATURED
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                    <span className="bg-white/90 backdrop-blur-sm text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                    <div className="flex items-center space-x-2">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                      />
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 group text-sm sm:text-base"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding warm-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100"
              >
                {/* Featured Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/50 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  {/* Meta Information */}
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">{post.author}</div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {regularPosts.length > 0 && (
            <div className="text-center mt-12 sm:mt-16">
              <button className="bg-white border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base">
                Load More Articles
              </button>
            </div>
          )}

          {/* No Results */}
          {regularPosts.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Search className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">No articles found</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 px-4">
                  Try adjusting your search terms or category filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Stay Updated with Expert Insights
            </h3>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Subscribe to our newsletter and get the latest flooring and tiling insights, 
              exclusive offers, and maintenance tips delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 text-sm sm:text-base"
              />
              <button className="bg-primary text-white whitespace-nowrap text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog; 