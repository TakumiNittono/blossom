import { FC, useState, useEffect } from 'react';

interface LandingGateProps {
  onShopHere: () => void;
}

const LandingGate: FC<LandingGateProps> = ({ onShopHere }) => {
  const [showGate, setShowGate] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem('blossom_visited');
    if (!visited) {
      setShowGate(true);
    }
  }, []);

  const handleShopHere = () => {
    localStorage.setItem('blossom_visited', 'true');
    setShowGate(false);
    onShopHere();
  };

  if (!showGate) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center animate-fadeIn">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">BLOSSOM</h1>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={handleShopHere}
          className="text-sm md:text-base tracking-widest uppercase border-b-2 border-black pb-2 hover:opacity-70 transition-opacity duration-300"
          style={{ fontFamily: 'sans-serif' }}
        >
          SHOP HERE
        </button>
      </div>
    </div>
  );
};

export default LandingGate;
