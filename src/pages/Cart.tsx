import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateCartQuantity } = useApp();

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">カート</h1>
          <p className="text-gray-500 mb-8">カートは空です</p>
          <button
            onClick={() => navigate('/')}
            className="bg-black text-white px-8 py-2 hover:bg-gray-800"
          >
            ショッピングを続ける
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">カート</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b pb-4"
              >
                <div
                  className="w-24 h-24 bg-gray-200 cursor-pointer"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400 text-xs">画像</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3
                    className="font-medium cursor-pointer hover:underline"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">{item.price}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border">
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      削除
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-1">
            <div className="border p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">注文概要</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>小計</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>送料</span>
                  <span>$10.00</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>合計</span>
                  <span>${(total + 10).toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={() => alert('決済ページに進みます')}
                className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors"
              >
                チェックアウト
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
