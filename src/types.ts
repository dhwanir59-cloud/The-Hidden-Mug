export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'desserts' | 'special' | 'seasonal';
  image: string;
  isSeasonal?: boolean;
  tags?: string[];
}

export interface CafeSpace {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  vibe: string;
}

export interface CafeEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  spotsLeft: number;
  image: string;
  tag: string;
}

export interface Review {
  id: string;
  name: string;
  role?: string;
  text: string;
  rating: number;
  image: string;
  date: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
}
