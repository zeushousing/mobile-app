export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: number; // in square feet
  images: string[];
  status: 'active' | 'inactive';
  type: 'rent' | 'sale';
  description: string;
  amenities: string[];
  postedDate: string;
} 