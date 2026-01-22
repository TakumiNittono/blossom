import React, { useState } from 'react';
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

const mockProducts = [
  { name: 'STRIPED ZIP JACKET MAROON', price: '$169.00', imageUrl: '/IMG_8909.JPG' },
  { name: 'GRAPHIC TEE BLACK', price: '$89.00', imageUrl: '/IMG_8907.JPG' },
  { name: 'ABSTRACT KNIT SWEATER', price: '$119.00', imageUrl: '/IMG_8910.JPG' },
  { name: 'TOP BOY PANTS BLACK DENIM', price: '$119.00' },
  { name: 'DISTRESS CURVED HOODIE LIGHT GREY', price: '$109.00' },
  { name: 'FLUFFY FUR KNIT BLACK & RED', price: '$119.00' },
  { name: 'SCRIPT STUDS HOODIE BLACK', price: '$129.00' },
  { name: 'HENLEY LONGSLEEVE GREY', price: '$89.00' },
  { name: 'TRACK PANTS BLACK', price: '$99.00' },
];

const NewArrivals: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('VIEW ALL');

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">NEW ARRIVALS</h2>
          <a href="#" className="text-sm hover:underline">+ VIEW ALL</a>
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
          {mockProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              isNew={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
