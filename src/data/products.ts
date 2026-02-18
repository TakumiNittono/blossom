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
}

const productImage = '/IMG_8907.JPG';

export const mockProducts: Product[] = [
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
  {
    id: 'CODE:002',
    name: 'CODE001SET UP',
    price: 17800,
    images: ['/IMG_0064.JPG', '/IMG_0064.JPG'],
    category: 'ZIPS',
    sizes: [
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
    ],
  },
];
