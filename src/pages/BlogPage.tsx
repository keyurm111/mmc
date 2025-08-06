import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const BlogPage = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Blog Content */}
      <Blog />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage; 