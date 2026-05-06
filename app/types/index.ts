export interface Product {
  id: number;
  image: string;
  name: string;
  category: string;
  tag?: string;
  description: string;
  benefits: string[];
}

export interface Review {
  id: number;
  initials: string;
  name: string;
  city: string;
  timeAgo: string;
  rating: number;
  text: string;
  productTag: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Certificate {
  label: string;
}
