import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  ArrowLeft, 
  Clock, 
  Users, 
  Building2, 
  CheckCircle, 
  Play,
  Download,
  Share2,
  ChevronRight,
  Home,
  Hotel,
  ShoppingBag
} from 'lucide-react';
import Footer from '../components/Footer';

interface ProjectDetail {
  id: number;
  name: string;
  category: string;
  location: string;
  completionDate: string;
  description: string;
  fullDescription: string;
  image: string;
  videoUrl: string;
  area: string;
  duration: string;
  teamSize: string;
  client: string;
  products: {
    name: string;
    category: string;
    description: string;
    image: string;
  }[];
  images: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
}

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showAllImages, setShowAllImages] = useState(false);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);

  // Sample project database - in real app, this would come from API
  const projectsDatabase: { [key: number]: ProjectDetail } = {
    1: {
      id: 1,
      name: 'Luxury Villa Marble Installation',
      category: 'Residential',
      location: 'Beverly Hills, CA',
      completionDate: 'March 2024',
      description: 'Complete marble flooring and wall installation for a luxury 5-bedroom villa featuring premium Italian marble with custom patterns and finishes.',
      fullDescription: 'This prestigious project involved the complete transformation of a luxury villa in Beverly Hills, featuring premium Italian marble installations throughout the property. Our team worked closely with the client to create custom patterns and finishes that perfectly complemented the villa\'s architectural design. The project included marble flooring in all living areas, custom marble wall installations, and premium stone finishes in bathrooms and kitchen areas.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      area: '8,500 sq ft',
      duration: '6 weeks',
      teamSize: '12 professionals',
      client: 'Private Villa Owner',
      products: [
        {
          name: 'Magik Polish Powder',
          category: 'Polishing Compound',
          description: 'High-performance calcium-based polish for marble surfaces',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Magik Bond',
          category: 'Bonding Agent',
          description: 'High-strength bonding agent for stone applications',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Magik Shine Enhancer',
          category: 'Enhancer',
          description: 'Enhances gloss and color of natural stone surfaces',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ],
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      features: [
        'Premium Italian marble installation',
        'Custom pattern designs',
        'Heated floor systems',
        'Custom mosaic work',
        'Premium stone finishes',
        'Professional sealing'
      ],
      challenges: [
        'Complex pattern matching across large areas',
        'Precision cutting for custom designs',
        'Maintaining consistency in marble veining',
        'Coordinating with multiple contractors'
      ],
      solutions: [
        'Advanced digital templating system',
        'Expert craftsmanship and attention to detail',
        'Careful material selection and layout planning',
        'Comprehensive project management approach'
      ]
    },
    2: {
      id: 2,
      name: 'Modern Office Complex Flooring',
      category: 'Commercial',
      location: 'Downtown LA, CA',
      completionDate: 'February 2024',
      description: 'Contemporary office space featuring sustainable flooring solutions with acoustic properties and modern design aesthetics.',
      fullDescription: 'This modern office complex project required innovative flooring solutions that combined sustainability with acoustic performance. We implemented a comprehensive flooring system that included sustainable materials, acoustic underlayments, and modern design elements. The project covered multiple floors and included collaborative spaces, private offices, and common areas.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      area: '25,000 sq ft',
      duration: '8 weeks',
      teamSize: '18 professionals',
      client: 'Tech Corporation',
      products: [
        {
          name: 'Magik Neutra Clean',
          category: 'Cleaner',
          description: 'Gentle floor cleaner for natural stone',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Magik Anti Slip',
          category: 'Anti Slip',
          description: 'Anti-slip treatment for stone surfaces',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ],
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      features: [
        'Sustainable flooring materials',
        'Acoustic underlayment systems',
        'Modern design aesthetics',
        'Durable commercial finishes',
        'Easy maintenance solutions',
        'LEED certification compliance'
      ],
      challenges: [
        'Meeting strict acoustic requirements',
        'Coordinating with multiple trades',
        'Maintaining project timeline',
        'Ensuring sustainability standards'
      ],
      solutions: [
        'Specialized acoustic flooring systems',
        'Comprehensive project coordination',
        'Efficient installation methods',
        'Sustainable material selection'
      ]
    }
  };

  // Get project based on ID from URL
  const project = projectsDatabase[Number(projectId)] || projectsDatabase[1];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [project.images.length]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Residential':
        return <Home className="h-4 w-4" />;
      case 'Commercial':
        return <Building2 className="h-4 w-4" />;
      case 'Hospitality':
        return <Hotel className="h-4 w-4" />;
      case 'Retail':
        return <ShoppingBag className="h-4 w-4" />;
      default:
        return <Building2 className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="pt-24 pb-6">
        <div className="container-max">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-foreground">{project.name}</span>
          </div>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-8">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Images */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/10">
                <img
                  src={project.images[selectedImage]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* View All Images Button */}
              <div className="text-center">
                <button 
                  onClick={() => {
                    setShowAllImages(true);
                    setFullscreenImageIndex(selectedImage);
                  }}
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span>View All Images</span>
                </button>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 aspect-[4/3] w-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-8">
              {/* Project Header */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                  <span className="text-primary text-sm font-medium flex items-center space-x-1">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {project.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary mb-1">{project.area}</div>
                  <div className="text-sm text-muted-foreground">Total Area</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary mb-1">{project.duration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary mb-1">{project.teamSize}</div>
                  <div className="text-sm text-muted-foreground">Team Size</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary mb-1">{project.client}</div>
                  <div className="text-sm text-muted-foreground">Client</div>
                </div>
              </div>

              {/* Project Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{project.completionDate}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Get Similar Quote</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button className="flex-1 bg-secondary text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Case Study</span>
                </button>
              </div>

              {/* Additional Actions */}
              <div className="flex gap-4">
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span className="text-sm font-medium">PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Video */}
      <section className="py-12 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Project Video
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our team in action as we transform this space with precision and expertise
            </p>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="aspect-[16/9] relative">
              <iframe
                src={project.videoUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                title={`${project.name} Project Video`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Tabs */}
      <section className="py-12 bg-background">
        <div className="container-max">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'products', label: 'Products Used' },
              { id: 'features', label: 'Features' },
              { id: 'challenges', label: 'Challenges & Solutions' }
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
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>
            )}

            {selectedTab === 'products' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Products Used</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.products.map((product, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{product.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'features' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Project Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'challenges' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground">Challenges & Solutions</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Challenges */}
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">Challenges</h4>
                    <div className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">Solutions</h4>
                    <div className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>



      {/* Fullscreen Image Gallery Modal */}
      {showAllImages && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-semibold">
                {project.name} - Project Gallery
              </h3>
              <button
                onClick={() => setShowAllImages(false)}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Image */}
            <div className="flex-1 relative bg-white rounded-2xl overflow-hidden">
              <img
                src={project.images[fullscreenImageIndex]}
                alt={`${project.name} ${fullscreenImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setFullscreenImageIndex(fullscreenImageIndex > 0 ? fullscreenImageIndex - 1 : project.images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setFullscreenImageIndex(fullscreenImageIndex < project.images.length - 1 ? fullscreenImageIndex + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setFullscreenImageIndex(index)}
                    className={`flex-shrink-0 aspect-[4/3] w-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      fullscreenImageIndex === index 
                        ? 'border-primary shadow-lg' 
                        : 'border-gray-600 hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Image Counter */}
            <div className="text-center mt-4">
              <span className="text-white text-sm">
                {fullscreenImageIndex + 1} of {project.images.length} images
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectDetailPage; 