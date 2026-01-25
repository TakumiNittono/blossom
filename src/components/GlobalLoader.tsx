import { FC } from 'react';

interface GlobalLoaderProps {
  isLoading: boolean;
}

const GlobalLoader: FC<GlobalLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[10001] flex items-center justify-center animate-fadeIn">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">BLOSSOM</h1>
      </div>
    </div>
  );
};

export default GlobalLoader;
