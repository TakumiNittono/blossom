import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductGrid from './ProductGrid';
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
    // Save scroll position
    sessionStorage.setItem('shopScrollPosition', window.scrollY.toString());
    navigate('/shop');
  };

  useEffect(() => {
    // Restore scroll position when component mounts
    const savedPosition = sessionStorage.getItem('newArrivalsScrollPosition');
    if (savedPosition && window.location.hash === '#new-arrivals') {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem('newArrivalsScrollPosition');
      }, 100);
    }
  }, []);

  return (
    <section id="new-arrivals" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">NEW ARRIVALS</h2>
          <button 
            onClick={handleViewAll} 
            className="text-xs md:text-sm uppercase tracking-wider border-b-2 border-black pb-1 hover:opacity-70 brand-transition"
          >
            + VIEW ALL
          </button>
        </div>

        {/* Category Filters */}
        <div className="mb-8 md:mb-12 overflow-x-auto">
          <div className="flex space-x-6 md:space-x-8 pb-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs md:text-sm whitespace-nowrap pb-2 border-b-2 uppercase tracking-wide brand-transition ${
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
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 uppercase tracking-wide">NO PRODUCTS IN THIS CATEGORY</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
