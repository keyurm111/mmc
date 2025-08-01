import React from 'react';

const TutorialsPage: React.FC = () => {
  return (
    <div className="section-padding" style={{ marginTop: '80px' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step-by-step guides to help you master our services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tutorial 1 */}
          <div className="bg-card rounded-2xl overflow-hidden border border-border">
            <div className="aspect-video bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Getting Started with Flooring</h3>
              <p className="text-muted-foreground mb-4">Learn the basics of flooring installation</p>
              <a href="#" className="text-primary hover:underline font-semibold">Watch Tutorial →</a>
            </div>
          </div>

          {/* Tutorial 2 */}
          <div className="bg-card rounded-2xl overflow-hidden border border-border">
            <div className="aspect-video bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Tile Installation Guide</h3>
              <p className="text-muted-foreground mb-4">Master the art of tile installation</p>
              <a href="#" className="text-primary hover:underline font-semibold">Watch Tutorial →</a>
            </div>
          </div>

          {/* Tutorial 3 */}
          <div className="bg-card rounded-2xl overflow-hidden border border-border">
            <div className="aspect-video bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Material Selection</h3>
              <p className="text-muted-foreground mb-4">Choose the right materials for your project</p>
              <a href="#" className="text-primary hover:underline font-semibold">Watch Tutorial →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage; 