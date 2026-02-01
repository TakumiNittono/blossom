import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';

const CartDrawer: FC = () => {
  const {
    cart,
    cartOpen,
    closeCart,
    removeFromCart,
    updateCartQuantity,
  } = useApp();
  const { language, t, formatPrice, formatAmount } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && cartOpen) {
        closeCart();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [cartOpen, closeCart]);

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [cartOpen]);

  if (!cartOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998] animate-fadeIn"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 bottom-0 w-full md:w-[420px] bg-white z-[9999] shadow-2xl animate-slideInRight overflow-y-auto"
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold uppercase tracking-wide">{t('cart')}</h2>
            <button
              onClick={closeCart}
              className="text-2xl hover:opacity-70 brand-transition"
            >
              ×
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">{t('your.cart.is.empty')}</p>
              <button
                onClick={() => {
                  closeCart();
                  navigate('/shop');
                }}
                className="border-b-2 border-black pb-1 uppercase tracking-wide"
              >
                {t('continue.shopping')}
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${item.selectedSize}-${index}`} className="flex gap-4 pb-6 border-b">
                    {/* Image */}
                    <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                      <img
                        src={item.images?.[0] || ''}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium mb-1 uppercase tracking-wide truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">{t('size.label')} {item.selectedSize}</p>
                      <p className="text-sm font-semibold mb-3">{formatPrice(item.price)}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateCartQuantity(item.id, item.selectedSize, item.quantity - 1)
                          }
                          className="w-8 h-8 border border-black flex items-center justify-center hover:bg-gray-50 brand-transition"
                        >
                          −
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateCartQuantity(item.id, item.selectedSize, item.quantity + 1)
                          }
                          className="w-8 h-8 border border-black flex items-center justify-center hover:bg-gray-50 brand-transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-gray-400 hover:text-black brand-transition self-start"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Subtotal */}
              <div className="border-t pt-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="uppercase tracking-wide">{t('subtotal')}</span>
                  <span className="font-semibold">{formatAmount(subtotal)}</span>
                </div>
                <p className="text-xs text-gray-600 mb-6">
                  {t('shipping.and.taxes.calculated')}
                </p>

                {/* Checkout Button */}
                <button
                  onClick={() => {
                    alert(language === 'ja' ? 'チェックアウトに進みます...' : 'Proceeding to checkout...');
                    closeCart();
                  }}
                  className="w-full bg-black text-white py-4 px-6 uppercase tracking-wider text-sm font-medium hover:bg-gray-800 brand-transition mb-4"
                >
                  {t('checkout')}
                </button>

                <button
                  onClick={closeCart}
                  className="w-full border-2 border-black py-3 px-6 uppercase tracking-wider text-sm font-medium hover:bg-gray-50 brand-transition"
                >
                  {t('continue.shopping')}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
