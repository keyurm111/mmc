import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productCode?: string;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ 
  isOpen, 
  onClose, 
  productName, 
  productCode 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    quantity: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        quantity: ''
      });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[95vh] min-h-[400px]">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-2 sm:p-3 relative">
          <button
            onClick={onClose}
            className="absolute right-2 top-1.5 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>
          
          <div className="text-center py-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
              Product Inquiry {productName && (
                <span className="text-gray-600 text-xs sm:text-sm font-normal block sm:inline">
                  - {productName} {productCode && `(${productCode})`}
                </span>
              )}
            </h2>
          </div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Inquiry Submitted!</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Thank you for your inquiry. Our team will contact you within 24 hours.</p>
          </div>
        )}

        {/* Form */}
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="p-3 sm:p-4 space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50 text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50 text-sm sm:text-base"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50 text-sm sm:text-base"
                placeholder="Enter your email address"
              />
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                Product Quantity (Optional)
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50 text-sm sm:text-base"
                placeholder="e.g., 100 kg, 50 liters, etc."
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                Inquiry Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={2}
                className="w-full px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50 resize-none text-sm sm:text-base"
                placeholder="Please describe your requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-primary/90 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:from-primary/90 hover:to-primary hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-lg inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  <span className="text-xs sm:text-sm">Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">Submit Inquiry</span>
                </>
              )}
            </button>

            {/* Footer Note */}
            <p className="text-xs text-gray-500 text-center px-2">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default InquiryForm;
