export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl?: string;
  category: string;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'STRIPED ZIP JACKET MAROON',
    price: '$169.00',
    imageUrl: '/IMG_8909.JPG',
    category: 'ZIPS',
  },
  {
    id: '2',
    name: 'GRAPHIC TEE BLACK',
    price: '$89.00',
    imageUrl: '/IMG_8907.JPG',
    category: 'TEES',
  },
  {
    id: '3',
    name: 'ABSTRACT KNIT SWEATER',
    price: '$119.00',
    imageUrl: '/IMG_8910.JPG',
    category: 'KNITWEAR',
  },
  {
    id: '4',
    name: 'TOP BOY PANTS BLACK DENIM',
    price: '$119.00',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop',
    category: 'PANTS',
  },
  {
    id: '5',
    name: 'DISTRESS CURVED HOODIE LIGHT GREY',
    price: '$109.00',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
    category: 'HOODIES',
  },
  {
    id: '6',
    name: 'FLUFFY FUR KNIT BLACK & RED',
    price: '$119.00',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop',
    category: 'KNITWEAR',
  },
  {
    id: '7',
    name: 'SCRIPT STUDS HOODIE BLACK',
    price: '$129.00',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
    category: 'HOODIES',
  },
  {
    id: '8',
    name: 'HENLEY LONGSLEEVE GREY',
    price: '$89.00',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
    category: 'LONGSLEEVE',
  },
  {
    id: '9',
    name: 'TRACK PANTS BLACK',
    price: '$99.00',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop',
    category: 'SWEATPANTS',
  },
];
