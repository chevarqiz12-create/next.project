export interface Ad {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: number;
  phone_number: string;
  full_name: string;
  location?: string;
}