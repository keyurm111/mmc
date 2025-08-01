import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="section-padding hero-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center text-white">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Ready to Transform
              <span className="block text-white/90">Your Space?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
              Get your free consultation and quote today. Our expert team is ready to bring 
              your vision to life with premium materials and exceptional craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-bounce-in">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-white/90 rounded-xl px-8 py-4 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Get Your Free Quote
              </Link>
              
              <a href="tel:+11234567890" className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-xl px-8 py-4 font-bold text-lg transition-all duration-300">
                Call Now: +1 (123) 456-7890
              </a>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center animate-fade-in-left">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Consultation</h3>
              <p className="text-white/80">Expert advice and project assessment at no cost to you</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
              <p className="text-white/80">We work around your schedule for minimal disruption</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center animate-fade-in-right">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-white/80">Ongoing support and maintenance for your investment</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;