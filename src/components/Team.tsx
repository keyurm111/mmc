import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Award, 
  Users, 
  Calendar,
  Star,
  CheckCircle
} from 'lucide-react';

const Team = () => {
  const founders = [
    {
      id: 1,
      name: 'PRAMOD SALUNKE',
      role: 'Founder, Marketing & Sales Head',
      image: 'https://marblemagik.in/wp-content/uploads/2023/04/Untitled-design-34.jpg',
      bio: '',
      experience: '15+ Years',
      projects: '500+',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'pramod@marblemagik.in'
      },
      quote: '"We Aspire To Be One Of The Leading Producers & Suppliers Of Floorcare Solutions In Both, Domestic And International Markets."'
    },
    {
      id: 2,
      name: 'MITAL PATEL',
      role: 'Founder, R&D Head',
      image: 'https://marblemagik.in/wp-content/uploads/2023/04/Untitled-design-35.jpg',
      bio: '',
      experience: '15+ Years',
      projects: '500+',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mital@marblemagik.in'
      },
      quote: '"We Are Realising Our Vision Of Make In India By Exploring The Floorcare Industry And Supplying High-Quality Products Worldwide."'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Michael Chen',
      role: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Michael brings creative vision and technical expertise to every design project.',
      experience: '12+ Years',
      projects: '250+',
      rating: 5,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@mmc.com'
      },
      skills: ['Architectural Design', '3D Modeling', 'Sustainable Design']
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      role: 'Senior Project Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Emily coordinates complex projects with precision and ensures timely delivery.',
      experience: '10+ Years',
      projects: '200+',
      rating: 5,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@mmc.com'
      },
      skills: ['Project Coordination', 'Client Relations', 'Risk Management']
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Michael brings creative vision and technical expertise to every design project.',
      experience: '12+ Years',
      projects: '250+',
      rating: 5,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@mmc.com'
      },
      skills: ['Architectural Design', '3D Modeling', 'Sustainable Design']
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Senior Project Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Emily coordinates complex projects with precision and ensures timely delivery.',
      experience: '10+ Years',
      projects: '200+',
      rating: 5,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@mmc.com'
      },
      skills: ['Project Coordination', 'Client Relations', 'Risk Management']
    },
    {
      id: 5,
      name: 'David Thompson',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'David oversees technical aspects and ensures innovative solutions for every challenge.',
      experience: '18+ Years',
      projects: '400+',
      rating: 5,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@mmc.com'
      },
      skills: ['Technical Innovation', 'Problem Solving', 'Team Training']
    },
    {
      id: 6,
      name: 'Lisa Park',
      role: 'Design Specialist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Lisa creates stunning designs that blend aesthetics with functionality.',
      experience: '8+ Years',
      projects: '150+',
      rating: 5,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'lisa@mmc.com'
      },
      skills: ['Interior Design', 'Color Theory', 'Material Selection']
    }
  ];

  const stats = [
    { icon: Users, number: '50+', label: 'Team Members' },
    { icon: Award, number: '1000+', label: 'Projects Completed' },
    { icon: Calendar, number: '25+', label: 'Years Combined Experience' },
    { icon: Star, number: '4.9/5', label: 'Client Rating' },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="team" className="section-padding warm-bg">
      <div className="container-max">
        {/* Founders Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <span className="text-primary">👑</span>
              <span className="text-sm font-medium text-primary">OUR FOUNDERS</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Visionary Leaders
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind MMC who turned a vision into reality and continue to drive innovation in our industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div 
                key={founder.id} 
                className="group bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 card-elegant hover:border-primary/30 border border-transparent transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Founder Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                                             <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg">
                        Founder
                      </div>
                    </div>
                  </div>

                  {/* Founder Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {founder.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">{founder.role}</p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {founder.bio}
                    </p>

                                         {/* Quote */}
                     <div className="bg-white/30 rounded-xl p-4 mb-6">
                       <p className="text-foreground italic text-sm leading-relaxed">
                         {founder.quote}
                       </p>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <span className="text-primary">👥</span>
            <span className="text-sm font-medium text-primary">MEET OUR EXPERT TEAM</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The People Behind
            <span className="text-primary"> Our Success</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of professionals brings together decades of experience, 
            creativity, and technical expertise to deliver exceptional results on every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="group bg-card rounded-xl p-6 card-elegant hover:border-primary/20 border border-transparent transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Member Image */}
              <div className="relative mb-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                

              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                

                
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3">
                  {member.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-sm font-bold text-foreground">{member.experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-foreground">{member.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>


              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-2">
                <a 
                  href={member.social.linkedin}
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href={member.social.twitter}
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href={`mailto:${member.social.email}`}
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Our Locations Section */}
        <div className="mb-16 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
          </div>


        </div>



        {/* Our Locations Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <span className="text-primary">📍</span>
              <span className="text-sm font-medium text-primary">OUR LOCATIONS</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find Us Near You
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With multiple offices across India, we're always close to serve you better and provide local expertise.
            </p>
          </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Corporate Office */}
            <div className="group relative bg-white rounded-3xl p-6 card-elegant hover:border-primary/40 border border-gray-200 transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="text-center">
                  <div className="relative w-24 h-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-2xl group-hover:scale-110 transition-transform duration-500 overflow-hidden border-4 border-white">
                    <img 
                      src="https://marblemagik.in/wp-content/uploads/2022/11/Group-939.png" 
                      alt="Corporate Office" 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />

                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Corporate Office</h4>
                  <p className="text-primary font-semibold text-sm bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-4">Headquarters</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      418, Happy Hallmark Shoppers, Vesu-Abhava Road, Surat, Gujarat -395017
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing Office */}
            <div className="group relative bg-white rounded-3xl p-6 card-elegant hover:border-primary/40 border border-gray-200 transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="text-center">
                  <div className="relative w-24 h-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-2xl group-hover:scale-110 transition-transform duration-500 overflow-hidden border-4 border-white">
                    <img 
                      src="https://marblemagik.in/wp-content/uploads/2022/09/Group-930.png" 
                      alt="Manufacturing Office" 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Manufacturing Office</h4>
                  <p className="text-primary font-semibold text-sm bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-4">Production Hub</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      C-5/4, Hojiwala Industrial Estate, Road No. 8, Susml, Sachin-alsana Road, Surat, Gujarat -394230
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Delhi Office */}
            <div className="group relative bg-white rounded-3xl p-6 card-elegant hover:border-primary/40 border border-gray-200 transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="text-center">
                  <div className="relative w-24 h-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-2xl group-hover:scale-110 transition-transform duration-500 overflow-hidden border-4 border-white">
                    <img 
                      src="https://marblemagik.in/wp-content/uploads/2022/09/Group-929.png" 
                      alt="Delhi Office" 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Delhi Office</h4>
                  <p className="text-primary font-semibold text-sm bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-4">North India</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Plot No 155, Ground Floor, Kh. No. 13/25, Udey Vihar Nilothi Extn. Near Manoj Shokin Farm House, Delhi -110041
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bengaluru Office */}
            <div className="group relative bg-white rounded-3xl p-6 card-elegant hover:border-primary/40 border border-gray-200 transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="text-center">
                  <div className="relative w-24 h-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-2xl group-hover:scale-110 transition-transform duration-500 overflow-hidden border-4 border-white">
                    <img 
                      src="https://marblemagik.in/wp-content/uploads/2022/09/Group-932.png" 
                      alt="Bengaluru Office" 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Bengaluru Office</h4>
                  <p className="text-primary font-semibold text-sm bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-4">South India</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      304/26 Ground Floor, Omkar Nilaya, 7th Main Road, Near Swastik Marble Lakkasandra Extension, Bengaluru, Karnataka – 560030
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hyderabad Office */}
            <div className="group relative bg-white rounded-3xl p-6 card-elegant hover:border-primary/40 border border-gray-200 transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="text-center">
                  <div className="relative w-24 h-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-2xl group-hover:scale-110 transition-transform duration-500 overflow-hidden border-4 border-white">
                    <img 
                      src="https://marblemagik.in/wp-content/uploads/2022/09/Group-928.png" 
                      alt="Hyderabad Office" 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Hyderabad Office</h4>
                  <p className="text-primary font-semibold text-sm bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-4">Central India</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Shop no 11-5-198/1, Bhavani Nagar, Hyderabad, Telangana – 500081
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-xl p-6 lg:p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Ready to Work With Our Team?
            </h3>
            <p className="text-base text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how our expert team can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 