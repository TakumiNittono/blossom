import { FC } from 'react';

interface LandingGateProps {
  onShopHere: () => void;
}

const LandingGate: FC<LandingGateProps> = ({ onShopHere }) => {
  const handleShopHere = () => {
    onShopHere();
  };

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="text-center">
        {/* Logo with Icon */}
        <div className="mb-12 flex flex-col items-center">
          {/* Blossom Icon */}
          <div className="mb-6">
            <img 
              src="/blossom-icon.png" 
              alt="Blossom" 
              className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain"
            />
          </div>
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
