import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { mockProducts } from '../data/products';
import Accordion from '../components/Accordion';
import SizeGuide from '../components/SizeGuide';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, openCart, setLoading } = useApp();
  const { language, t, formatPrice } = useLanguage();
  const [selectedSize, setSelectedSize] = useState<string>('');

  // ページマウント時にトップにスクロール（モバイル対応）
  useEffect(() => {
    // 即座にトップにスクロール
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // 即座に実行
    scrollToTop();

    // requestAnimationFrameを使用してDOMレンダリング後に確実にスクロール
    requestAnimationFrame(() => {
      scrollToTop();
      // さらに少し遅延させてモバイルでも確実に動作
      setTimeout(scrollToTop, 50);
    });

    // ページが完全に読み込まれた後にも確認
    const handleLoad = () => scrollToTop();
    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [id]);

  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('product.not.found')}</h1>
          <button
            onClick={() => navigate('/shop')}
            className="border-b-2 border-black pb-1 uppercase tracking-wide"
          >
            {t('back.to.shop')}
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert(t('please.select.size'));
      return;
    }

    setLoading(true);
    addToCart({
      ...product,
      selectedSize: selectedSize,
    });
    setTimeout(() => {
      setLoading(false);
      openCart();
    }, 300);
  };

  return (
    <div className="min-h-screen">
      {/* Mobile: Vertical Layout */}
      <div className="md:hidden">
        {/* Hero Image */}
        <div className="w-full aspect-square bg-gray-100 relative overflow-hidden">
          <img
            src={product.images[0]}
            srcSet={`${product.images[0]} 1x, ${product.images[0]} 2x`}
            sizes="100vw"
            alt={product.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Product Info */}
        <div className="px-4 py-12">
          <h1 className="text-2xl font-bold mb-2 tracking-tight uppercase">
            {product.name}
          </h1>
          <p className="text-xl font-semibold mb-8">{formatPrice(product.price)}</p>

          {/* Size Selector */}
          <div className="mb-8">
            <label className="block text-sm uppercase tracking-wide mb-4">{t('size')}</label>
            <div className="grid grid-cols-6 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size.size}
                  onClick={() => size.available && setSelectedSize(size.size)}
                  disabled={!size.available}
                  className={`py-3 px-2 border-2 uppercase text-sm tracking-wide brand-transition ${
                    selectedSize === size.size
                      ? 'border-black bg-black text-white'
                      : size.available
                      ? 'border-black hover:bg-gray-50'
                      : 'border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
                  }`}
                >
                  {size.size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className="w-full bg-black text-white py-4 px-6 uppercase tracking-wider text-sm font-medium hover:bg-gray-800 brand-transition disabled:opacity-50 disabled:cursor-not-allowed mb-12"
          >
            {t('add.to.cart')}
          </button>

          {/* Accordion Sections */}
          <div className="space-y-0">
            <Accordion title={t('details')}>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.name} is part of the BLOSSOM collection. Crafted with premium materials
                and attention to detail, this piece embodies minimalist design and quality construction.
              </p>
            </Accordion>

            <Accordion title={t('sizing')}>
              <SizeGuide />
            </Accordion>

            <Accordion title={t('delivery')}>
              <div className="text-sm text-gray-600 space-y-4">
                <div>
                  <p className="font-medium mb-2">{t('standard.shipping')}</p>
                  <p>{language === 'ja' ? '$100以上の注文で送料無料。配送予定：3-5営業日。' : 'Free shipping on orders over $100. Estimated delivery: 3-5 business days.'}</p>
                </div>
                <div>
                  <p className="font-medium mb-2">{t('express.shipping')}</p>
                  <p>{language === 'ja' ? '$15。配送予定：1-2営業日。' : '$15. Estimated delivery: 1-2 business days.'}</p>
                </div>
                <div>
                  <p className="font-medium mb-2">{t('international')}</p>
                  <p>{language === 'ja' ? '送料はチェックアウト時に計算されます。関税・税金込み。' : 'Shipping rates calculated at checkout. Duties and taxes included.'}</p>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Desktop: Horizontal Layout (Image Left, Info Right) */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="sticky top-24">
              <div className="w-full aspect-[4/5] bg-gray-100 relative overflow-hidden">
                <img
                  src={product.images[0]}
                  srcSet={`${product.images[0]} 1x, ${product.images[0]} 2x`}
                  sizes="50vw"
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="max-w-lg">
              <h1 className="text-3xl font-bold mb-2 tracking-tight uppercase">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold mb-8">{formatPrice(product.price)}</p>

              {/* Size Selector */}
              <div className="mb-8">
                <label className="block text-sm uppercase tracking-wide mb-4">{t('size')}</label>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => size.available && setSelectedSize(size.size)}
                      disabled={!size.available}
                      className={`py-3 px-2 border-2 uppercase text-sm tracking-wide brand-transition ${
                        selectedSize === size.size
                          ? 'border-black bg-black text-white'
                          : size.available
                          ? 'border-black hover:bg-gray-50'
                          : 'border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
                      }`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="w-full bg-black text-white py-4 px-6 uppercase tracking-wider text-sm font-medium hover:bg-gray-800 brand-transition disabled:opacity-50 disabled:cursor-not-allowed mb-12"
              >
                {t('add.to.cart')}
              </button>

              {/* Accordion Sections */}
              <div className="space-y-0">
                <Accordion title={t('details')}>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {language === 'ja' 
                      ? `${product.name}はBLOSSOMコレクションの一部です。プレミアム素材と細部への配慮で作られており、ミニマルなデザインと品質の高い構造を体現しています。`
                      : `${product.name} is part of the BLOSSOM collection. Crafted with premium materials and attention to detail, this piece embodies minimalist design and quality construction.`
                    }
                  </p>
                </Accordion>

                <Accordion title={t('sizing')}>
                  <SizeGuide />
                </Accordion>

                <Accordion title={t('delivery')}>
                  <div className="text-sm text-gray-600 space-y-4">
                    <div>
                      <p className="font-medium mb-2">{t('standard.shipping')}</p>
                      <p>{language === 'ja' ? '$100以上の注文で送料無料。配送予定：3-5営業日。' : 'Free shipping on orders over $100. Estimated delivery: 3-5 business days.'}</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">{t('express.shipping')}</p>
                      <p>{language === 'ja' ? '$15。配送予定：1-2営業日。' : '$15. Estimated delivery: 1-2 business days.'}</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">{t('international')}</p>
                      <p>{language === 'ja' ? '送料はチェックアウト時に計算されます。関税・税金込み。' : 'Shipping rates calculated at checkout. Duties and taxes included.'}</p>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
