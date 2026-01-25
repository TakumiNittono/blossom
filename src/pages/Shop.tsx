import { useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';

const Shop = () => {
  useEffect(() => {
    // Restore scroll position when returning from product detail
    const savedPosition = sessionStorage.getItem('shopScrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      sessionStorage.removeItem('shopScrollPosition');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <ProductGrid />
    </div>
  );
};

export default Shop;
