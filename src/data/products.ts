export interface SizeVariant {
  size: string;
  available: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number; // 円（JPY）
  images: string[];
  category: string;
  sizes: SizeVariant[];
  comingSoon?: boolean;
  externalUrl?: string; // Shopifyリンク
}

const productImage = '/IMG_8907.JPG';

export const mockProducts: Product[] = [
  {
    id: 'CODE:001-SETUP',
    name: 'BLOSSOM CODE:001 SET UP',
    price: 17800,
    images: ['/IMG_0104.JPG', '/IMG_0106.JPG'],
    category: 'ZIPS',
    externalUrl: 'https://blossom-20221382.myshopify.com/products/blossom-code-001',
    sizes: [
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
    ],
  },
  {
    id: 'CODE:001-HOODIE',
    name: 'BLOSSOM CODE:001 HOODIE',
    price: 11000,
    images: ['/IMG_0105.JPG', '/IMG_0106.JPG'],
    category: 'ZIPS',
    externalUrl: 'https://blossom-20221382.myshopify.com/products/blossom-code-001-hoodie',
    sizes: [
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
    ],
  },
  {
    id: 'CODE:001-PANTS',
    name: 'BLOSSOM CODE:001 SWEAT PANTS',
    price: 9000,
    images: ['/IMG_0108.JPG'],
    category: 'ZIPS',
    externalUrl: '', // Shopifyリンクを後で設定
    sizes: [
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
    ],
  },
  {
    id: 'CODE:001',
    name: 'GRAPHIC TEE BLACK',
    price: 13350,
    images: [productImage, productImage],
    category: 'TEES',
    comingSoon: true,
    sizes: [
      { size: 'XS', available: true },
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
      { size: 'XXL', available: true },
    ],
  },
];
