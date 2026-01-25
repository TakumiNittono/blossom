import { useApp } from '../context/AppContext';
import ProductGrid from '../components/ProductGrid';

const Wishlist = () => {
  const { wishlist } = useApp();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight">WISHLIST</h1>
          <p className="text-gray-500 mb-8 uppercase tracking-wide">YOUR WISHLIST IS EMPTY</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 uppercase tracking-tight">WISHLIST</h1>
        <ProductGrid products={wishlist} />
      </div>
    </div>
  );
};

export default Wishlist;
