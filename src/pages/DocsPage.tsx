import React from 'react';

const DocsPage: React.FC = () => {
  return (
    <div className="section-padding" style={{ marginTop: '80px' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how to work with our flooring and tiling services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Getting Started */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Getting Started</h3>
            <p className="text-muted-foreground mb-6">
              Learn the basics of working with our services
            </p>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary hover:underline">Quick Start Guide</a></li>
              <li><a href="#" className="text-primary hover:underline">Installation</a></li>
              <li><a href="#" className="text-primary hover:underline">Configuration</a></li>
            </ul>
          </div>

          {/* API Reference */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">API Reference</h3>
            <p className="text-muted-foreground mb-6">
              Complete API documentation and examples
            </p>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary hover:underline">Authentication</a></li>
              <li><a href="#" className="text-primary hover:underline">Endpoints</a></li>
              <li><a href="#" className="text-primary hover:underline">Error Codes</a></li>
            </ul>
          </div>

          {/* Guides */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Guides</h3>
            <p className="text-muted-foreground mb-6">
              Step-by-step guides for common tasks
            </p>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary hover:underline">Best Practices</a></li>
              <li><a href="#" className="text-primary hover:underline">Troubleshooting</a></li>
              <li><a href="#" className="text-primary hover:underline">Examples</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage; 