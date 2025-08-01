import { useState } from 'react';
import { Eye, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Residential', 'Commercial', 'Renovations'];
  
  const projects = [
    {
      id: 1,
      title: 'Luxury Kitchen Marble Flooring',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Premium Carrara marble installation with custom patterns'
    },
    {
      id: 2,
      title: 'Modern Bathroom Tile Design',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Contemporary geometric tile patterns with premium finishes'
    },
    {
      id: 3,
      title: 'Hardwood Living Room',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Rich oak hardwood flooring with natural finish'
    },
    {
      id: 4,
      title: 'Office Complex Flooring',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Durable commercial-grade laminate flooring installation'
    },
    {
      id: 5,
      title: 'Restaurant Kitchen Tiles',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Anti-slip ceramic tiles for commercial kitchen'
    },
    {
      id: 6,
      title: 'Victorian Home Restoration',
      category: 'Renovations',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Historic hardwood floor restoration and refinishing'
    },
    {
      id: 7,
      title: 'Spa Bathroom Renovation',
      category: 'Renovations',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Luxury spa-inspired bathroom with natural stone tiles'
    },
    {
      id: 8,
      title: 'Modern Loft Conversion',
      category: 'Renovations',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Industrial-style polished concrete and hardwood combination'
    },
    {
      id: 9,
      title: 'Retail Store Flooring',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'High-traffic luxury vinyl plank flooring for retail space'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding warm-bg">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <span className="text-primary">🎨</span>
            <span className="text-sm font-medium text-primary">OUR LATEST PROJECTS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Showcasing Our
            <span className="text-primary"> Finest Work</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects that demonstrate our commitment to quality, 
            craftsmanship, and customer satisfaction across various spaces and styles.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden card-elegant animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-outline">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;