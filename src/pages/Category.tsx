import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { mockProducts } from '../data/products';

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const products = mockProducts.filter(
    (p) => p.category === category?.toUpperCase()
  );

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 uppercase tracking-tight">
          {category?.toUpperCase()}
        </h1>

        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 uppercase tracking-wide">NO PRODUCTS IN THIS CATEGORY</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
