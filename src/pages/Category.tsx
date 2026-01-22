import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/products';

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const products = mockProducts.filter(
    (p) => p.category === category?.toUpperCase()
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          {category?.toUpperCase()}
        </h1>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                isNew={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">このカテゴリには商品がありません</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
