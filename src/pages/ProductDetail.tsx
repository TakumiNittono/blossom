import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { mockProducts } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useApp();

  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">商品が見つかりません</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-black text-white px-6 py-2 hover:bg-gray-800"
          >
            ホームに戻る
          </button>
        </div>
      </div>
    );
  }

  const wishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} をカートに追加しました`);
  };

  const handleWishlist = () => {
    if (wishlisted) {
      removeFromWishlist(product.id);
      alert('ウィッシュリストから削除しました');
    } else {
      addToWishlist(product);
      alert('ウィッシュリストに追加しました');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-600 hover:text-black"
        >
          ← 戻る
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gray-200 overflow-hidden">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400">画像</span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6">{product.price}</p>
            <p className="text-sm text-gray-600 mb-8">
              カテゴリ: {product.category}
            </p>

            <div className="space-y-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors"
              >
                カートに追加
              </button>
              <button
                onClick={handleWishlist}
                className={`w-full border-2 py-3 px-6 transition-colors ${
                  wishlisted
                    ? 'border-yellow-400 text-yellow-400'
                    : 'border-black hover:bg-gray-50'
                }`}
              >
                {wishlisted ? 'ウィッシュリストから削除' : 'ウィッシュリストに追加'}
              </button>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-xl font-bold mb-4">商品詳細</h2>
              <p className="text-gray-600">
                {product.name}は、blossomの最新コレクションから厳選されたアイテムです。
                高品質な素材と洗練されたデザインで、日常使いから特別な日まで幅広くお楽しみいただけます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
