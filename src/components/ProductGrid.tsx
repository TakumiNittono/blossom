import { FC, useState } from 'react';
import ProductCard from './ProductCard';
import { mockProducts, Product } from '../data/products';

interface ProductGridProps {
  products?: Product[];
}

const ProductGrid: FC<ProductGridProps> = ({ products = mockProducts }) => {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  // Group products into rows for mobile horizontal swipe
  const rows: Product[][] = [];
  for (let i = 0; i < products.length; i += 2) {
    rows.push(products.slice(i, i + 2));
  }

  return (
    <div className="space-y-4 md:space-y-8">
      {/* Mobile: Horizontal swipe rows - 2 columns per row */}
      <div className="md:hidden space-y-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar ${
              row.length === 2 ? 'justify-center' : 'px-4'
            }`}
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {/* Left padding for centering when 2 items */}
            {row.length === 2 && <div className="flex-shrink-0 w-4" />}
            {row.map((product) => (
              <div
                key={product.id}
                className={`flex-shrink-0 ${
                  row.length === 2 ? 'w-[calc(50vw-1.5rem)]' : 'w-[calc(50%-0.5rem)]'
                }`}
                style={{
                  scrollSnapAlign: 'start',
                }}
              >
                <ProductCard
                  product={product}
                  isHovered={false}
                  onHover={() => {}}
                />
              </div>
            ))}
            {/* Right padding for centering when 2 items */}
            {row.length === 2 && <div className="flex-shrink-0 w-4" />}
            {/* Add extra space for swipe only if more than 2 items */}
            {row.length > 2 && <div className="flex-shrink-0 w-4" />}
          </div>
        ))}
      </div>

      {/* Desktop: Grid with hover effects */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isHovered={hoveredProductId === product.id}
            onHover={setHoveredProductId}
            dimOthers={hoveredProductId !== null && hoveredProductId !== product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
