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

// 使用する画像のリスト
const availableImages = ['/IMG_8907.JPG', '/IMG_8908.JPG', '/IMG_8909.JPG', '/IMG_8910.JPG'];

// 画像を循環的に割り当てる関数
const getImagesForProduct = (index: number): string[] => {
  const image1 = availableImages[index % availableImages.length];
  const image2 = availableImages[(index + 1) % availableImages.length];
  return [image1, image2];
};

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'STRIPED ZIP JACKET MAROON',
    price: '$169.00',
    images: getImagesForProduct(0),
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
    images: getImagesForProduct(1),
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
    images: getImagesForProduct(2),
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
    images: getImagesForProduct(3),
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
    images: getImagesForProduct(4),
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
    images: getImagesForProduct(5),
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
    images: getImagesForProduct(6),
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
    images: getImagesForProduct(7),
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
    images: getImagesForProduct(8),
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
