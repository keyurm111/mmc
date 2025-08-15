import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'Manhattan, NY',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
              quote: 'MMC transformed our kitchen with beautiful marble flooring that exceeded all our expectations. Their attention to detail and professionalism is unmatched. The team was punctual, clean, and incredibly skilled.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      location: 'Brooklyn, NY',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
              quote: 'We hired MMC for our restaurant renovation, and they delivered exceptional results on time and within budget. The commercial-grade tiles they installed have been perfect for our high-traffic kitchen.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      location: 'Queens, NY',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
              quote: 'As an interior designer, I work with many contractors, but MMC stands out for their craftsmanship and reliability. They bring my visions to life with precision and artistry. Highly recommended!',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Property Manager',
      location: 'Manhattan, NY',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
              quote: 'MMC has been our go-to flooring contractor for multiple properties. Their team is professional, efficient, and delivers consistent quality. The hardwood floors they installed still look pristine after 3 years.',
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Homeowner',
      location: 'Staten Island, NY',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
              quote: 'Our bathroom renovation was a dream come true thanks to MMC. The custom tile work is absolutely stunning, and the team was so accommodating to our specific requests. Outstanding service!',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-green-600 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <span className="text-primary">💬</span>
            <span className="text-sm font-medium text-primary">WHAT OUR CLIENTS SAY</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Trusted by
            <span className="text-green-600"> Happy Customers</span>
          </h2>
          
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience working with MMC.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 card-elegant">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentSlide].rating)}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-black leading-relaxed font-medium mb-8">
                "{testimonials[currentSlide].quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-bold text-black text-lg">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-black">
                    {testimonials[currentSlide].role}
                  </p>
                  <p className="text-sm text-green-600">
                    {testimonials[currentSlide].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-black">Average Rating</div>
            <div className="flex justify-center mt-2">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-black">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-black">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;