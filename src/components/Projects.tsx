import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Residential', 'Commercial', 'Renovations'];
  
  const projects = [
    {
      id: 1,
      title: 'Prodapt IT Park, Chennai',
      category: 'Commercial',
      image: '/it park/1.png',
      description: 'Complete stone care and polishing project transforming 40,000 sq ft IT Park to achieve 5-star resort aesthetics using specialized chemical formulations.'
    },
    {
      id: 2,
      title: 'Ram Mandir, Ayodhya',
      category: 'Religious',
      image: '/ayodhya/1.jpg',
      description: 'Prestigious stone cleaning project for Shri Ram Janmbhoomi Teerth Kshetra Trust, removing algae, moss, and dirt from sacred stones.'
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
                  : 'bg-white text-foreground hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg border border-border'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-2.5 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-3">
                  <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2 transition-all">
                    View Details
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-outline hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;