import React from 'react';

const ChangelogPage: React.FC = () => {
  return (
    <div className="section-padding" style={{ marginTop: '80px' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Changelog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest improvements and features
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Version 2.1.0 */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-foreground">Version 2.1.0</h3>
              <span className="text-sm text-muted-foreground">December 15, 2024</span>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">✨ New Features</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Added advanced material selection tool</li>
                  <li>• Introduced 3D visualization preview</li>
                  <li>• Enhanced project management dashboard</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">🐛 Bug Fixes</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Fixed pricing calculation issues</li>
                  <li>• Resolved mobile responsiveness problems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 2.0.0 */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-foreground">Version 2.0.0</h3>
              <span className="text-sm text-muted-foreground">November 30, 2024</span>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">🚀 Major Release</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Complete redesign of user interface</li>
                  <li>• New booking system implementation</li>
                  <li>• Improved customer support integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 1.5.0 */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-foreground">Version 1.5.0</h3>
              <span className="text-sm text-muted-foreground">October 15, 2024</span>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">✨ New Features</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Added online quote calculator</li>
                  <li>• Implemented customer review system</li>
                  <li>• Enhanced mobile app functionality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogPage; 