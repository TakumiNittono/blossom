import { FC, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);
    // ページ遷移時にトップにスクロール（モバイル対応）
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      // アニメーション後に再度スクロール位置を確認
      window.scrollTo(0, 0);
    }, 150);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`brand-transition ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDuration: '300ms' }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
