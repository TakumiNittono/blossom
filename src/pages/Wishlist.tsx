import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useApp();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ウィッシュリスト</h1>
          <p className="text-gray-500 mb-8">ウィッシュリストは空です</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">ウィッシュリスト</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {wishlist.map((product) => (
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
      </div>
    </div>
  );
};

export default Wishlist;
