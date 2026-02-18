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
    name: 'STRIPED ZIP JACKET MAROON',
    price: '$169.00',
    images: [productImage, productImage],
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
    images: [productImage, productImage],
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
    images: [productImage, productImage],
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
    images: [productImage, productImage],
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
    images: [productImage, productImage],
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
    images: [productImage, productImage],
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
    images: [productImage, productImage],
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
    images: [productImage, productImage],
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
    images: [productImage, productImage],
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
