import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div className="section-padding" style={{ marginTop: '80px' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your flooring and tiling needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Basic</h3>
            <div className="text-4xl font-bold text-primary mb-6">$99<span className="text-lg text-muted-foreground">/project</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Basic consultation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Material selection</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Installation</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Choose Plan
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-card rounded-2xl p-8 border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
              Popular
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Professional</h3>
            <div className="text-4xl font-bold text-primary mb-6">$199<span className="text-lg text-muted-foreground">/project</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Everything in Basic</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Design consultation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Premium materials</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Warranty included</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Premium</h3>
            <div className="text-4xl font-bold text-primary mb-6">$299<span className="text-lg text-muted-foreground">/project</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Everything in Professional</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Custom design</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Luxury materials</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Extended warranty</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage; 