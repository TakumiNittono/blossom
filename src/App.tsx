import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import LandingGate from './components/LandingGate';
import IntroPopup from './components/IntroPopup';
import GlobalLoader from './components/GlobalLoader';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Shop from './pages/Shop';
import Collections from './pages/Collections';
import Stores from './pages/Stores';
import FAQs from './pages/FAQs';
import Account from './pages/Account';

const AppContent = () => {
  const location = useLocation();
  const { isLoading } = useApp();
  const [showIntroPopup, setShowIntroPopup] = useState(false);
  const [hasCheckedIntro, setHasCheckedIntro] = useState(false);

  useEffect(() => {
    // Check if should show intro popup after landing gate
    if (location.pathname === '/shop' && !hasCheckedIntro) {
      const visited = localStorage.getItem('blossom_visited');
      const emailCaptured = localStorage.getItem('blossom_email_captured');
      
      if (visited === 'true' && !emailCaptured) {
        setTimeout(() => {
          setShowIntroPopup(true);
        }, 500);
      }
      setHasCheckedIntro(true);
    }
  }, [location.pathname, hasCheckedIntro]);

  return (
    <div className="min-h-screen bg-white">
      <LandingGate />
      <IntroPopup isOpen={showIntroPopup} onClose={() => setShowIntroPopup(false)} />
      <GlobalLoader isLoading={isLoading} />
      <CartDrawer />
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      
      {/* Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => alert('Customer support chat')}
          className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 brand-transition cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
