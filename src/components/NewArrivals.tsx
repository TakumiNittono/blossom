import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { mockProducts } from '../data/products';

const categories = [
  'VIEW ALL',
  'HOODIES',
  'ZIPS',
  'PANTS',
  'KNITWEAR',
  'OUTERWEAR',
  'LONGSLEEVE',
  'TEES',
  'SWEATPANTS',
  'SHIRTS',
  'POLOS',
  'BEANIES',
  'UNDERWEAR',
  'CAPS'
];

const NewArrivals: FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('VIEW ALL');

  const filteredProducts = selectedCategory === 'VIEW ALL' 
    ? mockProducts 
    : mockProducts.filter(product => product.category === selectedCategory);

  const handleViewAll = () => {
    navigate('/shop');
  };

  return (
    <section id="new-arrivals" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">NEW ARRIVALS</h2>
          <button onClick={handleViewAll} className="text-sm hover:underline">+ VIEW ALL</button>
        </div>

        {/* Category Filters */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-6 pb-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm whitespace-nowrap pb-2 border-b-2 transition-colors ${
                  selectedCategory === category
                    ? 'border-black font-semibold'
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                isNew={true}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">このカテゴリには商品がありません</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
