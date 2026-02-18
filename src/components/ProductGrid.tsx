import { FC, useState } from 'react';
import ProductCard from './ProductCard';
import { mockProducts, Product } from '../data/products';

interface ProductGridProps {
  products?: Product[];
}

const ProductGrid: FC<ProductGridProps> = ({ products = mockProducts }) => {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  return (
    <div>
      {/* Mobile: 2-column grid with dividers */}
      <div className="md:hidden border-t border-l border-gray-200">
        <div className="grid grid-cols-2">
          {products.map((product) => (
            <div key={product.id} className="border-r border-b border-gray-200 p-3">
              <ProductCard
                product={product}
                isHovered={false}
                onHover={() => {}}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Grid with hover effects and dividers */}
      <div className="hidden md:block border-t border-l border-gray-200">
        <div className="grid md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="border-r border-b border-gray-200 p-4">
              <ProductCard
                product={product}
                isHovered={hoveredProductId === product.id}
                onHover={setHoveredProductId}
                dimOthers={hoveredProductId !== null && hoveredProductId !== product.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
