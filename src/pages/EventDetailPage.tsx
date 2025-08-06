import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';

interface EventDetail {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  videoUrl: string;
  images: string[];
}

const EventDetailPage = () => {
  const { eventId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);

  // Sample event database - in real app, this would come from API
  const eventsDatabase: { [key: number]: EventDetail } = {
    1: {
      id: 1,
      name: 'Stone Care Innovation Summit 2024',
      description: 'Join us for the premier stone care industry conference featuring the latest innovations, expert presentations, and networking opportunities with industry leaders.',
      fullDescription: 'The Stone Care Innovation Summit 2024 is the premier gathering for professionals in the stone care and maintenance industry. This three-day conference brings together industry leaders, innovators, and professionals to share insights, showcase cutting-edge technologies, and explore the future of stone care. The event features keynote presentations, interactive workshops, product demonstrations, and extensive networking opportunities. Attendees will gain valuable knowledge about the latest trends, best practices, and innovative solutions that are shaping the industry.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      images: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    2: {
      id: 2,
      name: 'Magik Product Launch Event',
      description: 'Exclusive launch event for our latest Magik product line. Experience live demonstrations, expert presentations, and hands-on product testing.',
      fullDescription: 'Join us for an exclusive evening celebrating the launch of our revolutionary Magik product line. This intimate event will feature live product demonstrations, expert presentations on the technology behind our innovations, and hands-on testing opportunities. Network with industry professionals while experiencing the future of stone care technology firsthand.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      images: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    }
  };

  // Get event based on ID from URL
  const event = eventsDatabase[Number(eventId)] || eventsDatabase[1];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevIndex) => 
        prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [event.images.length]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Event Banner */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Event Info */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">FEATURED EVENT</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {event.name}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src={event.images[0]}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Video Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Event Preview</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Experience the Event
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get a firsthand look at the excitement and energy of our events
              </p>
            </div>
            
            <div className="relative group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl">
                <div className="aspect-[16/9] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <iframe
                    src={event.videoUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    title={`${event.name} Event Video`}
                    className="relative z-10"
                  />
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Description Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                About This Event
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {event.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Images Gallery */}
      <section className="py-20 bg-white">
        <div className="container-max">
                      <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Event Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Explore the moments and memories captured during our amazing events
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
              
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
          
          {/* Main Image Display */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative group">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl">
                <img
                  src={event.images[selectedImage]}
                  alt={`${event.name} ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : event.images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setSelectedImage(selectedImage < event.images.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {event.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:scale-110 ${
                    selectedImage === index 
                      ? 'border-primary shadow-xl ring-4 ring-primary/20' 
                      : 'border-gray-200 hover:border-primary/50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${event.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    selectedImage === index ? 'opacity-100' : ''
                  }`}></div>
                  
                  {/* Selection Indicator */}
                  {selectedImage === index && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Image Counter */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <span className="text-sm font-medium text-primary">
                {selectedImage + 1} of {event.images.length}
              </span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Event Images</span>
            </div>
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
                {event.name} - Gallery
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
                src={event.images[fullscreenImageIndex]}
                alt={`${event.name} ${fullscreenImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setFullscreenImageIndex(fullscreenImageIndex > 0 ? fullscreenImageIndex - 1 : event.images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setFullscreenImageIndex(fullscreenImageIndex < event.images.length - 1 ? fullscreenImageIndex + 1 : 0)}
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
                {event.images.map((image, index) => (
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
                      alt={`${event.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Image Counter */}
            <div className="text-center mt-4">
              <span className="text-white text-sm">
                {fullscreenImageIndex + 1} of {event.images.length} images
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

export default EventDetailPage; 