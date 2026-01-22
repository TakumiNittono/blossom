import { FC, useState } from 'react';
import ProductCard from './ProductCard';

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

interface Product {
  name: string;
  price: string;
  imageUrl?: string;
  category: string;
}

const mockProducts: Product[] = [
  { name: 'STRIPED ZIP JACKET MAROON', price: '$169.00', imageUrl: '/IMG_8909.JPG', category: 'ZIPS' },
  { name: 'GRAPHIC TEE BLACK', price: '$89.00', imageUrl: '/IMG_8907.JPG', category: 'TEES' },
  { name: 'ABSTRACT KNIT SWEATER', price: '$119.00', imageUrl: '/IMG_8910.JPG', category: 'KNITWEAR' },
  { name: 'TOP BOY PANTS BLACK DENIM', price: '$119.00', category: 'PANTS' },
  { name: 'DISTRESS CURVED HOODIE LIGHT GREY', price: '$109.00', category: 'HOODIES' },
  { name: 'FLUFFY FUR KNIT BLACK & RED', price: '$119.00', category: 'KNITWEAR' },
  { name: 'SCRIPT STUDS HOODIE BLACK', price: '$129.00', category: 'HOODIES' },
  { name: 'HENLEY LONGSLEEVE GREY', price: '$89.00', category: 'LONGSLEEVE' },
  { name: 'TRACK PANTS BLACK', price: '$99.00', category: 'SWEATPANTS' },
];

const NewArrivals: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('VIEW ALL');

  const filteredProducts = selectedCategory === 'VIEW ALL' 
    ? mockProducts 
    : mockProducts.filter(product => product.category === selectedCategory);

  const handleViewAll = () => {
    alert('すべての新着商品を表示します');
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
            filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
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
