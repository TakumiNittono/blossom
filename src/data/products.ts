export interface SizeVariant {
  size: string;
  available: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  images: string[]; // Multiple images for hover/swipe
  category: string;
  sizes: SizeVariant[];
}

const productImage = '/IMG_8907.JPG';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'GRAPHIC TEE BLACK',
    price: '$89.00',
    images: [productImage, productImage],
    category: 'TEES',
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
