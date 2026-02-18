import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'en' | 'ja';

interface Translations {
  [key: string]: {
    en: string;
    ja: string;
  };
}

const translations: Translations = {
  'taxes.duties.included': {
    en: 'TAXES & DUTIES INCLUDED',
    ja: '税・関税込み',
  },
  'shop': {
    en: 'SHOP',
    ja: 'ショップ',
  },
  'private.sales': {
    en: 'PRIVATE SALES',
    ja: 'プライベートセール',
  },
  'collections': {
    en: 'COLLECTIONS',
    ja: 'コレクション',
  },
  'stores': {
    en: 'STORES',
    ja: '店舗',
  },
  'faqs': {
    en: 'FAQS',
    ja: 'よくある質問',
  },
  'cold.tour': {
    en: 'COLD TOUR',
    ja: 'コールドツアー',
  },
  'country': {
    en: 'COUNTRY',
    ja: 'カントリー',
  },
  'shop.here': {
    en: 'SHOP HERE',
    ja: 'ショップへ',
  },
  'add.to.cart': {
    en: 'ADD TO CART',
    ja: 'カートに追加',
  },
  'size': {
    en: 'SIZE',
    ja: 'サイズ',
  },
  'details': {
    en: 'DETAILS',
    ja: '詳細',
  },
  'sizing': {
    en: 'SIZING',
    ja: 'サイズガイド',
  },
  'delivery': {
    en: 'DELIVERY',
    ja: '配送',
  },
  'standard.shipping': {
    en: 'STANDARD SHIPPING',
    ja: '標準配送',
  },
  'express.shipping': {
    en: 'EXPRESS SHIPPING',
    ja: '速達配送',
  },
  'international': {
    en: 'INTERNATIONAL',
    ja: '国際配送',
  },
  'please.select.size': {
    en: 'Please select a size',
    ja: 'サイズを選択してください',
  },
  'product.not.found': {
    en: 'PRODUCT NOT FOUND',
    ja: '商品が見つかりません',
  },
  'back.to.shop': {
    en: 'BACK TO SHOP',
    ja: 'ショップに戻る',
  },
  'new.arrivals': {
    en: 'NEW ARRIVALS',
    ja: '新着商品',
  },
  'view.all': {
    en: '+ VIEW ALL',
    ja: '+ すべて見る',
  },
  'last.resort': {
    en: 'LAST RESORT',
    ja: 'ラストリゾート',
  },
  'last.resort.drop': {
    en: 'LAST RESORT DROP - LIVE NOW',
    ja: 'ラストリゾートドロップ - 今すぐ',
  },
  'shop.now': {
    en: 'SHOP NOW',
    ja: '今すぐ購入',
  },
  'cart': {
    en: 'CART',
    ja: 'カート',
  },
  'your.cart.is.empty': {
    en: 'Your cart is empty',
    ja: 'カートは空です',
  },
  'continue.shopping': {
    en: 'CONTINUE SHOPPING',
    ja: 'ショッピングを続ける',
  },
  'subtotal': {
    en: 'SUBTOTAL',
    ja: '小計',
  },
  'shipping.and.taxes.calculated': {
    en: 'Shipping and taxes calculated at checkout',
    ja: '送料と税金はチェックアウト時に計算されます',
  },
  'checkout': {
    en: 'CHECKOUT',
    ja: 'チェックアウト',
  },
  'size.label': {
    en: 'Size:',
    ja: 'サイズ:',
  },
  'shipping': {
    en: 'Shipping',
    ja: '送料',
  },
  'total': {
    en: 'Total',
    ja: '合計',
  },
  'remove': {
    en: 'Remove',
    ja: '削除',
  },
  'order.summary': {
    en: 'Order Summary',
    ja: '注文概要',
  },
  'account': {
    en: 'Account',
    ja: 'アカウント',
  },
  'login': {
    en: 'Login',
    ja: 'ログイン',
  },
  'email.address': {
    en: 'Email Address',
    ja: 'メールアドレス',
  },
  'password': {
    en: 'Password',
    ja: 'パスワード',
  },
  'register': {
    en: 'Create Account',
    ja: '新規登録',
  },
  'no.account': {
    en: 'New here? Create an account to get started.',
    ja: 'アカウントをお持ちでない方は、新規登録を行ってください。',
  },
  'sign.up': {
    en: 'Sign Up',
    ja: '新規登録',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  formatPrice: (price: string) => string;
  formatAmount: (amount: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('blossom_language');
    return (saved === 'en' || saved === 'ja') ? saved : 'ja';
  });

  useEffect(() => {
    localStorage.setItem('blossom_language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  // 価格を言語に応じてフォーマット（ドル/円）
  const formatPrice = (price: string): string => {
    if (language === 'ja') {
      // ドル価格を円に変換（1ドル = 150円として計算）
      const dollarAmount = parseFloat(price.replace('$', '').replace(',', ''));
      const yenAmount = Math.round(dollarAmount * 150);
      return `¥${yenAmount.toLocaleString()}`;
    }
    return price; // 英語の場合はそのままドル表示
  };

  // 金額を言語に応じてフォーマット（数値から）
  const formatAmount = (amount: number): string => {
    if (language === 'ja') {
      const yenAmount = Math.round(amount * 150);
      return `¥${yenAmount.toLocaleString()}`;
    }
    return `$${amount.toFixed(2)}`;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, formatPrice, formatAmount }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
