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
    const timer = setTimeout(() => {
      setIsVisible(true);
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
