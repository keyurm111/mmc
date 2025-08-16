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
      title: 'Visit Our Corporate Office',
      details: ['418, Happy Hallmark Shoppers', 'Vesu-Abhava Road, Surat, Gujarat - 395017'],
      action: 'Get Directions',
      color: 'bg-primary'
    },
    {
      icon: Phone,
      title: 'Call Us Today',
      details: ['+91 9099988272'],
      action: 'Call Now',
      color: 'bg-primary'
    },
    {
      icon: Mail,
      title: 'Send Us an Email',
      details: ['info@marblemagik.com'],
      action: 'Send Email',
      color: 'bg-primary'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat: 9:00 AM - 5:00 PM'],
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
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl border border-gray-100 relative">
                {/* Horse Image - Half Inside, Half Outside Form */}
                <div className="absolute bottom-0 -left-24 z-20">
                  <img
                    src="/mmc horse/2.png"
                    alt="Marble Magik Horse"
                    className="w-64 h-64 object-contain"
                  />
                </div>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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



      {/* Combined Map and Mobile App Section - Side by Side */}
      <section className="py-12 bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Visit Our Office Section */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Visit Our Office</h3>
                  <p className="text-muted-foreground text-sm">Come see our work in person</p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1234567890123!2d72.78901234567890!3d21.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0x1234567890abcdef!2sHappy%20Hallmark%20Shoppers%2C%20Vesu-Abhava%20Road%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709834567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MMC Corporate Office Location - Surat, Gujarat"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 text-sm">
                    Visit Our Office
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile App Advertisement Section */}
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 rounded-3xl p-6 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-12 translate-x-12 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/10 rounded-full translate-y-10 -translate-x-10 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Top Section - Tag and Main Content */}
                <div className="mb-6 text-center">
                  {/* Mobile App Tag */}
                  <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 py-1.5 mb-4">
                    <span className="text-primary text-sm">📱</span>
                    <span className="text-xs font-semibold text-primary">MOBILE APP</span>
                  </div>
                  
                  {/* Main Headline */}
                  <h3 className="text-2xl font-bold text-foreground leading-tight mb-3">
                    Download the <span className="text-primary">Official App</span>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Earn reward points instantly on Each Product you buy. Download the app and start earning today.
                  </p>
                </div>

                {/* Middle Section - Features and Mobile Image Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-center">
                  {/* Left Side - Feature Boxes, Rating, and Download Button */}
                  <div className="space-y-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-500 text-sm">🎁</span>
                        </div>
                        <div>
                          <div className="font-bold text-foreground text-xs">Reward Points</div>
                          <div className="text-xs text-muted-foreground">Earn on every purchase</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-500 text-sm">💳</span>
                        </div>
                        <div>
                          <div className="font-bold text-foreground text-xs">Digital Wallet</div>
                          <div className="text-xs text-muted-foreground">Redeem points as cash</div>
                        </div>
                      </div>
                    </div>

                    {/* Rating Section */}
                    <div className="flex items-center justify-center space-x-2 pt-6">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">4.8/5</span> from 10K+ downloads
                      </div>
                    </div>

                    {/* Download Button */}
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.mmc.mmc_flutter_app&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 group shadow-lg w-full justify-center"
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1745px-Android_robot.svg.png"
                        alt="Android Logo"
                        className="w-8 h-8 bg-white rounded-lg p-1"
                      />
                      <div className="text-left">
                        <div className="text-xs text-gray-300">Download our</div>
                        <div className="text-sm font-bold">Android App</div>
                      </div>
                    </a>
                  </div>

                  {/* Right Side - Mobile Phone with Horse on Left */}
                  <div className="flex justify-center">
                    <div className="relative">
                      {/* Horse Image - Left Side of Mobile with Hand Overlapping */}
                      <div className="absolute -left-28 bottom-0 z-30">
                        <img
                          src="/mmc horse/4.png"
                          alt="MMC Horse"
                          className="w-48 h-48 object-contain opacity-100"
                        />
                      </div>
                      
                      {/* Mobile Phone */}
                      <img 
                        src="/mobile.png"
                        alt="MMC Mobile App"
                        className="w-40 h-80 object-contain relative z-20"
                      />
                    </div>
                  </div>
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