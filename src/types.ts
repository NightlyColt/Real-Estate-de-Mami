export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'Apartamento' | 'Casa' | 'Villa' | 'Solar';
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

export interface NavItem {
  label: string;
  path: string;
}
