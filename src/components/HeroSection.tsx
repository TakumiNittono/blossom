import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] bg-gray-900 overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="/IMG_8909.JPG" 
          alt="LAST RESORT Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-end">
          {/* Left Text */}
          <div className="text-white mb-8 md:mb-0">
            <h2 className="text-5xl md:text-7xl font-bold mb-2">LAST RESORT</h2>
            <p className="text-lg md:text-xl">LAST RESORT DROP - LIVE NOW</p>
          </div>

          {/* Right Button */}
          <button className="bg-white text-black px-8 py-3 border-2 border-black font-semibold hover:bg-gray-100 transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
