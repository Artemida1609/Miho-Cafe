export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  price: number;
  category: 'coffee' | 'drinks' | 'desserts' | 'food';
  image?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  facebook?: string;
  instagram?: string;
  openingHours?: {
    [key: string]: string;
  };
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating?: number;
}

