import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar } from 'lucide-react';
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

  // Add your real event database here
  const eventsDatabase: { [key: number]: EventDetail } = {
    1: {
      id: 1,
      name: 'Annual Meet – 2022',
      description:
        'Catch a glimpse of our Annual Meet 2022, where we celebrated 16 years of Spreading the Magik. From rewarding distributors and employees for their valuable contribution to having fruitful discussions about the company and growth – it was indeed a celebration of hard work, success and the growing bond. Events like these make us continue to do what we do and Spread The Magik across the stone-care and floor-care industry.',
      fullDescription:
        'Catch a glimpse of our Annual Meet 2022, where we celebrated 16 years of Spreading the Magik. From rewarding distributors and employees for their valuable contribution to having fruitful discussions about the company and growth – it was indeed a celebration of hard work, success and the growing bond. Events like these make us continue to do what we do and Spread The Magik across the stone-care and floor-care industry.',
      image: '/event 2022/1.jpg',
      videoUrl: 'https://www.youtube.com/embed/aUIfnlvf3HA',
      images: [
        '/event 2022/1.jpg',
        '/event 2022/2.jpg',
        '/event 2022/3.jpg',
        '/event 2022/4.jpg',
        '/event 2022/5.jpg',
        '/event 2022/6.jpg',
        '/event 2022/7.jpg',
      ],
    },
  };

  // Get event based on ID from URL
  const event = eventsDatabase[Number(eventId)];
  
  // If no event found, show error page
  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="h-12 w-12 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Event Not Found</h3>
          <p className="text-muted-foreground mb-8 text-justify">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/events"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-base"
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
        prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [event.images.length]);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb and Back Button */}
      <section className="pt-24 pb-3">
        <div className="container-max px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="opacity-60">/</span>
              <Link to="/events" className="hover:text-primary transition-colors">Events</Link>
              <span className="opacity-60">/</span>
              <span className="text-foreground">{event.name}</span>
            </div>

            {/* Back Button */}
            <Link
              to="/events"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-300 group bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <svg className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section with Event Banner */}
      <section className="relative pt-8 pb-20 overflow-hidden px-4 sm:px-6 lg:px-0">
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
                          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg mx-2 sm:mx-0">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">FEATURED EVENT</span>
            </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight px-2 sm:px-0">
                {event.name}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-justify px-2 sm:px-0">
                {event.description}
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  key={selectedImage}
                  src={event.images[selectedImage]}
                  alt={event.name}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                  style={{
                    animation: 'fadeInScale 0.5s ease-in-out'
                  }}
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
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-0">
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-justify">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-0">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                About This Event
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-2xl border border-gray-100 relative overflow-hidden mx-2 sm:mx-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-justify">
                  {event.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Images Gallery */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-0">
        <div className="container-max">
          <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Event Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 text-justify">
                Explore the moments and memories captured during our amazing events
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          
          {/* Main Image Display */}
          <div className="max-w-5xl mx-auto mb-12 px-2 sm:px-0">
            <div className="relative group">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl">
                <img
                  key={selectedImage}
                  src={event.images[selectedImage]}
                  alt={`${event.name} ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                  style={{
                    animation: 'fadeIn 0.5s ease-in-out'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : event.images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setSelectedImage(selectedImage < event.images.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Thumbnail Navigation - single row (first 5) + View All */}
          <div className="max-w-6xl mx-auto px-2 sm:px-0">
            <div className="flex items-center justify-center gap-3 overflow-x-auto md:overflow-visible pb-2 w-full">
              {event.images.slice(0, 5).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 group relative aspect-[4/3] w-28 sm:w-32 rounded-2xl overflow-hidden border-2 transition-all duration-300 ease-in-out ${
                    selectedImage === index 
                      ? 'border-primary shadow-lg ring-2 ring-primary/20' 
                      : 'border-gray-200 hover:border-primary/50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${event.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                </button>
              ))}
              {event.images.length > 5 && (
                <button
                  onClick={() => {
                    setShowAllImages(true);
                    setFullscreenImageIndex(selectedImage);
                  }}
                  className="flex-shrink-0 aspect-[4/3] w-28 sm:w-32 rounded-2xl overflow-hidden border-2 border-dashed border-primary/40 bg-primary/5 text-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center font-semibold"
                >
                  +{event.images.length - 5} View All
                </button>
              )}
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
              className="absolute top-0 right-0 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg z-[10001]"
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Header with prominent close button */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-semibold">
                {event.name} - Gallery
              </h3>
              <button
                onClick={() => setShowAllImages(false)}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg"
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
                src={event.images[fullscreenImageIndex]}
                alt={`${event.name} ${fullscreenImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setFullscreenImageIndex(fullscreenImageIndex > 0 ? fullscreenImageIndex - 1 : event.images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setFullscreenImageIndex(fullscreenImageIndex < event.images.length - 1 ? fullscreenImageIndex + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
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