export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  material: string;
  height: string;
  shape: string;
  finish: string;
  applications: string[];
  customization: string[];
  moq: string;
  specifications: Record<string, string>;
  galleryImages: string[];
}

export interface ProductFormValues {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  material: string;
  height: string;
  shape: string;
  finish: string;
  applications: string[];
  customization: string[];
  moq: string;
  specifications: Record<string, string>;
  galleryImages: string[];
}

export interface SiteGalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  sortOrder: number;
}

export interface SiteGalleryFormValues {
  title: string;
  description: string;
  imageUrl: string;
  sortOrder: number;
}
