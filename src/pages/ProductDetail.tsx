import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { mockProducts } from '../data/products';
import Accordion from '../components/Accordion';
import SizeGuide from '../components/SizeGuide';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, openCart, setLoading } = useApp();
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleBack = () => {
    navigate(-1);
  };

  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">PRODUCT NOT FOUND</h1>
          <button
            onClick={() => navigate('/shop')}
            className="border-b-2 border-black pb-1 uppercase tracking-wide"
          >
            BACK TO SHOP
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
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
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-20 left-4 md:left-8 z-10 bg-white/80 backdrop-blur-sm px-4 py-2 uppercase text-sm tracking-wide hover:opacity-70 brand-transition"
      >
        ← BACK
      </button>

      {/* Hero Image */}
      <div className="w-full aspect-square md:aspect-[4/5] bg-gray-100 relative overflow-hidden">
        <img
          src={product.images[0]}
          srcSet={`${product.images[0]} 1x, ${product.images[0]} 2x`}
          sizes="100vw"
          alt={product.name}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Product Info - Minimal */}
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight uppercase">
          {product.name}
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-8">{product.price}</p>

        {/* Size Selector */}
        <div className="mb-8">
          <label className="block text-sm uppercase tracking-wide mb-4">SIZE</label>
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
          ADD TO CART
        </button>

        {/* Accordion Sections */}
        <div className="space-y-0">
          <Accordion title="DETAILS">
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.name} is part of the BLOSSOM collection. Crafted with premium materials
              and attention to detail, this piece embodies minimalist design and quality construction.
            </p>
          </Accordion>

          <Accordion title="SIZING">
            <SizeGuide />
          </Accordion>

          <Accordion title="DELIVERY">
            <div className="text-sm text-gray-600 space-y-4">
              <div>
                <p className="font-medium mb-2">STANDARD SHIPPING</p>
                <p>Free shipping on orders over $100. Estimated delivery: 3-5 business days.</p>
              </div>
              <div>
                <p className="font-medium mb-2">EXPRESS SHIPPING</p>
                <p>$15. Estimated delivery: 1-2 business days.</p>
              </div>
              <div>
                <p className="font-medium mb-2">INTERNATIONAL</p>
                <p>Shipping rates calculated at checkout. Duties and taxes included.</p>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
