import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Download, Share2, ArrowLeft, CheckCircle, Truck, Shield, Clock, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  code: string;
  category: string;
  description: string;
  image: string;
  base?: string;
  color?: string;
  ph?: string;
  surfaces?: string;
  features?: string[];
  specifications?: { [key: string]: string };
  applications?: string[];
  benefits?: string[];
}

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState('description');

  // Sample product database - in real app, this would come from API
  const productsDatabase: { [key: number]: Product } = {
    1: {
      id: 1,
      name: 'Magik Polish Powder',
      code: 'P444',
      category: 'Polishing Compound',
      description: 'High-performance calcium-based polish for marble, granite, and limestone. This premium polishing compound delivers exceptional results for both residential and commercial stone surfaces.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      base: 'Acid salt powder',
      color: 'Yellow / White',
      ph: '3–4',
      surfaces: 'Marble, Granite, Artificial Marble',
      features: [
        'High-performance calcium-based formula',
        'Suitable for marble, granite, and limestone',
        'Creates mirror-like finish',
        'Long-lasting results',
        'Easy to apply and buff'
      ],
      specifications: {
        'Base Material': 'Acid salt powder',
        'Color': 'Yellow / White',
        'pH Level': '3–4',
        'Coverage': '15-20 sq ft per kg',
        'Drying Time': '2-3 hours',
        'Shelf Life': '24 months'
      },
      applications: [
        'Marble floor polishing',
        'Granite countertop restoration',
        'Limestone surface enhancement',
        'Commercial stone maintenance',
        'Residential stone care'
      ],
      benefits: [
        'Restores natural stone shine',
        'Removes surface scratches',
        'Enhances stone color and pattern',
        'Provides long-lasting protection',
        'Easy to maintain'
      ]
    },
    2: {
      id: 2,
      name: 'Magik Polish Paste',
      code: 'PP001',
      category: 'Polishing Compound',
      description: 'Used after polishing powder for enhanced surface finish. This premium paste provides the final touch for achieving mirror-like finishes on natural stone surfaces.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      base: 'Paste formulation',
      color: 'White',
      ph: 'Neutral',
      surfaces: 'Marble, Granite, Limestone',
      features: [
        'Premium paste formulation',
        'Used after polishing powder',
        'Creates mirror-like finish',
        'Easy to apply and buff',
        'Long-lasting results'
      ],
      specifications: {
        'Base Material': 'Paste formulation',
        'Color': 'White',
        'pH Level': 'Neutral',
        'Coverage': '20-25 sq ft per kg',
        'Drying Time': '1-2 hours',
        'Shelf Life': '18 months'
      },
      applications: [
        'Final polishing step',
        'Marble surface finishing',
        'Granite countertop polishing',
        'Limestone restoration',
        'Commercial stone maintenance'
      ],
      benefits: [
        'Achieves mirror-like finish',
        'Enhances stone appearance',
        'Provides long-lasting shine',
        'Easy to maintain',
        'Professional results'
      ]
    },
    3: {
      id: 3,
      name: 'Magik Crystal',
      code: 'MC001',
      category: 'Polishing Compound',
      description: 'Spray and buff for gloss finish on marble surfaces. This innovative crystal formula provides instant shine and protection for marble surfaces.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      base: 'Crystal formulation',
      color: 'Clear',
      ph: 'Neutral',
      surfaces: 'Marble, Limestone',
      features: [
        'Spray and buff application',
        'Instant gloss finish',
        'Crystal clear formula',
        'Easy to use',
        'Quick results'
      ],
      specifications: {
        'Base Material': 'Crystal formulation',
        'Color': 'Clear',
        'pH Level': 'Neutral',
        'Coverage': '30-35 sq ft per liter',
        'Drying Time': '15-30 minutes',
        'Shelf Life': '12 months'
      },
      applications: [
        'Marble surface polishing',
        'Limestone enhancement',
        'Quick shine restoration',
        'Maintenance polishing',
        'Emergency touch-ups'
      ],
      benefits: [
        'Instant results',
        'Easy application',
        'Crystal clear finish',
        'No residue',
        'Quick drying'
      ]
    },
    4: {
      id: 4,
      name: 'Magik Stainoff',
      code: 'MS001',
      category: 'Cleaner',
      description: 'Stain remover for organic and inorganic stains. This powerful yet safe formula effectively removes tough stains from natural stone surfaces.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      base: 'Chemical cleaner',
      color: 'Clear',
      ph: '7-8',
      surfaces: 'Marble, Granite, Limestone, Travertine',
      features: [
        'Removes organic stains',
        'Removes inorganic stains',
        'Safe for natural stone',
        'Non-abrasive formula',
        'Deep cleaning action'
      ],
      specifications: {
        'Base Material': 'Chemical cleaner',
        'Color': 'Clear',
        'pH Level': '7-8',
        'Coverage': '25-30 sq ft per liter',
        'Drying Time': '30-45 minutes',
        'Shelf Life': '24 months'
      },
      applications: [
        'Stain removal',
        'Deep cleaning',
        'Pre-treatment',
        'Maintenance cleaning',
        'Restoration projects'
      ],
      benefits: [
        'Effective stain removal',
        'Safe for stone',
        'Non-damaging',
        'Versatile use',
        'Long-lasting results'
      ]
    },
    5: {
      id: 5,
      name: 'Magik Neutra Clean',
      code: 'MNC001',
      category: 'Cleaner',
      description: 'Gentle floor cleaner for natural stone. This pH-neutral formula safely cleans and maintains natural stone surfaces without causing damage.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      base: 'Neutral cleaner',
      color: 'Clear',
      ph: '7',
      surfaces: 'All natural stone types',
      features: [
        'pH-neutral formula',
        'Gentle cleaning action',
        'Safe for all stone types',
        'No residue',
        'Pleasant fragrance'
      ],
      specifications: {
        'Base Material': 'Neutral cleaner',
        'Color': 'Clear',
        'pH Level': '7',
        'Coverage': '40-50 sq ft per liter',
        'Drying Time': '15-20 minutes',
        'Shelf Life': '36 months'
      },
      applications: [
        'Daily cleaning',
        'Maintenance cleaning',
        'Post-installation cleaning',
        'Regular maintenance',
        'Gentle cleaning'
      ],
             benefits: [
         'Safe for all stones',
         'No damage risk',
         'Easy to use',
         'Cost-effective',
         'Long shelf life'
       ]
     },
     6: {
       id: 6,
       name: 'Magik Power Clean',
       code: 'MPC001',
       category: 'Cleaner',
       description: 'Deep cleaning for stubborn stains. This powerful formula effectively removes tough stains and dirt from natural stone surfaces.',
       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
       base: 'Power cleaner',
       color: 'Clear',
       ph: '8-9',
       surfaces: 'Marble, Granite, Limestone, Travertine',
       features: [
         'Deep cleaning action',
         'Removes stubborn stains',
         'Powerful formula',
         'Safe for stone',
         'Professional results'
       ],
       specifications: {
         'Base Material': 'Power cleaner',
         'Color': 'Clear',
         'pH Level': '8-9',
         'Coverage': '20-25 sq ft per liter',
         'Drying Time': '45-60 minutes',
         'Shelf Life': '24 months'
       },
       applications: [
         'Deep cleaning',
         'Stubborn stain removal',
         'Restoration projects',
         'Commercial cleaning',
         'Heavy-duty maintenance'
       ],
       benefits: [
         'Powerful cleaning',
         'Removes tough stains',
         'Professional results',
         'Time-saving',
         'Cost-effective'
       ]
     },
     7: {
       id: 7,
       name: 'Magik Shine Enhancer',
       code: 'MSE001',
       category: 'Enhancer',
       description: 'Enhances gloss and color of natural stone surfaces. This premium enhancer brings out the natural beauty and depth of stone colors.',
       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
       base: 'Enhancer formula',
       color: 'Clear',
       ph: 'Neutral',
       surfaces: 'Marble, Granite, Limestone, Travertine',
       features: [
         'Enhances natural colors',
         'Increases gloss',
         'Penetrating formula',
         'Long-lasting results',
         'Easy application'
       ],
       specifications: {
         'Base Material': 'Enhancer formula',
         'Color': 'Clear',
         'pH Level': 'Neutral',
         'Coverage': '35-40 sq ft per liter',
         'Drying Time': '2-3 hours',
         'Shelf Life': '18 months'
       },
       applications: [
         'Color enhancement',
         'Gloss improvement',
         'Stone restoration',
         'New installations',
         'Maintenance enhancement'
       ],
       benefits: [
         'Enhances natural beauty',
         'Long-lasting results',
         'Easy to apply',
         'Professional finish',
         'Protects stone'
       ]
     },
     8: {
       id: 8,
       name: 'Magik Grout Clean',
       code: 'MGC001',
       category: 'Grouts',
       description: 'Removes dirt, oil, stains from grout joints. This specialized formula effectively cleans and restores grout lines.',
       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
       base: 'Grout cleaner',
       color: 'Clear',
       ph: '8-9',
       surfaces: 'All grout types',
       features: [
         'Specialized grout cleaning',
         'Removes dirt and stains',
         'Safe for all grout types',
         'Easy to use',
         'Effective results'
       ],
       specifications: {
         'Base Material': 'Grout cleaner',
         'Color': 'Clear',
         'pH Level': '8-9',
         'Coverage': '15-20 sq ft per liter',
         'Drying Time': '30-45 minutes',
         'Shelf Life': '24 months'
       },
       applications: [
         'Grout cleaning',
         'Tile maintenance',
         'Restoration projects',
         'Commercial cleaning',
         'Residential maintenance'
       ],
       benefits: [
         'Effective grout cleaning',
         'Restores appearance',
         'Easy application',
         'Long-lasting results',
         'Safe for tiles'
       ]
     },
     9: {
       id: 9,
       name: 'Magik Bond',
       code: 'MB001',
       category: 'Bonding Agent',
       description: 'High-strength bonding agent for stone applications. This premium bonding agent provides superior adhesion for stone installations.',
       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
       base: 'Bonding agent',
       color: 'White',
       ph: 'Neutral',
       surfaces: 'All stone types',
       features: [
         'High-strength bonding',
         'Superior adhesion',
         'Flexible formula',
         'Water-resistant',
         'Fast setting'
       ],
       specifications: {
         'Base Material': 'Bonding agent',
         'Color': 'White',
         'pH Level': 'Neutral',
         'Coverage': '25-30 sq ft per kg',
         'Setting Time': '2-3 hours',
         'Shelf Life': '12 months'
       },
       applications: [
         'Stone installations',
         'Tile bonding',
         'Repair work',
         'Commercial projects',
         'Residential installations'
       ],
       benefits: [
         'Strong adhesion',
         'Fast setting',
         'Water-resistant',
         'Professional results',
         'Reliable performance'
       ]
     },
     10: {
       id: 10,
       name: 'Magik Anti Slip',
       code: 'MAS001',
       category: 'Anti Slip',
       description: 'Anti-slip treatment for stone surfaces. This innovative formula provides slip resistance while maintaining stone appearance.',
       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
       base: 'Anti-slip formula',
       color: 'Clear',
       ph: 'Neutral',
       surfaces: 'Marble, Granite, Limestone, Travertine',
       features: [
         'Anti-slip protection',
         'Maintains appearance',
         'Long-lasting',
         'Easy application',
         'Safe for stone'
       ],
       specifications: {
         'Base Material': 'Anti-slip formula',
         'Color': 'Clear',
         'pH Level': 'Neutral',
         'Coverage': '30-35 sq ft per liter',
         'Drying Time': '4-6 hours',
         'Shelf Life': '18 months'
       },
       applications: [
         'Pool areas',
         'Wet areas',
         'Commercial floors',
         'Residential safety',
         'Public spaces'
       ],
       benefits: [
         'Slip resistance',
         'Maintains beauty',
         'Long-lasting',
         'Easy to apply',
         'Safety enhancement'
       ]
     }
   };

  // Get product based on ID from URL
  const product = productsDatabase[Number(productId)] || productsDatabase[1];

  // Get related products from the same category
  const relatedProducts = Object.values(productsDatabase)
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
    .map(p => ({
      id: p.id,
      name: p.name,
      image: p.image
    }));



  const handleViewDetails = (productId: number) => {
    // Navigate to product details
    // console.log('View details for product:', productId);
  };

  const handleInquiry = (productId: number) => {
    // Handle inquiry action
    // console.log('Inquiry for product:', productId);
  };

  const handleDownloadTDS = () => {
    // Handle TDS download
    // console.log('Downloading TDS for:', product.name);
  };

  const handleDownloadMSDS = () => {
    // Handle MSDS download
    // console.log('Downloading MSDS for:', product.name);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="pt-24 pb-6">
        <div className="container-max">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link 
              to={product.category === 'Polishing Compound' || product.category === 'Cleaner' || product.category === 'Enhancer' || product.category === 'Grouts' || product.category === 'Bonding Agent' || product.category === 'Anti Slip' || product.category === 'Sealer' 
                ? '/categories/stone-care' 
                : product.category === 'Adhesive' || product.category === 'White Adhesive' || product.category === 'Premium Adhesive'
                ? '/categories/stone-adhesive'
                : '/categories/construction-chemical'
              } 
              className="hover:text-primary transition-colors"
            >
              {product.category === 'Polishing Compound' || product.category === 'Cleaner' || product.category === 'Enhancer' || product.category === 'Grouts' || product.category === 'Bonding Agent' || product.category === 'Anti Slip' || product.category === 'Sealer' 
                ? 'Stone Care' 
                : product.category === 'Adhesive' || product.category === 'White Adhesive' || product.category === 'Premium Adhesive'
                ? 'Stone Adhesive'
                : 'Construction Chemical'
              }
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8">
        <div className="container-max">
          {/* Mobile Layout: Product Name First */}
          <div className="lg:hidden mb-6">
            {/* Product Header - Mobile */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <span className="text-primary text-sm font-medium">{product.category}</span>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {[product.image, product.image, product.image, product.image].map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">2-3 days</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Quality Assured</p>
                  <p className="text-xs text-muted-foreground">ISO Certified</p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">24/7 Support</p>
                  <p className="text-xs text-muted-foreground">Expert Help</p>
                </div>
              </div>
            </div>

            {/* Product Info - Desktop Only */}
            <div className="space-y-8 lg:block hidden">
              {/* Product Header */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                  <span className="text-primary text-sm font-medium">{product.category}</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Code */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Product Code:</span>
                  <span className="text-lg font-bold text-foreground">{product.code}</span>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
                <div className="space-y-3">
                  {product.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Inquiry Now</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button className="flex-1 bg-secondary text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download TDS</span>
                </button>
              </div>

              {/* Additional Downloads */}
              <div className="flex gap-4">
                <button 
                  onClick={handleDownloadMSDS}
                  className="flex-1 bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span className="text-sm font-medium">MSDS</span>
                </button>
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Product Details - After Images */}
          <div className="lg:hidden mt-8 space-y-8">
            {/* Product Code */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Product Code:</span>
                <span className="text-lg font-bold text-foreground">{product.code}</span>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
              <div className="space-y-3">
                {product.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-primary text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Inquiry Now</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="flex-1 bg-secondary text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download TDS</span>
              </button>
            </div>

            {/* Additional Downloads */}
            <div className="flex gap-4">
              <button 
                onClick={handleDownloadMSDS}
                className="flex-1 bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span className="text-sm font-medium">MSDS</span>
              </button>
              <button className="flex-1 bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Share2 className="h-4 w-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container-max">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'description', label: 'Description' },
              { id: 'specifications', label: 'Specifications' },
              { id: 'applications', label: 'Applications' },
              { id: 'benefits', label: 'Benefits' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-muted-foreground hover:text-primary hover:bg-white/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {selectedTab === 'description' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.base && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Base Material</h4>
                      <p className="text-muted-foreground">{product.base}</p>
                    </div>
                  )}
                  {product.color && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Color</h4>
                      <p className="text-muted-foreground">{product.color}</p>
                    </div>
                  )}
                  {product.ph && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">pH Level</h4>
                      <p className="text-muted-foreground">{product.ph}</p>
                    </div>
                  )}
                  {product.surfaces && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Suitable Surfaces</h4>
                      <p className="text-muted-foreground">{product.surfaces}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-foreground">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'applications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.applications?.map((application, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'benefits' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Related Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover more products from our comprehensive range of stone care solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                id={relatedProduct.id}
                name={relatedProduct.name}
                image={relatedProduct.image}
                onViewDetails={handleViewDetails}
                onInquiry={handleInquiry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Advertisement Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-24 -translate-x-24 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16 blur-2xl"></div>
        
        <div className="container-max relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Content Section */}
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 w-fit">
                    <span className="text-primary text-lg">📱</span>
                    <span className="text-sm font-semibold text-primary">MOBILE APP</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                    Transform Your Space
                    <span className="text-primary block">On the Go</span>
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    Download our mobile app for instant access to our services, real-time project updates, 
                    and exclusive mobile-only offers. Manage your flooring projects anywhere, anytime.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-primary group-hover:text-white text-lg">📋</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Instant Quotes</div>
                      <div className="text-xs text-muted-foreground">Get pricing in seconds</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-primary group-hover:text-white text-lg">📊</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Project Tracking</div>
                      <div className="text-xs text-muted-foreground">Real-time updates</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-primary group-hover:text-white text-lg">📷</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Photo Gallery</div>
                      <div className="text-xs text-muted-foreground">Browse our work</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-primary group-hover:text-white text-lg">💬</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">24/7 Support</div>
                      <div className="text-xs text-muted-foreground">Always here to help</div>
                    </div>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="#"
                      className="inline-flex items-center space-x-4 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 group shadow-lg"
                    >
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                        <span className="text-black font-bold text-lg">A</span>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-gray-300">Download on the</div>
                        <div className="text-sm font-bold">App Store</div>
                      </div>
                    </a>
                    
                    <a 
                      href="#"
                      className="inline-flex items-center space-x-4 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 group shadow-lg"
                    >
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                        <span className="text-black font-bold text-lg">G</span>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-gray-300">Get it on</div>
                        <div className="text-sm font-bold">Google Play</div>
                      </div>
                    </a>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">4.8/5</span> from 2,500+ reviews
                    </div>
                  </div>
                </div>
              </div>

              {/* App Mockup Section */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Main Phone Mockup */}
                  <div className="relative w-72 h-[600px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                    {/* Phone Frame */}
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="h-8 bg-gradient-to-r from-primary to-primary/80 rounded-t-[2.5rem] flex items-center justify-between px-6 text-white text-xs font-medium">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-white/20 rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-4 h-full bg-gradient-to-b from-primary/5 via-secondary/5 to-primary/10">
                        {/* App Header */}
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <span className="text-white font-bold text-2xl">F</span>
                          </div>
                          <h4 className="font-bold text-foreground text-lg">MMC App</h4>
                          <p className="text-xs text-muted-foreground">Your Flooring Partner</p>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <span className="text-primary text-sm">📋</span>
                            </div>
                            <span className="text-xs font-semibold text-foreground">Get Quote</span>
                          </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <span className="text-primary text-sm">📊</span>
                            </div>
                            <span className="text-xs font-semibold text-foreground">Track Project</span>
                          </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <span className="text-primary text-sm">📷</span>
                            </div>
                            <span className="text-xs font-semibold text-foreground">Gallery</span>
                          </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <span className="text-primary text-sm">💬</span>
                            </div>
                            <span className="text-xs font-semibold text-foreground">Support</span>
                          </div>
                        </div>

                        {/* Recent Projects */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 mb-4 shadow-sm">
                          <h5 className="font-semibold text-foreground text-sm mb-2">Recent Projects</h5>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-muted-foreground">Kitchen Renovation - 85%</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className="text-xs text-muted-foreground">Bathroom Tiling - In Progress</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-3 text-center shadow-lg">
                          <span className="text-white text-sm font-semibold">📞 Call Now</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                    <span className="text-white text-xs font-bold">NEW</span>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <span className="text-white text-sm">🔥</span>
                  </div>
                  
                  {/* Additional Floating Elements */}
                  <div className="absolute top-1/2 -right-8 w-6 h-6 bg-secondary/20 rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 -left-4 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage; 