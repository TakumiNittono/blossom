import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

interface ProductWithSize extends Product {
  selectedSize: string;
}

interface CartItem extends ProductWithSize {
  quantity: number;
}

interface AppContextType {
  cart: CartItem[];
  wishlist: Product[];
  cartOpen: boolean;
  isLoading: boolean;
  addToCart: (product: ProductWithSize) => void;
  removeFromCart: (productId: string, size?: string) => void;
  updateCartQuantity: (productId: string, size: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartCount: number;
  openCart: () => void;
  closeCart: () => void;
  setLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = (product: ProductWithSize) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (item) => item.id === product.id && item.selectedSize === product.selectedSize
        );
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id && item.selectedSize === product.selectedSize
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });
      setIsLoading(false);
    }, 300);
  };

  const removeFromCart = (productId: string, size?: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === productId && (!size || item.selectedSize === size))
      )
    );
  };

  const updateCartQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        cartOpen,
        isLoading,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        cartCount,
        openCart: () => setCartOpen(true),
        closeCart: () => setCartOpen(false),
        setLoading: setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
