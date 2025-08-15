import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Filter, ChevronDown, Users, Clock, Play, Building, Home, Hotel, ShoppingBag } from 'lucide-react';
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
      name: 'Annual Meet – 2022',
      category: 'Industry Conferences',
      location: '—',
      date: '2022',
      time: '—',
      description:
        'Catch a glimpse of our Annual Meet 2022, where we celebrated 16 years of Spreading the Magik. From rewarding distributors and employees for their valuable contribution to having fruitful discussions about the company and growth – it was indeed a celebration of hard work, success and the growing bond. Events like these make us continue to do what we do and Spread The Magik across the stone-care and floor-care industry.',
      image: '/event 2022/1.jpg',
      featured: true,
      attendees: '—',
      duration: '—',
      status: 'completed',
    },
  ];

  const filteredEvents = events.filter(event => 
    selectedCategory === 'All' || event.category === selectedCategory
  );

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
                <div className="hidden sm:flex items-center justify-center gap-3 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-3" role="tablist" aria-label="Event categories">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      role="tab"
                      aria-pressed={selectedCategory === category}
                      className={`px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        selectedCategory === category
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-white text-foreground border border-gray-200 hover:bg-gray-50'
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

      {/* Featured Event removed for consistent cards */}

      {/* Events Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <article 
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                {/* Event Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                <div className="p-4">
                  {/* Meta Information */}
                  <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="truncate max-w-[10rem] sm:max-w-[12rem]">{event.location}</span>
                    </div>
                    <span className="opacity-50">•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {event.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {event.description}
                  </p>

                  {/* View Details Link */}
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2 transition-all"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button removed as requested */}

          {/* No Events Available placeholder removed as requested */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage; 