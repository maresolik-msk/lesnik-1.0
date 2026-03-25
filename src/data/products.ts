import { Product } from '../../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Forest Floor Lamp',
    description: 'A sculptural floor lamp inspired by the verticality of birch groves. The soft, diffused light creates a warm, forest-like atmosphere in any room.',
    price: 189,
    rating: 4.9,
    reviews: 124,
    image: '/images/product-lamp.svg',
    badge: 'New Arrival',
    color: '#EAE8E4',
    materials: ['Solid Birch Wood', 'Recycled Paper Pulp', 'Brass Hardware'],
    dimensions: 'H 160cm x W 35cm',
    category: 'Lighting'
  },
  {
    id: 'p2',
    name: 'Clay Stone Vase',
    description: 'Hand-thrown ceramic vase with a textured finish reminiscent of weathered river stones. Each piece is unique, reflecting the organic process of its creation.',
    price: 65,
    rating: 4.8,
    reviews: 89,
    image: '/images/product-vase.svg',
    color: '#F0F2EF',
    materials: ['Natural Clay', 'Mineral Glaze'],
    dimensions: 'H 24cm x W 18cm',
    category: 'Decor'
  },
  {
    id: 'p3',
    name: 'Linen Lounge Chair',
    description: 'A minimalist lounge chair designed for deep relaxation. The frame is crafted from sustainable ash wood, upholstered in premium Belgian linen.',
    price: 450,
    rating: 5.0,
    reviews: 42,
    image: '/images/product-chair.svg',
    badge: 'Best Seller',
    color: '#EBEBEB',
    materials: ['Sustainable Ash Wood', '100% Belgian Linen', 'Natural Latex Foam'],
    dimensions: 'H 82cm x W 75cm x D 80cm',
    category: 'Furniture'
  },
  {
    id: 'p4',
    name: 'Botanical Diffuser',
    description: 'An elegant glass diffuser that slowly releases essential oils derived from wild-harvested forest botanicals. Includes a set of natural reed sticks.',
    price: 85,
    rating: 4.7,
    reviews: 215,
    image: '/images/product-diffuser.svg',
    color: '#F5F5F0',
    materials: ['Hand-blown Glass', 'Natural Reeds', 'Essential Oil Blend'],
    dimensions: '200ml',
    category: 'Fragrance'
  }
];
