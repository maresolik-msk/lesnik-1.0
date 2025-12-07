export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  materials: string[];
  category: string;
  isNew?: boolean;
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
