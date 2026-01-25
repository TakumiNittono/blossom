import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  isHovered?: boolean;
  onHover?: (productId: string | null) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, isHovered = false, onHover }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Preload second image
  useEffect(() => {
    if (product.images.length > 1) {
      const img = new Image();
      img.src = product.images[1];
    }
  }, [product.images]);

  useEffect(() => {
    if (isHovered && product.images.length > 1) {
      setCurrentImageIndex(1);
    } else {
      setCurrentImageIndex(0);
    }
  }, [isHovered, product.images.length]);

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className={`group relative cursor-pointer brand-transition ${
        isHovered ? 'scale-[1.03] z-10' : 'scale-100 opacity-100'
      }`}
      onMouseEnter={() => onHover?.(product.id)}
      onMouseLeave={() => onHover?.(null)}
      onClick={handleClick}
    >
      {/* Product Image */}
      <div className="relative bg-gray-100 aspect-square overflow-hidden mb-3">
        {product.images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`${product.name} ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover brand-transition ${
              index === currentImageIndex
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            onLoad={() => setIsImageLoaded(true)}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>

      {/* Product Info */}
      <div className="text-sm">
        <h3 className="font-medium mb-1 tracking-wide">{product.name}</h3>
        <p className="font-semibold">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
