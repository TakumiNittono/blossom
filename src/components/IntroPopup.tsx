import { FC } from 'react';

interface IntroPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntroPopup: FC<IntroPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center animate-fadeIn"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white p-8 md:p-12 max-w-md w-full mx-4 relative animate-slideDown"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-black text-white text-center py-2 text-xs tracking-widest uppercase mb-6 -mx-8 -mt-8 md:-mx-12 md:-mt-12">
          ¥15,000以上で送料無料 / FREE SHIPPING OVER ¥15,000
        </div>

        <button
          onClick={onClose}
          className="absolute top-12 right-4 text-2xl hover:opacity-70 transition-opacity"
        >
          ×
        </button>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
          WELCOME TO BLOSSOM
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          新着商品や限定リリースの最新情報をチェック
        </p>

        <button
          onClick={onClose}
          className="w-full bg-black text-white py-3 px-6 uppercase text-sm tracking-wider hover:bg-gray-800 transition-colors duration-200"
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

export default IntroPopup;
