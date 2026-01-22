import { FC } from 'react';

const Header: FC = () => {
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
              <a href="#" className="hover:text-gray-600">SHOP</a>
              <a href="#" className="hover:text-gray-600">PRIVATE SALES</a>
              <a href="#" className="hover:text-gray-600">COLLECTIONS</a>
              <a href="#" className="hover:text-gray-600">STORES</a>
              <a href="#" className="hover:text-gray-600">FAQS</a>
            </nav>

            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <h1 className="text-2xl font-bold">blossom</h1>
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-gray-600">COLD TOUR</a>
              <a href="#" className="hover:text-gray-600">COUNTRY</a>
              <button className="hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </button>
              <button className="hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-6 py-3 text-sm overflow-x-auto">
              <a href="#" className="whitespace-nowrap hover:text-gray-600">LAST RESORT <span className="text-red-600">NEW</span></a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">NEW ARRIVALS</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">BEST SELLERS</a>
              <a href="#" className="whitespace-nowrap text-red-600 font-semibold">PRIVATE SALES</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">HOODIES</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">ZIPS</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">KNITWEAR</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">OUTERWEAR</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">PANTS</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">LONGSLEEVE</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">TEES</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">CREWNECKS</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">SWEATPANTS</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">BAGS | CARDHOLDERS <span className="text-red-600">NEW</span></a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">SNEAKERS</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">ACCESSORIES</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">POLOS</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">SHIRTS</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">PARFUM</a>
              <a href="#" className="whitespace-nowrap hover:text-gray-600">BEANI</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
