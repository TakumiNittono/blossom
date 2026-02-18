import { FC } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount, openCart } = useApp();
  const { t } = useLanguage();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center py-1 text-xs">
        {t('taxes.duties.included')}
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Left: Account */}
            <div className="flex items-center space-x-6">
              <Link to="/account" className="flex items-center hover:text-gray-600 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <nav className="hidden md:flex space-x-6 text-sm font-medium">
                <Link to="/shop" className="hover:text-gray-600">{t('shop')}</Link>
                <Link to="/shop" className="hover:text-gray-600">{t('private.sales')}</Link>
                <Link to="/collections" className="hover:text-gray-600">{t('collections')}</Link>
                <Link to="/stores" className="hover:text-gray-600">{t('stores')}</Link>
                <Link to="/faqs" className="hover:text-gray-600">{t('faqs')}</Link>
              </nav>
            </div>

            {/* Center: Logo (absolutely centered) */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <h1 onClick={handleLogoClick} className="text-2xl font-bold cursor-pointer hover:opacity-70 brand-transition uppercase tracking-tight" style={{ fontFamily: "'Broken Ranch', serif" }}>BLOSSOM</h1>
            </div>

            {/* Right: Search + Bag */}
            <div className="flex items-center space-x-4 md:space-x-6">
<button onClick={() => navigate('/search')} className="flex items-center hover:text-gray-600 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                onClick={openCart}
                className="flex items-center hover:text-gray-600 cursor-pointer relative"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="border-t border-gray-200">
          <div className="w-full overflow-x-auto">
            <nav className="flex items-center space-x-4 md:space-x-6 py-3 px-4 sm:px-6 lg:px-8 text-xs md:text-sm min-w-max">
              <Link to="/" className="whitespace-nowrap hover:text-gray-600 uppercase tracking-wide">{t('new.arrivals')}</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
