import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Filter, ChevronDown, Users, Clock, Play, Building2, Home, Hotel, ShoppingBag } from 'lucide-react';
import Footer from '../components/Footer';

interface Event {
  id: number;
  name: string;
  category: string;
  location: string;
  date: string;
  time: string;
  description: string;
  image: string;
  featured: boolean;
  attendees: string;
  duration: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Trade Shows', 'Workshops', 'Product Launches', 'Industry Conferences'];

  const events: Event[] = [
    {
      id: 1,
      name: 'Stone Care Innovation Summit 2024',
      category: 'Industry Conferences',
      location: 'Los Angeles Convention Center, CA',
      date: 'April 15-17, 2024',
      time: '9:00 AM - 6:00 PM',
      description: 'Join us for the premier stone care industry conference featuring the latest innovations, expert presentations, and networking opportunities with industry leaders.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      attendees: '500+ professionals',
      duration: '3 days',
      status: 'upcoming'
    },
    {
      id: 2,
      name: 'Magik Product Launch Event',
      category: 'Product Launches',
      location: 'Beverly Hills Hotel, CA',
      date: 'March 28, 2024',
      time: '2:00 PM - 8:00 PM',
      description: 'Exclusive launch event for our latest Magik product line. Experience live demonstrations, expert presentations, and hands-on product testing.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      attendees: '150+ guests',
      duration: '6 hours',
      status: 'upcoming'
    },
    {
      id: 3,
      name: 'Professional Stone Installation Workshop',
      category: 'Workshops',
      location: 'Florem Training Center, Irvine, CA',
      date: 'March 20, 2024',
      time: '10:00 AM - 4:00 PM',
      description: 'Hands-on workshop covering advanced stone installation techniques, best practices, and the latest tools and materials in the industry.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      attendees: '25 participants',
      duration: '6 hours',
      status: 'upcoming'
    },
    {
      id: 4,
      name: 'International Stone & Tile Expo',
      category: 'Trade Shows',
      location: 'Las Vegas Convention Center, NV',
      date: 'February 10-12, 2024',
      time: '9:00 AM - 5:00 PM',
      description: 'The largest stone and tile trade show in North America. Visit our booth to see the latest products and innovations in stone care technology.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      attendees: '10,000+ visitors',
      duration: '3 days',
      status: 'completed'
    },
    {
      id: 5,
      name: 'Sustainable Stone Care Seminar',
      category: 'Workshops',
      location: 'San Francisco Marriott, CA',
      date: 'January 25, 2024',
      time: '1:00 PM - 5:00 PM',
      description: 'Learn about eco-friendly stone care practices, sustainable materials, and green certification processes for your projects.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      attendees: '75 professionals',
      duration: '4 hours',
      status: 'completed'
    },
    {
      id: 6,
      name: 'Contractor Success Summit',
      category: 'Industry Conferences',
      location: 'Anaheim Convention Center, CA',
      date: 'January 15-16, 2024',
      time: '8:00 AM - 6:00 PM',
      description: 'Two-day conference focused on business growth, project management, and industry best practices for stone care contractors.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      attendees: '300+ contractors',
      duration: '2 days',
      status: 'completed'
    },
    {
      id: 7,
      name: 'Marble Restoration Masterclass',
      category: 'Workshops',
      location: 'Florem Showroom, Beverly Hills, CA',
      date: 'December 15, 2023',
      time: '9:00 AM - 3:00 PM',
      description: 'Advanced marble restoration techniques workshop with hands-on training and expert guidance from master craftsmen.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      attendees: '20 participants',
      duration: '6 hours',
      status: 'completed'
    },
    {
      id: 8,
      name: 'Holiday Product Showcase',
      category: 'Product Launches',
      location: 'Florem Headquarters, Irvine, CA',
      date: 'December 8, 2023',
      time: '11:00 AM - 7:00 PM',
      description: 'Special holiday showcase featuring our newest products, exclusive discounts, and festive networking opportunities.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      attendees: '200+ guests',
      duration: '8 hours',
      status: 'completed'
    }
  ];

  const filteredEvents = events.filter(event => 
    selectedCategory === 'All' || event.category === selectedCategory
  );

  const featuredEvent = events.find(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'Upcoming';
      case 'ongoing':
        return 'Ongoing';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 pt-24 pb-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full translate-y-32"></div>
        
        <div className="container-max relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">OUR EVENTS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our
              <span className="text-primary"> Events</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Join us at industry-leading events, workshops, and conferences to stay updated 
              with the latest trends and innovations in stone care technology.
            </p>

            {/* Filter Bar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <div className="flex flex-col gap-4">
                {/* Mobile Filter Dropdown */}
                <div className="block sm:hidden">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="w-full flex items-center justify-between px-4 py-4 rounded-xl border-2 border-gray-200 bg-gray-50/50 text-base font-medium text-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  >
                    <span>Category: {selectedCategory}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isFilterOpen && (
                    <div className="mt-2 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl shadow-xl overflow-hidden">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-base font-medium transition-all duration-300 ${
                            selectedCategory === category
                              ? 'bg-primary text-white'
                              : 'text-foreground hover:bg-gray-50'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Desktop Category Filter */}
                <div className="hidden sm:flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm rounded-xl p-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap hover:scale-105 ${
                        selectedCategory === category
                          ? 'bg-primary text-white shadow-lg'
                          : 'text-muted-foreground hover:text-primary hover:bg-white hover:shadow-md'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Featured Image */}
                <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                      FEATURED EVENT
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(featuredEvent.status)}`}>
                      {getStatusText(featuredEvent.status)}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{featuredEvent.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredEvent.time}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                    {featuredEvent.name}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {featuredEvent.description}
                  </p>

                  {/* Event Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary mb-1">{featuredEvent.attendees}</div>
                      <div className="text-sm text-muted-foreground">Expected Attendees</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary mb-1">{featuredEvent.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                  </div>

                  <Link
                    to={`/events/${featuredEvent.id}`}
                    className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 group text-base"
                  >
                    <span>View Event Details</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularEvents.map((event) => (
              <article 
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100"
              >
                {/* Event Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                      {getStatusText(event.status)}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <Play className="h-6 w-6 text-primary ml-0.5" />
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {event.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                  </p>



                  {/* View Details Link */}
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center space-x-2 text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300 text-base"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {regularEvents.length > 0 && (
            <div className="text-center mt-16">
              <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-base">
                Load More Events
              </button>
            </div>
          )}

          {/* No Results */}
          {regularEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">No events found</h3>
                <p className="text-muted-foreground mb-8">
                  Try adjusting your category filter to find what you're looking for.
                </p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 text-base"
                >
                  View All Events
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage; 