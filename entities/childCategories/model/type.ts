interface Child {
  id: number;
  num_of_ads: number;
  color: string;
  name: string;
  is_popular: boolean;
  image: string;
  order: number;
  is_popular_order: number | null;
  only_with_approval: boolean;
  parent: number;
}