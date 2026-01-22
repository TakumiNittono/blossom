import { FC } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useApp();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, category: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const newArrivalsSection = document.getElementById('new-arrivals');
      if (newArrivalsSection) {
        newArrivalsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/category/${category.toLowerCase()}`);
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center py-1 text-xs">
        TAXES & DUTIES INCLUDED
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <Link to="/shop" className="hover:text-gray-600">SHOP</Link>
              <Link to="/shop" className="hover:text-gray-600">PRIVATE SALES</Link>
              <Link to="/collections" className="hover:text-gray-600">COLLECTIONS</Link>
              <Link to="/stores" className="hover:text-gray-600">STORES</Link>
              <Link to="/faqs" className="hover:text-gray-600">FAQS</Link>
            </nav>

            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <h1 onClick={handleLogoClick} className="text-2xl font-bold cursor-pointer hover:opacity-70 transition-opacity">blossom</h1>
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <Link to="/shop" className="hover:text-gray-600">COLD TOUR</Link>
              <Link to="/shop" className="hover:text-gray-600">COUNTRY</Link>
              <Link to="/wishlist" className="hover:text-gray-600 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </Link>
              <Link to="/account" className="hover:text-gray-600 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <button onClick={() => navigate('/search')} className="hover:text-gray-600 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link to="/cart" className="hover:text-gray-600 cursor-pointer relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-6 py-3 text-sm overflow-x-auto">
              <a href="#" onClick={(e) => handleCategoryClick(e, 'LAST RESORT')} className="whitespace-nowrap hover:text-gray-600 cursor-pointer">LAST RESORT <span className="text-red-600">NEW</span></a>
              <a href="#" onClick={(e) => handleCategoryClick(e, 'NEW ARRIVALS')} className="whitespace-nowrap hover:text-gray-600 cursor-pointer">NEW ARRIVALS</a>
              <Link to="/shop" className="whitespace-nowrap hover:text-gray-600">BEST SELLERS</Link>
              <Link to="/shop" className="whitespace-nowrap text-red-600 font-semibold">PRIVATE SALES</Link>
              <a href="#" onClick={(e) => handleCategoryClick(e, 'HOODIES')} className="whitespace-nowrap hover:text-gray-600 cursor-pointer">HOODIES</a>
              <a href="#" onClick={(e) => handleCategoryClick(e, 'ZIPS')} className="whitespace-nowrap hover:text-gray-600 cursor-pointer">ZIPS</a>
              <a href="#" onClick={(e) => handleCategoryClick(e, 'KNITWEAR')} className="whitespace-nowrap hover:text-gray-600 cursor-pointer">KNITWEAR</a>
              <a href="#" onClick={(e) => handleCategoryClick(e, 'OUTERWEAR')} className="whitespace-nowrap hover:text-gray-600 cursor-pointer">OUTERWEAR</a>
              <a href="#" onClick={(e) => handleCategoryClick(e, 'PANTS')} className="whitespace-nowrap hover:text-gray-600 cursor-pointer">PANTS</a>
              <a href="#" onClick={(e) => handleCategoryClick(e, 'LONGSLEEVE')} className="whitespace-nowrap hover:text-gray-600 cursor-pointer">LONGSLEEVE</a>
              <a href="#" onClick={(e) => handleCategoryClick(e, 'TEES')} className="whitespace-nowrap hover:text-gray-600 cursor-pointer">TEES</a>
              <Link to="/shop" className="whitespace-nowrap hover:text-gray-600">CREWNECKS</Link>
              <a href="#" onClick={(e) => handleCategoryClick(e, 'SWEATPANTS')} className="whitespace-nowrap hover:text-gray-600 cursor-pointer">SWEATPANTS</a>
              <Link to="/shop" className="whitespace-nowrap hover:text-gray-600">BAGS | CARDHOLDERS <span className="text-red-600">NEW</span></Link>
              <Link to="/shop" className="whitespace-nowrap hover:text-gray-600">SNEAKERS</Link>
              <Link to="/shop" className="whitespace-nowrap hover:text-gray-600">ACCESSORIES</Link>
              <Link to="/shop" className="whitespace-nowrap hover:text-gray-600">POLOS</Link>
              <Link to="/shop" className="whitespace-nowrap hover:text-gray-600">SHIRTS</Link>
              <Link to="/shop" className="whitespace-nowrap hover:text-gray-600">PARFUM</Link>
              <Link to="/shop" className="whitespace-nowrap hover:text-gray-600">BEANI</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
