import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  BookOpen, 
  ArrowLeft, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Footer from '../components/Footer';
import { getBlogPostById, getRelatedPosts, BlogPost } from '../data/blog';

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    if (blogId) {
      const post = getBlogPostById(Number(blogId));
      if (post) {
        setBlogPost(post);
        const related = getRelatedPosts(post.id, 3);
        setRelatedPosts(related);
      }
      setIsLoading(false);
    }
  }, [blogId]);

  const handleShare = (platform: string) => {
    if (!blogPost) return;
    
    const url = window.location.href;
    const title = blogPost.title;
    const text = blogPost.excerpt;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Blog Post Not Found</h3>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 text-base"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="pt-20 sm:pt-24 pb-4 sm:pb-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
        <div className="container-max px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="opacity-60">/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span className="opacity-60">/</span>
            <span className="text-foreground line-clamp-1 text-xs sm:text-sm">{blogPost.title}</span>
          </div>
        </div>
      </section>

      {/* Blog Header */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
        <div className="container-max px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header Navigation Row */}
            <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
              {/* Back Button */}
              <Link
                to="/blog"
                className="inline-flex items-center justify-center space-x-2 sm:space-x-3 text-primary hover:text-primary/80 transition-all duration-300 group bg-white/80 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-white shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back</span>
              </Link>

              {/* Category Badge */}
              <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-primary/20 shadow-md">
                <span className="text-primary font-semibold text-sm sm:text-base">{blogPost.category}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 sm:mb-10 leading-tight max-w-5xl">
              {blogPost.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:gap-8 lg:gap-10 mb-8 sm:mb-12">
              {/* Author */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div>
                  <div className="font-semibold text-foreground text-base sm:text-lg">{blogPost.author}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Author</div>
                </div>
              </div>

              {/* Date and Read Time */}
              <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{blogPost.readTime}</span>
                </div>
              </div>

              {/* Share Button */}
              <div className="relative lg:ml-auto">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100 text-sm sm:text-base"
                >
                  <Share2 className="h-4 w-4" />
                  <span className="font-medium">Share</span>
                </button>

                {/* Share Menu */}
                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-3 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-10 min-w-[200px] sm:min-w-[220px]">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-blue-700" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </button>
                    <button
                      onClick={() => handleShare('email')}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Mail className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium">Email</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/10 mb-8 sm:mb-12 shadow-2xl">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tags */}
            {blogPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center space-x-2 bg-white text-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-max px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Content */}
            <div 
              className="prose prose-sm sm:prose-lg lg:prose-xl max-w-none prose-headings:text-foreground prose-headings:font-bold prose-h2:text-xl sm:text-2xl lg:text-3xl prose-h2:mb-6 sm:mb-8 prose-h2:mt-8 sm:mt-12 prose-h3:text-lg sm:text-xl lg:text-2xl prose-h3:mb-4 sm:mb-6 prose-h3:mt-6 sm:mt-10 prose-p:text-base sm:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 sm:mb-6 prose-strong:text-foreground prose-strong:font-semibold prose-li:text-muted-foreground prose-ul:text-muted-foreground prose-ul:my-4 sm:my-6 prose-li:my-1 sm:my-2 prose-img:rounded-lg sm:rounded-xl prose-img:shadow-lg prose-img:my-6 sm:my-8 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 sm:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:bg-gray-50 prose-blockquote:py-3 sm:py-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-max px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Related Articles
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover more insights and tips from our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {relatedPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100"
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
                      <span className="bg-primary text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                        {post.category}
                      </span>
                    </div>

                    {/* Read Time Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/60 backdrop-blur-sm text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm flex items-center space-x-2 shadow-lg">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{post.readTime}</span>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    {/* Meta Information */}
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-medium text-foreground truncate">{post.author}</div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
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
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Posts Button */}
            <div className="text-center mt-12 sm:mt-16">
              <Link
                to="/blog"
                className="inline-flex items-center space-x-3 bg-primary text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl"
              >
                <span>View All Blog Posts</span>
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
        <div className="container-max px-4 sm:px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 shadow-2xl border border-gray-100 max-w-5xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 lg:mb-8">
              Stay Updated with Expert Insights
            </h3>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
              Subscribe to our newsletter and get the latest flooring and tiling insights, 
              exclusive offers, and maintenance tips delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary bg-gray-50/50 text-sm sm:text-base lg:text-lg"
              />
              <button className="bg-primary text-white whitespace-nowrap text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 lg:mt-6">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
