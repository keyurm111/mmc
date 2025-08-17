import { Calendar, User, ArrowRight, Clock, Search, Filter, Tag, BookOpen, Quote, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Trends', 'Guide', 'Maintenance', 'Tips', 'News'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const regularPosts = filteredPosts;

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
                    className="w-full flex items-center justify-between px-4 py-4 rounded-xl border-2 border-gray-200 bg-gray-50/50 text-base font-medium text-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
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
                <div className="hidden sm:flex items-center justify-center gap-3 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-3" role="tablist" aria-label="Blog categories">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      role="tab"
                      aria-pressed={selectedCategory === category}
                      className={`px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        selectedCategory === category
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-white text-foreground border border-gray-200 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg'
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
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {regularPosts.length > 0 && (
            <div className="text-center mt-12 sm:mt-16">
              <button className="bg-white border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-sm sm:text-base">
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
                  className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary/90 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
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
              <button className="bg-primary text-white whitespace-nowrap text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary/90 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
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