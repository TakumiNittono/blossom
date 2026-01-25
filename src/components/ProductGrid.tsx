import { FC, useState, useRef, useEffect } from 'react';
import ProductCard from './ProductCard';
import { mockProducts, Product } from '../data/products';

interface ProductGridProps {
  products?: Product[];
}

const ProductGrid: FC<ProductGridProps> = ({ products = mockProducts }) => {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Mobile: Enable horizontal swipe per row
  useEffect(() => {
    if (!gridRef.current) return;
    // Touch events are handled by CSS scroll-snap
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 px-4 md:px-8 py-12"
      style={{
        scrollSnapType: 'x mandatory',
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="scroll-snap-start"
          style={{
            scrollSnapAlign: 'start',
          }}
        >
          <ProductCard
            product={product}
            isHovered={hoveredProductId === product.id}
            onHover={setHoveredProductId}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
