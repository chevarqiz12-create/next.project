export interface Category {
  id: number;
  num_of_ads: number;
  name: string;
  icon: string;
  image: string;
  color: string;
  order: number;
  parentId: number | null;
}
export interface Product {
  id: number;
  num_of_ads: number;
  name: string;
  icon: string;
  image: string;
  color: string;
  order: number;
}
