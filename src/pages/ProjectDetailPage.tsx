import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Building, 
  CheckCircle, 
  Home,
  Hotel,
  ShoppingBag
} from 'lucide-react';
import Footer from '../components/Footer';
import { getProjectById, Project } from '../data/projects';

// Normalized optional extras for UI sections (can be empty)
interface ProjectExtras {
  products?: { name: string; category: string; description: string; image: string }[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  videoUrl?: string;
}

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showAllImages, setShowAllImages] = useState(false);
    const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);

  // Add CSS for smooth fade transition
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Optional per-project extras (kept separate so core data stays shared)
  const extras: Record<number, ProjectExtras> = {
    1: {
      videoUrl: 'https://www.youtube.com/embed/zP1RQ8rAOEo',
      products: [
        { name: 'Magik Darkner Super', category: 'Darkening Agent', description: 'Specialized chemical formulation for stone darkening and enhancement', image: '/placeholder-product.png' },
        { name: 'Magik Impregnator SB', category: 'Sealer', description: 'High-performance stone impregnator for protection and sealing', image: '/placeholder-product.png' },
        { name: 'Magik Stain Free Epoxy', category: 'Epoxy Coating', description: 'Advanced epoxy coating for stain resistance and durability', image: '/placeholder-product.png' },
      ],
      features: [
        'Complete stone care and polishing',
        'Specialized chemical formulations',
        '5-star resort aesthetics',
        'Stone sealing procedures',
        'Professional transformation',
        'Quality assurance',
      ],
      challenges: [
        'Large area coverage (40,000 sq ft)',
        'Achieving 5-star resort aesthetics',
        'Coordinating with IT Park operations',
        'Ensuring consistent quality across all areas',
      ],
      solutions: [
        'Detailed inspection and planning',
        'Specialized chemical formulations',
        'Professional team execution',
        'Comprehensive quality control',
      ],
    },
    2: {
      videoUrl: 'https://www.youtube.com/embed/Y1bkYNA1HBQ',
      products: [
        { name: 'Magik BSR Cleaner', category: 'Cleaner', description: 'Very effective cleaner for removing algae, moss, stains and dirt particles', image: '/placeholder-product.png' },
      ],
      features: [
        'Sacred stone cleaning',
        'Algae and moss removal',
        'Dirt particle cleaning',
        'Prestigious religious site',
        'Climate-resistant treatment',
        'Exceeding expectations',
      ],
      challenges: [
        'Working on a prestigious religious site',
        'Removing algae and moss from sacred stones',
        'Climatic condition challenges',
        'Maintaining sanctity of the location',
      ],
      solutions: [
        'Magik BSR Cleaner application',
        'Expert team handling',
        'Respectful approach to religious site',
        'Proven cleaning methodology',
      ],
    },
  };

  // Get project based on ID from URL
  const project = getProjectById(Number(projectId));
  const extra = extras[Number(projectId)] || {};
  
  // If no project found, show error page
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building className="h-12 w-12 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h3>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/projects"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 text-base"
          >
            Back
          </Link>
        </div>
      </div>
    );
  }

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
        return <Building className="h-4 w-4" />;
      case 'Hospitality':
        return <Hotel className="h-4 w-4" />;
      case 'Retail':
        return <ShoppingBag className="h-4 w-4" />;
      case 'Religious':
        return <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>;
      default:
        return <Building className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="pt-24 pb-6">
        <div className="container-max px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="opacity-60">/</span>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <span className="opacity-60">/</span>
            <span className="text-foreground">{project.name}</span>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="pb-6">
        <div className="container-max px-4 sm:px-6">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 sm:space-x-3 text-primary hover:text-primary/80 transition-all duration-300 group bg-white/80 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-white shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back</span>
          </Link>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-4 sm:py-6 lg:py-8">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start w-full">
            {/* Project Images */}
            <div className="space-y-3 sm:space-y-4">
              {/* Main Image Display */}
              <div className="relative group">
                <div className="aspect-[16/9] sm:aspect-[4/3] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/10 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                   <img
                    key={selectedImage}
                    src={project.images[selectedImage]}
                    alt={project.name}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                    style={{
                      animation: 'fadeIn 0.5s ease-in-out'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : project.images.length - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => setSelectedImage(selectedImage < project.images.length - 1 ? selectedImage + 1 : 0)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Thumbnail Navigation - first 4 + View All */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto md:overflow-visible pb-2 w-full">
                {project.images.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 group relative aspect-[4/3] w-16 sm:w-20 md:w-24 lg:w-28 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 ease-in-out ${
                      selectedImage === index 
                        ? 'border-primary shadow-lg ring-2 ring-primary/20' 
                        : 'border-gray-200 hover:border-primary/50 shadow-md hover:shadow-lg'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />

                  </button>
                ))}
                {project.images.length > 4 && (
                  <button
                    onClick={() => {
                      setShowAllImages(true);
                      setFullscreenImageIndex(selectedImage);
                    }}
                    className="flex-shrink-0 aspect-[4/3] w-16 sm:w-20 md:w-24 lg:w-28 rounded-lg sm:rounded-xl overflow-hidden border-2 border-dashed border-primary/40 bg-primary/5 text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center font-semibold text-xs sm:text-sm"
                  >
                    +{project.images.length - 4} View All
                  </button>
                )}
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
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {project.name}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary mb-1">{project.area}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Total Area</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary mb-1">{project.duration}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary mb-1">{project.teamSize}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Team Size</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary mb-1">{project.client}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Client</div>
                </div>
              </div>

              {/* Project Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="break-words">{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  <span>{project.completionDate}</span>
                </div>
              </div>

              {/* Action Buttons removed as requested */}
            </div>
          </div>
        </div>
      </section>

      {/* Project Video */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Project Video
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Watch our team in action as we transform this space with precision and expertise
            </p>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="aspect-[16/9] relative">
              {extra.videoUrl && (
              <iframe
                src={extra.videoUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                title={`${project.name} Project Video`}
              />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Tabs */}
      <section className="py-8 sm:py-12 lg:py-16 bg-background">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'products', label: 'Products Used' },
              { id: 'features', label: 'Features' },
              { id: 'challenges', label: 'Challenges & Solutions' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
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
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
            {selectedTab === 'overview' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                  {project.fullDescription}
                </p>
              </div>
            )}

            {selectedTab === 'products' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">Products Used</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {(extra.products || []).map((product, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:bg-gray-100 transition-colors duration-300">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white mb-3 sm:mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">{product.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">{product.category}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{product.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'features' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">Project Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {(extra.features || []).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'challenges' && (
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">Challenges & Solutions</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* Challenges */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Challenges</h4>
                    <div className="space-y-2 sm:space-y-3">
                      {(extra.challenges || []).map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm sm:text-base">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Solutions</h4>
                    <div className="space-y-2 sm:space-y-3">
                      {(extra.solutions || []).map((solution, index) => (
                        <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm sm:text-base">{solution}</span>
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
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          {/* Click outside to close */}
          <div 
            className="absolute inset-0" 
            onClick={() => setShowAllImages(false)}
          ></div>
          
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col z-[10000]">
            {/* Additional close button in top-right corner */}
            <button
              onClick={() => setShowAllImages(false)}
              className="absolute top-0 right-0 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-[10001]"
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Header with prominent close button */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-semibold">
                {project.name} - Project Gallery
              </h3>
              <button
                onClick={() => setShowAllImages(false)}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Close gallery"
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
                    className={`flex-shrink-0 aspect-[4/3] w-16 sm:w-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
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
