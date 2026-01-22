import { FC, useState } from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl?: string;
  isNew?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ name, price, imageUrl, isNew = true }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleProductClick = () => {
    alert(`商品詳細: ${name}\n価格: ${price}`);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    alert(isWishlisted ? 'ウィッシュリストから削除しました' : 'ウィッシュリストに追加しました');
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`${name} をカートに追加しました`);
  };

  return (
    <div className="group relative cursor-pointer" onClick={handleProductClick}>
      {/* Product Image */}
      <div className="relative bg-gray-200 aspect-square mb-3 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-400">画像</span>
          </div>
        )}
        
        {/* NEW IN Badge */}
        {isNew && (
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold">
            NEW IN
          </div>
        )}

        {/* Wishlist Icon */}
        <button 
          onClick={handleWishlistClick}
          className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity ${isWishlisted ? 'opacity-100' : ''}`}
        >
          <svg 
            className={`w-5 h-5 ${isWishlisted ? 'fill-yellow-400 text-yellow-400' : 'text-black'}`} 
            fill={isWishlisted ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>

        {/* Quick Add Icon */}
        <button 
          onClick={handleQuickAdd}
          className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 hover:bg-gray-100"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-sm font-medium mb-1 hover:underline">{name}</h3>
        <p className="text-sm font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
