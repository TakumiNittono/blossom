import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LandingGate from './components/LandingGate';
import IntroPopup from './components/IntroPopup';
import GlobalLoader from './components/GlobalLoader';
import CartDrawer from './components/CartDrawer';
import PageTransition from './components/PageTransition';
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

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
        className="bg-white border border-black text-black text-xs uppercase tracking-wide px-3 py-2 shadow-md hover:bg-black hover:text-white brand-transition cursor-pointer"
      >
        {language === 'en' ? 'JP' : 'EN'}
      </button>
    </div>
  );
};

const AppContent = () => {
  const { isLoading } = useApp();
  const [showIntroPopup, setShowIntroPopup] = useState(false);
  const [showLandingGate, setShowLandingGate] = useState(true);
  const navigate = useNavigate();

  const handleLandingGateShopHere = () => {
    setShowLandingGate(false);
    const emailCaptured = localStorage.getItem('blossom_email_captured');
    if (!emailCaptured) {
      // Show intro popup first
      setTimeout(() => {
        setShowIntroPopup(true);
      }, 300);
    } else {
      // Go directly to shop
      navigate('/shop');
    }
  };

  const handleIntroPopupClose = () => {
    setShowIntroPopup(false);
    navigate('/shop');
  };

  return (
    <div className="min-h-screen bg-white">
      {showLandingGate && <LandingGate onShopHere={handleLandingGateShopHere} />}
      <IntroPopup isOpen={showIntroPopup} onClose={handleIntroPopupClose} />
      <GlobalLoader isLoading={isLoading} />
      <CartDrawer />
      
      <Header />
      <div className="pt-[136px]" />
      <PageTransition>
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
      </PageTransition>
      
      {/* Language Toggle */}
      <LanguageToggle />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppProvider>
        <Router>
          <AppContent />
        </Router>
      </AppProvider>
    </LanguageProvider>
  );
}

export default App;
