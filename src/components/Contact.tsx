import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Building, Users, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: ['123 Flooring Street', 'New York, NY 10001'],
      action: 'Get Directions',
      color: 'bg-primary'
    },
    {
      icon: Phone,
      title: 'Call Us Today',
      details: ['+1 (123) 456-7890', '+1 (123) 456-7891'],
      action: 'Call Now',
      color: 'bg-primary'
    },
    {
      icon: Mail,
      title: 'Send Us an Email',
              details: ['info@mmc.com', 'quotes@mmc.com'],
      action: 'Send Email',
      color: 'bg-primary'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      action: 'Schedule Visit',
      color: 'bg-primary'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '1000+', label: 'Projects Completed', icon: Building },
    { number: '24/7', label: 'Support Available', icon: MessageCircle }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 pt-24 pb-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full translate-y-32"></div>
        
        <div className="container-max relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Start Your
              <span className="text-primary"> Project</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Ready to transform your space? Contact our expert team for a free consultation 
              and personalized quote. We're here to bring your vision to life.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <stat.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-base lg:text-lg text-muted-foreground">
                    Tell us about your project and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground text-base">
                      Thank you for your inquiry. Our team will review your message and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                          Project Type
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50"
                        >
                          <option value="">Select project type</option>
                          <option value="residential-flooring">Residential Flooring</option>
                          <option value="commercial-flooring">Commercial Flooring</option>
                          <option value="bathroom-tiling">Bathroom Tiling</option>
                          <option value="kitchen-renovation">Kitchen Renovation</option>
                          <option value="floor-refinishing">Floor Refinishing</option>
                          <option value="consultation">Free Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50 resize-none"
                        placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary/90 text-white py-3 px-6 rounded-xl font-semibold text-base hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center space-x-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 group hover:shadow-xl hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300 shadow-lg`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors duration-300">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm mb-1 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                        <button className="text-primary font-semibold mt-2 hover:text-primary/80 transition-colors duration-300 inline-flex items-center space-x-1 group-hover:translate-x-1 text-sm">
                          <span>{info.action}</span>
                          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="p-8 lg:p-12 border-b border-gray-100">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Visit Our Showroom</h3>
                <p className="text-lg text-muted-foreground">
                  Come see our work in person and meet our expert team. We're located in the heart of the city 
                  and welcome walk-ins during business hours.
                </p>
              </div>
            </div>
            <div className="aspect-[21/9] bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176904862893!2d-73.98823492346734!3d40.75889713512447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1709834567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MMC Showroom Location"
              />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 text-lg">
                  View Larger Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Advertisement Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-24 -translate-x-24 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16 blur-2xl"></div>
        
        <div className="container-max relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Content Section */}
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 w-fit">
                    <span className="text-primary text-lg">📱</span>
                    <span className="text-sm font-semibold text-primary">MOBILE APP</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                    Transform Your Space
                    <span className="text-primary block">On the Go</span>
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    Download our mobile app for instant access to our services, real-time project updates, 
                    and exclusive mobile-only offers. Manage your flooring projects anywhere, anytime.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-primary group-hover:text-white text-lg">📋</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Instant Quotes</div>
                      <div className="text-xs text-muted-foreground">Get pricing in seconds</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-primary group-hover:text-white text-lg">📊</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Project Tracking</div>
                      <div className="text-xs text-muted-foreground">Real-time updates</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-primary group-hover:text-white text-lg">📷</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Photo Gallery</div>
                      <div className="text-xs text-muted-foreground">Browse our work</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-primary group-hover:text-white text-lg">💬</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">24/7 Support</div>
                      <div className="text-xs text-muted-foreground">Always here to help</div>
                    </div>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="#"
                      className="inline-flex items-center space-x-4 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 group shadow-lg"
                    >
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                        <span className="text-black font-bold text-lg">A</span>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-gray-300">Download on the</div>
                        <div className="text-sm font-bold">App Store</div>
                      </div>
                    </a>
                    
                    <a 
                      href="#"
                      className="inline-flex items-center space-x-4 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 group shadow-lg"
                    >
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                        <span className="text-black font-bold text-lg">G</span>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-gray-300">Get it on</div>
                        <div className="text-sm font-bold">Google Play</div>
                      </div>
                    </a>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">4.8/5</span> from 2,500+ reviews
                    </div>
                  </div>
                </div>
              </div>

              {/* App Mockup Section */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                                     {/* Main Phone Mockup */}
                   <div className="relative w-72 h-[600px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                    {/* Phone Frame */}
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="h-8 bg-gradient-to-r from-primary to-primary/80 rounded-t-[2.5rem] flex items-center justify-between px-6 text-white text-xs font-medium">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-white/20 rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-4 h-full bg-gradient-to-b from-primary/5 via-secondary/5 to-primary/10">
                        {/* App Header */}
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <span className="text-white font-bold text-2xl">F</span>
                          </div>
                          <h4 className="font-bold text-foreground text-lg">MMC App</h4>
                          <p className="text-xs text-muted-foreground">Your Flooring Partner</p>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <span className="text-primary text-sm">📋</span>
                            </div>
                            <span className="text-xs font-semibold text-foreground">Get Quote</span>
                          </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <span className="text-primary text-sm">📊</span>
                            </div>
                            <span className="text-xs font-semibold text-foreground">Track Project</span>
                          </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <span className="text-primary text-sm">📷</span>
                            </div>
                            <span className="text-xs font-semibold text-foreground">Gallery</span>
                          </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <span className="text-primary text-sm">💬</span>
                            </div>
                            <span className="text-xs font-semibold text-foreground">Support</span>
                          </div>
                        </div>

                        {/* Recent Projects */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 mb-4 shadow-sm">
                          <h5 className="font-semibold text-foreground text-sm mb-2">Recent Projects</h5>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-muted-foreground">Kitchen Renovation - 85%</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className="text-xs text-muted-foreground">Bathroom Tiling - In Progress</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-3 text-center shadow-lg">
                          <span className="text-white text-sm font-semibold">📞 Call Now</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                    <span className="text-white text-xs font-bold">NEW</span>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <span className="text-white text-sm">🔥</span>
                  </div>
                  
                  {/* Additional Floating Elements */}
                  <div className="absolute top-1/2 -right-8 w-6 h-6 bg-secondary/20 rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 -left-4 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Contact;