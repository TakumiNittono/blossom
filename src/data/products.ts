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

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'STRIPED ZIP JACKET MAROON',
    price: '$169.00',
    images: ['/IMG_8909.JPG', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop'],
    category: 'ZIPS',
    sizes: [
      { size: 'XS', available: true },
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: false },
      { size: 'XXL', available: true },
    ],
  },
  {
    id: '2',
    name: 'GRAPHIC TEE BLACK',
    price: '$89.00',
    images: ['/IMG_8907.JPG', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop'],
    category: 'TEES',
    sizes: [
      { size: 'XS', available: true },
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
      { size: 'XXL', available: false },
    ],
  },
  {
    id: '3',
    name: 'ABSTRACT KNIT SWEATER',
    price: '$119.00',
    images: ['/IMG_8910.JPG', 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop'],
    category: 'KNITWEAR',
    sizes: [
      { size: 'XS', available: false },
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
      { size: 'XXL', available: true },
    ],
  },
  {
    id: '4',
    name: 'TOP BOY PANTS BLACK DENIM',
    price: '$119.00',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=800&fit=crop',
    ],
    category: 'PANTS',
    sizes: [
      { size: 'XS', available: true },
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: false },
      { size: 'XL', available: true },
      { size: 'XXL', available: true },
    ],
  },
  {
    id: '5',
    name: 'DISTRESS CURVED HOODIE LIGHT GREY',
    price: '$109.00',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop',
    ],
    category: 'HOODIES',
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
    id: '6',
    name: 'FLUFFY FUR KNIT BLACK & RED',
    price: '$119.00',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop',
    ],
    category: 'KNITWEAR',
    sizes: [
      { size: 'XS', available: true },
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: false },
      { size: 'XXL', available: true },
    ],
  },
  {
    id: '7',
    name: 'SCRIPT STUDS HOODIE BLACK',
    price: '$129.00',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop',
    ],
    category: 'HOODIES',
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
    id: '8',
    name: 'HENLEY LONGSLEEVE GREY',
    price: '$89.00',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop',
    ],
    category: 'LONGSLEEVE',
    sizes: [
      { size: 'XS', available: false },
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
      { size: 'XXL', available: true },
    ],
  },
  {
    id: '9',
    name: 'TRACK PANTS BLACK',
    price: '$99.00',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=800&fit=crop',
    ],
    category: 'SWEATPANTS',
    sizes: [
      { size: 'XS', available: true },
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: true },
      { size: 'XXL', available: false },
    ],
  },
];
