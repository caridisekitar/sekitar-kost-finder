export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: 'Putri' | 'Putra' | 'Campur';
  image: string;
  isPromoted?: boolean;
}

export interface Business {
  id: number;
  name: string;
  priceRange: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}