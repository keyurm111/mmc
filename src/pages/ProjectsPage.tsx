
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, ChevronDown, Building, Home, Hotel, ShoppingBag } from 'lucide-react';
import { projects as projectsData } from '../data/projects';
import Footer from '../components/Footer';

interface Project {
  id: number;
  name: string;
  category: string;
  location: string;
  completionDate: string;
  description: string;
  image: string;
  featured: boolean;
  area: string;
  duration: string;
}

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail', 'Religious'];

  const projects = projectsData;

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 pt-24 pb-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full translate-y-32"></div>
        
        <div className="container-max relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8">
              <Building className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">OUR PROJECTS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our
              <span className="text-primary"> Projects</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Explore our portfolio of completed projects showcasing excellence in flooring, 
              tiling, and stone installations across residential and commercial spaces.
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
                <div className="hidden sm:flex items-center justify-center gap-3 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-3" role="tablist" aria-label="Project categories">
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

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={(project as any).coverImage || (project as any).image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-2.5 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>
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
                      <span className="truncate max-w-[10rem] sm:max-w-[12rem]">{project.location}</span>
                    </div>
                    <span className="opacity-50">•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{project.completionDate}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Compact Stats */}
                  <div className="flex items-center flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 rounded-full bg-gray-50 text-xs text-muted-foreground border border-gray-100">
                      {project.area}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gray-50 text-xs text-muted-foreground border border-gray-100">
                      {project.duration}
                    </span>
                  </div>

                  {/* View Details Link */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2 transition-all"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;