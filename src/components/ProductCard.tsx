import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  onViewDetails?: (productId: number) => void;
  onInquiry?: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  onViewDetails,
  onInquiry
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(id);
    }
    // Navigate to product details page
    navigate(`/product/${id}`);
  };

  const handleInquiry = () => {
    if (onInquiry) {
      onInquiry(id);
    }
  };

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative mb-4">
        <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Product Name */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
          {name}
        </h3>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button 
          onClick={handleViewDetails}
          className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors duration-300"
        >
          View Details
        </button>
        <button 
          onClick={handleInquiry}
          className="flex-1 bg-white text-gray-900 border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 hover:border-gray-400 transition-colors duration-300"
        >
          Inquiry Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 