export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  materials: string[];
  dimensions?: string;
  category: string;
  isNew?: boolean;
  rating?: number;
  reviews?: number;
  badge?: string;
  color?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  location: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
}
