import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NewArrivals from './components/NewArrivals';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <NewArrivals />
      
      {/* Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
